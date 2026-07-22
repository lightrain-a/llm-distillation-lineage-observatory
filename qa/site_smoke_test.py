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
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "候选特异行为回声检验", "Paper method page did not load in Chinese")
        method_text = driver.find_element(By.ID, "dynamic-page").text
        require(len(driver.find_elements(By.CSS_SELECTOR, "#dynamic-page .topic-section")) == 12, "Paper method page has the wrong section count")
        require(all(label in method_text for label in ["方法概览 · 我们准备做什么", "我们准备构建一个候选条件黑盒蒸馏证据检验", "行为回声", "不属于行为回声"]), "Reader-first method motivation is incomplete")
        require(all(label in method_text for label in ["一个贯穿例子 · 什么才算证据", "A→C", "相对于控制的超额规律"]), "Concrete behavioral-echo example is incomplete")
        require(all(label in method_text for label in ["边界回声", "结构回声", "错误 / 推理 / 行动回声", "完整方法流程 · 五个步骤"]), "Three echo families or five-step method map is incomplete")
        require(all(label in method_text for label in ["D0 与 D1 · 先证明会传，再证明能判", "D0 · 群体迁移", "D1 · 单模型检测", "模型级"]), "Population-versus-individual estimands are incomplete")
        require(all(label in method_text for label in ["仅候选发现、匹配控制与反证", "打乱候选标签", "分数、maxT 联合校准与三态结论", "结论不充分"]), "Discovery, falsification, or calibrated decision rule is incomplete")
        require(all(label in method_text for label in ["与 ESF 等敏感指纹方法的区别", "已篡改 / 未篡改", "检测到 / 未检测到 / 结论不充分"]), "ESF comparison is incomplete")
        require(all(label in method_text for label in ["创新性门槛、结论边界与 NO-GO", "方法贡献成立", "主张收缩", "NO-GO"]), "Novelty boundary or fallback direction is incomplete")

        driver.get(f"{base_url}/paper-benchmark.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "基准与实验协议", "Paper benchmark page did not load in Chinese")
        benchmark_text = driver.find_element(By.ID, "dynamic-page").text
        require(len(driver.find_elements(By.CSS_SELECTOR, "#dynamic-page .topic-section")) == 17, "Paper benchmark page has the wrong section count")
        require(all(label in benchmark_text for label in ["D0 · 群体层自然签名可行性", "Qwen/Qwen3-8B", "Llama-3.1-8B-Instruct", "Qwen/Qwen3-1.7B-Base", "影子教师输出"]), "Exact D0 population-feasibility manifest is incomplete")
        require(all(label in benchmark_text for label in ["32 个训练模型", "8M 目标 token", "种子区组才是随机化与重采样单位", "δpop"]), "D0 population estimand or replication design is incomplete")
        require(all(label in benchmark_text for label in ["群体 GO", "有条件 GO", "NO-GO", "全新任务家族"]), "D0 population go/no-go criteria are incomplete")
        require(all(label in benchmark_text for label in ["D0b 群体剂量研究", "2M 目标 token", "D0c 分解", "不属于零控制"]), "D0 dose-response or decomposition gate is incomplete")
        require(all(label in benchmark_text for label in ["D1 · 单模型检测器发现、校准与确认", "D1a 发现", "28 个模型", "D1b 校准", "56 个模型", "D1c 未触碰确认", "120 个模型"]), "D1 discovery/calibration/confirmation cohorts are incomplete")
        require(all(label in benchmark_text for label in ["误指控率", "上界低于 5%", "sensitivity", "下界至少 80%", "错误候选纳入率"]), "D1 preregistered operating targets are incomplete")
        require(all(label in benchmark_text for label in ["G0 · D0 通过后的机制隔离 campaign", "教师 T₁ 正例", "公开监督控制", "影子教师控制", "72", "DPO β=0.1"]), "Post-D0 mechanism-isolation campaign is incomplete")
        require(all(label in benchmark_text for label in ["公开目标控制", "影子教师控制", "替代教师控制", "留出污染筛查"]), "Identification-valid negative-control protocol is incomplete")
        require(all(label in benchmark_text for label in ["重复实验层级与推断单位", "训练出的学生始终是独立实验单位", "发现模型", "校准模型", "确认模型"]), "Replication hierarchy or inferential-unit specification is incomplete")
        require(all(label in benchmark_text for label in ["带成本的实验设计矩阵", "D0a 群体可行性", "D1a 发现", "D1b 校准", "D1c 确认", "G0 机制隔离"]), "Costed staged experiment matrix is incomplete")
        require(all(label in benchmark_text for label in ["基准模型分层与精确模型", "DeepSeek-R1", "Llama-3.2", "Minitron", "OpenRouter"]), "Stratified distillation-model benchmark is incomplete")
        require(all(label in benchmark_text for label in ["具体商业 API 面板", "openai/gpt-5.2", "anthropic/claude-opus-4.1", "qwen/qwen3.7-plus", "mistralai/mistral-medium-3-5"]), "Concrete OpenRouter panel is incomplete")
        require(all(label in benchmark_text for label in ["方向性与互相蒸馏的观察性分析", "时间上可行", "对称或双向行为回声", "候选证据图"]), "Directional observational analysis is incomplete")
        require(all(label in benchmark_text for label in ["D0 全部自然签名失败", "边界失败但结构/行动通过", "结论不充分"]), "Negative-result direction-changing rules are incomplete")

        driver.get(f"{base_url}/paper-roadmap.html")
        wait_until(driver, lambda d: d.find_element(By.CSS_SELECTOR, "h1").text == "推荐论文主张与执行路线", "Paper roadmap page did not load in Chinese")
        roadmap_text = driver.find_element(By.ID, "dynamic-page").text
        require(all(label in roadmap_text for label in ["D0 通过后的群体主张", "D1 确认后的检测器主张", "第一个主张不自动推出第二个"]), "Population-versus-detector thesis boundary is missing")
        require(all(label in roadmap_text for label in ["D0a · 群体可行性", "D1a · 检测器发现", "D1b · 检测器校准", "D1c · 未触碰确认", "G0 · 机制隔离"]), "Staged execution plan is incomplete")
        require(all(label in roadmap_text for label in ["D0 群体 GO", "D1 检测器 GO", "有条件方向", "NO-GO / 后备"]), "Go/no-go direction rules are incomplete")
        require(all(label in roadmap_text for label in ["D0 群体效应表", "D1 未触碰确认表", "候选缺失误指控", "错误候选纳入"]), "Publication-ready population/detector reporting templates are incomplete")

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
