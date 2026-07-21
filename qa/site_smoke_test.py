"""Browser-level QA for the bilingual static observatory.

Run from the repository root:
    python qa/site_smoke_test.py

The script starts a temporary local HTTP server and uses headless Microsoft
Edge through Selenium. It does not modify site files.
"""

from __future__ import annotations

import os
import sys
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Callable

from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.options import Options
from selenium.webdriver.support.ui import WebDriverWait

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, _format: str, *_args: object) -> None:
        return


class QuietServer(ThreadingHTTPServer):
    def handle_error(self, _request: object, _client_address: object) -> None:
        return


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def wait_until(driver: webdriver.Edge, predicate: Callable[[webdriver.Edge], object], message: str) -> object:
    try:
        return WebDriverWait(driver, 12).until(predicate)
    except TimeoutException as exc:
        raise AssertionError(message) from exc


def make_driver(width: int, height: int) -> webdriver.Edge:
    options = Options()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    options.add_argument("--disable-extensions")
    options.add_argument(f"--window-size={width},{height}")
    return webdriver.Edge(options=options)


def visible(driver: webdriver.Edge, selector: str) -> bool:
    element = driver.find_element(By.CSS_SELECTOR, selector)
    return element.is_displayed()


def run_desktop_checks(base_url: str) -> None:
    driver = make_driver(1440, 1000)
    try:
        driver.get(f"{base_url}/preliminary.html")
        driver.execute_script("localStorage.clear(); location.reload();")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "Background & Definitions", "English page did not load")

        integrity = driver.execute_script("return window.__SITE_INTEGRITY_REPORT__")
        require(integrity and integrity.get("ok") is True, f"Integrity report failed: {integrity}")
        require(driver.find_element(By.CSS_SELECTOR, ".skip-link").get_attribute("textContent").strip() == "Skip to main content", "Skip link missing or untranslated")
        search = driver.find_element(By.ID, "site-search")
        require("this page" in search.get_attribute("aria-label").lower(), "Search scope is not exposed accessibly")
        require(driver.find_element(By.CSS_SELECTOR, "main").get_attribute("role") == "main", "Main landmark missing")
        require(driver.find_element(By.CSS_SELECTOR, "nav").get_attribute("aria-label"), "Navigation landmark lacks a label")
        next_paper_group = driver.find_elements(By.CSS_SELECTOR, ".nav-group")[0]
        require("Next Paper" in next_paper_group.get_attribute("textContent"), "Next Paper is not the first navigation group")
        require(len(next_paper_group.find_elements(By.CSS_SELECTOR, ".nav-level2")) == 4, "Next Paper navigation does not contain four workspaces")

        headings = driver.find_elements(By.CSS_SELECTOR, "#dynamic-page h2, #dynamic-page h3")
        require(len(headings) >= 8, "Preliminary does not expose the expected survey structure")
        target_index = min(5, len(headings) - 1)
        driver.execute_script("document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0, arguments[0].getBoundingClientRect().top + window.scrollY - 120);", headings[target_index])
        wait_until(driver, lambda d: abs(d.execute_script("return arguments[0].getBoundingClientRect().top", headings[target_index]) - 120) < 8, "Could not establish the desktop reading position")
        before_top = driver.execute_script("return arguments[0].getBoundingClientRect().top", headings[target_index])
        driver.find_element(By.ID, "language-toggle").click()
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "背景与定义", "Chinese page did not load")
        translated_headings = driver.find_elements(By.CSS_SELECTOR, "#dynamic-page h2, #dynamic-page h3")
        after_top = driver.execute_script("return arguments[0].getBoundingClientRect().top", translated_headings[target_index])
        require(abs(after_top - before_top) < 70, f"Language switch lost reading context: {before_top} -> {after_top}")
        require(driver.find_element(By.CSS_SELECTOR, ".overview-figure img").get_attribute("src").endswith("distillation-auditing-overview-zh.svg"), "Chinese overview figure did not switch")
        require(driver.find_element(By.TAG_NAME, "html").get_attribute("lang") == "zh-CN", "Document language metadata did not switch")

        driver.get(f"{base_url}/paper-problem.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "候选条件黑盒蒸馏证据检测", "Next-paper problem page did not preserve Chinese")
        require(len(driver.find_elements(By.CSS_SELECTOR, "#dynamic-page .topic-section")) == 10, "Paper problem page has the wrong section count")
        problem_text = driver.find_element(By.ID, "dynamic-page").text
        require("候选条件黑盒蒸馏证据检测" in problem_text, "Primary black-box task is missing")
        require(all(label in problem_text for label in ["检测到证据", "未检测到证据", "结论不充分", "等效性检验", "目标功效"]), "Three-state decision, equivalence, or power boundary is incomplete")
        require(all(label in problem_text for label in ["按推断目标定位相关工作", "成员推断", "数据到模型关系", "模型间影响"]), "Related-work inferential-target comparison is incomplete")
        require(all(label in problem_text for label in ["实验设计要求", "随机化反证", "普通输出泛化", "仅候选模型参与发现"]), "Concrete experimental-design requirements are incomplete")
        require(all(label in problem_text for label in ["可识别性契约", "受控因果估计目标", "商业观察性估计目标", "不能识别直接训练边"]), "Controlled-versus-commercial identifiability contract is incomplete")

        driver.get(f"{base_url}/paper-method.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "候选特异边界转移检验", "Paper method page did not load in Chinese")
        method_text = driver.find_element(By.ID, "dynamic-page").text
        require(len(driver.find_elements(By.CSS_SELECTOR, "#dynamic-page .topic-section")) == 12, "Paper method page has the wrong section count")
        require(all(label in method_text for label in ["局部边界转移", "成对转移", "候选特异边界", "中间 margin 区间"]), "Boundary-transfer method intuition is incomplete")
        require("创新性门槛" in method_text and "功效感知的查询预算" in method_text and "选择有效的候选特异发现" in method_text, "Selection-valid discovery, power planning, or novelty gate is missing")
        require(all(label in method_text for label in ["通道估计量与分层 omnibus", "完整的发现—检验算法", "重新运行候选特异发现", "maxT", "影子候选校准库"]), "Selection-valid hierarchical omnibus statistic is incomplete")
        require(all(label in method_text for label in ["分层审计数值示例", "T₁", "T₂", "T₃", "推理区间", "结论不充分"]), "Worked hierarchical audit example is incomplete")
        require(all(label in method_text for label in ["具体探针接口与数据来源", "UltraChat 200k", "GSM8K/MATH", "UltraFeedback", "3,000 个", "1,200 个"]), "Concrete probe and data manifest is incomplete")

        driver.get(f"{base_url}/paper-benchmark.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "基准与实验协议", "Paper benchmark page did not load in Chinese")
        benchmark_text = driver.find_element(By.ID, "dynamic-page").text
        require(len(driver.find_elements(By.CSS_SELECTOR, "#dynamic-page .topic-section")) == 15, "Paper benchmark page has the wrong section count")
        require("共同第三教师" in benchmark_text, "Hard-negative benchmark is missing")
        require(all(label in benchmark_text for label in ["同基础无蒸馏控制", "替代教师控制", "盲化候选面板", "留出污染筛查"]), "Identification-valid negative-control protocol is incomplete")
        require(all(label in benchmark_text for label in ["重复实验层级与推断单位", "独立训练的学生 replica", "层级 bootstrap"]), "Replication hierarchy or inferential-unit specification is incomplete")
        require(all(label in benchmark_text for label in ["带成本的实验设计矩阵", "72 次训练", "72M", "25,920 次共享调用"]), "Costed experimental-design matrix is incomplete")
        require(all(label in benchmark_text for label in ["基准模型分层与精确模型", "G0 · 受控因果基准", "DeepSeek-R1-Distill", "Llama-3.2", "Minitron", "OpenRouter"]), "Stratified distillation-model benchmark is incomplete")
        require(all(label in benchmark_text for label in ["最低可行受控 campaign", "教师 T₁ 正例", "公开监督控制", "打乱监督控制", "72", "3M", "12M", "DPO β=0.1", "分析代码冻结前保持盲化"]), "Balanced minimum controlled training campaign is incomplete")
        require(all(label in benchmark_text for label in ["具体商业 API 面板", "openai/gpt-5.2", "anthropic/claude-opus-4.1", "qwen/qwen3.7-plus", "mistralai/mistral-medium-3-5", "25,920 次调用"]), "Concrete OpenRouter panel is incomplete")
        require(all(label in benchmark_text for label in ["方向性与互相蒸馏的观察性分析", "时间上不支持", "对称或双向证据", "候选证据图", "不能证明直接训练使用"]), "Directional mutual-distillation analysis is incomplete")
        require(all(label in benchmark_text for label in ["派生、部署、反证与移除 campaign", "权重插值", "普通输出抽取", "泄露探针移除", "鲁棒探针选择"]), "Derived, deployment, falsification, or removal campaign is incomplete")

        driver.get(f"{base_url}/paper-roadmap.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "推荐论文主张与执行路线", "Paper roadmap page did not load in Chinese")
        roadmap_text = driver.find_element(By.ID, "dynamic-page").text
        require("不能把行为证据包装成因果教师归因" in roadmap_text, "First-paper causal-claim boundary is missing")
        require("Candidate-Conditioned Black-box Distillation-Evidence Detection" in roadmap_text, "Recommended paper framing is missing")
        require(all(label in roadmap_text for label in ["可直接用于投稿的汇报模板", "主要候选证据表", "有边界的结果表述", "结论不充分"]), "Publication-ready reporting templates are incomplete")

        driver.get(f"{base_url}/research-agenda.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "长期研究议程", "Long-term agenda was not demoted")

        driver.get(f"{base_url}/black-box-distillation.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "黑盒蒸馏", "Language preference did not persist across pages")
        require("教师判断" in driver.find_element(By.CSS_SELECTOR, ".worked-example").text, "Chinese worked example is missing")

        driver.get(f"{base_url}/output-only-auditing.html")
        wait_until(driver, lambda d: bool(d.find_elements(By.CSS_SELECTOR, ".paper-figure-panel img")), "Paper figure card did not render")
        image = driver.find_element(By.CSS_SELECTOR, ".paper-figure-panel img")
        require(image.get_attribute("referrerpolicy") == "no-referrer", "Remote figure leaks referrer metadata")
        driver.execute_script("arguments[0].dispatchEvent(new Event('error'));", image)
        fallback = driver.find_element(By.CSS_SELECTOR, ".paper-figure-fallback")
        require(fallback.is_displayed(), "Remote figure failure does not expose a usable fallback")

        accessibility_issues = driver.execute_script(
            """
            const issues = [];
            if (document.querySelectorAll('h1').length !== 1) issues.push('expected exactly one h1');
            document.querySelectorAll('img').forEach((img, i) => { if (!img.alt.trim()) issues.push(`image ${i} has empty alt`); });
            document.querySelectorAll('button').forEach((button, i) => {
              if (!button.textContent.trim() && !button.getAttribute('aria-label')) issues.push(`button ${i} lacks name`);
            });
            document.querySelectorAll('a[target="_blank"]').forEach((link, i) => {
              if (!(link.rel || '').split(/\\s+/).includes('noopener')) issues.push(`external link ${i} lacks noopener`);
            });
            return issues;
            """
        )
        require(not accessibility_issues, f"Basic accessibility checks failed: {accessibility_issues}")
    finally:
        driver.quit()


def run_mobile_checks(base_url: str) -> None:
    driver = make_driver(390, 844)
    try:
        driver.get(f"{base_url}/preliminary.html")
        driver.execute_script("localStorage.clear(); location.reload();")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "Background & Definitions", "Mobile page did not load")
        toggle = driver.find_element(By.CSS_SELECTOR, ".mobile-toggle")
        require(toggle.get_attribute("aria-expanded") == "false", "Mobile toggle starts in an expanded state")

        toggle.click()
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, ".sidebar").get_attribute("aria-hidden") == "false", "Sidebar did not open")
        require(toggle.get_attribute("aria-expanded") == "true", "Toggle state did not update")
        require(visible(driver, ".sidebar-overlay"), "Sidebar overlay is not visible")
        require("mobile-nav-open" in driver.find_element(By.TAG_NAME, "body").get_attribute("class"), "Background scrolling was not locked")
        require("sidebar-close" in driver.switch_to.active_element.get_attribute("class"), "Focus did not enter the sidebar")

        driver.find_element(By.TAG_NAME, "body").send_keys(Keys.ESCAPE)
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, ".sidebar").get_attribute("aria-hidden") == "true", "Escape did not close the sidebar")
        require(toggle.get_attribute("aria-expanded") == "false", "Toggle state did not reset after Escape")
        require("mobile-toggle" in driver.switch_to.active_element.get_attribute("class"), "Focus did not return to the trigger")

        toggle.click()
        wait_until(driver, lambda d: visible(d, ".sidebar-overlay"), "Overlay did not return")
        driver.find_element(By.CSS_SELECTOR, ".sidebar-overlay").click()
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, ".sidebar").get_attribute("aria-hidden") == "true", "Backdrop click did not close the sidebar")

        toggle.click()
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, ".sidebar").get_attribute("aria-hidden") == "false", "Sidebar did not reopen")
        driver.switch_to.active_element.send_keys(Keys.SHIFT, Keys.TAB)
        require(driver.execute_script("return document.querySelector('.sidebar').contains(document.activeElement)"), "Focus escaped the open sidebar")
    finally:
        driver.quit()


def main() -> int:
    os.chdir(ROOT)
    server = QuietServer(("127.0.0.1", 0), QuietHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    base_url = f"http://127.0.0.1:{server.server_port}"
    try:
        run_desktop_checks(base_url)
        run_mobile_checks(base_url)
    finally:
        server.shutdown()
        server.server_close()
    print("PASS: desktop bilingual, integrity, figure fallback, accessibility, and mobile navigation checks")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 - QA runner must report all failures.
        print(f"FAIL: {exc}", file=sys.stderr)
        raise
