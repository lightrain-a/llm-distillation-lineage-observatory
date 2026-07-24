(() => {
  const STATUS_LABELS = {
    completed: 'Completed',
    running: 'Running',
    queued: 'Queued',
    limited: 'Limited',
    ready: 'Ready'
  };

  const fmtPct = (value, digits = 1) => `${(Number(value) * 100).toFixed(digits)}%`;
  const fmt = (value, digits = 4) => Number(value).toFixed(digits);
  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const statusTag = (status, label) =>
    `<span class="tag ${escapeHtml(status)}">${escapeHtml(label || STATUS_LABELS[status] || status)}</span>`;

  async function loadData() {
    const response = await fetch(`data/status.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  function renderProgress(data) {
    const p = data.progress;
    const percentage = Math.round((p.completed / p.total) * 100);
    document.getElementById('progressText').textContent = `${p.completed} / ${p.total} complete`;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    document.getElementById('statusCounters').innerHTML = [
      ['Completed', p.completed],
      ['Running', p.running],
      ['Queued', p.queued],
      ['Limited', p.limited]
    ].map(([label, value]) => `<div class="mini-stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
  }

  function renderHeadlineMetrics(metrics) {
    document.getElementById('headlineMetrics').innerHTML = metrics.map(item => `
      <article class="metric-card ${escapeHtml(item.tone || '')}">
        <span class="metric-label">${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(item.value)}</strong>
        <small>${escapeHtml(item.detail)}</small>
      </article>`).join('');
  }

  function renderReviewTracks(tracks) {
    const root = document.getElementById('reviewCards');
    root.innerHTML = tracks.map(track => `
      <article class="review-card" data-status="${escapeHtml(track.status)}">
        <div class="review-card-top">
          <h3>${escapeHtml(track.title)}</h3>
          ${statusTag(track.status)}
        </div>
        <p>${escapeHtml(track.concern)}</p>
        <div class="evidence-box"><strong>实验：</strong>${escapeHtml(track.experiment)}<br><strong>证据：</strong>${escapeHtml(track.evidence)}</div>
        <div class="review-meta"><span>${escapeHtml(track.owner)}</span><span>·</span><span>${escapeHtml(track.artifact)}</span></div>
      </article>`).join('');

    document.querySelectorAll('.filter-button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        root.querySelectorAll('.review-card').forEach(card => {
          card.classList.toggle('hidden', filter !== 'all' && card.dataset.status !== filter);
        });
      });
    });
  }

  function renderServers(servers) {
    document.getElementById('serverCards').innerHTML = servers.map(server => `
      <article class="server-card">
        <div class="server-head">
          <h3>${escapeHtml(server.name)}</h3>
          ${statusTag(server.status, server.tag)}
        </div>
        <div class="server-role">${escapeHtml(server.role)}</div>
        ${server.gpu.map(gpu => `
          <div class="gpu-row"><span>${escapeHtml(gpu.name)}</span><span>${escapeHtml(gpu.memory)} · ${escapeHtml(gpu.utilization)}</span></div>
          <div class="gpu-bar"><span style="width:${Math.max(0, Math.min(100, Number(gpu.percent)))}%"></span></div>
        `).join('')}
        <div class="server-task">${escapeHtml(server.task)}</div>
      </article>`).join('');
  }

  function renderSchedule(rows) {
    document.getElementById('scheduleRows').innerHTML = rows.map(row => `
      <tr>
        <td><strong>${escapeHtml(row.priority)}</strong></td>
        <td>${escapeHtml(row.experiment)}</td>
        <td>${escapeHtml(row.resource)}</td>
        <td>${statusTag(row.status)}</td>
        <td>${escapeHtml(row.next)}</td>
      </tr>`).join('');
  }

  function linePath(points, xScale, yScale) {
    return points.map((point, index) => `${index ? 'L' : 'M'} ${xScale(point.queries).toFixed(2)} ${yScale(point.auc).toFixed(2)}`).join(' ');
  }

  function renderQueryChart(queryBudget) {
    const root = document.getElementById('queryChart');
    const width = 720;
    const height = 265;
    const margin = { top: 18, right: 28, bottom: 42, left: 58 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const all = [...queryBudget.baseline, ...queryBudget.anchorMean];
    const xs = [...new Set(all.map(d => d.queries))].sort((a, b) => a - b);
    const yMin = 0.90;
    const yMax = 1.0;
    const xScale = value => margin.left + ((value - 5) / 95) * plotWidth;
    const yScale = value => margin.top + (1 - ((value - yMin) / (yMax - yMin))) * plotHeight;
    const yTicks = [0.90, 0.92, 0.94, 0.96, 0.98, 1.00];
    const colors = { baseline: '#315efb', anchor: '#0f8b8d' };

    const grid = yTicks.map(tick => `
      <line x1="${margin.left}" y1="${yScale(tick)}" x2="${width - margin.right}" y2="${yScale(tick)}" stroke="#e7ebf1" stroke-width="1" />
      <text x="${margin.left - 10}" y="${yScale(tick) + 4}" text-anchor="end" fill="#7a8798" font-size="10">${tick.toFixed(2)}</text>
    `).join('');
    const xLabels = xs.map(value => `
      <text x="${xScale(value)}" y="${height - 14}" text-anchor="middle" fill="#7a8798" font-size="10">${value}</text>
    `).join('');
    const series = [
      { key: 'baseline', values: queryBudget.baseline, color: colors.baseline },
      { key: 'anchor', values: queryBudget.anchorMean, color: colors.anchor }
    ];
    const lines = series.map(item => `
      <path d="${linePath(item.values, xScale, yScale)}" fill="none" stroke="${item.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      ${item.values.map(point => `<circle cx="${xScale(point.queries)}" cy="${yScale(point.auc)}" r="4" fill="#fff" stroke="${item.color}" stroke-width="2.5"><title>${point.queries} queries: ${point.auc.toFixed(4)}</title></circle>`).join('')}
    `).join('');

    root.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Query budget AUC curve">
      ${grid}
      <line x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}" stroke="#bec7d4" />
      ${xLabels}
      ${lines}
      <text x="${width / 2}" y="${height - 1}" text-anchor="middle" fill="#7a8798" font-size="10">Hard-label queries</text>
      <text x="12" y="${height / 2}" transform="rotate(-90 12 ${height / 2})" text-anchor="middle" fill="#7a8798" font-size="10">AUC</text>
    </svg>`;

    document.getElementById('queryLegend').innerHTML = `
      <span class="legend-item"><span class="legend-line" style="background:${colors.baseline}"></span>Original matched pool</span>
      <span class="legend-item"><span class="legend-line" style="background:${colors.anchor}"></span>Anchor-strategy mean</span>
      <span>${queryBudget.runtime.models} models · ${queryBudget.runtime.totalSeconds.toFixed(1)} s total</span>`;
  }

  function renderPgd(pgdat) {
    document.getElementById('pgdNarrative').textContent = `源模型初始 clean accuracy 为 ${fmtPct(pgdat.initialClean, 2)}、TransFP score 为 ${fmt(pgdat.initialTransfp, 2)}。20 epochs PGD-AT 后，三种子平均 TransFP score 仅 ${fmt(pgdat.mean.transfp, 4)}，同时保留 ${fmtPct(pgdat.mean.clean, 2)} clean accuracy 和 ${fmtPct(pgdat.mean.robust, 2)} PGD-20 robust accuracy。`;
    document.getElementById('pgdMetrics').innerHTML = [
      ['Clean accuracy', fmtPct(pgdat.mean.clean, 2)],
      ['PGD-20 accuracy', fmtPct(pgdat.mean.robust, 2)],
      ['TransFP score', fmt(pgdat.mean.transfp, 4)]
    ].map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
    document.getElementById('pgdRows').innerHTML = pgdat.seeds.map(row => `
      <tr><td>${row.seed}</td><td>${fmtPct(row.clean, 2)}</td><td>${fmtPct(row.robust, 2)}</td><td>${fmt(row.transfp, 3)}</td></tr>`).join('');
  }

  function renderAnchors(anchors) {
    const o = anchors.overall;
    document.getElementById('anchorSummary').innerHTML = [
      ['Qualification yield', fmtPct(o.qualification, 2), '12-run mean', 'good'],
      ['AUC @ 5 queries', fmt(o.auc5, 4), 'strategy mean', 'info'],
      ['AUC @ 100 queries', fmt(o.auc100, 4), 'strategy mean', 'good'],
      ['LPIPS-Alex', fmt(o.lpips, 6), `${o.psnr.toFixed(2)} dB PSNR`, 'info']
    ].map(([label, value, detail, tone]) => `<article class="metric-card ${tone}"><span class="metric-label">${label}</span><strong>${value}</strong><small>${detail}</small></article>`).join('');

    document.getElementById('anchorRows').innerHTML = anchors.strategies.map(row => `
      <tr>
        <td><strong>${escapeHtml(row.name)}</strong></td>
        <td>${fmtPct(row.qualification, 2)}</td>
        <td>${fmt(row.auc5, 4)}</td>
        <td>${fmt(row.auc10, 4)}</td>
        <td>${fmt(row.auc100, 4)}</td>
        <td>${row.psnr.toFixed(2)} dB</td>
        <td>${fmt(row.ssim, 4)}</td>
        <td>${fmt(row.lpips, 6)}</td>
      </tr>`).join('');
  }

  function renderCalibration(items) {
    document.getElementById('calibrationCards').innerHTML = items.map(item => `
      <div class="stack-item">
        <div><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p></div>
        <span class="stack-value">${escapeHtml(item.value)}</span>
      </div>`).join('');
  }

  function renderFalseClaims(items) {
    document.getElementById('falseClaimBars').innerHTML = items.map(item => `
      <div class="bar-item">
        <div class="bar-label"><span>${escapeHtml(item.group)}</span><strong>${fmtPct(item.rate, 1)}</strong></div>
        <div class="bar-track"><span style="width:${Math.min(100, item.rate * 100)}%"></span></div>
      </div>`).join('');
  }

  function renderCoverage(items) {
    const max = Math.max(...items.map(item => item.formal));
    document.getElementById('coverageList').innerHTML = items.map(item => `
      <div class="coverage-item">
        <strong>${escapeHtml(item.dataset)}</strong>
        <div class="coverage-meter"><span style="width:${(item.formal / max) * 100}%"></span></div>
        <small>${item.withAuc}/${item.formal} with AUC</small>
      </div>`).join('');
  }

  function renderBaselines(items) {
    document.getElementById('baselineList').innerHTML = items.map(item => `
      <div class="stack-item">
        <div><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(item.description)}</p></div>
        ${statusTag('limited', item.status === 'partial' ? 'Partial' : 'Unavailable')}
      </div>`).join('');
  }

  function setupNavigation() {
    const links = [...document.querySelectorAll('.side-nav a')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0, .1, .4] });
    sections.forEach(section => observer.observe(section));
    links.forEach(link => link.addEventListener('click', () => document.body.classList.remove('menu-open')));
    document.getElementById('menuToggle').addEventListener('click', () => document.body.classList.toggle('menu-open'));
  }

  async function init() {
    try {
      const data = await loadData();
      document.getElementById('lastUpdated').textContent = `Updated ${data.meta.lastUpdated}`;
      document.getElementById('heroSummary').textContent = data.hero.summary;
      renderProgress(data);
      renderHeadlineMetrics(data.headlineMetrics);
      renderReviewTracks(data.reviewTracks);
      renderServers(data.servers);
      renderSchedule(data.schedule);
      renderQueryChart(data.queryBudget);
      renderPgd(data.pgdat);
      renderAnchors(data.anchors);
      renderCalibration(data.calibration);
      renderFalseClaims(data.falseClaims);
      renderCoverage(data.coverage);
      renderBaselines(data.baselines);
      setupNavigation();
    } catch (error) {
      console.error(error);
      document.getElementById('loadError').hidden = false;
      document.getElementById('lastUpdated').textContent = 'Status unavailable';
    }
  }

  init();
})();
