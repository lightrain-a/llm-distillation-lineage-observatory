(() => {
  "use strict";

  const VERSION = "20260722-ia-v1";
  const l = (en, zh) => ({ en, zh });

  const NAV_GROUPS = [
    {
      id: "paper",
      title: l("Next Paper", "当前论文"),
      priority: true,
      pages: [
        ["paper-problem", l("Question & Claim Boundary", "研究问题与结论边界")],
        ["paper-method", l("Behavioral-Echo Method", "行为回声方法")],
        ["paper-benchmark", l("Data & Experiments", "数据与实验协议")],
        ["paper-roadmap", l("Decisions & Paper Plan", "决策门槛与论文计划")]
      ]
    },
    {
      id: "start",
      title: l("Start Here", "从这里开始"),
      pages: [
        ["home", l("Observatory Overview", "观测站总览")],
        ["preliminary", l("Definitions & History", "定义与历史背景")],
        ["taxonomy", l("Taxonomy & Evidence", "分类体系与证据等级")]
      ]
    },
    {
      id: "mechanisms",
      title: l("Distillation Mechanisms", "蒸馏机制"),
      pages: [
        ["white-box-distillation", l("White-Box Distillation", "白盒蒸馏")],
        ["black-box-distillation", l("Black-Box Distillation", "黑盒蒸馏")],
        ["composite-distillation", l("Composite & Multi-Stage", "复合与多阶段蒸馏")]
      ]
    },
    {
      id: "audit",
      title: l("Audit & Attribution", "审计与归因"),
      pages: [
        ["output-only-auditing", l("Output-Only Auditing", "仅输出审计")],
        ["internal-signal-auditing", l("Internal-Signal Auditing", "内部信号审计")],
        ["teacher-lineage-attribution", l("Teacher & Lineage", "教师与谱系归因")],
        ["multi-teacher-recovery", l("Multi-Teacher Recovery", "多教师恢复")]
      ]
    },
    {
      id: "security",
      title: l("Security, Evaluation & Robustness", "安全、评价与鲁棒性"),
      pages: [
        ["unauthorized-distillation", l("Unauthorized Distillation", "未授权蒸馏")],
        ["provenance-defenses", l("Provenance Defenses", "来源证明防御")],
        ["evasion-removal", l("Evasion & Removal", "规避与移除")],
        ["benchmarks", l("Benchmarks", "基准与测试床")],
        ["metrics-protocols", l("Metrics & Protocols", "指标与统计协议")],
        ["confounders-robustness", l("Confounders & Robustness", "混杂因素与鲁棒性")]
      ]
    },
    {
      id: "pipelines",
      title: l("Real-World Pipelines", "真实世界流程"),
      pages: [
        ["model-family-compression", l("Model-Family Compression", "模型家族压缩")],
        ["response-instruction-distillation", l("Response & Instruction", "响应与指令蒸馏")],
        ["reasoning-process-distillation", l("Reasoning & Process", "推理与过程蒸馏")],
        ["production-pipelines", l("Production Pipelines", "工业生产流程")]
      ]
    },
    {
      id: "resources",
      title: l("Resources & Future Work", "资源与未来工作"),
      pages: [
        ["repositories", l("Repositories", "代码与复现资源")],
        ["bibliography", l("Master Bibliography", "参考文献总表")],
        ["research-agenda", l("Research Agenda", "长期研究议程")]
      ]
    }
  ];

  const CHAPTERS = {
    home: [
      [1, "active-paper", l("Active Paper Workspace", "当前论文工作区")],
      [1, "observatory-map", l("Research Observatory Map", "研究观测站地图")],
      [1, "taxonomy-axes", l("Evidence and Taxonomy Axes", "证据与分类轴")],
      [1, "reading-routes", l("Recommended Reading Routes", "推荐阅读路径")]
    ],
    "paper-problem": [
      [2, "question-boundary", l("Question and Claim Boundary", "研究问题与结论边界")],
      [2, "positioning-design", l("Prior Work and Design Requirements", "相关工作与实验设计要求")],
      [3, "identifiability-decisions", l("Identifiability, Access, and Decisions", "可识别性、访问条件与判定")],
      [2, "mechanisms-confounders", l("Mechanism Uncertainty and Confounders", "机制不确定性与混杂因素")],
      [1, "commercial-claims", l("Commercial-API Claim Boundary", "商业 API 结论边界")]
    ],
    "paper-method": [
      [5, "motivation-framework", l("Research Motivation and Method Overview", "研究动机与方法概览")],
      [2, "identification-protocol", l("Candidate-Specific Identification Protocol", "候选特异识别协议")],
      [3, "statistical-inference", l("Statistical Calibration and Decision Rules", "统计校准与判定规则")],
      [2, "positioning-interpretation", l("Method Positioning and Interpretation Boundary", "方法定位与解释边界")],
      [1, "novelty-validity", l("Novelty, Validity, and Stop Criteria", "创新性、有效性与停止条件")]
    ],
    "paper-benchmark": [
      [2, "recommended-demo", l("Recommended Demo and Compute Rationale", "推荐 Demo 与算力依据")],
      [1, "stage-map", l("Stage Map and Evidence Levels", "阶段地图与证据层级")],
      [2, "d0-d1", l("D0 Population Study and D1 Detector", "D0 群体研究与 D1 检测器")],
      [3, "models-g0-replication", l("Model Strata, G0, and Replication", "模型分层、G0 与重复实验")],
      [2, "hard-negatives", l("Hard Negatives and Identification Controls", "困难负样本与识别控制")],
      [4, "external-serving", l("Serving Simulation and External Observation", "服务路径模拟与外部观察")],
      [3, "metrics-matrix-cost", l("Metrics, Experiment Matrix, and Cost", "指标、实验矩阵与成本")],
      [2, "stress-negative-rules", l("Stress Tests and Negative-Result Rules", "压力测试与负结果规则")]
    ],
    "paper-roadmap": [
      [2, "thesis-contributions", l("Thesis and Contributions", "论文主张与贡献")],
      [2, "outline-execution", l("Paper Outline and Execution Plan", "论文结构与执行计划")],
      [2, "gates-reporting", l("Decision Gates and Reporting", "决策门槛与结果汇报")],
      [1, "site-support", l("How the Observatory Supports the Paper", "网站如何服务论文")]
    ],
    preliminary: [
      [2, "definitions-motivation", l("Definitions and Motivation", "核心定义与研究动机")],
      [2, "boundaries-history", l("Concept Boundaries and Historical Evolution", "概念边界与历史演进")],
      [2, "unified-framework", l("Unified Framework and Threat Model", "统一框架与威胁模型")]
    ],
    taxonomy: [
      [2, "signal-topology", l("Knowledge Signal and Teacher Topology", "知识信号与教师拓扑")],
      [2, "access-openness", l("Audit Access and Model Openness", "审计访问与模型开放性")],
      [2, "authorization-evidence", l("Authorization and Evidence Levels", "授权边界与证据等级")]
    ],
    "white-box-distillation": [
      [2, "distribution-representation", l("Distribution and Representation Transfer", "分布与表示迁移")],
      [2, "relations-routing", l("Relations, Attention, and Routing", "关系、注意力与路由")],
      [1, "compression", l("Structural Compression and Audit Traces", "结构压缩与审计痕迹")]
    ],
    "black-box-distillation": [
      [2, "responses-reasoning", l("Responses and Reasoning", "响应与推理蒸馏")],
      [2, "preferences-critiques", l("Preferences, Critiques, and Safety", "偏好、批评与安全蒸馏")],
      [2, "agents-cost", l("Agent Trajectories, Data, and Cost", "Agent 轨迹、数据与成本")]
    ],
    "composite-distillation": [
      [2, "self-online", l("Self and Online Distillation", "自蒸馏与在线蒸馏")],
      [2, "progressive-multi", l("Progressive and Multi-Teacher Pipelines", "渐进式与多教师流程")],
      [2, "roles-graphs", l("Role-Specialized and Multi-Stage Graphs", "角色专用与多阶段依赖图")]
    ],
    "output-only-auditing": [
      [2, "task-baselines", l("Audit Task and Similarity Baselines", "审计任务与相似度基线")],
      [2, "probes-signatures", l("Candidate Probes and Behavioral Signatures", "候选探针与行为签名")],
      [2, "calibration-open-set", l("Calibration, Open Set, and Abstention", "校准、开放集与拒绝判断")]
    ],
    "internal-signal-auditing": [
      [2, "likelihood-residual", l("Likelihood and Reference Residuals", "似然与参考残差")],
      [2, "representations-weights", l("Representations, Weights, and Routing", "表示、权重与路由")],
      [1, "trajectory-invariance", l("Training Trajectories and Invariance", "训练轨迹与不变性")]
    ],
    "teacher-lineage-attribution": [
      [2, "tasks-candidates", l("Inference Tasks and Candidate Sets", "推断任务与候选集合")],
      [2, "competing-edges", l("Competing Lineage Edges", "竞争性谱系边")],
      [2, "sets-claims", l("Set-Valued Decisions and Claim Limits", "集合值判定与结论边界")]
    ],
    "multi-teacher-recovery": [
      [2, "sets-roles", l("Teacher Sets and Roles", "教师集合与角色")],
      [2, "influence-unknown", l("Influence and Unknown Teachers", "影响强度与未知教师")],
      [2, "graphs-uncertainty", l("Dependency Graphs and Uncertainty", "依赖图与不确定性")]
    ],
    "unauthorized-distillation": [
      [2, "threat-extraction", l("Threat Model and API Extraction", "威胁模型与 API 抽取")],
      [2, "reasoning-logprob", l("Reasoning, Log-Probability, and Tool Harvesting", "推理、logprob 与工具轨迹采集")],
      [2, "operations-evidence", l("Operational Scaling and Evidence", "规模化操作与证据边界")]
    ],
    "provenance-defenses": [
      [2, "watermarks-fingerprints", l("Watermarks and Fingerprints", "水印与模型指纹")],
      [2, "data-transfer", l("Traceable Data and Transfer", "可追踪数据与信号迁移")],
      [2, "telemetry-controls", l("Telemetry and Access Controls", "遥测与访问控制")]
    ],
    "evasion-removal": [
      [2, "rewriting-filtering", l("Rewriting and Filtering", "改写与过滤")],
      [2, "training-merging", l("Continued Training and Merging", "继续训练与模型合并")],
      [2, "compression-removal", l("Compression and Targeted Removal", "压缩与定向移除")]
    ],
    benchmarks: [
      [2, "controlled-lineages", l("Controlled Lineages and Public Cases", "受控谱系与公开案例")],
      [2, "multi-stage-api", l("Multi-Stage and API Testbeds", "多阶段与 API 测试床")],
      [2, "open-world", l("Open-World and Reproducibility", "开放世界与可复现性")]
    ],
    "metrics-protocols": [
      [2, "detection-attribution", l("Detection and Attribution Metrics", "检测与归因指标")],
      [2, "roles-influence", l("Role and Influence Metrics", "角色与影响强度指标")],
      [2, "calibration-cost", l("Calibration, Coverage, and Cost", "校准、覆盖率与成本")]
    ],
    "confounders-robustness": [
      [2, "base-data", l("Shared Base and Shared Data", "共享基础模型与共享数据")],
      [3, "teachers-capability-serving", l("Common Teachers, Capability, and Serving", "共同教师、能力与服务路径")],
      [2, "transformations-missing", l("Model Transformations and Missing Candidates", "模型变换与缺失候选")]
    ],
    "model-family-compression": [
      [2, "compression-methods", l("Family Compression Methods", "家族压缩方法")],
      [2, "cross-architecture", l("Cross-Architecture and Closed Families", "跨架构与闭源家族")]
    ],
    "response-instruction-distillation": [
      [2, "generation-pipeline", l("Instruction and Response Generation", "指令与响应生成")],
      [2, "hosted-quality", l("Hosted Workflows, Quality, and Limits", "托管流程、质量与局限")]
    ],
    "reasoning-process-distillation": [
      [2, "traces-strategies", l("Reasoning Traces and Strategies", "推理轨迹与策略")],
      [2, "datasets-provenance", l("Open Datasets and Provenance", "开放数据集与来源分析")]
    ],
    "production-pipelines": [
      [2, "family-platforms", l("Family Pipelines and Hosted Platforms", "家族流程与托管平台")],
      [2, "factories-judges", l("Data Factories, Judges, and Rewards", "数据工厂、评判与奖励")],
      [1, "telemetry", l("Operational Telemetry", "运营遥测")]
    ],
    repositories: [[1, "repository-guide", l("Repository Guide and Reproducibility", "仓库导航与可复现性")]],
    bibliography: [[1, "bibliography-guide", l("Bibliography Search and Evidence Types", "文献检索与证据类型")]],
    "research-agenda": [
      [2, "open-questions", l("Open Questions and Structured Problems", "未解决问题与结构化任务")],
      [2, "prioritized-directions", l("Agent Debate and Top-Tier Directions", "Agent 辩论与第一梯队方向")],
      [2, "conditional-directions", l("Conditional and Supporting Directions", "条件性与支持性方向")],
      [2, "distillgraph-benchmark", l("DistillGraph and Benchmark Expansion", "DistillGraph 与基准扩展")],
      [1, "dependencies", l("Dependencies on the First Paper", "对第一篇论文的依赖")]
    ]
  };

  const TYPE_LABELS = {
    "peer-reviewed": l("Peer-reviewed", "同行评审论文"),
    workshop: l("Workshop", "研讨会论文"),
    preprint: l("Preprint", "预印本"),
    "model-card": l("Model card", "模型卡"),
    dataset: l("Dataset", "数据集"),
    repository: l("Repository / tool", "仓库 / 工具"),
    documentation: l("Official documentation", "官方文档"),
    reporting: l("Report / news", "报告 / 新闻"),
    internal: l("Excluded internal work", "已排除内部材料")
  };

  const METHOD_GROUPS = [
    {
      id: "detection-attribution",
      label: l("Distillation Detection & Teacher Attribution", "蒸馏检测与教师归因"),
      refs: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      id: "lineage-fingerprinting",
      label: l("Lineage, Provenance & Behavioral Fingerprints", "模型谱系、来源与行为指纹"),
      refs: [10, 11, 12, 13, 14, 15, 16, 17, 20, 27, 88, 96]
    },
    {
      id: "distillation-mechanisms",
      label: l("Distillation Methods & Training Mechanisms", "蒸馏方法与训练机制"),
      refs: [36, 38, 39, 40, 41, 42, 43, 44, 54, 60, 61, 62, 63, 86, 87, 91]
    },
    {
      id: "attacks-defenses",
      label: l("Unauthorized Distillation, Extraction & Defenses", "未授权蒸馏、抽取攻击与来源防御"),
      refs: [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 49, 50, 51, 52, 53, 89]
    },
    {
      id: "evaluation-data",
      label: l("Evaluation, Datasets & Statistical Protocols", "评测、数据集与统计协议"),
      refs: [64, 65, 76, 77, 78, 79, 90]
    },
    {
      id: "supporting-resources",
      label: l("Model Cards, Tools, Disclosures & Policy", "模型卡、工具、官方披露与政策"),
      refs: [18, 19, 37, 45, 46, 47, 48, 55, 56, 57, 58, 59, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85, 92, 93, 94, 95]
    }
  ];

  const YEAR_BUCKETS = [
    { id: "pre-2023", label: "≤2022", test: (year) => year <= 2022 },
    { id: "2023", label: "2023", test: (year) => year === 2023 },
    { id: "2024", label: "2024", test: (year) => year === 2024 },
    { id: "2025", label: "2025", test: (year) => year === 2025 },
    { id: "2026", label: "2026", test: (year) => year >= 2026 }
  ];

  let activeResourceType = "all";
  let scheduled = false;
  let enhancing = false;
  let tocHeadings = [];
  let tocLinks = [];
  let scrollScheduled = false;

  function language() {
    return document.documentElement.lang?.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function text(value) {
    return value?.[language()] || value?.en || "";
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function pageKey() {
    return document.body.dataset.page || "home";
  }

  function hrefFor(key) {
    return key === "home" ? "index.html" : `${key}.html`;
  }

  function enhanceNavigation() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const key = pageKey();
    const lang = language();
    const signature = `${VERSION}:${lang}:${key}`;
    if (nav.dataset.iaSignature === signature) return;

    nav.innerHTML = NAV_GROUPS.map((group) => {
      const current = group.pages.some(([candidate]) => candidate === key);
      const links = group.pages.map(([candidate, label]) => {
        const active = candidate === key ? " active" : "";
        return `<a class="nav-level2${active}" href="${hrefFor(candidate)}"${candidate === key ? ' aria-current="page"' : ""}>${esc(text(label))}</a>`;
      }).join("");
      return `<details class="nav-group ia-nav-group${group.priority ? " nav-priority" : ""}" data-nav-group="${group.id}"${current || key === "home" || group.priority ? " open" : ""}><summary class="nav-level1"><span>${esc(text(group.title))}</span><span class="nav-count">${group.pages.length}</span><span class="nav-chevron" aria-hidden="true">⌄</span></summary><div class="nav-children">${links}</div></details>`;
    }).join("");
    nav.dataset.iaSignature = signature;
  }

  function downgradeLocalHeadings(section, page, sectionIndex) {
    [...section.querySelectorAll(".section-body h3")].forEach((heading, localIndex) => {
      const replacement = document.createElement("h4");
      replacement.innerHTML = heading.innerHTML;
      replacement.className = "local-title";
      replacement.id = `${page}-section-${String(sectionIndex + 1).padStart(2, "0")}-detail-${localIndex + 1}`;
      heading.replaceWith(replacement);
    });
  }

  function applyHierarchy(root) {
    const sections = [...root.children].filter((node) => node.matches?.("section.panel.topic-section"));
    if (!sections.length) return;

    const key = pageKey();
    const specs = CHAPTERS[key] || [[sections.length, "content", l("Page Content", "页面正文")]];
    const marker = document.createComment("ia-chapter-anchor");
    sections[0].before(marker);
    const fragment = document.createDocumentFragment();
    let cursor = 0;

    specs.forEach(([count, id, titleValue], chapterIndex) => {
      if (cursor >= sections.length) return;
      const chapter = document.createElement("section");
      chapter.className = "chapter-panel";
      chapter.dataset.chapter = id;

      const heading = document.createElement("h2");
      heading.className = "chapter-title";
      heading.id = `${key}-chapter-${id}`;
      const number = key.startsWith("paper-") ? `<span class="chapter-number">${chapterIndex + 1}</span>` : "";
      heading.innerHTML = `${number}<span class="chapter-title-text">${esc(text(titleValue))}</span>`;
      chapter.appendChild(heading);

      const body = document.createElement("div");
      body.className = "chapter-content";
      chapter.appendChild(body);

      for (let offset = 0; offset < count && cursor < sections.length; offset += 1, cursor += 1) {
        const section = sections[cursor];
        section.classList.remove("panel");
        section.classList.add("topic-section", "subsection-block");
        const oldHeading = section.querySelector(":scope > h2");
        if (oldHeading) {
          const newHeading = document.createElement("h3");
          newHeading.innerHTML = oldHeading.innerHTML;
          newHeading.className = "subsection-title";
          newHeading.id = `${key}-section-${String(cursor + 1).padStart(2, "0")}`;
          oldHeading.replaceWith(newHeading);
        }
        downgradeLocalHeadings(section, key, cursor);
        body.appendChild(section);
      }
      fragment.appendChild(chapter);
    });

    if (cursor < sections.length) {
      const chapter = document.createElement("section");
      chapter.className = "chapter-panel";
      chapter.dataset.chapter = "additional";
      chapter.innerHTML = `<h2 class="chapter-title" id="${key}-chapter-additional"><span class="chapter-title-text">${esc(language() === "zh" ? "补充内容" : "Additional Content")}</span></h2><div class="chapter-content"></div>`;
      const body = chapter.querySelector(".chapter-content");
      while (cursor < sections.length) {
        const section = sections[cursor];
        section.classList.remove("panel");
        section.classList.add("topic-section", "subsection-block");
        const oldHeading = section.querySelector(":scope > h2");
        if (oldHeading) {
          const newHeading = document.createElement("h3");
          newHeading.innerHTML = oldHeading.innerHTML;
          newHeading.className = "subsection-title";
          newHeading.id = `${key}-section-${String(cursor + 1).padStart(2, "0")}`;
          oldHeading.replaceWith(newHeading);
        }
        downgradeLocalHeadings(section, key, cursor);
        body.appendChild(section);
        cursor += 1;
      }
      fragment.appendChild(chapter);
    }

    marker.replaceWith(fragment);
    root.dataset.iaHierarchy = VERSION;
  }

  function statusMarkup(key) {
    const zh = language() === "zh";
    const phase = (n, label, state) => `<div class="phase-card ${state}"><span class="phase-index">${n}</span><div><strong>${label}</strong><span>${state === "done" ? (zh ? "已完成" : "Complete") : (zh ? "下一门槛" : "Next gate")}</span></div></div>`;

    if (key === "home") {
      return `<section class="ia-status-panel project-status" aria-label="${zh ? "项目状态" : "Project status"}"><div class="status-heading"><div><span class="status-kicker">${zh ? "当前进度" : "Current progress"}</span><h2>${zh ? "从研究审查到可执行实验" : "From research review to executable experiment"}</h2></div><span class="status-pill">P0</span></div><div class="phase-grid">${phase("1", zh ? "方向与方法审查" : "Direction and method review", "done")}${phase("2", zh ? "训练数据方案" : "Training-data plan", "done")}${phase("3", zh ? "参考文献核对" : "Reference audit", "done")}${phase("4", zh ? "页面层级重构" : "Page hierarchy", "done")}${phase("5", zh ? "数据清单与 D0 pilot 冻结" : "Dataset manifest and D0 pilot freeze", "next")}</div><p>${zh ? "尚未运行 D0 或验证单模型检测器。当前唯一可执行门槛是完成公开输出库的版本、许可、ID 与完整 user-turn 哈希对齐。" : "D0 has not run and no individual-model detector has been validated. The next executable gate is the version, license, ID, and complete user-turn-hash audit of the public output archives."}</p></section>`;
    }

    if (key === "paper-roadmap") {
      return `<section class="ia-status-panel roadmap-status"><div class="status-heading"><div><span class="status-kicker">${zh ? "执行状态" : "Execution status"}</span><h2>${zh ? "研究框架已审查；实验尚未开始" : "Research framework reviewed; experiments have not started"}</h2></div><span class="status-pill">P0</span></div><ol class="compact-steps"><li>${zh ? "冻结数据来源、commit、许可、清洗和哈希对齐规则。" : "Freeze data sources, commits, licenses, cleaning, and hash-alignment rules."}</li><li>${zh ? "冻结 B/S/E 每个家族的一个主分数与 maxT 重采样算法。" : "Freeze one primary B/S/E score and the nested maxT resampling algorithm."}</li><li>${zh ? "只在 P0 通过后启动 D0 大效应 pilot。" : "Start the large-effect D0 pilot only after P0 passes."}</li></ol></section>`;
    }

    if (key === "bibliography") {
      const audit = window.REFERENCE_AUDIT || {};
      return `<section class="ia-status-panel bibliography-status"><div class="status-heading"><div><span class="status-kicker">${zh ? "出版状态核对" : "Publication-status audit"}</span><h2>${zh ? "全部资源已按版本记录重新分类" : "All resources reclassified by version of record"}</h2></div><span class="status-pill">2026-07-22</span></div><div class="audit-numbers"><div><strong>${audit.totalRecords || 95}</strong><span>${zh ? "稳定编号" : "stable slots"}</span></div><div><strong>${audit.correctedRecords || 25}</strong><span>${zh ? "元数据更正" : "metadata corrections"}</span></div><div><strong>${audit.verifiedPreprints?.length || 12}</strong><span>${zh ? "确认仍为预印本" : "verified preprints"}</span></div><div><strong>1</strong><span>${zh ? "内部材料排除" : "internal exclusion"}</span></div></div><p>${zh ? "正式论文优先链接 proceedings 或 publisher；模型卡、数据集、官方文档、仓库、政策与新闻不再和同行评审论文混为同一资源类型。" : "Formal papers link to proceedings or publishers first. Model cards, datasets, official documentation, repositories, policy, and news are no longer conflated with peer-reviewed papers."}</p></section>`;
    }

    return "";
  }

  function injectStatusPanel(root) {
    const key = pageKey();
    const markup = statusMarkup(key);
    if (!markup || root.querySelector(":scope > .ia-status-panel")) return;
    const header = root.querySelector(":scope > header");
    if (header) header.insertAdjacentHTML("afterend", markup);
  }

  function enhanceLiteratureSection(root) {
    const section = root.querySelector(":scope > .literature-section");
    if (!section) return;
    section.classList.add("chapter-panel", "literature-chapter");
    const heading = section.querySelector(":scope > h2");
    if (heading) {
      heading.classList.add("chapter-title");
      heading.id = `${pageKey()}-chapter-evidence-library`;
    }
  }

  function shortVenueName(venue) {
    const value = String(venue || "").trim();
    const rules = [
      [/findings of acl/i, "Findings ACL"],
      [/findings of emnlp/i, "Find. EMNLP"],
      [/neurips.*workshop|nips.*workshop/i, "NeurIPS WS"],
      [/neurips|nips/i, "NeurIPS"],
      [/usenix security/i, "USENIX Sec."],
      [/ieee.*security and privacy|ieee s&p/i, "IEEE S&P"],
      [/artificial intelligence review/i, "AI Review"],
      [/icml.*workshop/i, "ICML Wksp."],
      [/iclr/i, "ICLR"],
      [/icml/i, "ICML"],
      [/aaai/i, "AAAI"],
      [/acl/i, "ACL"],
      [/emnlp/i, "EMNLP"],
      [/kdd/i, "KDD"],
      [/cvpr/i, "CVPR"],
      [/icassp/i, "ICASSP"],
      [/ase/i, "ASE"],
      [/nature/i, "Nature"],
      [/arxiv/i, "arXiv"],
      [/hugging faceh4 dataset/i, "HF Dataset"],
      [/hugging face|meta \/ hugging face|nvidia \/ hugging face/i, "HF"],
      [/openai \/ dataset/i, "Dataset"],
      [/openrouter documentation/i, "OR Docs"],
      [/openrouter/i, "OpenRouter"],
      [/platform documentation|api documentation|documentation|developers/i, "Docs"],
      [/official release/i, "Release"],
      [/official product/i, "Product"],
      [/official report/i, "Report"],
      [/technical report/i, "Tech Report"],
      [/policy/i, "Policy"],
      [/github \/ whitepaper/i, "Whitepaper"],
      [/github/i, "GitHub"],
      [/reuters/i, "Reuters"],
      [/financial times/i, "FT"],
      [/project/i, "Project"]
    ];
    return rules.find(([pattern]) => pattern.test(value))?.[1] || value.replace(/\s+\d{4}\b/g, "").slice(0, 18);
  }

  function bibliographyRecordsByNumber() {
    return new Map((window.RESOURCE_DATA || []).map((record, index) => [index + 1, { ...record, refNo: index + 1 }]));
  }

  function methodMapCell(records, bucket) {
    const cellRecords = records.filter((record) => bucket.test(Number(record.year)));
    if (!cellRecords.length) return `<td class="method-year-cell empty-year" data-year="${bucket.id}">—</td>`;

    const venueGroups = new Map();
    cellRecords.forEach((record) => {
      const shortVenue = shortVenueName(record.venue);
      if (!venueGroups.has(shortVenue)) venueGroups.set(shortVenue, { full: new Set(), records: [] });
      const group = venueGroups.get(shortVenue);
      group.full.add(record.venue || shortVenue);
      group.records.push(record);
    });

    const clusters = [...venueGroups.entries()]
      .sort(([a], [b]) => a.localeCompare(b, language() === "zh" ? "zh-CN" : "en"))
      .map(([venue, group]) => {
        const references = group.records
          .sort((a, b) => a.refNo - b.refNo)
          .map((record) => `<a class="method-ref-link" href="#ref-${record.refNo}" data-ref-no="${record.refNo}" title="[${record.refNo}] ${esc(record.title)}">[${record.refNo}]</a>`)
          .join("");
        return `<div class="venue-cluster"><span class="venue-name" title="${esc([...group.full].join(" / "))}">${esc(venue)}</span><span class="venue-refs">${references}</span></div>`;
      }).join("");

    return `<td class="method-year-cell" data-year="${bucket.id}">${clusters}</td>`;
  }

  function revealReference(refNo) {
    const search = document.getElementById("site-search");
    if (search && search.value) {
      search.value = "";
      search.dispatchEvent(new Event("input", { bubbles: true }));
    }
    document.querySelector('.filter-btn[data-grade="all"]')?.click();
    activeResourceType = "all";
    document.querySelectorAll("[data-resource-type-filter]").forEach((button) => button.classList.toggle("active", button.dataset.resourceTypeFilter === "all"));
    applyResourceTypeFilter();
    setTimeout(() => {
      const target = document.getElementById(`ref-${refNo}`);
      if (!target) return;
      target.hidden = false;
      history.replaceState(null, "", `#ref-${refNo}`);
      target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }, 0);
  }

  function buildBibliographyMethodMatrix(root) {
    if (pageKey() !== "bibliography" || root.querySelector(":scope > .bibliography-method-map")) return;
    const literature = root.querySelector(":scope > .literature-section");
    if (!literature) return;

    const recordsByNumber = bibliographyRecordsByNumber();
    const listedRefs = METHOD_GROUPS.flatMap((group) => group.refs);
    const uniqueRefs = new Set(listedRefs);
    const publicRecords = [...recordsByNumber.values()].filter((record) => !record.hiddenFromPublic);
    const publicRefs = publicRecords.map((record) => record.refNo);
    const yearCounts = new Map(YEAR_BUCKETS.map((bucket) => [bucket.id, publicRecords.filter((record) => bucket.test(Number(record.year))).length]));
    const missing = publicRefs.filter((refNo) => !uniqueRefs.has(refNo));
    const duplicateCount = listedRefs.length - uniqueRefs.size;
    if (missing.length || duplicateCount) console.warn("Bibliography method map coverage issue", { missing, duplicateCount });

    const zh = language() === "zh";
    const section = document.createElement("section");
    section.className = "chapter-panel bibliography-method-map";
    section.dataset.publicReferenceCount = String(publicRefs.length);
    section.innerHTML = `
      <h2 class="chapter-title" id="bibliography-chapter-method-year-map"><span class="chapter-title-text">${zh ? "文献方法与发表时间地图" : "Method and Publication Timeline"}</span></h2>
      <div class="method-map-body">
        <p class="method-map-intro">${zh ? `按主要用途将 ${publicRefs.length} 条公开资源分为六类；每条资源只出现一次。会议名称使用统一简称，悬停可查看完整名称，点击编号跳转到下方完整文献。` : `${publicRefs.length} public resources are assigned to one primary use category. Venue names use consistent abbreviations; hover for the full venue and select a reference number to jump to its full entry.`}</p>
        <div class="method-map-scroll" tabindex="0" aria-label="${zh ? "方法类别、年份与会议矩阵" : "Method category, year, and venue matrix"}">
          <table class="method-year-table">
            <colgroup>
              <col class="method-col">
              <col class="year-col pre-2023-col">
              <col class="year-col year-2023-col">
              <col class="year-col year-2024-col">
              <col class="year-col year-2025-col">
              <col class="year-col year-2026-col">
            </colgroup>
            <thead><tr><th scope="col">${zh ? "方法类别" : "Method category"}</th>${YEAR_BUCKETS.map((bucket) => `<th scope="col" data-year="${bucket.id}" aria-label="${bucket.label} · ${yearCounts.get(bucket.id)} ${zh ? "条资源" : "resources"}"><span class="year-head-label">${bucket.label}</span><small class="year-head-count">${yearCounts.get(bucket.id)}</small></th>`).join("")}</tr></thead>
            <tbody>${METHOD_GROUPS.map((group) => {
              const records = group.refs.map((refNo) => recordsByNumber.get(refNo)).filter(Boolean);
              return `<tr data-method-group="${group.id}"><th scope="row"><span>${esc(text(group.label))}</span><small>${records.length}</small></th>${YEAR_BUCKETS.map((bucket) => methodMapCell(records, bucket)).join("")}</tr>`;
            }).join("")}</tbody>
          </table>
        </div>
      </div>`;
    literature.before(section);
    section.querySelectorAll(".method-ref-link").forEach((link) => link.addEventListener("click", (event) => {
      event.preventDefault();
      revealReference(Number(link.dataset.refNo));
    }));
  }

  function removeInternalCitations(root) {
    root.querySelectorAll('a[href$="#ref-80"], a[href="bibliography.html#ref-80"]').forEach((link) => {
      const wrapper = link.closest(".citation, .citation-link");
      (wrapper || link).remove();
    });
  }

  function citationSignature(container) {
    return [...container.querySelectorAll('a[href*="#ref-"]')]
      .map((link) => link.getAttribute("href")?.split("#").pop() || "")
      .filter(Boolean)
      .sort()
      .join("|");
  }

  function isTrailingWithinBody(node, body) {
    let current = node;
    while (current && current !== body) {
      for (let sibling = current.nextSibling; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType === Node.TEXT_NODE && !sibling.textContent.trim()) continue;
        if (sibling.nodeType === Node.ELEMENT_NODE && (sibling.matches("br") || !sibling.textContent.trim())) continue;
        return false;
      }
      current = current.parentNode;
    }
    return current === body;
  }

  function removeTrailingDuplicateCitations(root) {
    root.querySelectorAll(".subsection-block, .topic-section").forEach((section) => {
      const body = section.querySelector(":scope > .section-body");
      const note = section.querySelector(":scope > .section-reference-note");
      if (!body || !note) return;

      const noteSignature = citationSignature(note);
      if (!noteSignature) return;

      [...body.querySelectorAll(".inline-citations")].forEach((citations) => {
        if (citationSignature(citations) !== noteSignature || !isTrailingWithinBody(citations, body)) return;
        const parent = citations.parentElement;
        citations.remove();
        if (parent && parent !== body && !parent.textContent.trim() && !parent.children.length) parent.remove();
      });
    });
  }

  function enhanceTables(root) {
    const zh = language() === "zh";
    root.querySelectorAll(".section-body table.matrix").forEach((table) => {
      if (table.closest(".table-scroll-shell")) return;
      const columnCount = table.tHead?.rows?.[0]?.cells.length || table.rows?.[0]?.cells.length || 2;
      const wrapper = document.createElement("div");
      wrapper.className = `table-scroll-shell table-cols-${Math.min(Math.max(columnCount, 2), 6)}`;
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "region");
      const sectionTitle = table.closest(".subsection-block")?.querySelector(":scope > .subsection-title")?.textContent?.trim();
      wrapper.setAttribute("aria-label", `${sectionTitle || (zh ? "数据表" : "Data table")}${zh ? "，可横向滚动" : ", horizontally scrollable"}`);
      table.before(wrapper);
      wrapper.appendChild(table);
      table.dataset.columnCount = String(columnCount);
    });
  }

  function buildEnhancedToc(root) {
    const toc = document.getElementById("page-toc");
    if (!toc) return;
    const chapters = [...root.querySelectorAll(":scope > .chapter-panel")]
      .map((chapter) => ({
        heading: chapter.querySelector(":scope > .chapter-title"),
        subsections: [...chapter.querySelectorAll(":scope > .chapter-content > .subsection-block > .subsection-title")]
      }))
      .filter((entry) => entry.heading);
    if (!chapters.length) return;

    const signature = `${language()}:${chapters.map((entry) => `${entry.heading.id}:${entry.subsections.map((item) => item.id).join(",")}`).join("|")}`;
    if (toc.dataset.iaSignature === signature) return;

    const title = language() === "zh" ? "本页目录" : "On this page";
    toc.innerHTML = `<div class="toc-title">${title}</div><div class="toc-groups">${chapters.map((entry, index) => `<div class="toc-group${index === 0 ? " active" : ""}" data-heading="${entry.heading.id}"><a class="toc-h2" href="#${entry.heading.id}">${esc(entry.heading.querySelector(".chapter-title-text")?.textContent || entry.heading.textContent)}</a>${entry.subsections.length ? `<div class="toc-children">${entry.subsections.map((item) => `<a class="toc-h3" href="#${item.id}">${esc(item.textContent)}</a>`).join("")}</div>` : ""}</div>`).join("")}</div>`;
    toc.dataset.iaSignature = signature;

    root.querySelector("#mobile-page-toc")?.remove();
    const mobile = document.createElement("details");
    mobile.id = "mobile-page-toc";
    mobile.className = "mobile-page-toc";
    mobile.innerHTML = `<summary>${title}<span aria-hidden="true">⌄</span></summary><nav aria-label="${title}">${chapters.map((entry) => `<a class="mobile-toc-h2" href="#${entry.heading.id}">${esc(entry.heading.querySelector(".chapter-title-text")?.textContent || entry.heading.textContent)}</a>${entry.subsections.map((item) => `<a class="mobile-toc-h3" href="#${item.id}">${esc(item.textContent)}</a>`).join("")}`).join("")}</nav>`;
    const header = root.querySelector(":scope > header");
    if (header) header.insertAdjacentElement("afterend", mobile);
    mobile.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { mobile.open = false; }));

    tocHeadings = chapters.flatMap((entry) => [entry.heading, ...entry.subsections]);
    tocLinks = [...toc.querySelectorAll("a")];
    updateActiveToc();
  }

  function updateActiveToc() {
    if (!tocHeadings.length) return;
    const offset = 150;
    let active = tocHeadings[0];
    for (const heading of tocHeadings) {
      if (heading.getBoundingClientRect().top <= offset) active = heading;
      else break;
    }
    const target = `#${active.id}`;
    tocLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === target));
    const chapter = active.classList.contains("chapter-title") ? active : active.closest(".chapter-panel")?.querySelector(":scope > .chapter-title");
    document.querySelectorAll("#page-toc .toc-group").forEach((group) => group.classList.toggle("active", group.dataset.heading === chapter?.id));
  }

  function enhanceResourceCards() {
    const records = window.RESOURCE_DATA || [];
    document.querySelectorAll(".reference-card[id^='ref-']").forEach((card) => {
      const number = Number(card.id.replace("ref-", ""));
      const record = records[number - 1];
      if (!record) return;
      if (record.hiddenFromPublic) {
        card.hidden = true;
        card.dataset.excluded = "true";
        return;
      }
      card.dataset.resourceType = record.resourceType || "peer-reviewed";
      if (!card.dataset.iaEnhanced) {
        const oldTitle = card.querySelector("h3");
        if (oldTitle) {
          const title = document.createElement("h4");
          title.innerHTML = oldTitle.innerHTML;
          title.className = "resource-title";
          oldTitle.replaceWith(title);
        }
        const badges = card.querySelector(".badges");
        if (badges) {
          const badge = document.createElement("span");
          badge.className = `badge resource-type type-${record.resourceType || "peer-reviewed"}`;
          badge.textContent = text(TYPE_LABELS[record.resourceType] || TYPE_LABELS["peer-reviewed"]);
          badges.prepend(badge);
          if (record.publicationStatus === "formal") {
            const formal = document.createElement("span");
            formal.className = "badge publication-status formal";
            formal.textContent = language() === "zh" ? "正式出版" : "Version of record";
            badges.prepend(formal);
          }
        }
        card.dataset.iaEnhanced = VERSION;
      }
    });
    applyResourceTypeFilter();
  }

  function buildResourceTypeFilters(root) {
    if (pageKey() !== "bibliography") return;
    const literature = root.querySelector(".literature-section");
    if (!literature || literature.querySelector(".resource-type-controls")) return;
    const labels = language() === "zh"
      ? { title: "资源类型", all: "全部公开资源" }
      : { title: "Resource type", all: "All public resources" };
    const controls = document.createElement("div");
    controls.className = "resource-type-controls";
    controls.innerHTML = `<span class="filter-label">${labels.title}</span><div class="type-filter-buttons"><button type="button" data-resource-type-filter="all" class="active">${labels.all}</button>${Object.entries(TYPE_LABELS).filter(([key]) => key !== "internal").map(([key, value]) => `<button type="button" data-resource-type-filter="${key}">${esc(text(value))}</button>`).join("")}</div>`;
    const evidenceFilters = literature.querySelector(".filters");
    (evidenceFilters || literature.firstElementChild)?.insertAdjacentElement(evidenceFilters ? "beforebegin" : "afterend", controls);
    controls.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
      activeResourceType = button.dataset.resourceTypeFilter;
      controls.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      applyResourceTypeFilter();
    }));
  }

  function applyResourceTypeFilter() {
    const cards = [...document.querySelectorAll(".reference-card[id^='ref-']")];
    let visible = 0;
    cards.forEach((card) => {
      if (card.dataset.excluded === "true") {
        card.hidden = true;
        return;
      }
      const show = activeResourceType === "all" || card.dataset.resourceType === activeResourceType;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (pageKey() === "bibliography") {
      const count = document.getElementById("result-count");
      if (count) count.textContent = language() === "zh" ? `${visible} 条公开资源` : `${visible} public resources`;
    }
  }

  function enhanceRoot() {
    const root = document.getElementById("dynamic-page");
    if (!root?.querySelector(":scope > header")) return;
    document.body.classList.toggle("paper-page", pageKey().startsWith("paper-"));
    document.body.dataset.iaVersion = VERSION;
    applyHierarchy(root);
    injectStatusPanel(root);
    enhanceLiteratureSection(root);
    buildBibliographyMethodMatrix(root);
    removeInternalCitations(root);
    removeTrailingDuplicateCitations(root);
    enhanceTables(root);
    buildResourceTypeFilters(root);
    buildEnhancedToc(root);
    enhanceResourceCards();
  }

  function ensureProgressBar() {
    if (document.querySelector(".reading-progress")) return;
    const bar = document.createElement("div");
    bar.className = "reading-progress";
    bar.setAttribute("aria-hidden", "true");
    bar.innerHTML = "<span></span>";
    document.body.prepend(bar);
  }

  function updateProgressBar() {
    const bar = document.querySelector(".reading-progress > span");
    if (!bar) return;
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / total));
    bar.style.transform = `scaleX(${ratio})`;
  }

  function enhance() {
    if (enhancing) return;
    enhancing = true;
    observer.disconnect();
    try {
      ensureProgressBar();
      enhanceNavigation();
      enhanceRoot();
      updateProgressBar();
    } finally {
      observer.observe(document.body, { childList: true, subtree: true });
      enhancing = false;
    }
  }

  function scheduleEnhance() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      enhance();
    });
  }

  function onScroll() {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(() => {
      scrollScheduled = false;
      updateProgressBar();
      updateActiveToc();
    });
  }

  const observer = new MutationObserver(scheduleEnhance);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", scheduleEnhance, { passive: true });
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-grade], #language-toggle, .language-toggle")) scheduleEnhance();
  });
  scheduleEnhance();
})();
