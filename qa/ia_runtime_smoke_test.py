from __future__ import annotations

import subprocess
import sys
import tempfile
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlencode

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / "qa" / "preview.html"
EDGE_CANDIDATES = (
    Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
    Path(r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"),
)

PAGES = {
    "paper-method": {"lang": "en", "subsections": 12, "chapters": 5},
    "paper-benchmark": {"lang": "zh", "subsections": 17, "chapters": 7},
    "preliminary": {"lang": "en", "subsections": 6, "chapters": 3},
    "confounders-robustness": {"lang": "en", "subsections": 7, "chapters": 3},
    "research-agenda": {"lang": "zh", "subsections": 9, "chapters": 5},
    "bibliography": {"lang": "en", "subsections": 1, "chapters": 2},
}


def edge_path() -> Path:
    for path in EDGE_CANDIDATES:
        if path.exists():
            return path
    raise RuntimeError("Microsoft Edge was not found in a standard installation path.")


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        return


def dump_dom(base_url: str, page: str, lang: str) -> BeautifulSoup:
    query = urlencode({"page": page, "lang": lang})
    url = f"{base_url}/qa/preview.html?{query}"
    with tempfile.TemporaryDirectory(prefix=f"distill-{page}-") as profile:
        command = [
            str(edge_path()),
            "--headless=new",
            "--disable-gpu",
            "--disable-cache",
            "--no-first-run",
            "--no-default-browser-check",
            f"--user-data-dir={profile}",
            "--virtual-time-budget=24000",
            "--dump-dom",
            url,
        ]
        result = subprocess.run(command, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=70)
    if result.returncode != 0:
        raise RuntimeError(f"Edge failed for {page}: {result.stderr[-1000:]}")
    return BeautifulSoup(result.stdout, "html.parser")


def require(condition: bool, message: str, failures: list[str]) -> None:
    if not condition:
        failures.append(message)


def check_page(base_url: str, page: str, spec: dict[str, int | str], failures: list[str]) -> BeautifulSoup:
    soup = dump_dom(base_url, page, str(spec["lang"]))
    body = soup.body
    require(body is not None, f"{page}: body missing", failures)
    if body is None:
        return soup

    require(body.get("data-ia-version") == "20260722-ia-v1", f"{page}: IA runtime did not finish", failures)
    require(len(soup.select("#dynamic-page > header h1")) == 1, f"{page}: expected exactly one H1", failures)
    require(len(soup.select("#dynamic-page > .chapter-panel:not(.literature-chapter)")) == spec["chapters"], f"{page}: unexpected main chapter count", failures)
    require(len(soup.select(".subsection-title")) == spec["subsections"], f"{page}: unexpected subsection count", failures)
    require(not soup.select(".section-body h3"), f"{page}: local H3 headings were not downgraded to H4", failures)
    require(bool(soup.select_one("#mobile-page-toc")), f"{page}: mobile TOC missing", failures)
    require(len(soup.select("#page-toc .toc-group")) == len(soup.select("#dynamic-page > .chapter-panel")), f"{page}: desktop TOC does not match chapter count", failures)
    require(bool(soup.select_one(".reading-progress")), f"{page}: reading progress bar missing", failures)
    ordinary_tables = soup.select(".section-body table.matrix")
    require(all(table.find_parent("div", class_="table-scroll-shell") is not None for table in ordinary_tables), f"{page}: an ordinary table is missing its horizontal-scroll wrapper", failures)

    if spec["lang"] == "zh":
        require(soup.html and soup.html.get("lang") == "zh-CN", f"{page}: Chinese language state did not render", failures)

    return soup


def main() -> int:
    failures: list[str] = []
    handler = partial(QuietHandler, directory=str(ROOT))
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    base_url = f"http://127.0.0.1:{server.server_port}"

    rendered: dict[str, BeautifulSoup] = {}
    try:
        for page, spec in PAGES.items():
            rendered[page] = check_page(base_url, page, spec, failures)
    finally:
        server.shutdown()
        server.server_close()

    method = rendered["paper-method"]
    method_text = method.get_text(" ", strip=True)
    require("Independent method review" not in method_text and "独立方法审查" not in method_text, "paper-method: internal review panel should not precede the method", failures)
    require("我们准备构建一个候选条件黑盒蒸馏证据检验" in method_text or "We aim to build a candidate-conditioned black-box distillation-evidence test" in method_text, "paper-method: opening motivation missing", failures)
    require("端到端审计流程" in method_text or "End-to-end audit workflow" in method_text, "paper-method: audit workflow missing", failures)
    require("研究动机与方法概览" in method_text or "Research Motivation and Method Overview" in method_text, "paper-method: formal first chapter title missing", failures)
    require("ESF" in method_text, "paper-method: ESF comparison missing", failures)

    benchmark = rendered["paper-benchmark"]
    benchmark_text = benchmark.get_text(" ", strip=True)
    require("训练数据决策" in benchmark_text, "paper-benchmark: training-data decision panel missing", failures)
    require("许可与对齐待核验" in benchmark_text, "paper-benchmark: alignment/license gate missing", failures)

    agenda = rendered["research-agenda"]
    agenda_text = agenda.get_text(" ", strip=True)
    require("同教师、不同蒸馏机制的黑盒归因" in agenda_text, "research-agenda: top-ranked mechanism-attribution idea missing", failures)
    require("教师混合比例或行为影响区间" in agenda_text, "research-agenda: influence-interval idea missing", failures)
    require("可随时停止的低查询蒸馏审计" in agenda_text, "research-agenda: sequential-audit idea missing", failures)
    require("第二梯队：必须先通过可行性门槛" in agenda_text, "research-agenda: conditional directions missing", failures)
    require("只适合作为 benchmark 或观察性研究的方向" in agenda_text, "research-agenda: benchmark/observation boundary missing", failures)
    require(not agenda.select(".section-reference-note"), "research-agenda: references should be placed inline rather than in section-end notes", failures)
    require(len(agenda.select(".section-body .inline-citations")) >= 9, "research-agenda: insufficient inline citation placement", failures)
    for section in agenda.select(".subsection-block"):
        note = section.select_one(":scope > .section-reference-note")
        body = section.select_one(":scope > .section-body")
        if not note or not body:
            continue
        note_refs = sorted(link.get("href", "").split("#")[-1] for link in note.select('a[href*="#ref-"]'))
        for citations in body.select(".inline-citations"):
            body_refs = sorted(link.get("href", "").split("#")[-1] for link in citations.select('a[href*="#ref-"]'))
            require(body_refs != note_refs, "research-agenda: duplicate trailing citations remain above the reference divider", failures)

    bibliography = rendered["bibliography"]
    cards = bibliography.select(".reference-card[id^='ref-']")
    public_cards = [card for card in cards if not card.has_attr("hidden")]
    internal = bibliography.select_one("#ref-80")
    require(len(cards) == 96, f"bibliography: expected 96 stable reference slots, found {len(cards)}", failures)
    require(len(public_cards) == 95, f"bibliography: expected 95 public resources, found {len(public_cards)}", failures)
    require(internal is not None and internal.has_attr("hidden"), "bibliography: r80 internal record was not excluded", failures)
    require(bool(bibliography.select_one(".resource-type-controls")), "bibliography: resource-type filters missing", failures)
    require(len(bibliography.select("[data-resource-type-filter]")) == 9, "bibliography: unexpected resource-type filter count", failures)
    require("Findings of ACL 2025" in bibliography.select_one("#ref-1").get_text(" ", strip=True), "bibliography: r1 venue correction missing", failures)
    require("NeurIPS 2025" in bibliography.select_one("#ref-2").get_text(" ", strip=True), "bibliography: r2 venue correction missing", failures)
    require("Nature" in bibliography.select_one("#ref-44").get_text(" ", strip=True), "bibliography: r44 Nature correction missing", failures)
    require("25" in bibliography.select_one(".audit-numbers").get_text(" ", strip=True), "bibliography: correction/exclusion total missing", failures)

    method_map = bibliography.select_one(".bibliography-method-map")
    method_links = bibliography.select(".bibliography-method-map .method-ref-link")
    method_targets = [link.get("href") for link in method_links]
    require(method_map is not None, "bibliography: method × year matrix missing", failures)
    require(len(bibliography.select(".method-year-table tbody tr")) == 6, "bibliography: method matrix should contain six categories", failures)
    require(len(method_links) == 95, f"bibliography: expected 95 public references in method matrix, found {len(method_links)}", failures)
    require(len(set(method_targets)) == 95, "bibliography: method matrix contains duplicated reference numbers", failures)
    require("#ref-80" not in method_targets, "bibliography: excluded internal reference r80 appears in method matrix", failures)
    require(all(bibliography.select_one(target) is not None for target in method_targets), "bibliography: a method-map link has no detailed reference target", failures)
    require(len(bibliography.select(".method-year-table thead th")) == 6, "bibliography: method matrix has the wrong year-column count", failures)
    year_headers = bibliography.select(".method-year-table thead th[data-year]")
    year_counts = {header.get("data-year"): int(header.select_one(".year-head-count").get_text(strip=True)) for header in year_headers}
    require(year_counts == {"pre-2023": 16, "2023": 6, "2024": 15, "2025": 28, "2026": 30}, f"bibliography: unexpected year counts {year_counts}", failures)
    require(sum(year_counts.values()) == 95, "bibliography: year-header counts do not sum to 95 public resources", failures)

    if failures:
        print("IA runtime smoke test: FAIL")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("IA runtime smoke test: PASS")
    print("Checked page hierarchy, bilingual rerendering, status panels, TOCs, 96 stable reference slots, 95 public resources, and publication metadata corrections.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
