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
    "bibliography": {"lang": "en", "subsections": 1, "chapters": 1},
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
    require("Independent method review" in method.get_text(" ", strip=True), "paper-method: review verdict panel missing", failures)

    benchmark = rendered["paper-benchmark"]
    benchmark_text = benchmark.get_text(" ", strip=True)
    require("训练数据决策" in benchmark_text, "paper-benchmark: training-data decision panel missing", failures)
    require("许可与对齐待核验" in benchmark_text, "paper-benchmark: alignment/license gate missing", failures)

    bibliography = rendered["bibliography"]
    cards = bibliography.select(".reference-card[id^='ref-']")
    public_cards = [card for card in cards if not card.has_attr("hidden")]
    internal = bibliography.select_one("#ref-80")
    require(len(cards) == 95, f"bibliography: expected 95 stable reference slots, found {len(cards)}", failures)
    require(len(public_cards) == 94, f"bibliography: expected 94 public resources, found {len(public_cards)}", failures)
    require(internal is not None and internal.has_attr("hidden"), "bibliography: r80 internal record was not excluded", failures)
    require(bool(bibliography.select_one(".resource-type-controls")), "bibliography: resource-type filters missing", failures)
    require(len(bibliography.select("[data-resource-type-filter]")) == 9, "bibliography: unexpected resource-type filter count", failures)
    require("Findings of ACL 2025" in bibliography.select_one("#ref-1").get_text(" ", strip=True), "bibliography: r1 venue correction missing", failures)
    require("NeurIPS 2025" in bibliography.select_one("#ref-2").get_text(" ", strip=True), "bibliography: r2 venue correction missing", failures)
    require("Nature" in bibliography.select_one("#ref-44").get_text(" ", strip=True), "bibliography: r44 Nature correction missing", failures)
    require("25" in bibliography.select_one(".audit-numbers").get_text(" ", strip=True), "bibliography: correction/exclusion total missing", failures)

    if failures:
        print("IA runtime smoke test: FAIL")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("IA runtime smoke test: PASS")
    print("Checked page hierarchy, bilingual rerendering, status panels, TOCs, 95 stable reference slots, 94 public resources, and publication metadata corrections.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
