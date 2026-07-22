export const PAPER_METHOD_EN = {
  eyebrow: "Next Paper · Method Design",
  title: "Candidate-Specific Behavioral Echo Testing",
  lead: "Distillation may transfer not only what a teacher answers, but how it decides, organizes, and revises those answers; we test whether such candidate-specific residual behavior can support black-box teacher-evidence auditing.",
  callout: "The method is a falsifiable proposal, not a finished detector. It first tests whether non-mandatory teacher behavior transfers across independently trained students, then asks whether a prospectively frozen rule can audit one unseen model without confusing teacher influence with family, data, capability, or generic model change.",
  sections: [
    {
      title: "Research objective and core intuition",
      body: `<p>We aim to build a candidate-conditioned black-box distillation-evidence test. Given an API-only suspect model <em>S</em>, a candidate teacher <em>Tᵢ</em>, and matched controls <em>𝒞ᵢ</em>, the method first discovers behavior that is stable for the candidate but not required for task success, then tests whether <em>S</em> reproduces that behavior on fresh inputs beyond the matched-control level. This is needed because shared correct answers and surface similarity can arise from common model families, public data, capability, prompt templates, and output formatting. The central intuition is that distillation may transfer not only <strong>what</strong> the teacher answers, but also <strong>how</strong> it changes a decision, organizes a valid response, or revises a course of action under uncertainty [[1,2,3,6,7,88,89,90]].</p><div class="definition-box"><b>Why an echo may survive</b>Student updates are driven by teacher-generated supervision. When several outputs or solution paths satisfy the task, the target still encodes the teacher's particular choice of boundary, organization, and recovery behavior. Repeated exposure can therefore turn non-mandatory teacher preferences into stable student residuals.</div><div class="definition-box"><b>Behavioral echo</b>A repeatable candidate-specific decision, structural, or action pattern that reappears in a student on fresh tasks even though the pattern is not necessary to obtain a correct answer.</div><div class="survey-note"><b>Not an echo</b>Copying phrases, sharing the same correct answer, or looking generally similar is insufficient when matched controls behave the same way.</div>`
    },
    {
      title: "Evidence supporting the behavioral-echo hypothesis",
      body: `<p>The intuition is supported by several adjacent findings, but the evidence does not all have the same strength. Existing LLM studies directly show that students can retain teacher-preferred syntactic templates, teacher-specific reasoning actions, non-mandatory tool-use patterns, rewritten trace signatures, and memorization-related properties [[1,5,88,89,90]]. These results support the broad claim that teacher-generated supervision can transmit behavior beyond the final correct answer.</p><table class="matrix"><thead><tr><th>Evidence layer</th><th>What prior work shows</th><th>What it supports here</th><th>What remains unproven</th></tr></thead><tbody><tr><td><strong>Direct LLM behavioral transfer</strong></td><td>Teacher-preferred POS or response structures and teacher-specific reasoning/action patterns remain observable in distilled students [[1,5,88]].</td><td>Structural and action echoes are plausible natural audit signals.</td><td>The same signature need not transfer across every teacher, task, or student family.</td></tr><tr><td><strong>Designed trace and property transfer</strong></td><td>Reasoning-trace rewriting can create detectable student signatures, and memorization-related teacher properties can transfer through distillation [[89,90]].</td><td>Non-task-essential properties can enter student behavior through teacher supervision.</td><td>Actively designed signatures do not prove that naturally occurring echoes are always strong enough for auditing.</td></tr><tr><td><strong>Decision-boundary knowledge</strong></td><td>Boundary-focused KD, decision-only black-box KD, and counterfactual LLM distillation show that teacher decision boundaries can guide student learning [[86,87,91]].</td><td>A controlled A→C transition is a scientifically motivated candidate signal.</td><td>These works do not establish that ordinary output distillation preserves natural directional transitions on unseen audit tasks.</td></tr></tbody></table><div class="claim-box"><b>The hypothesis this paper must test</b>Under ordinary teacher-output training, does a student reproduce a candidate teacher's directional response transition on fresh instances <em>more often than matched controls</em>? This matched-control excess—not transition agreement alone—is the proposed distillation evidence.</div>`,
    },
    {
      title: "Candidate-specific evidence · a concrete example",
      body: `<p>Consider two nearly identical prompts. On <em>x⁰</em> the candidate teacher selects A; after one controlled condition changes, it reliably switches to C on <em>x¹</em>. Matched models do not reproduce this A→C transition. If the suspect also reproduces A→C on many fresh instances, the transition is a candidate-specific boundary echo.</p><table class="matrix"><thead><tr><th>Model</th><th>x⁰</th><th>x¹</th><th>Observed transition</th><th>Interpretation</th></tr></thead><tbody><tr><td>Candidate Tᵢ</td><td>A</td><td>C</td><td>A→C</td><td>Stable candidate behavior</td></tr><tr><td>Matched controls 𝒞ᵢ</td><td>A/B</td><td>A/B</td><td>No stable A→C</td><td>Rules out a common-capability transition</td></tr><tr><td>Suspect S</td><td>A</td><td>C</td><td>A→C</td><td>Potential echo, subject to model-level calibration</td></tr></tbody></table><p>The same logic applies to multiple valid response structures or actions. Evidence comes from an <strong>excess pattern relative to controls</strong>, not from one impressive example.</p>`
    },
    {
      title: "Behavioral-echo signature families",
      body: `<table class="matrix"><thead><tr><th>Family</th><th>Intuitive example</th><th>Formal audit interface</th><th>Main failure mode</th></tr></thead><tbody><tr><td><strong>B · Boundary echo</strong></td><td>A small condition change makes both teacher and student switch A→C.</td><td>Fresh paired MCQ, next-subgoal, A/B/tie, or tool-choice inputs.</td><td>All capable models follow the same obvious transition.</td></tr><tr><td><strong>S · Structural echo</strong></td><td>Several answers are valid, but teacher and student repeatedly use “constraints → elimination → conclusion.”</td><td>Fresh open responses scored by POS templates, discourse skeletons, openings, and step-count bins.</td><td>Length, task difficulty, or formatting masquerades as structure.</td></tr><tr><td><strong>E · Error / reasoning / action echo</strong></td><td>When conflict appears, teacher and student inspect the same assumption or choose the same optional tool sequence.</td><td>Fresh difficult tasks with multiple valid paths, error labels, subgoal orders, or action-graph motifs.</td><td>Rare events are too sparse or correlate only with competence.</td></tr></tbody></table><p>Structural and action transfer have direct LLM evidence, while ordinary output-distillation transfer of local boundaries remains a demo-gated hypothesis [[1,86,87,88,89,90,91]]. We combine the three families because different supervision pipelines need not preserve the same part of teacher behavior: response targets may retain organization, reasoning traces may retain subgoal or recovery patterns, and preference supervision may shift local decisions. The omnibus hypothesis is therefore existential—at least one family may survive—rather than assuming all three are universal.</p><div class="survey-note"><b>Relation to fingerprinting</b>Integrity fingerprints such as ESF ask whether a protected reference model changed. Behavioral-echo testing instead asks whether a separate suspect carries candidate-teacher-specific residual behavior that matched alternatives do not explain; the detailed comparison appears below [[96]].</div>`
    },
    {
      title: "End-to-end audit workflow",
      body: `<div class="steps"><div class="step"><strong>1 · Build matched controls.</strong>For each candidate, include same-family, capability-matched, same-data, alternative-teacher, and public-target controls wherever the experiment permits.</div><div class="step"><strong>2 · Discover candidate-specific behavior.</strong>Use candidate and control outputs only; do not inspect the suspect during discovery.</div><div class="step"><strong>3 · Instantiate fresh audit items.</strong>Reuse a discovered rule or template on new entities, numbers, answer orders, and task instances.</div><div class="step"><strong>4 · Score B/S/E echoes.</strong>Measure how much more often the suspect reproduces each candidate pattern than matched controls.</div><div class="step"><strong>5 · Calibrate and decide.</strong>Replay the full discovery-and-scoring algorithm in a model-level null distribution, combine surviving families with maxT, and return detected, not detected, or inconclusive.</div></div><p>This ordering prevents the method from seeing the suspect first and then inventing a flattering explanation.</p>`
    },
    {
      title: "Two-stage validation · D0 transfer and D1 detection",
      body: `<table class="matrix"><thead><tr><th>Stage</th><th>Scientific question</th><th>Inference unit</th><th>Allowed conclusion</th></tr></thead><tbody><tr><td><strong>D0 · population transfer</strong></td><td>Does assigning Tᵢ outputs cause an average behavioral-echo change across independently trained students?</td><td>Paired seed blocks of trained student replicas</td><td>The tested pipeline transfers an average echo.</td></tr><tr><td><strong>D1 · individual detection</strong></td><td>Can a frozen rule classify one completely unseen model while controlling false attribution and abstaining when needed?</td><td>Untouched trained models</td><td>Operating characteristics of a model-level detector.</td></tr></tbody></table><div class="equation">τ<sub>i,s</sub>=E[g<sub>s</sub>(S(T<sub>i</sub>))]−E[g<sub>s</sub>(S(control))]. <span class="eq-label">(1)</span></div><p>D0 success does not imply D1 success: two treatment groups can differ on average while their model-level score distributions still overlap too much for reliable individual auditing.</p>`
    },
    {
      title: "Candidate-only discovery and falsification controls",
      body: `<p>Discovery partitions prompt templates, semantic families, and task generators before any suspect query. For candidate <em>i</em> and signature family <em>s</em>, it selects objects that are candidate-stable, control-specific, and reusable on new instances:</p><div class="equation">A<sub>i,s</sub>=argmax<sub>A∈𝒜<sub>s</sub></sub> Specificity<sub>i</sub>(A)·Stability<sub>i</sub>(A)·[1−ControlTransfer(A)]. <span class="eq-label">(2)</span></div><p>Key falsification tests are candidate-label shuffling, candidate–probe remapping, shuffled teacher outputs, same-family non-distilled students, alternative-teacher students, and capability-matched independent models. If the signal survives after the candidate relation is destroyed, it is not candidate-specific provenance evidence.</p>`
    },
    {
      title: "Joint calibration and three-state decisions",
      body: `<p>For each candidate and family, define a bounded model-level echo score and subtract the matched-control expectation. Standardized family statistics are combined by a maximum so that one strong surviving family is not diluted by two inactive families:</p><div class="equation">Z<sub>i,max</sub>=max\{Z<sub>i,B</sub>,Z<sub>i,S</sub>,Z<sub>i,E</sub>\}. <span class="eq-label">(3)</span></div><p>The threshold cannot come from an ordinary normal approximation. Every model-level null resample must rerun discovery, feature selection, scoring, signature selection, and candidate multiplicity. The frozen D1 rule returns:</p><div class="equation">d<sub>i</sub>(S)∈\{detected,not\ detected,inconclusive\}. <span class="eq-label">(4)</span></div><ul><li><strong>Detected:</strong> the jointly calibrated candidate statistic exceeds the multiplicity-corrected threshold.</li><li><strong>Not detected:</strong> all families are practically negligible at a preregistered resolution and the study has adequate model-level power.</li><li><strong>Inconclusive:</strong> neither condition holds, the signal is unstable, or the model lies outside the calibration envelope.</li></ul><p>The evidence-supported candidate set is a summary of calibrated tests, not a proven causal teacher set [[2,7]].</p>`
    },
    {
      title: "Model-level power and query budgeting",
      body: `<p>More prompts reduce measurement noise within one model; they do not create independent model replicas. D0 therefore powers paired model-level treatment effects, while D1 separately powers sensitivity, candidate-absent false attribution, wrong-candidate inclusion, and abstention on untouched models.</p><p>Discovery, calibration, and confirmation queries are budgeted separately. Before confirmation, freeze signature definitions, candidate sets, thresholds, negligible-effect regions, decoding settings, stopping rules, and exclusions. Prompt-cluster and repeated-generation uncertainty stays nested inside each model.</p>`
    },
    {
      title: "Illustrative decision outcomes",
      body: `<p>Suppose three candidates are evaluated with independent model replicas and 900 held-out items, 300 per echo family. The numbers below are pedagogical rather than experimental results.</p><table class="matrix"><thead><tr><th>Candidate</th><th>Boundary</th><th>Structure</th><th>Error/action</th><th>Joint maxT</th><th>Decision</th></tr></thead><tbody><tr><td>T₁</td><td>Strong</td><td>Weak</td><td>Weak</td><td>p=0.010</td><td><strong>Detected · boundary-like echo</strong></td></tr><tr><td>T₂</td><td>Negligible</td><td>Negligible</td><td>Negligible</td><td>p=0.93; adequate equivalence power</td><td><strong>Not detected</strong></td></tr><tr><td>T₃</td><td>Weak</td><td>Suggestive but unstable</td><td>Weak</td><td>p=0.16; low power</td><td><strong>Inconclusive</strong></td></tr></tbody></table><p>T₁ passes because one family survives strongly. T₂ receives a negative conclusion only because all families are negligible with sufficient power. T₃ is not forced into either class.</p>`
    },
    {
      title: "Relationship to ESF and integrity fingerprinting",
      body: `<p>ESF is an important adjacent method: it uses white-box access to a protected reference LLM to optimize prompts that are sensitive to parameter changes, stores a randomness-aware reference set, and later performs black-box tamper detection. Its target fact is whether the protected model has changed through fine-tuning, compression, backdoor injection, or replacement [[96]].</p><table class="matrix"><thead><tr><th>Dimension</th><th>ESF</th><th>Behavioral echo testing</th></tr></thead><tbody><tr><td>Latent fact</td><td>Was the protected reference model modified?</td><td>Does the suspect show candidate-teacher-specific evidence beyond matched controls?</td></tr><tr><td>Reference</td><td>The same model before modification</td><td>Candidate teachers plus alternative explanations</td></tr><tr><td>Probe objective</td><td>Sensitivity to broad parameter tampering</td><td>Specificity to one candidate's non-mandatory behavior</td></tr><tr><td>Generation access</td><td>White-box reference-model features/gradients</td><td>Core discovery can use candidate and control outputs</td></tr><tr><td>Positive class</td><td>Fine-tuning, compression, backdoor, replacement</td><td>Students trained with a specified candidate's outputs</td></tr><tr><td>Decision</td><td>Tampered / unaltered</td><td>Detected / not detected / inconclusive</td></tr></tbody></table><p>ESF is therefore not a duplicate, but it limits our novelty claims: we cannot claim the first sensitive-query LLM fingerprint or the first compact probe set for randomized black-box outputs. A useful auxiliary baseline is to test whether ESF detects that every student differs from a teacher while failing to distinguish target-teacher students from alternative-teacher and ordinary-SFT controls.</p>`
    },
    {
      title: "Observable signatures versus training mechanisms",
      body: `<p>B/S/E describe <strong>what appears to have survived</strong>, not <strong>how the student was trained</strong>. Response distillation may affect errors and structure; reasoning traces may affect all three families; preference training may alter both language organization and decisions.</p><p>Mechanism attribution is therefore a separate controlled experiment with the teacher, starting checkpoint, prompt content, effective tokens, and compute held fixed while only the supervision form changes. Commercial APIs may receive a signature profile, never a proven hidden recipe.</p>`
    },
    {
      title: "Novelty, claim scope, and stop criteria",
      body: `<div class="survey-note"><b>Method contribution survives</b>The multi-signature, selection-valid test improves calibrated candidate detection or fixed-power query efficiency over POS-only, action-only, boundary-only, generic provenance, and ESF-style integrity baselines [[1,2,7,88,96]].</div><div class="survey-note"><b>Claim is narrowed</b>If only structural or action echoes transfer, remove the general boundary claim before D1. If one family matches maxT, publish a single-signature or benchmark/statistical-validity result rather than claiming combination gains.</div><div class="survey-note"><b>NO-GO</b>If matched controls erase all population effects, fresh task families do not replicate, or shuffled candidate relations preserve the signal, stop passive teacher-lineage detection.</div><div class="survey-note"><b>Commercial boundary</b>Report version-bounded candidate-conditioned behavioral evidence and unresolved alternatives; do not claim that a commercial endpoint was causally distilled from a teacher.</div>`
    }
  ],
  view: "teacher-lineage-attribution"
};

export const PAPER_METHOD_ZH = {
  eyebrow: "下一篇论文 · 方法设计",
  title: "候选特异行为回声检验",
  lead: "蒸馏可能不仅传递教师回答了什么，也会传递教师如何决策、组织和修正答案；我们检验这些候选特异残余行为能否成为黑盒教师证据。",
  callout: "这是一套可证伪的研究方案，而不是已经完成的检测器。它先检验非任务必需的教师行为是否会在独立训练学生总体上传递，再检验前瞻冻结的规则能否审计一个未见模型，同时排除模型家族、数据、能力和一般模型变化等解释。",
  sections: [
    {
      title: "研究目标与核心直觉",
      body: `<p>我们准备构建一个候选条件黑盒蒸馏证据检验。给定只能通过 API 查询的待审计模型 <em>S</em>、候选教师 <em>Tᵢ</em> 和匹配控制模型 <em>𝒞ᵢ</em>，方法先在候选与控制之间发现教师特异但并非完成任务所必需的行为规律，再在全新输入上检验 <em>S</em> 是否以超过匹配控制的程度稳定复现这些规律。这样做是因为共同正确答案和表面文本相似可能来自模型家族、公开数据、能力、提示模板和输出格式。核心直觉是：蒸馏可能不仅传递教师<strong>回答了什么</strong>，也会传递教师<strong>如何</strong>改变决策、组织有效回答，以及在不确定性下修正行动 [[1,2,3,6,7,88,89,90]]。</p><div class="definition-box"><b>为什么回声可能保留</b>学生参数由教师生成的监督推动更新。当多种输出或解题路径都能完成任务时，训练目标仍包含教师对决策边界、回答组织和错误恢复方式的具体选择。反复暴露可能把这些非任务必需偏好转化为稳定的学生残余行为。</div><div class="definition-box"><b>行为回声</b>学生在全新任务上重复某个候选教师特有、但并非获得正确答案所必需的决策、结构或行动规律。</div><div class="survey-note"><b>不属于行为回声</b>复制短语、共同答对或总体上看起来相似都不够；如果匹配控制也表现相同，就没有候选特异证据。</div>`
    },
    {
      title: "行为回声直觉的研究依据",
      body: `<p>这一直觉并非没有依据，但不同文献提供的支持强度并不相同。现有 LLM 研究已经直接观察到，蒸馏学生可能保留教师偏好的句法模板、教师特异的推理动作、非任务必需的工具使用模式、经过改写的推理轨迹签名，以及与教师记忆相关的属性 [[1,5,88,89,90]]。这些结果支持一个较宽的结论：教师监督可能传递最终正确答案之外的行为信息。</p><table class="matrix"><thead><tr><th>证据层级</th><th>已有研究发现</th><th>对本文直觉的支持</th><th>仍不能直接证明</th></tr></thead><tbody><tr><td><strong>直接 LLM 行为迁移证据</strong></td><td>教师偏好的 POS/回答结构，以及教师特异的推理或行动模式，可以在蒸馏学生中继续被观察到 [[1,5,88]]。</td><td>结构回声和行动回声可以成为自然产生的审计信号。</td><td>同一种签名不一定跨所有教师、任务和学生家族稳定迁移。</td></tr><tr><td><strong>主动轨迹与属性迁移证据</strong></td><td>推理轨迹改写能够在学生中形成可检测签名，教师的记忆相关属性也可能通过蒸馏传递 [[89,90]]。</td><td>教师监督中的非任务必需属性可以进入学生行为。</td><td>主动设计的签名不能证明自然行为回声一定足够强，能够支持可靠审计。</td></tr><tr><td><strong>决策边界知识证据</strong></td><td>边界知识蒸馏、仅决策黑盒蒸馏和 LLM 反事实蒸馏均表明，教师决策边界能够指导学生学习 [[86,87,91]]。</td><td>使用受控 A→C 转移作为候选信号具有科学依据。</td><td>这些工作尚未证明普通输出蒸馏会在未见审计任务上保留自然方向性转移。</td></tr></tbody></table><div class="claim-box"><b>本文必须真正验证的假设</b>在普通教师输出训练下，学生是否会在全新实例上比匹配控制更频繁地复现候选教师的方向性响应转移？真正的蒸馏证据是这一<strong>匹配控制下的超额转移</strong>，而不是教师与学生恰好都出现 A→C。</div>`,
    },
    {
      title: "候选特异证据 · 一个具体例子",
      body: `<p>考虑两个几乎相同的输入。在 <em>x⁰</em> 上，候选教师选择 A；只改变一个受控条件后，它在 <em>x¹</em> 上稳定改选 C。匹配模型并不复现这一 A→C 转移。如果待审计模型在大量全新实例上也稳定复现 A→C，就形成候选特异的边界回声。</p><table class="matrix"><thead><tr><th>模型</th><th>x⁰</th><th>x¹</th><th>观察到的转移</th><th>解释</th></tr></thead><tbody><tr><td>候选 Tᵢ</td><td>A</td><td>C</td><td>A→C</td><td>稳定候选行为</td></tr><tr><td>匹配控制 𝒞ᵢ</td><td>A/B</td><td>A/B</td><td>没有稳定 A→C</td><td>排除共同能力导致的普遍转移</td></tr><tr><td>待审计 S</td><td>A</td><td>C</td><td>A→C</td><td>可能存在回声，仍需模型级校准</td></tr></tbody></table><p>同样的逻辑也适用于多种正确回答结构或行动路径。证据来自<strong>相对于控制的超额规律</strong>，不是某一个看起来很像的例子。</p>`
    },
    {
      title: "行为回声签名家族",
      body: `<table class="matrix"><thead><tr><th>家族</th><th>直观例子</th><th>正式审计接口</th><th>主要失败方式</th></tr></thead><tbody><tr><td><strong>B · 边界回声</strong></td><td>条件轻微改变后，教师和学生都从 A 转向 C。</td><td>全新的 MCQ、下一子目标、A/B/平局或工具选择成对输入。</td><td>所有强模型都会跟随同一明显转移。</td></tr><tr><td><strong>S · 结构回声</strong></td><td>多种回答都正确，但教师和学生反复采用“列约束→排除→结论”。</td><td>按 POS 模板、话语骨架、回答开头与步骤数评分的全新开放回答。</td><td>长度、任务难度或格式伪装成结构。</td></tr><tr><td><strong>E · 错误 / 推理 / 行动回声</strong></td><td>出现冲突时，教师和学生优先检查同一假设或使用同一非必要工具顺序。</td><td>具有多种合理路径的全新困难任务、错误标签、子目标顺序或行动图 motif。</td><td>罕见事件太少，或仅仅反映能力差异。</td></tr></tbody></table><p>结构和行动迁移已有直接 LLM 证据；普通输出蒸馏是否稳定迁移局部边界仍是必须通过 demo 的假设 [[1,86,87,88,89,90,91]]。之所以联合三个家族，是因为不同监督流程不一定保留教师行为的同一部分：响应目标可能更多保留组织方式，推理轨迹可能保留子目标或恢复模式，偏好监督则可能移动局部决策。总假设因此是“至少一个家族可能存活”，而不是默认三个家族都存在。</p><div class="survey-note"><b>与模型指纹的关系</b>ESF 等完整性指纹检验受保护参考模型是否发生变化；行为回声则检验另一个待审计模型是否具有匹配替代解释无法说明的候选教师特异残余行为，后文给出完整对比 [[96]]。</div>`
    },
    {
      title: "端到端审计流程",
      body: `<div class="steps"><div class="step"><strong>1 · 建立匹配控制。</strong>针对每个候选，尽可能加入同家族、能力匹配、相同数据、替代教师和公开目标控制。</div><div class="step"><strong>2 · 发现候选特异行为。</strong>发现阶段只看候选与控制输出，不能查看待审计模型。</div><div class="step"><strong>3 · 在全新输入上实例化。</strong>把发现到的规则或模板应用到新的实体、数值、答案顺序和任务实例。</div><div class="step"><strong>4 · 计算 B/S/E 回声分数。</strong>测量待审计模型比匹配控制多复现多少候选行为。</div><div class="step"><strong>5 · 联合校准并判定。</strong>在模型级零分布中重放完整发现和计分流程，用 maxT 合并存活家族，输出检测到、未检测到或结论不充分。</div></div><p>这一顺序避免先查看待审计模型，再为它临时寻找“最像的解释”。</p>`
    },
    {
      title: "两阶段验证 · D0 迁移与 D1 检测",
      body: `<table class="matrix"><thead><tr><th>阶段</th><th>科学问题</th><th>推断单位</th><th>允许结论</th></tr></thead><tbody><tr><td><strong>D0 · 群体迁移</strong></td><td>把 Tᵢ 输出分配给学生，是否会在独立训练学生总体上造成平均行为回声变化？</td><td>配对种子区组中的训练学生 replica</td><td>测试训练流程会传递平均回声。</td></tr><tr><td><strong>D1 · 单模型检测</strong></td><td>冻结规则能否判断一个完全未见模型，同时控制误归因并在必要时拒绝判断？</td><td>未触碰的独立训练模型</td><td>模型级检测器的操作性能。</td></tr></tbody></table><div class="equation">τ<sub>i,s</sub>=E[g<sub>s</sub>(S(T<sub>i</sub>))]−E[g<sub>s</sub>(S(control))]. <span class="eq-label">(1)</span></div><p>D0 成功不代表 D1 必然成功：两个处理组平均值可能不同，但模型级分布仍然高度重叠，无法可靠判断单个模型。</p>`
    },
    {
      title: "仅候选发现与反证控制",
      body: `<p>在任何待审计查询之前，先划分提示模板、语义家族和任务生成器。对候选 <em>i</em> 和签名家族 <em>s</em>，发现阶段选择候选稳定、控制特异、且能在新实例上复用的对象：</p><div class="equation">A<sub>i,s</sub>=argmax<sub>A∈𝒜<sub>s</sub></sub> Specificity<sub>i</sub>(A)·Stability<sub>i</sub>(A)·[1−ControlTransfer(A)]. <span class="eq-label">(2)</span></div><p>关键反证包括：打乱候选标签、打乱候选—探针对应、打乱教师输出、同家族无蒸馏学生、替代教师学生和能力匹配独立模型。如果破坏候选关系后信号仍存在，它就不是候选特异来源证据。</p>`
    },
    {
      title: "联合校准与三态判定",
      body: `<p>每个候选和家族先计算有界的模型级回声分数，再减去匹配控制期望。使用最大值合并三个标准化家族统计量，使一个强存活家族不会被两个无效家族平均掉：</p><div class="equation">Z<sub>i,max</sub>=max\{Z<sub>i,B</sub>,Z<sub>i,S</sub>,Z<sub>i,E</sub>\}. <span class="eq-label">(3)</span></div><p>阈值不能来自普通正态近似。每次模型级零假设重采样都必须重新运行发现、特征选择、计分、签名选择和候选多重比较。冻结的 D1 规则输出：</p><div class="equation">d<sub>i</sub>(S)∈\{检测到,未检测到,结论不充分\}. <span class="eq-label">(4)</span></div><ul><li><strong>检测到：</strong>联合校准统计量超过多重比较校正阈值。</li><li><strong>未检测到：</strong>所有家族在预注册分辨率下均可忽略，且模型级功效充分。</li><li><strong>结论不充分：</strong>两者均不成立、信号不稳定，或模型超出校准范围。</li></ul><p>证据支持候选集合只是校准检验的摘要，不是已经证明的因果教师集合 [[2,7]]。</p>`
    },
    {
      title: "模型级功效与查询预算",
      body: `<p>增加提示数量只能降低一个模型内部的测量噪声，不能创造新的独立模型。D0 需要为配对模型级处理效应做功效规划；D1 需要分别为未触碰模型上的灵敏度、候选缺失误归因、错误候选纳入和拒绝率规划样本量。</p><p>发现、校准和确认查询分别预算。确认开始前冻结签名、候选集合、阈值、可忽略效应区间、解码设置、停止规则和排除条件；提示簇与重复生成的不确定性始终嵌套在模型内部。</p>`
    },
    {
      title: "判定结果示例",
      body: `<p>假设有三个候选、若干独立模型 replica 和 900 个留出样本，每个行为家族 300 个。下表仅用于教学，不是实验结果。</p><table class="matrix"><thead><tr><th>候选</th><th>边界</th><th>结构</th><th>错误/行动</th><th>联合 maxT</th><th>结论</th></tr></thead><tbody><tr><td>T₁</td><td>强</td><td>弱</td><td>弱</td><td>p=0.010</td><td><strong>检测到 · 边界型回声</strong></td></tr><tr><td>T₂</td><td>可忽略</td><td>可忽略</td><td>可忽略</td><td>p=0.93；等效性功效充分</td><td><strong>未检测到</strong></td></tr><tr><td>T₃</td><td>弱</td><td>提示性但不稳定</td><td>弱</td><td>p=0.16；功效不足</td><td><strong>结论不充分</strong></td></tr></tbody></table><p>T₁ 因一个家族强烈存活而通过；T₂ 只有在全部家族均可忽略且功效充分时才能获得负向结论；T₃ 不会被强行分到正类或负类。</p>`
    },
    {
      title: "与 ESF 及完整性指纹的关系",
      body: `<p>ESF 是重要的相邻方法：它对白盒受保护参考模型优化对参数变化敏感的输入，保存考虑随机性的参考 token 集合，再对待测模型进行黑盒篡改检测。它要判断的潜在事实是：受保护模型是否经过微调、压缩、后门注入或替换而发生改变 [[96]]。</p><table class="matrix"><thead><tr><th>维度</th><th>ESF</th><th>行为回声检验</th></tr></thead><tbody><tr><td>潜在事实</td><td>受保护参考模型是否被修改</td><td>待审计模型是否具有超出匹配控制的候选教师证据</td></tr><tr><td>参考对象</td><td>同一个模型的修改前版本</td><td>候选教师与多种替代解释</td></tr><tr><td>探针目标</td><td>对广泛参数篡改敏感</td><td>对一个候选的非必要行为特异</td></tr><tr><td>生成访问</td><td>生成指纹需要白盒特征/梯度</td><td>核心发现可只用候选和控制输出</td></tr><tr><td>正例</td><td>微调、压缩、后门、替换</td><td>使用指定候选教师输出训练的学生</td></tr><tr><td>结论</td><td>已篡改 / 未篡改</td><td>检测到 / 未检测到 / 结论不充分</td></tr></tbody></table><p>因此 ESF 不是我们的重复工作，但它限制了创新性表述：不能声称首次为 LLM 选择敏感查询，也不能声称首次用少量探针处理随机黑盒输出。一个有价值的辅助基线是检验 ESF 是否能发现所有学生都不同于教师，却无法区分目标教师学生、替代教师学生和普通 SFT 控制。</p>`
    },
    {
      title: "可观察签名与训练机制的边界",
      body: `<p>B/S/E 描述<strong>什么似乎被保留</strong>，不等于说明<strong>学生如何训练</strong>。响应蒸馏可能影响错误和结构；推理轨迹可能影响三个家族；偏好训练也会同时改变语言组织和决策。</p><p>机制归因必须作为独立受控实验：固定教师、起始检查点、提示内容、有效 token 和计算预算，只改变监督形式。商业 API 最多报告签名画像，不能把它转换成隐藏训练配方声明。</p>`
    },
    {
      title: "创新性、结论范围与停止条件",
      body: `<div class="survey-note"><b>方法贡献成立</b>多签名、选择有效的联合检验在校准候选检测或固定功效查询效率上超过仅 POS、仅行动、仅边界、通用来源和 ESF 式完整性基线 [[1,2,7,88,96]]。</div><div class="survey-note"><b>主张收缩</b>如果只传递结构或行动回声，在 D1 前删除一般边界主张；如果单一家族与 maxT 相当，就转为单签名或 benchmark/统计有效性论文。</div><div class="survey-note"><b>NO-GO</b>如果匹配控制消除全部群体效应、全新任务无法复现，或打乱候选关系后信号仍在，则停止被动教师谱系检测。</div><div class="survey-note"><b>商业边界</b>只报告受版本限制的候选条件行为证据与未排除解释，不能声称商业端点因果蒸馏自某教师。</div>`
    }
  ],
  view: "teacher-lineage-attribution"
};

export const PAPER_METHOD_SECTION_REFS = Array.from({ length: 13 }, () => []);

export const PAPER_METHOD_PAGE_DETAILS = {
  en: {
    overview: "Behavioral-echo testing searches for candidate-specific, non-mandatory decisions, structures, and actions, verifies population transfer in D0, and only then calibrates a three-state individual detector in D1.",
    terms: ["behavioral echo", "matched-control residual", "candidate-only discovery", "fresh instantiation", "model-level maxT", "inconclusive decision"],
    questions: ["Which candidate-specific behavior survives matched controls?", "Does it transfer across independent student replicas?", "Can an untouched detector control false attribution?"]
  },
  zh: {
    overview: "行为回声检验寻找候选教师特异、但非任务必需的决策、结构和行动规律，先在 D0 验证群体迁移，再在 D1 校准三态单模型检测器。",
    terms: ["行为回声", "匹配控制残差", "仅候选发现", "全新实例化", "模型级 maxT", "结论不充分"],
    questions: ["哪些候选特异行为能通过匹配控制？", "它是否在独立学生 replica 间传递？", "未触碰检测器能否控制误归因？"]
  }
};
