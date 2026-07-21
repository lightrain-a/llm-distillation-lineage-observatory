import { NEXT_PAPER_PAGE_DETAILS, NEXT_PAPER_SECTION_REFS, NEXT_PAPER_ZH } from "./next-paper-zh.mjs";

export const SITE_CONTENT = {
  ui: {
    en: {
      languageButton: "中文",
      searchPlaceholder: "Search references on this page by title, method, model, tag, or number…",
      researchGuide: "Research guide",
      onThisPage: "On this page",
      coreFraming: "Core framing.",
      selectedLiterature: "Selected literature and evidence",
      literatureIntro: "Reference numbers are stable across the entire site. This search filters only the literature set shown on the current page; use Master Bibliography to search all 63 records. Each methodological statement links to the papers, official disclosures, or reports on which it is based.",
      allEvidence: "All evidence",
      evidenceA: "A · official",
      evidenceB: "B · source-grounded",
      evidenceC: "C · experimental",
      evidenceD: "D · provider telemetry",
      evidenceE: "E · reporting",
      primarySource: "Primary source ↗",
      repository: "Repository ↗",
      noItems: "No references match this page and filter.",
      items: "references",
      scopeTerminology: "Scope and terminology",
      keyTerms: "Key terms",
      researchQuestions: "Research questions",
      citedReferences: "References",
      originalTitleNote: "Paper and report titles remain in their original language to preserve exact citation and searchability.",
      referenceNumber: "Reference",
      sidebarNote: "Mechanism-first taxonomy. Open/closed status and access level are treated as attributes, not primary categories.",
    },
    zh: {
      languageButton: "EN",
      searchPlaceholder: "搜索本页参考文献的标题、方法、模型、标签或编号……",
      researchGuide: "研究导航",
      onThisPage: "本页目录",
      coreFraming: "核心框架。",
      selectedLiterature: "相关文献与证据",
      literatureIntro: "全站使用固定参考文献编号。搜索框只筛选当前页面展示的文献集合；如需检索全部 63 条记录，请进入“参考文献总表”。正文中的方法性陈述会链接到对应论文、官方披露或行业报告。",
      allEvidence: "全部证据",
      evidenceA: "A · 官方披露",
      evidenceB: "B · 可追溯公开材料",
      evidenceC: "C · 实验或统计证据",
      evidenceD: "D · 平台私有遥测",
      evidenceE: "E · 新闻或报道",
      primarySource: "原始来源 ↗",
      repository: "代码仓库 ↗",
      noItems: "当前页面和筛选条件下没有匹配的参考文献。",
      items: "篇参考文献",
      scopeTerminology: "研究范围与术语",
      keyTerms: "核心术语",
      researchQuestions: "研究问题",
      citedReferences: "参考文献",
      originalTitleNote: "论文与报告标题保留原始英文，以保证引用准确并方便检索。",
      referenceNumber: "参考文献",
      sidebarNote: "以蒸馏机制为主轴；开源/闭源与访问权限作为属性，而不是一级分类。",
    },
  },
  navZh: {
    "Next Paper": "下一篇论文",
    "Black-box Audit Problem": "黑盒审计问题",
    "Method Candidates": "方法候选",
    "Benchmark & Experiments": "基准与实验",
    "Paper Thesis & Roadmap": "论文主张与路线",
    "Preliminary": "基础概念",
    "Distillation Methods": "蒸馏方法",
    "Distillation Auditing": "蒸馏审计",
    "Attacks & Defenses": "攻击与防御",
    "Distillation Evaluation": "蒸馏评价",
    "Real-world Distillation": "真实蒸馏流程",
    "Resources": "资源与研究议程",
    "Background & Definitions": "背景与定义",
    "Taxonomy & Threat Model": "分类体系与威胁模型",
    "White-box Distillation": "白盒蒸馏",
    "Black-box Distillation": "黑盒蒸馏",
    "Composite Distillation": "复合蒸馏",
    "Output-only Auditing": "仅输出审计",
    "Internal-signal Auditing": "内部信号审计",
    "Teacher & Lineage Attribution": "教师与谱系归因",
    "Multi-teacher Recovery": "多教师恢复",
    "Unauthorized Distillation": "未授权蒸馏",
    "Provenance Defenses": "来源证明防御",
    "Evasion & Removal": "规避与移除",
    "Benchmarks": "基准数据集",
    "Metrics & Protocols": "指标与实验协议",
    "Confounders & Robustness": "混杂因素与鲁棒性",
    "Model-family Compression": "模型家族压缩",
    "Response & Instruction": "响应与指令蒸馏",
    "Reasoning & Process": "推理与过程蒸馏",
    "Production Pipelines": "工业生产流程",
    "Repositories": "代码仓库",
    "Master Bibliography": "参考文献总表",
    "Research Agenda": "研究议程",
    "Long-term Agenda": "长期研究议程",
  },
  sectionRefs: {
    "paper-problem": [[1,2,7],[1,2,7,9,59],[1,2,3,6,7,9,14,15,16,24,25,26,27,59,64,65],[80,83,84,85],[2,3,6,7,9,59],[2,3,6],[],[36,38,39,44,47,49,56],[7,9,14,15,16,33],[45,47,49,59]],
    "paper-method": [[1,2,14,15,80],[76,77,78,79],[],[1,2,15,80],[2,7],[],[],[38,39,44,47,49,56],[3,6],[1,2,15,80],[1,2,7,14,15,80],[2,3,6,7,69,81,82,83,84,85]],
    "paper-benchmark": [[3,6,36,38,39,44,47],[44,66,67,69,81,82,83,84,85],[66,76,77,78,79,83,84,85],[],[7,9,16,33,59],[],[2,14,15,80],[45,47,49,80,85],[70,71,72,73,74,75,85],[70,71,72,73,74,75,85],[2,7,16],[2,3,6,7,9,16],[66,69,83,84,85],[1,2,3,6,7,9,14,15,16,24,33,69,73,76,80],[7,9,16,33]],
    "paper-roadmap": [[1,2,7,14,15,80],[1,2,7,80],[2,3,6,7,9,80],[3,6,7,9,16,66,83,84],[7,9,16,33,45,47,49,85],[],[1,2,3,6,7,9,80]],
    preliminary: [[60,61,62,63,36,38,40,41,44],[60,62,63,36,37,38,39,42,44,45,46,47,49,56],[29,30,31,32,33,44,9,59],[60,61,62,63,36,37,38,40,41,42,44,45,47,56],[7,9,54,59],[2,3,4,6,7,8,10,11,12,14,15,49,59]],
    taxonomy: [[40,38,44,56],[41,38,54],[2,3,6,8],[44,45,46,47],[47,48,49,53],[9,16,59]],
    "white-box-distillation": [[40,41,45],[42,43,11],[10,12,13],[4],[42,45]],
    "black-box-distillation": [[36,37,47],[38,39,44],[47,56],[38,56],[49,56],[57,58]],
    "composite-distillation": [[36,41],[41],[38,39],[54,56],[47,49,56],[43,44,57]],
    "output-only-auditing": [[2,14,15],[1,2,15],[1,2],[5,38,44],[49,56],[7]],
    "internal-signal-auditing": [[3,6,40],[6,8],[11,12,13],[4,10],[8,10,12]],
    "teacher-lineage-attribution": [[2,3],[1,6,7],[9,10,12,13],[6,8],[10,12],[7]],
    "multi-teacher-recovery": [[7],[9,56],[7,54],[7],[9],[7,16,59]],
    "unauthorized-distillation": [[28,29,30,31,32],[33,37],[38,44],[34],[49,50,51],[49]],
    "provenance-defenses": [[24,25],[13,14,21,22,23],[26,27],[24,25],[49],[49,53]],
    "evasion-removal": [[24,32],[24],[16,24],[10,12],[12,16],[49,56]],
    benchmarks: [[2,3],[7,54],[56,57,58],[44,45,46],[47,49],[7,16]],
    "metrics-protocols": [[2,3],[7],[9,56],[54],[7,16],[2,3,49]],
    "confounders-robustness": [[10,12,13],[16,33],[7,9],[2,33],[14,15],[12,16,24],[7]],
    "model-family-compression": [[45],[42,45],[43],[46]],
    "response-instruction-distillation": [[36,37],[37,38],[47,56],[33]],
    "reasoning-process-distillation": [[38],[39],[44,57,58],[5]],
    "production-pipelines": [[45,46],[47],[56],[47,56],[49]],
    repositories: [[3,9,10,12,13,14,16,19,40,56]],
    bibliography: [[17,18,28,54,55]],
    "research-agenda": [[1,3,6,7,9],[1,6,7],[1,4,6,7,9],[16,44,45],[44,47,57,58]],
    home: [[],[40,41,54],[2,3,6,7,9],[16,17,54]],
  },
  pageDetails: {
    "paper-problem": {
      en: { overview: "The paper-facing task is candidate-conditioned black-box distillation-evidence detection. For each candidate, it tests whether suspect–candidate agreement exceeds a preregistered matched-control null, returning detected, not detected at a specified effect size, or inconclusive. A multi-candidate evidence-supported set is a summary of tests, not causal provenance.", terms: ["candidate-conditioned test", "matched-control null", "minimum detectable effect", "evidence-supported candidate set", "mechanism uncertainty", "inconclusive decision"], questions: ["Which candidate-specific behavior survives matched controls and held-out testing?", "When is a non-rejection informative versus underpowered?", "What claim level is justified on commercial APIs?"] },
      zh: { overview: "面向论文的核心任务是“候选条件黑盒蒸馏证据检测”。对每个候选模型，检验待审计模型与候选的一致性是否显著超过预注册的匹配控制零分布，并返回“检测到证据”“在指定效应量下未检测到证据”或“结论不充分”。多候选证据集合只是多个检验的摘要，不是因果来源证明。", terms: ["候选条件检验", "匹配控制零假设", "最小可检测效应", "证据支持候选集合", "机制不确定性", "结论不充分"], questions: ["哪些候选特异行为能通过匹配控制和留出检验？", "何时未拒绝零假设具有信息，何时只是功效不足？", "商业 API 上允许支持到哪一级结论？"] },
    },
    "paper-method": {
      en: { overview: "The recommended method tests whether a suspect preserves candidate-specific paired decision-boundary transitions. Response, reasoning, and preference channels are estimated separately; a selection-valid algorithm-level randomization reruns discovery inside the null and uses a jointly calibrated max-statistic for candidate detection, followed by hierarchical mechanism tests.", terms: ["paired boundary transition", "candidate-only discovery", "fresh inference instantiation", "nested randomization", "maxT omnibus", "three-state decision"], questions: ["Which local transition is candidate-specific rather than a common capability effect?", "Does calibration include adaptive probe selection?", "Which supervision channel is supported after candidate detection?"] },
      zh: { overview: "推荐方法检验待审计模型是否保留候选特异的成对决策边界转移。响应、推理和偏好通道分别估计；选择有效的算法级随机化在零分布内重跑发现，并使用联合校准 max-statistic 进行候选检测，随后通过分层检验判断监督机制。", terms: ["成对边界转移", "仅候选发现", "推断区新实例化", "嵌套随机化", "maxT omnibus", "三态结论"], questions: ["哪些局部转移属于候选特异而不是共同能力？", "校准是否包含自适应探针选择？", "候选检测后支持哪一种监督通道？"] },
    },
    "paper-benchmark": {
      en: { overview: "The benchmark separates four evidence levels: a balanced 72-run controlled causal benchmark, disclosed DeepSeek-R1 distill families, mixed multi-teacher/pruning cases from Llama 3.2 and Minitron, and version-bounded OpenRouter observation. Only the controlled teacher arms support causal sensitivity and mechanism-recovery evaluation.", terms: ["balanced four-arm design", "distillable teacher", "public-supervision control", "shuffled-supervision control", "disclosed distillation pair", "OpenRouter observation"], questions: ["Does the method recover the randomized teacher and mechanism?", "How does it behave on disclosed mixed procedures?", "When must commercial endpoint results remain inconclusive?"] },
      zh: { overview: "基准区分四类证据：72 次平衡受控因果实验、公开 DeepSeek-R1 蒸馏家族、Llama 3.2 与 Minitron 的多教师/剪枝混合流程，以及受版本限制的 OpenRouter 观察研究。只有受控教师处理臂用于评价因果敏感性和机制恢复。", terms: ["平衡四臂设计", "可蒸馏教师", "公开监督控制", "打乱监督控制", "公开蒸馏模型对", "OpenRouter 观察"], questions: ["方法能否恢复随机分配的教师与机制？", "公开混合流程上的证据如何变化？", "哪些商业端点结果必须保持结论不充分？"] },
    },
    "paper-roadmap": {
      en: { overview: "The first paper should establish reliable candidate-conditioned black-box evidence detection with controlled false positives, adequate power, and explicit inconclusive outcomes. Unique candidate identification, limited two-teacher recovery, and coarse mechanism evidence are auxiliary; causal teacher claims and graph reconstruction remain future work.", terms: ["paper thesis", "candidate-wise evidence test", "controlled auxiliary task", "negative-result rule", "go/no-go criterion", "claim downgrade"], questions: ["What minimum evidence-test result is publishable?", "Which failure invalidates the thesis rather than one component?", "How should commercial evidence be reported without causal overclaiming?"] },
      zh: { overview: "第一篇论文应先建立可靠的候选条件黑盒证据检测，并控制误报、保证检验功效、明确输出结论不充分。唯一候选识别、受限双教师恢复和粗粒度机制证据属于辅助任务；因果教师声明和依赖图重建留作未来工作。", terms: ["论文主张", "逐候选证据检验", "受控辅助任务", "负结果规则", "继续/停止标准", "结论降级"], questions: ["什么最低证据检验结果足以投稿？", "哪些失败会推翻整体主张，而不仅是某个模块？", "商业 API 证据应如何避免因果过度结论？"] },
    },
    home: {
      en: { overview: "The observatory separates three questions that are often conflated: how knowledge is transferred during training, how a released model can be audited, and what strength of evidence supports a real-world lineage claim. The site therefore uses the transferred supervision signal as the primary taxonomy and treats model openness, auditor access, and evidence grade as orthogonal metadata.", terms: ["knowledge distillation (KD)", "teacher–student edge", "knowledge signal", "model provenance", "open-set attribution"], questions: ["Which supervision signal was transferred?", "What alternative lineage mechanisms explain the same similarity?", "What evidence justifies detection, attribution, or abstention?"] },
      zh: { overview: "本网站将三个经常被混用的问题分开：训练阶段究竟传递了什么知识、模型发布后如何开展审计，以及现实模型谱系结论由何种强度的证据支持。因此，网站以“被传递的监督信号”为主分类轴，把模型开放性、审计访问权限和证据等级作为正交属性。", terms: ["知识蒸馏（knowledge distillation, KD）", "教师—学生关系（teacher–student edge）", "知识信号（knowledge signal）", "模型来源（model provenance）", "开放集归因（open-set attribution）"], questions: ["训练中传递了哪一种监督信号？", "哪些替代谱系机制也能解释观察到的相似性？", "现有证据足以支持检测、归因，还是应当拒绝判断？"] },
    },
    preliminary: {
      en: { overview: "Knowledge distillation is best defined by the source and form of supervision, not simply by a smaller final model. In generative language modeling, the teacher may provide dense token distributions, sampled sequences, explanation traces, pairwise preferences, critiques, or interaction trajectories. This broader definition accommodates both classical white-box compression and contemporary API-mediated data generation.", terms: ["teacher model", "student model", "distillation target", "instruction tuning", "model extraction", "model lineage"], questions: ["What observation establishes a distillation edge rather than ordinary fine-tuning?", "Does the audit target functionality, teacher identity, or training-data use?", "Which claims require training records rather than behavioral evidence?"] },
      zh: { overview: "知识蒸馏应当由监督信号的来源和形式来定义，而不能仅凭“学生模型更小”来判断。在生成式语言模型中，教师可能提供稠密 token 分布、采样序列、解释轨迹、成对偏好、批评反馈或交互轨迹。这个更宽的定义同时覆盖传统白盒压缩和通过商业 API 生成训练数据的现代流程。", terms: ["教师模型（teacher model）", "学生模型（student model）", "蒸馏目标（distillation target）", "指令微调（instruction tuning）", "模型抽取（model extraction）", "模型谱系（model lineage）"], questions: ["什么证据可以区分蒸馏关系与普通微调？", "审计目标是功能复制、教师身份，还是训练数据使用？", "哪些结论必须依赖训练记录，而不能仅依靠行为证据？"] },
    },
    taxonomy: {
      en: { overview: "A useful taxonomy must keep the knowledge signal, teacher topology, and audit access separate. For example, reasoning traces describe the transferred signal, multi-teacher describes the training topology, and output-only describes the auditor's observation model. Conflating these axes creates ambiguous method names and invalid comparisons.", terms: ["logit distillation", "representation distillation", "response distillation", "reasoning distillation", "multi-teacher KD", "black-/gray-/white-box access"], questions: ["Can every method be located on all three axes?", "Which axis determines the expected forensic trace?", "How should evidence strength be reported for proprietary models?"] },
      zh: { overview: "有效的分类体系必须把知识信号、教师拓扑和审计访问条件分开。例如，“推理轨迹”描述传递的信号，“多教师”描述训练拓扑，“仅输出”描述审计者的观测模型。把这些维度混为一谈，会导致方法命名含糊、实验比较不成立。", terms: ["logit 蒸馏（logit distillation）", "表示蒸馏（representation distillation）", "响应蒸馏（response distillation）", "推理蒸馏（reasoning distillation）", "多教师知识蒸馏（multi-teacher KD）", "黑盒/灰盒/白盒访问"], questions: ["每一种方法能否同时定位到三个分类轴？", "哪个分类轴决定了预期保留的取证痕迹？", "面向闭源商业模型时应如何报告证据强度？"] },
    },
    "white-box-distillation": {
      en: { overview: "White-box KD transfers supervision unavailable from ordinary text outputs. Standard objectives include forward or reverse KL divergence over teacher and student token distributions, representation matching, attention-relation matching, and corrective distillation after structural pruning. On-policy variants query the teacher on student-generated trajectories to reduce train–inference distribution mismatch.", terms: ["forward KL divergence", "reverse KL divergence", "temperature scaling", "on-policy distillation", "representation alignment", "exposure bias"], questions: ["Which divergence preserves teacher uncertainty without collapsing diversity?", "How should layers be aligned across width, depth, or architecture changes?", "Which internal traces remain diagnostic after quantization or pruning?"] },
      zh: { overview: "白盒知识蒸馏传递普通文本输出无法提供的监督。常见目标包括教师与学生 token 分布之间的前向或反向 KL 散度、表示匹配、注意力关系匹配，以及结构化剪枝后的纠正蒸馏。在策略蒸馏（on-policy distillation）会在学生自己生成的轨迹上请求教师反馈，以缓解训练分布与推理分布不一致。", terms: ["前向 KL 散度（forward KL）", "反向 KL 散度（reverse KL）", "温度缩放（temperature scaling）", "在策略蒸馏（on-policy distillation）", "表示对齐（representation alignment）", "暴露偏差（exposure bias）"], questions: ["哪种散度既能保留教师不确定性，又不会造成生成多样性坍塌？", "面对宽度、深度或架构不同的教师和学生，层级如何对齐？", "量化或剪枝后，哪些内部信号仍具有审计价值？"] },
    },
    "black-box-distillation": {
      en: { overview: "Black-box KD uses teacher-visible artifacts as supervision. Response distillation trains on sampled demonstrations; reasoning distillation adds explanation traces or intermediate actions; preference distillation uses scores or rankings; critique-and-rewrite pipelines transfer correction policies. These mechanisms can produce distinct student traces even when they share the same teacher API.", terms: ["sequence-level distillation", "instruction–response pairs", "explanation traces", "preference labels", "AI feedback", "tool trajectories"], questions: ["Does the student inherit answers, reasoning strategies, or only response style?", "Which teacher role produces the strongest post-training trace?", "How can an auditor control for shared public prompts and data?"] },
      zh: { overview: "黑盒蒸馏把教师可见的输出工件作为监督。响应蒸馏使用采样示范训练学生；推理蒸馏进一步加入解释轨迹或中间动作；偏好蒸馏使用评分或排序；批评—改写流程则传递纠错策略。即使调用同一个教师 API，这些机制也可能在学生模型中留下不同的行为痕迹。", terms: ["序列级蒸馏（sequence-level distillation）", "指令—响应对（instruction–response pairs）", "解释轨迹（explanation traces）", "偏好标签（preference labels）", "AI 反馈（AI feedback）", "工具轨迹（tool trajectories）"], questions: ["学生继承的是答案、推理策略，还是仅仅模仿了表达风格？", "哪一种教师角色会留下最强的训练后痕迹？", "审计时如何控制共享公开提示词和训练数据的影响？"] },
    },
    "composite-distillation": {
      en: { overview: "Modern pipelines are rarely a single terminal teacher-to-student update. Generalized KD uses student-generated sequences; progressive learning changes the curriculum or teacher strength; multi-teacher systems combine complementary experts; production data factories assign generation, critique, ranking, filtering, and safety roles to different models. The natural object is therefore a dependency graph rather than one edge.", terms: ["self-distillation", "generalized knowledge distillation (GKD)", "progressive learning", "multi-teacher KD", "role-specialized teacher", "multi-stage pipeline"], questions: ["How many teachers and roles are identifiable from the final student?", "Can mixture strength be estimated without equating behavior with exact sample proportions?", "How does rewriting or filtering break direct teacher attribution?"] },
      zh: { overview: "现代蒸馏流程很少只是一次终端的教师到学生更新。广义知识蒸馏（GKD）在学生自生成序列上训练；渐进式学习改变课程或教师强度；多教师系统组合互补专家；工业数据工厂则把生成、批评、排序、过滤和安全角色分配给不同模型。因此，更自然的表示对象是依赖图，而不是单条边。", terms: ["自蒸馏（self-distillation）", "广义知识蒸馏（GKD）", "渐进式学习（progressive learning）", "多教师知识蒸馏", "角色专用教师（role-specialized teacher）", "多阶段流程（multi-stage pipeline）"], questions: ["最终学生中能够识别多少个教师及其角色？", "能否估计相对影响，而不把行为权重误写为精确样本比例？", "改写和过滤会如何破坏直接教师归因？"] },
    },
    "output-only-auditing": {
      en: { overview: "Output-only auditing is a hypothesis-testing problem, not a text-matching problem. Model Provenance Testing compares observed model similarity with a null distribution from unrelated models, while active fingerprinting searches for prompts that amplify model-family differences. Strong probes target stable disagreement, unusual errors, preference boundaries, or reasoning choices rather than common correct answers.", terms: ["multiple hypothesis testing", "null distribution", "active probing", "behavioral fingerprint", "disagreement probe", "open-set recognition"], questions: ["What null models define ordinary capability similarity?", "Which prompts maximize candidate-teacher disagreement under a query budget?", "When should the auditor abstain rather than name the nearest teacher?"] },
      zh: { overview: "仅输出审计本质上是统计假设检验，而不是文本相似度匹配。Model Provenance Testing 将模型间观察到的相似性与无关模型形成的零假设分布比较；主动指纹方法则寻找能够放大模型家族差异的提示词。高价值探针应针对稳定分歧、罕见错误、偏好边界或推理选择，而不是普通正确答案。", terms: ["多重假设检验（multiple hypothesis testing）", "零假设分布（null distribution）", "主动探测（active probing）", "行为指纹（behavioral fingerprint）", "分歧探针（disagreement probe）", "开放集识别（open-set recognition）"], questions: ["哪些无关模型适合构造普通能力相似性的零假设？", "在固定查询预算下，哪些提示词最能放大候选教师分歧？", "何时应当拒绝判断，而不是强行选择最相近教师？"] },
    },
    "internal-signal-auditing": {
      en: { overview: "Internal-signal auditing exploits information that is more specific than final text. Reference-based detection measures the suspect's relative likelihood gain on teacher outputs compared with an earlier checkpoint. Other methods use hidden-state geometry, attention-product spectra, expert-routing signatures, gradients, or aligned weight matrices. Each signal requires its own invariance assumptions.", terms: ["reference checkpoint", "relative likelihood gain", "CKA", "spectral signature", "expert-routing signature", "fine-tuning trajectory"], questions: ["Which reference checkpoint removes base-model confounding without removing the teacher effect?", "Which similarity is invariant to layer permutations or architectural changes?", "How should multiple internal evidence channels be calibrated together?"] },
      zh: { overview: "内部信号审计利用比最终文本更具体的信息。基于参考检查点的检测，会比较待审计模型相对于早期检查点在教师输出上的似然增益。其他方法使用隐藏状态几何、注意力乘积谱、专家路由签名、梯度或对齐后的权重矩阵。每一种信号都依赖不同的不变性假设。", terms: ["参考检查点（reference checkpoint）", "相对似然增益（relative likelihood gain）", "中心核对齐（CKA）", "谱签名（spectral signature）", "专家路由签名", "微调轨迹（fine-tuning trajectory）"], questions: ["哪一个参考检查点能去除基础模型混杂，同时保留教师效应？", "哪些相似性度量对层置换或架构变化保持不变？", "多个内部证据通道应如何联合校准？"] },
    },
    "teacher-lineage-attribution": {
      en: { overview: "Distillation detection, teacher attribution, and parent-lineage identification are different tasks. A model may inherit weights from one family, receive synthetic responses from a second model, and be preference-tuned by a third. Reliable attribution therefore tests competing edge types—checkpoint inheritance, direct fine-tuning, merging, and distillation—rather than reporting the most similar candidate.", terms: ["distillation detection", "teacher attribution", "parent lineage", "model merging", "set-valued attribution", "competing hypotheses"], questions: ["Can the method distinguish an output teacher from a weight parent?", "How are multiple candidate tests corrected?", "Does the result identify one teacher, a plausible set, or only a general derivation relation?"] },
      zh: { overview: "蒸馏检测、教师归因和父模型谱系识别是不同任务。一个模型可能继承某个家族的权重，再使用第二个模型生成的合成响应训练，最后由第三个模型提供偏好监督。因此，可靠归因需要比较权重继承、直接微调、模型合并和蒸馏等竞争边类型，而不是只报告最相似候选。", terms: ["蒸馏检测（distillation detection）", "教师归因（teacher attribution）", "父模型谱系（parent lineage）", "模型合并（model merging）", "集合值归因（set-valued attribution）", "竞争假设（competing hypotheses）"], questions: ["方法能否区分输出教师与权重父模型？", "多个候选教师检验如何进行多重比较校正？", "结果识别的是唯一教师、候选集合，还是仅能说明一般派生关系？"] },
    },
    "multi-teacher-recovery": {
      en: { overview: "Multi-teacher recovery generalizes provenance from classification to structured inference. The output may be a teacher set, per-role attribution, an influence vector, and an unknown-source component. Coverage-guaranteed provenance sets and dependency-graph reconstruction provide useful precedents, but behavioral mixture weights should not be interpreted as exact training-data fractions without stronger assumptions.", terms: ["teacher-set recovery", "role attribution", "influence weight", "unknown teacher", "provenance set", "dependency graph"], questions: ["How is false discovery controlled when the candidate pool grows?", "Can generator, judge, critic, and filter roles be separated?", "What uncertainty representation is appropriate for missing teachers?"] },
      zh: { overview: "多教师恢复把来源识别从分类问题扩展为结构化推断。输出可以包括教师集合、逐角色归因、相对影响向量和未知来源分量。具有覆盖保证的来源集合与依赖图重建提供了重要先例，但在缺少更强假设时，行为混合权重不能解释为精确训练数据比例。", terms: ["教师集合恢复（teacher-set recovery）", "角色归因（role attribution）", "影响权重（influence weight）", "未知教师（unknown teacher）", "来源集合（provenance set）", "依赖图（dependency graph）"], questions: ["候选池增大时如何控制错误发现率？", "能否区分生成、评判、批评和过滤角色？", "存在缺失教师时，应如何表示归因不确定性？"] },
    },
    "unauthorized-distillation": {
      en: { overview: "Unauthorized distillation sits at the intersection of model extraction and synthetic-data training. Classical extraction work studies how transfer sets and adaptive queries recover functionality; LLM pipelines additionally target high-value reasoning, code, planning, and tool-use traces. Providers therefore combine content-level signals with cross-account and infrastructure telemetry.", terms: ["prediction API", "transfer set", "adaptive query selection", "functionality extraction", "response harvesting", "coordinated collection"], questions: ["What capability is actually recovered at a given query budget?", "How do top-k logprobs change the extraction threat model?", "Which traffic features distinguish research use from coordinated harvesting?"] },
      zh: { overview: "未授权蒸馏位于模型抽取与合成数据训练的交叉位置。经典模型抽取研究关注迁移集和自适应查询如何恢复功能；LLM 流程还会针对高价值推理、代码、规划和工具使用轨迹。因此，模型提供方通常把内容级信号与跨账号、基础设施遥测结合。", terms: ["预测 API（prediction API）", "迁移集（transfer set）", "自适应查询选择", "功能抽取（functionality extraction）", "响应采集（response harvesting）", "协同采集（coordinated collection）"], questions: ["给定查询预算实际能够恢复多少能力？", "top-k logprob 会如何改变抽取威胁模型？", "哪些流量特征能够区分正常研究与协同采集？"] },
    },
    "provenance-defenses": {
      en: { overview: "Provenance defenses operate at different stages. Output watermarks mark generated sequences; radioactive data aims to create a training-time trace; model fingerprints verify a released model through secret behavior or parameter invariants; provider telemetry tries to stop collection before a student is trained. Transferability and removability must be measured against the actual distillation pipeline.", terms: ["output watermark", "radioactive data", "model fingerprint", "ownership verification", "watermark inheritance", "API abuse telemetry"], questions: ["Does the signal survive paraphrasing and student training?", "Can the defense distinguish licensed from unauthorized use?", "What false-positive rate is acceptable for enforcement?"] },
      zh: { overview: "来源证明防御作用在不同阶段。输出水印标记生成序列；放射性数据（radioactive data）试图产生训练痕迹；模型指纹通过秘密行为或参数不变量验证已发布模型；平台遥测则在学生训练前阻止大规模采集。任何防御都必须针对真实蒸馏流程评估可迁移性和可移除性。", terms: ["输出水印（output watermark）", "放射性数据（radioactive data）", "模型指纹（model fingerprint）", "所有权验证", "水印继承（watermark inheritance）", "API 滥用遥测"], questions: ["信号能否经受改写和学生训练？", "防御能否区分授权使用与未授权使用？", "用于实际执法时可接受的误报率是多少？"] },
    },
    "evasion-removal": {
      en: { overview: "Evasion targets the observable teacher trace rather than necessarily removing transferred capability. Paraphrasing, filtering, additional fine-tuning, merging, pruning, and quantization can weaken different evidence channels. A multi-stage laundering pipeline may preserve task performance while breaking direct text, watermark, or parameter correspondence.", terms: ["paraphrase attack", "watermark removal", "continued fine-tuning", "model merging", "compression robustness", "signal laundering"], questions: ["Which transformation attacks which evidence channel?", "Does removal reduce attribution only, or also transferred utility?", "How should adaptive laundering be included in evaluation?"] },
      zh: { overview: "规避主要针对可观察的教师痕迹，并不一定消除已经转移的能力。改写、过滤、继续微调、模型合并、剪枝和量化会削弱不同证据通道。多阶段“洗白”流程可能保留任务性能，同时破坏直接文本、水印或参数对应关系。", terms: ["改写攻击（paraphrase attack）", "水印移除（watermark removal）", "继续微调", "模型合并", "压缩鲁棒性", "信号洗白（signal laundering）"], questions: ["不同变换分别攻击哪一种证据通道？", "移除操作只降低归因能力，还是也损害转移后的任务效用？", "评价协议如何纳入自适应洗白攻击？"] },
    },
    benchmarks: {
      en: { overview: "A credible benchmark must contain known teacher edges and hard negatives that reproduce real confounders. It should vary teacher identity, student base, data amount, role, stage, and post-training transformation. Open-world cases must omit the true teacher from the candidate pool; otherwise high closed-set accuracy can conceal forced misattribution.", terms: ["ground-truth lineage", "hard negative", "open-world candidate pool", "multi-stage manifest", "external validation", "missing-teacher split"], questions: ["Does the benchmark distinguish shared ancestry from distillation?", "Are multi-teacher and role-specialized pipelines represented?", "Can results transfer from controlled students to disclosed real models?"] },
      zh: { overview: "可信基准必须同时包含已知教师关系和能够复现真实混杂因素的困难负样本。它应系统改变教师身份、学生基础模型、数据量、教师角色、训练阶段和训练后变换。开放世界设置必须包含真实教师不在候选池中的情况，否则高闭集准确率可能掩盖强制误归因。", terms: ["真实谱系（ground-truth lineage）", "困难负样本（hard negative）", "开放世界候选池", "多阶段来源清单", "外部验证", "缺失教师划分"], questions: ["基准能否区分共享祖先与蒸馏？", "是否包含多教师和角色专用流程？", "受控学生上的结果能否迁移到公开披露的真实模型？"] },
    },
    "metrics-protocols": {
      en: { overview: "Binary AUROC is insufficient when the practical risk is false accusation. Evaluation should include low-FPR operating points, teacher-set precision and recall, false discovery rate, role macro-F1, calibration, selective risk, coverage, provenance-set size, and query cost. Confidence claims should be matched to the statistical unit and multiple-testing procedure.", terms: ["TPR at fixed FPR", "false discovery rate", "set coverage", "selective risk", "expected calibration error", "query efficiency"], questions: ["Which metric reflects the intended legal or operational decision?", "Are uncertainty intervals calibrated under model and prompt dependence?", "How does performance scale with candidate-set size and query budget?"] },
      zh: { overview: "当现实风险是错误指控时，二分类 AUROC 并不足够。评价应包括固定低误报率下的 TPR、教师集合精确率与召回率、错误发现率、角色 macro-F1、校准、选择性风险、覆盖率、来源集合大小和查询成本。置信度声明应与统计单位及多重检验程序保持一致。", terms: ["固定 FPR 下的 TPR", "错误发现率（FDR）", "集合覆盖率", "选择性风险（selective risk）", "期望校准误差（ECE）", "查询效率"], questions: ["哪一种指标与预期法律或运营决策真正对应？", "在模型和提示词相关性存在时，置信区间是否仍校准？", "候选集合和查询预算增大时，性能如何变化？"] },
    },
    "confounders-robustness": {
      en: { overview: "Most false attribution comes from plausible alternative explanations: shared base checkpoints, overlapping public data, a common third teacher, capability convergence, prompt wrappers, or later post-training. Robustness is therefore not only resistance to attacks; it is stability of the attribution conclusion under controlled alternative causal stories.", terms: ["shared ancestry", "common-cause teacher", "capability convergence", "prompt confounding", "post-training drift", "missing-source robustness"], questions: ["Which hard negative is closest to the claimed positive?", "Does the signal persist across prompts, decoders, and versions?", "Can the method detect that its candidate pool is incomplete?"] },
      zh: { overview: "大多数错误归因来自合理的替代解释：共享基础检查点、重叠公开数据、共同第三方教师、能力收敛、提示词包装或后续训练。因此，鲁棒性不仅是抵抗攻击，更是归因结论在不同因果解释控制下保持稳定。", terms: ["共享祖先（shared ancestry）", "共同原因教师", "能力收敛", "提示词混杂", "训练后漂移", "缺失来源鲁棒性"], questions: ["哪一种困难负样本最接近所声称的正样本？", "信号能否跨提示词、解码器和模型版本保持？", "方法能否识别候选池不完整？"] },
    },
    "model-family-compression": {
      en: { overview: "Model-family compression combines a known parent checkpoint with teacher supervision. Meta describes pruning Llama 3.1 8B and using token-level targets from 8B and 70B teachers for Llama 3.2 1B/3B. Minitron combines structured pruning with KD, while Llamba studies cross-architecture transfer into recurrent models. These are strong disclosed validation cases for white-box auditing.", terms: ["family compression", "token-level target", "structured pruning", "knowledge recovery", "cross-architecture distillation", "internal teacher"], questions: ["Which trace comes from weight inheritance and which from teacher supervision?", "How does architecture reduction change internal similarity?", "Can disclosed family models validate a detector trained on synthetic students?"] },
      zh: { overview: "模型家族压缩把已知父检查点与教师监督结合。Meta 披露 Llama 3.2 1B/3B 由 Llama 3.1 8B 剪枝，并使用 8B 与 70B 的 token 级目标训练；Minitron 结合结构化剪枝与知识蒸馏；Llamba 则研究向循环架构的跨架构转移。这些都是白盒审计的重要真实验证案例。", terms: ["模型家族压缩", "token 级目标", "结构化剪枝", "能力恢复", "跨架构蒸馏", "内部教师"], questions: ["哪些痕迹来自权重继承，哪些来自教师监督？", "架构缩减会如何改变内部相似性？", "公开披露的家族模型能否验证在合成学生上训练的检测器？"] },
    },
    "response-instruction-distillation": {
      en: { overview: "Instruction and response distillation builds supervised datasets from model generations. Self-Instruct bootstraps instructions, inputs, and outputs from a language model and filters invalid or similar examples. Alpaca uses text-davinci-003 demonstrations for LLaMA fine-tuning. Hosted platforms integrate output collection, evaluation, dataset construction, and student fine-tuning.", terms: ["synthetic instruction data", "bootstrapping", "demonstration generation", "sequence-level supervision", "imitation learning", "hosted distillation"], questions: ["How much task coverage is needed for capability rather than style imitation?", "Which filtering step changes the teacher trace?", "How should terms-of-use constraints shape experimental design?"] },
      zh: { overview: "指令与响应蒸馏使用模型生成内容构建监督数据。Self-Instruct 从语言模型自举生成指令、输入和输出，并过滤无效或相似样本；Alpaca 使用 text-davinci-003 示范微调 LLaMA；托管平台则把输出采集、评价、数据集构建和学生微调整合在一起。", terms: ["合成指令数据", "自举（bootstrapping）", "示范生成（demonstration generation）", "序列级监督", "模仿学习（imitation learning）", "托管蒸馏"], questions: ["需要多大任务覆盖才能转移能力，而不只是模仿风格？", "哪一步过滤会改变教师痕迹？", "服务条款应如何约束实验设计？"] },
    },
    "reasoning-process-distillation": {
      en: { overview: "Reasoning distillation transfers richer process supervision than final-answer imitation. Orca uses explanation traces, step-by-step thought processes, and complex instructions with progressive learning. Orca 2 emphasizes task-appropriate reasoning strategies. DeepSeek-R1 releases six dense students distilled from reasoning data generated by R1. These pipelines motivate action-level provenance rather than surface-text matching.", terms: ["explanation trace", "reasoning strategy", "process supervision", "intermediate action", "progressive learning", "reasoning provenance"], questions: ["Which intermediate actions are genuinely teacher-derived?", "Can strategy transfer be separated from shared problem-solving conventions?", "How stable are reasoning traces under rewriting and hidden-chain-of-thought interfaces?"] },
      zh: { overview: "推理蒸馏传递比最终答案模仿更丰富的过程监督。Orca 使用解释轨迹、逐步思考过程和复杂指令进行渐进式学习；Orca 2 强调与任务匹配的推理策略；DeepSeek-R1 发布了六个基于 R1 推理数据蒸馏的稠密学生。这些流程要求开展动作级来源分析，而不能只比较表面文本。", terms: ["解释轨迹（explanation trace）", "推理策略", "过程监督（process supervision）", "中间动作", "渐进式学习", "推理来源（reasoning provenance）"], questions: ["哪些中间动作确实来自教师？", "如何区分策略转移与共享解题惯例？", "在改写或隐藏思维链接口下，推理痕迹是否稳定？"] },
    },
    "production-pipelines": {
      en: { overview: "Production distillation is a supply-chain process. Internal family distillation may remain private; hosted workflows expose an authorized generate–evaluate–fine-tune loop; multi-model data factories use separate generators, critics, judges, filters, and safety models. Provider telemetry observes collection behavior that is unavailable in post-release black-box auditing, so online abuse detection and offline lineage evidence should be reported separately.", terms: ["data factory", "generator model", "critic model", "judge model", "reward signal", "provider telemetry"], questions: ["Which models contribute content versus selection pressure?", "What provenance metadata should a production pipeline retain?", "How can online telemetry and offline model evidence be fused without overstating causality?"] },
      zh: { overview: "工业蒸馏是模型供应链流程。内部家族蒸馏可能完全保密；托管工作流提供授权的“生成—评价—微调”闭环；多模型数据工厂则使用独立的生成器、批评器、评判器、过滤器和安全模型。平台遥测能够观察发布后黑盒审计无法获得的采集行为，因此在线滥用检测与离线谱系证据必须分开报告。", terms: ["数据工厂（data factory）", "生成模型（generator）", "批评模型（critic）", "评判模型（judge）", "奖励信号（reward signal）", "平台遥测（provider telemetry）"], questions: ["哪些模型贡献训练内容，哪些模型只施加筛选压力？", "生产流程应保留哪些来源元数据？", "如何融合在线遥测与离线模型证据，同时避免过度因果解释？"] },
    },
    repositories: {
      en: { overview: "Repositories are indexed by function rather than publication venue: distillation training, teacher attribution, model-lineage analysis, watermarking and fingerprints, benchmark construction, and operational provenance scanning. Reference numbers remain identical to the master bibliography, making code and paper discussions cross-linkable.", terms: ["official implementation", "reproduction toolkit", "benchmark suite", "provenance scanner", "synthetic-data pipeline", "artifact availability"], questions: ["Is the repository an official implementation or an independent reproduction?", "Does it include checkpoints and data manifests, or only evaluation code?", "Which license constraints affect benchmark reuse?"] },
      zh: { overview: "代码仓库按照功能而不是发表来源组织：蒸馏训练、教师归因、模型谱系分析、水印与指纹、基准构建和生产级来源扫描。所有仓库沿用参考文献总表中的固定编号，从而可以在方法讨论、代码和论文之间交叉定位。", terms: ["官方实现", "复现工具包", "基准套件", "来源扫描器", "合成数据流程", "研究工件可用性"], questions: ["仓库是官方实现还是独立复现？", "是否包含检查点和数据来源清单，还是只有评价代码？", "哪些许可证限制会影响基准复用？"] },
    },
    bibliography: {
      en: { overview: "The bibliography is the canonical numbering authority for the site. Numbers follow the curated dataset order and remain stable across category pages. Each card records source type, publication year, access assumptions, evidence grade, functional tags, primary source, and code repository when available.", terms: ["stable reference number", "primary source", "evidence grade", "access assumption", "code availability", "source type"], questions: ["Is the cited item a peer-reviewed paper, preprint, official disclosure, or report?", "Does the evidence support a general method or a specific real-world claim?", "Can the result be independently reproduced?"] },
      zh: { overview: "参考文献总表是全站编号的唯一权威来源。编号按照策展数据顺序固定，并在所有分类页面保持不变。每张卡片记录来源类型、年份、访问假设、证据等级、功能标签、原始来源和可用代码仓库。", terms: ["固定参考文献编号", "原始来源", "证据等级", "访问假设", "代码可用性", "来源类型"], questions: ["所引用内容是同行评审论文、预印本、官方披露还是行业报告？", "证据支持一般方法，还是支持特定现实模型结论？", "结果能否被独立复现？"] },
    },
    "research-agenda": {
      en: { overview: "DistillGraph is now treated as a follow-up research program rather than the first paper. It assumes reliable candidate-conditioned evidence tests and then asks how detected evidence, role-conditioned channels, unknown-source components, and optional internal signals can support uncertain multi-stage structures without treating detected candidates as proven edges.", terms: ["follow-up research program", "candidate evidence test", "role-conditioned signature", "unknown-source component", "evidence escalation", "uncertain dependency graph"], questions: ["Do the first-paper tests control error and power before graph expansion?", "Which roles are identifiable under controlled ground truth?", "How should missing intermediate models appear in an uncertain graph?"] },
      zh: { overview: "DistillGraph 现在被定位为后续研究计划，而不是第一篇论文。它以前提“候选条件证据检验已经可靠”为基础，再研究检测到的证据、角色条件通道、未知来源分量和可选内部信号如何支持带不确定性的多阶段结构，同时不能把检测到的候选直接当成已证明的边。", terms: ["后续研究计划", "候选证据检验", "角色条件签名", "未知来源分量", "证据升级", "不确定依赖图"], questions: ["在扩展到图重建前，第一篇检验是否控制误报与功效？", "哪些角色能够在受控真实关系下被识别？", "缺失中间模型应如何出现在不确定依赖图中？"] },
    },
  },
  zhPages: {
    "paper-problem": {
      eyebrow: "下一篇论文 · 问题定义",
      title: "候选条件黑盒蒸馏证据检测",
      lead: "检验 API 黑盒待审计模型是否呈现相对于匹配非蒸馏控制的候选特异行为证据。",
      callout: "推荐主任务：逐候选蒸馏证据检测，并输出“检测到 / 未检测到 / 结论不充分”。唯一教师归因是受控辅助结果；机制推断属于辅助证据；完整依赖图重建留作未来工作。",
      sections: [
        { title: "唯一核心科学问题", body: `<p>设 <em>S</em> 为只能通过 API 查询的待审计模型，<em>𝒯={T₁,…,Tₘ}</em> 为有限候选池，<em>𝒞ᵢ</em> 为候选 <em>Tᵢ</em> 对应的匹配非蒸馏控制集合，<em>B</em> 为查询预算。对每个候选检验：</p><div class="equation">H<sub>0,i</sub>：S 与 T<sub>i</sub> 的候选特异一致性不高于匹配控制；&nbsp; H<sub>1,i</sub>：该一致性显著超过零分布。 <span class="eq-label">(1)</span></div><div class="definition-box"><b>候选条件黑盒蒸馏证据检测</b>对每个候选返回校准证据分数，并输出“检测到证据”“在预注册效应量下未检测到证据”或“因零分布、稳定性或检验功效不足而结论不充分”。</div><p>多候选结果形成的是<strong>证据支持候选集合</strong>，不是恢复出的真实教师集合，更不是因果来源证明。教师追踪、来源检验和集合值推断提供候选比较、多重检验和错误控制基础 [[1,2,7]]。</p>` },
        { title: "结论层级", body: `<table class="matrix comparison-table"><thead><tr><th>层级</th><th>问题</th><th>建议角色</th></tr></thead><tbody><tr><td>L1 · 逐候选证据</td><td>S 是否相对 Tᵢ 的匹配零分布呈现超额候选特异证据？</td><td><strong>主要贡献</strong></td></tr><tr><td>L2 · 候选摘要</td><td>多重比较校正后哪些候选检测到证据？</td><td>主要集合值摘要，不作因果归因</td></tr><tr><td>L3 · 唯一归因 / 教师集合</td><td>能否恢复一个或多个真实教师？</td><td>仅在受控闭集实验中作为辅助评价</td></tr><tr><td>L4 · 机制 / 角色</td><td>哪些证据通道与响应、推理、偏好、安全或工具监督一致？</td><td>受控真实关系下的辅助画像</td></tr><tr><td>L5 · 依赖图</td><td>哪个多阶段有向图生成待审计模型？</td><td>未来工作</td></tr></tbody></table><p>即使只有一个候选检测到证据，也不能证明它就是因果教师；候选池外来源、共享数据、共同教师和未建模后训练仍可能存在 [[9,59]]。</p>` },
        { title: "按推断目标定位相关工作", body: `<p>论文应按照<strong>试图推断的潜在事实</strong>定位相邻审计方向，而不只是按黑盒或白盒访问分类。相似的统计量可能支撑完全不同的结论。</p><table class="matrix"><thead><tr><th>研究方向</th><th>推断对象</th><th>典型干预 / 访问</th><th>可支持结论</th><th>与本文边界</th></tr></thead><tbody><tr><td>蒸馏证据检测 [[1,2,3,6,7]]</td><td>候选模型对已发布学生的训练影响</td><td>发布后审计；仅输出到权重访问</td><td>在明确控制下存在候选条件超额证据</td><td><strong>本文主任务</strong></td></tr><tr><td>水印 [[24,25,26,27]]</td><td>提供方主动植入标记是否存留</td><td>在输出、数据或训练中主动干预</td><td>指定标记存在或经蒸馏迁移</td><td>干预更强，零假设不同</td></tr><tr><td>指纹 [[14,15,16]]</td><td>模型身份或所有权相关行为</td><td>自然或设计探针；黑盒/白盒</td><td>模型身份、相似性或所有权证据</td><td>身份相似不等于教师—学生关系</td></tr><tr><td>成员推断 [[64,65]]</td><td>某条数据记录是否进入训练</td><td>分数、参考模型、邻域或生成样本</td><td>样本级训练成员关系</td><td>数据到模型关系，不是模型间影响</td></tr><tr><td>教师归因 [[1,6]]</td><td>哪个候选教师提供训练监督</td><td>通常需要受控候选池和更强谱系假设</td><td>闭集或已验证条件下的教师身份</td><td>仅作为受控辅助任务</td></tr><tr><td>谱系 / 依赖恢复 [[7,9,59]]</td><td>一个或多个带类型的派生边</td><td>集合值检验、训练轨迹、内部证据或来源清单</td><td>带不确定性的来源集合或依赖结构</td><td>需要更强可识别性的未来工作</td></tr></tbody></table><p>因此，本文贡献应被表述为使用输出黑盒、候选条件统计检验和受控替代解释的审计方法；它不是水印、身份指纹、样本成员推断或不受约束的谱系重建。</p>` },
        { title: "实验设计要求", body: `<table class="matrix"><thead><tr><th>要求</th><th>具体实现</th><th>失败含义</th></tr></thead><tbody><tr><td>已知因果训练边</td><td>仅使用许可兼容的教师输出训练受控学生，并固定基础模型、提示、token 预算、优化器和剂量。</td><td>没有受控训练边时，行为相似性不能验证方法是否对因果蒸馏敏感。</td></tr><tr><td>公开披露蒸馏对</td><td>按来源类型分别评价：输出蒸馏、多教师 logit 蒸馏、剪枝加蒸馏。</td><td>把不同流程混成一个正类会掩盖监督机制和混杂因素。</td></tr><tr><td>有限审计事件</td><td>使用答案选项、下一步选择、A/B/平局判断、错误位置、拒答类别与工具选择。</td><td>自由文本语义匹配可能只测到风格相似。</td></tr><tr><td>仅候选模型参与发现</td><td>在查询待审计模型之前，仅依据候选与控制输出构造成对边界探针。</td><td>若发现阶段使用待审计响应，确认性推断将失效。</td></tr><tr><td>随机化反证</td><td>打乱教师标签、候选—探针对应和成对编辑，并与语义匹配随机探针比较。</td><td>破坏教师对应后仍存在的信号不是候选特异证据。</td></tr><tr><td>服务路径清单</td><td>冻结精确模型 slug、提供方、系统消息、推理模式、解码器、日期、区域和 SDK 版本。</td><td>可变别名或隐藏路由会导致证据不可复现。</td></tr><tr><td>普通输出泛化</td><td>训练时排除所有审计项及其近重复；正例学生只能使用普通教师监督。</td><td>依赖审计项记忆的检测不能说明一般蒸馏影响。</td></tr></tbody></table>` },
        { title: "可识别性契约：两个不同估计目标", body: `<div class="definition-box"><b>受控因果估计目标</b>在相同基础检查点、提示 ID、非教师数据、优化器、token 预算和后训练条件下，比较学生被随机分配到候选教师 T<sub>i</sub> 监督与无教师/替代教师监督时的差异。</div><div class="equation">τ<sub>i</sub> = E[Y(S)\mid do(A=T<sub>i</sub>)] − E[Y(S)\mid do(A=control)]. <span class="eq-label">(3)</span></div><div class="definition-box"><b>商业观察性估计目标</b>对版本固定的待审计端点，估计其相对于声明控制面板的候选条件超额行为证据。该量只是在审计协议下的关联，不能识别直接训练边，也不能排除共享数据、共同教师、间接蒸馏、共同祖先或能力收敛。</div><p>因此，受控基准可以评价审计统计量是否对随机化的直接训练边具有敏感性和特异性；商业研究只能判断某端点是否与候选异常兼容，以及这种兼容性主要出现在哪些机制通道。无论性能多高，都不能把第二个估计目标改写成第一个。</p>` },
        { title: "威胁模型与访问条件", body: `<p>测试阶段需要待审计模型的黑盒输出，以及候选模型的实时查询接口或使用同一提示协议预先采集的候选响应档案。重复采样、token log-probability 和工具调用轨迹只是附加访问层；核心结果必须在普通预测 API 下成立，候选池也允许不完整。</p><p>白盒或开源模型仅用于构造受控训练边、估计最小可检测效应、开展因果消融和压力测试。内部信号和蒸馏前检查点不能成为最终规则的必要输入。必须区分“未检测到证据”和“结论不充分”；功效不足时未拒绝零假设，不等于证据不存在。</p>` },
        { title: "结论语义、最小效应量与检验功效", body: `<p>三态结论需要两个互补检验。<strong>检测到</strong>表示候选条件效应在多重比较校正后显著高于匹配控制零分布。<strong>未检测到</strong>不能只依赖“未拒绝零假设”，而必须通过等效性检验，证明效应置信区间完整落入预注册的可忽略效应区间 <em>[−δ*,δ*]</em>，且达到目标功效 <em>1−β*</em>。其他情况均为<strong>结论不充分</strong>。</p><div class="equation">d<sub>i</sub>=未检测到 \Longleftrightarrow CI<sub>1−2α</sub>(Δ<sub>i</sub>) ⊂ [−δ*,δ*] \;\land\; Power(δ*)≥1−β*. <span class="eq-label">(2)</span></div><p>基准必须在正式测试集开启前，利用受控谱系确定 <em>δ*</em>、目标 α 与 β*，并按 API 方差、候选数量和提示词相关性规划推断查询数。置信区间过宽、零分布不稳定或预算不足时，只能返回结论不充分。</p>` },
        { title: "机制不确定性", body: `<p>学生可能从教师继承最终响应、推理轨迹、成对偏好、批评、安全判定或工具策略，因此单一文本相似度不可能对所有蒸馏目标都同样有效。审计器应维护机制条件证据通道，而不是预设唯一训练目标。</p><p>机制输出可以是“响应一致”“偏好边界一致”“推理策略一致”等证据画像。受控学生上可以评价其机制识别准确率；商业 API 上只能报告“与某机制一致的证据”，不能把它写成隐藏训练配方的证明。</p>` },
        { title: "决定论文难度的混杂因素", body: `<p>真正困难的负样本不是随机独立模型，而是共享基础检查点、tokenizer、公开指令数据、共同合成数据生成器、共同第三教师、RLHF 偏好数据、安全政策、架构或部署包装的模型。能力收敛也会在不存在直接训练边时产生共同正确答案。</p><p>系统提示词、解码温度、后端路由、静默版本更新、拒答包装和 API 随机性都应作为干扰变量。论文的可信度主要来自困难负样本、预注册效应量和三态结论，而不是简单模型对上的高相似度。</p>` },
        { title: "商业 API 上允许的结论", body: `<div class="claim-box"><b>允许的结论</b>“在预注册候选池、提示协议、匹配控制零分布、效应量和多重比较校正下，对候选 T 检测到 / 未检测到候选特异行为证据，或因功效与稳定性不足而结论不充分。”</div><div class="claim-box"><b>没有外部真实关系时不能声称</b>“T 是教师”“S 确定蒸馏或窃取了 T”“没有发生蒸馏”“混合比例为 x%”或“隐藏训练图已经恢复”。</div><p>官方披露可以提供观察性案例，但平台遥测和新闻报道必须与可复现模型证据分开。商业 API 实验验证的是审计协议在现实端点上的行为，而不是未知因果谱系 [[45,47,49]]。</p>` },
      ],
    },
    "paper-method": {
      eyebrow: "下一篇论文 · 方法设计", title: "候选特异边界转移检验", lead: "通过成对决策边界探针，检验黑盒待审计模型是否继承候选教师的局部决策几何。", callout: "核心直觉：蒸馏比表面措辞更可能传递教师的局部决策边界。主要检验使用响应、推理和偏好三个通道的联合校准 max-statistic；机制标签只在候选检测成立后通过多重比较校正的后续检验给出。",
      sections: [
        { title: "核心直觉 · 局部边界转移", body: `<p>共同正确答案是弱证据，因为独立模型会共享公开数据、基准知识和总体能力。蒸馏更可能保留教师的<strong>局部决策几何</strong>：当输入中的一个受控因素变化时，有限决策如何变化。因此，每个探针是成对输入 <em>b=(x⁰,x¹,a⁰,a¹)</em>：候选 <em>Tᵢ</em> 在两个端点上均稳定，并发生 <em>a⁰→a¹</em> 的转移，而匹配候选或控制不复现同一转移。</p><p>对机制通道 <em>r</em>，通过重复硬标签输出估计候选转移概率，并定义候选特异边界 margin：</p><div class="equation">Γ<sub>i,r</sub>(b)=P[T<sub>i</sub>(x⁰)=a⁰,T<sub>i</sub>(x¹)=a¹]−max<sub>C∈𝒞<sub>i</sub></sub>P[C(x⁰)=a⁰,C(x¹)=a¹]. <span class="eq-label">(2)</span></div><p>发现阶段只保留位于预注册中间 margin 区间的稳定探针：margin 必须足够大以体现候选特异性，但不能大到所有强模型都会跟随同一明显变化。罕见错误一致性仅作为辅助诊断，主要统计对象是成对转移继承。</p>` },
        { title: "具体探针接口与数据来源", body: `<table class="matrix"><thead><tr><th>通道</th><th>训练来源与剂量</th><th>审计接口</th><th>主要逐查询事件</th></tr></thead><tbody><tr><td>响应 / 指令</td><td>UltraChat 200k 经污染筛查后的提示；每个学生 5k 与 20k 条教师响应 [[76]]。</td><td>四选项 MCQ、受限短答案或 JSON 标签</td><td>候选与待审计模型选择相同有效答案，而匹配控制不选择。</td></tr><tr><td>推理 / 过程</td><td>与训练不重叠的 GSM8K/MATH 模板重新生成数值；5k 与 20k 条结构化教师轨迹 [[77,78]]。</td><td>选择下一有效子目标、排列四个步骤或定位首个错误步骤</td><td>在最终答案之前，对候选决策边界的继承一致性。</td></tr><tr><td>偏好 / 评判</td><td>UltraFeedback 提示，使用固定开源模型重新生成两份候选回答；10k 与 40k 条教师 A/B/平局判断及错误类别 [[79]]。</td><td>A/B/平局与五类批评标签</td><td>成对偏好一致性，以及答案顺序反转后的边界稳定性。</td></tr><tr><td>安全 / 过滤</td><td>使用政策匹配的良性/风险请求作为次要扩展</td><td>遵从 / 拒绝 / 条件遵从</td><td>阈值与拒答类别一致性。</td></tr><tr><td>工具策略</td><td>使用固定工具 schema 的次要扩展</td><td>一个工具名或不调用工具</td><td>工具选择与参数 schema 一致性。</td></tr></tbody></table><p>主要检验家族固定为响应、推理和偏好。安全与工具通道在通过各自识别控制前单独报告。发现池包含 3,000 个只由候选模型筛选的成对模板；确认性划分包含 1,200 个互不重叠的探针对（每个主要通道 400 个），每个成对端点独立生成两次，并使用未见改写与选项顺序种子。</p>` },
        { title: "通道估计量与分层 omnibus", body: `<p>受控实验中的推断单位是独立训练的学生 replica。对待审计 replica <em>k</em>、候选 <em>i</em>、通道 <em>r</em> 与留出成对探针 <em>b</em>，先在两个端点内平均重复生成，并记录成对转移事件：</p><div class="equation">Y<sub>k,i,r,b</sub>=I[S<sub>k</sub>(x⁰)=a⁰,S<sub>k</sub>(x¹)=a¹]. <span class="eq-label">(3)</span></div><p>通道效应为待审计模型转移率减去匹配控制转移率，并使用嵌套于 replica 的查询 block 估计方差：</p><div class="equation">θ<sub>i,r</sub>=E<sub>k,b</sub>[Y<sub>k,i,r,b</sub>]−E<sub>C∈𝒞<sub>i</sub>,b</sub>[Y<sub>C,i,r,b</sub>], &nbsp; Z<sub>i,r</sub>=θ̂<sub>i,r</sub>/SE(θ̂<sub>i,r</sub>). <span class="eq-label">(4)</span></div><p>响应、推理与偏好分别校准，主要候选统计量为 <em>Z</em><sub>i,max</sub>=max<sub>r</sub>Z<sub>i,r</sub>。关键是，校准对象是<strong>完整的发现—检验算法</strong>，而不是候选已经筛出的探针集合。G0 中只在预注册的“基础模型 × 机制 × 剂量”区组内随机化教师处理臂标签；每一次随机化都利用缓存的发现输出重新运行候选特异发现、重新选择探针，并在未触碰的推断划分上重新计算通道统计量。所得最大值同时包含探针选择、通道选择和候选多重性，可用于 maxT 或 step-down 的 FWER 控制。</p><p>G1–G4 没有随机教师分配，因此不能交换已选探针上的候选/控制标签。它们使用 G0 冻结阈值和匹配的<strong>影子候选校准库</strong>：每个影子候选都必须独立运行同一发现算法，再在留出对上计分。若外部案例没有足够匹配的影子候选，或明显超出 G0 校准范围，则只能返回结论不充分。</p>` },
        { title: "选择有效的候选特异发现", body: `<p>在查询任何模型之前，先把提示模板、任务生成器和语义家族划分为发现区与互不重叠的推断区。候选 margin 与稳定性只用于在发现数据上选择变换规则和任务层：</p><div class="equation">A<sub>i,r</sub>(D<sub>disc</sub>)=argmax<sub>A∈𝒜<sub>r</sub></sub>[Margin<sub>i</sub>(A)·Stability<sub>i</sub>(A)·(1−ControlTransfer(A))]. <span class="eq-label">(5)</span></div><p>选中的规则必须在推断区中使用全新的实体、数值、答案选项、回答对和改写实例化；发现过的样本及近重复不能复用。确认性不确定性估计必须在每个有效 G0 随机化或 bootstrap replicate 内重新运行 <em>A</em><sub>i,r</sub>。由于发现响应已经缓存，重跑算法不会增加模型调用。随机成对探针、只按不确定性、语义多样性和原始分歧基线均使用完全相同的发现与推断预算。</p>` },
        { title: "候选结论与机制后续检验", body: `<p>对每个候选，使用选择有效的算法级联合校准 max-statistic 检验三个主要通道，并在全部候选间控制 family-wise error。输出 omnibus 效应、校正 p 值、通道效应与置信区间、稳定性诊断和三态结论：</p><div class="equation">d<sub>i</sub>∈{检测到,未检测到,结论不充分}, &nbsp; Ê<sub>α</sub>(S)={T<sub>i</sub>:d<sub>i</sub>=检测到}. <span class="eq-label">(6)</span></div><p><strong>检测到：</strong>omnibus max-statistic 超过联合校正阈值。<strong>未检测到：</strong>每个主要通道的同时置信区间均落入各自预注册可忽略效应区间，并且每个通道达到目标功效。<strong>结论不充分：</strong>两者均不成立，包括强但不稳定的单一通道、接口不支持、端点漂移或任一通道功效不足。候选检测成立后，再使用分层多重比较校正的后续检验判断响应、推理或偏好通道；机制后续检验失败不会撤销候选级检测。证据支持候选集合仍是观察性摘要，不是因果来源集合 [[2,7]]。</p>` },
        { title: "功效感知的查询预算", body: `<p>探针发现查询与正式推断查询必须分别预算。正式评价前，应在开发划分上估计端点内方差、控制模型间方差、提示簇相关性、重复采样方差，以及在零分布程序内重新运行发现所引入的额外方差，据此计算在声明的 α、β* 与 <em>δ*</em> 下需要多少留出提示词和重复采样。</p><p>每个候选和访问层都应报告实际达到的功效，而不只是总查询预算曲线。自适应查询可以提高效率，但不能在观察测试效应后重新定义 <em>δ*</em>、复用已选推断样本，也不能把功效不足或校准分布漂移的结果写成负结论。</p>` },
        { title: "分层审计数值示例", body: `<p>设有 3 个候选教师、4 个独立训练的待审计学生 replica，以及 1,200 个留出成对探针：响应、推理和偏好各 400 个。每个探针对的两个端点分别进行重复生成，并使用保持 replica 与任务家族依赖结构的 block bootstrap 估计标准误。通道可忽略效应边界固定为 δ<sub>响应</sub>=0.08、δ<sub>推理</sub>=0.08、δ<sub>偏好</sub>=0.06，目标功效为 0.80。</p><table class="matrix"><thead><tr><th>候选</th><th>响应 θ̂ / Z</th><th>推理 θ̂ / Z</th><th>偏好 θ̂ / Z</th><th>联合 maxT p</th><th>后续检验 / 等效性</th><th>结论</th></tr></thead><tbody><tr><td>T₁</td><td>0.31 / 4.10</td><td>0.07 / 1.18</td><td>0.02 / 0.41</td><td>0.008</td><td>响应后续检验通过；其他通道不支持</td><td><strong>检测到 · 与响应监督一致</strong></td></tr><tr><td>T₂</td><td>0.01 / 0.22</td><td>−0.02 / −0.31</td><td>0.01 / 0.19</td><td>0.91</td><td>全部同时区间位于各自 δ<sub>r</sub> 内；功效≥0.86</td><td><strong>未检测到</strong></td></tr><tr><td>T₃</td><td>0.04 / 0.71</td><td>0.14 / 2.03</td><td>−0.01 / −0.12</td><td>0.17</td><td>推理区间同时跨过 0 与 δ<sub>推理</sub>；功效=0.54</td><td><strong>结论不充分</strong></td></tr></tbody></table><p>候选 T₁ 因一个通道存在强候选特异边界转移而通过 omnibus 检验；弱通道不会稀释该信号。分层后续检验支持响应监督，但不能证明完整隐藏训练配方。T₂ 只有在三个通道均等效且功效充分时才能获得负向结论。T₃ 虽然具有提示性的推理效应，但仍必须拒绝判断。</p><div class="notice">上述数值仅用于教学，不是实验结果。它用于说明联合通道选择、候选多重性、机制后续检验、等效性和拒绝判断如何共同作用。</div>` },
        { title: "机制证据画像", body: `<p>按证据家族聚合标准化残差，得到角色画像 <em>ρ(S,Tᵢ)</em>。例如，偏好边界高度一致但自由生成风格不相似，可能与评判监督一致；推理子目标顺序稳定一致且最终答案对改写鲁棒，可能与过程监督一致。</p><p>机制分类应保持辅助地位。主要检验是是否检测到候选条件证据。画像在受控学生上根据真实训练方式评价，在商业 API 上只作为解释性分解，不能证明隐藏训练配方。</p>` },
        { title: "候选 B · 参考检查点归一化开发诊断", body: `<p>当受控实验拥有开源学生与蒸馏前基础检查点时，可以测量疑似训练阶段带来的相对变化：</p><div class="equation">R<sub>i,r</sub> = sim<sub>r</sub>(S,T<sub>i</sub>) − sim<sub>r</sub>(S<sub>0</sub>,T<sub>i</sub>). <span class="eq-label">(7)</span></div><p>这一设计用于验证机制条件信号是否响应真实训练边，并诊断共享基础模型混杂 [[3,6]]。它是开发和消融工具，不是商业 API 判定所需条件。</p>` },
        { title: "候选 C · 成对因果探针变换", body: `<p>对每个信息量高的提示构造保持任务不变、但改变措辞、答案顺序、推理可见性、安全框架或工具可用性的受控变体。真正继承的决策边界应比表面格式模仿更稳定。</p><p>这一扩展具有潜在创新性，但成本很高。只有候选 A 已经实现可靠证据检测后才应加入，否则论文会同时承担探针生成、因果不变性、机制识别和统计检验，主贡献容易失焦。</p>` },
        { title: "创新性门槛", body: `<p>现有工作已经包含教师追踪、行为来源检验、主动指纹、集合值来源推断，以及有限答案目标反事实指纹 [[1,2,7,14,15,80]]。只有当<strong>成对候选特异边界转移</strong>、<strong>未知机制条件下的联合校准 max 检验</strong>和<strong>具有识别能力的受控蒸馏基准</strong>在至少一项指标上显著超过这些基线时，方法贡献才成立：低 FWER 敏感性、正交监督下的机制恢复，或固定功效下的查询效率。</p><div class="notice">若原始答案一致性、罕见错误重合、随机有限答案探针或通用来源分数在打乱教师、同基础、共享数据和真实教师缺失条件下与本方法相当，则方法创新不足。</div>` },
        { title: "推荐的方法边界", body: `<div class="survey-note"><b>论文核心</b>只使用候选模型的成对探针发现、留出边界转移效应、联合校准 max-statistic 检测、三态结论和分层通道后续检验。</div><div class="survey-note"><b>因果验证</b>G0 随机受控学生用于检验统计量是否响应真实教师，以及是否恢复正确的响应/推理/偏好机制。</div><div class="survey-note"><b>外部验证</b>DeepSeek-R1 蒸馏学生、Llama 3.2 与 Minitron 按披露流程分别报告；OpenRouter 商业端点始终属于观察性研究。</div><div class="survey-note"><b>未来扩展</b>多教师贡献权重、直接与间接影响区分、不受约束的依赖图，以及私有商业系统的因果声明。</div>` },

      ],
    },
    "paper-benchmark": {
      eyebrow: "下一篇论文 · 基准", title: "基准与实验协议", lead: "三层评价体系：受控因果真实关系、模拟黑盒访问和商业 API 观察性证据。", callout: "共享基础模型、共享数据、共同第三教师和 API 不稳定性必须成为主要实验条件，而不是讨论部分的补充说明。",
      sections: [
        { title: "第一层 · 受控开源谱系", body: `<p>构造具有已知训练边的学生，但拟议方法只能观察黑盒输出。系统改变候选教师身份与监督机制：响应 / 指令、推理 / 过程、偏好 / 评判、安全 / 过滤，以及可选的工具轨迹。先完成单教师，再加入角色分离的有限双教师学生。</p><p>训练日志与检查点只用于提供真实关系和消融，不是方法输入。这一层检验黑盒统计量响应的是因果训练边，而不是模型家族相似性。</p>` },
        { title: "基准模型分层与精确模型", body: `<table class="matrix"><thead><tr><th>证据层</th><th>精确模型</th><th>用途与允许解释</th></tr></thead><tbody><tr><td><strong>G0 · 受控因果基准</strong></td><td>教师 <code>deepseek/deepseek-v4-flash</code> 与 <code>qwen/qwen3.7-plus</code>；学生基础 <code>Qwen/Qwen3-8B-Base</code></td><td>生成教师数据前，两个教师都必须被 OpenRouter 标记为可蒸馏，并再次人工核验具体条款。只有这些学生提供检测与机制恢复的因果真实关系 [[66,83,84,85]]。</td></tr><tr><td><strong>G1 · 公开输出/推理蒸馏</strong></td><td><code>deepseek-ai/DeepSeek-R1-Distill-Qwen-{1.5B,7B,14B,32B}</code> 与 <code>...-Llama-{8B,70B}</code>；候选 <code>deepseek/deepseek-r1-0528</code></td><td>外部正例家族。当前可调用教师快照可能不是原始生成器，因此只能支持教师家族证据，不能支持精确快照归因 [[44,69]]。</td></tr><tr><td><strong>G2 · 多教师 logit 蒸馏</strong></td><td><code>meta-llama/Llama-3.2-{1B,3B}-Instruct</code>；候选集合 <code>Llama-3.1-{8B,70B}-Instruct</code></td><td>Meta 披露同时使用两个教师的 logits、剪枝和后续对齐。只评价集合值候选证据，不能强行选择唯一教师 [[81]]。</td></tr><tr><td><strong>G3 · 剪枝加蒸馏</strong></td><td><code>nvidia/Llama-3.1-Minitron-4B-{Width,Depth}-Base</code>；候选 <code>meta-llama/Llama-3.1-8B</code></td><td>混合流程外部案例。报告架构缩减后是否保留候选证据，不能把信号单独归因于蒸馏 [[82]]。</td></tr><tr><td><strong>G4 · 商业观察</strong></td><td>六个版本固定的 OpenRouter 端点</td><td>没有真实谱系，只报告有方向的候选证据与时间稳定性 [[85]]。</td></tr></tbody></table><p>所有 Hugging Face 检查点按 commit hash 固定。所有 API 请求记录 OpenRouter 精确 slug、实际 provider route、响应元数据、日期与请求 schema。公开披露案例不能与 G0 合并计算因果敏感性或机制准确率。</p>` },
        { title: "最低可行受控 campaign", body: `<p>首先只运行一个学生基础模型；只有方法控制误报并达到预注册功效后才扩展。每个“机制 × 剂量”区组都包含四个等量复制的处理臂。</p><table class="matrix"><thead><tr><th>实验臂</th><th>精确设计</th><th>模型数</th></tr></thead><tbody><tr><td>教师 T₁ 正例</td><td>3 个相互隔离的机制 × 2 个监督剂量 × 3 个独立种子</td><td><strong>18</strong></td></tr><tr><td>教师 T₂ 正例</td><td>与 T₁ 完全相同的六个区组和种子编号</td><td><strong>18</strong></td></tr><tr><td>公开监督控制</td><td>3 机制 × 2 剂量 × 3 种子；相同提示和 token 预算，目标来自非教师公开金标或确定性公共规则</td><td><strong>18</strong></td></tr><tr><td>打乱监督控制</td><td>3 机制 × 2 剂量 × 3 种子；在任务家族内打乱合并后的教师目标集合，保持长度和教师输出暴露，但破坏输入—目标对应</td><td><strong>18</strong></td></tr><tr><td>最低 campaign 总计</td><td>全部使用 <code>Qwen/Qwen3-8B-Base</code> 与 LoRA-r16</td><td><strong>72</strong></td></tr></tbody></table><p>未更新的基础检查点保留为描述性 zero-update 基线，但不作为训练 replica。低、高剂量为 <strong>3M 与 12M 教师监督 token</strong>。在每个区组内，四种处理臂标签随机分配到种子槽位，并在分析代码冻结前保持盲化。各臂使用相同提示 ID、优化器、更新数、打包 token 预算和评价划分。响应学生只优化最终短答案；推理学生优化结构化中间步骤，并在机制对比中排除最终答案贡献；偏好学生使用固定回答对与 A/B/平局判断，DPO β=0.1。另一教师正例臂提供替代教师比较。</p><p><strong>扩展门槛。</strong>达到 GO 后，在 <code>meta-llama/Llama-3.1-8B</code> 上复现高剂量四臂设计：18 个正例和 18 个匹配控制；随后把 <code>deepseek/deepseek-r1-0528</code> 作为未见推理教师运行三个种子。完整 DeepSeek、Llama 3.2 和 Minitron 家族只在平衡最低 campaign 通过后评价。</p>` },
        { title: "重复实验层级与推断单位", body: `<p>每个受控条件必须包含多个独立初始化、独立训练的学生 replica。提示词、语义模板、重复 API 生成和解码样本都属于嵌套测量，不能当作独立实验单位。主要分析应跨训练 replica 估计候选效应，并使用层级 bootstrap 或混合效应模型，把查询簇和重复采样嵌套在 replica 内。</p><p>正式评价前固定：训练 replica 数、每个机制的留出查询簇数、每个查询的重复生成数、解码参数、每个控制层的模型数和单元内平均规则。商业端点没有训练 replica；跨日期与 API 会话的重复只评价观察稳定性，不能替代受控 replica 级推断。</p>` },
        { title: "困难负样本矩阵", body: `<table class="matrix"><thead><tr><th>负样本类型</th><th>难点</th><th>必要控制</th></tr></thead><tbody><tr><td>共享基础检查点</td><td>不存在候选教师蒸馏也会继承相似行为</td><td>兄弟学生与基础归一化消融</td></tr><tr><td>共享公开数据</td><td>独立模型学习相同样本</td><td>数据匹配的独立训练</td></tr><tr><td>共同第三教师</td><td>两个模型继承相关行为</td><td>候选池包含 / 缺失第三教师</td></tr><tr><td>能力收敛</td><td>强模型在简单正确答案上高度一致</td><td>分歧和罕见错误探针</td></tr><tr><td>偏好 / 安全收敛</td><td>相似对齐政策模拟评判继承</td><td>边界探针与政策匹配控制</td></tr><tr><td>微调 / 合并 / 压缩</td><td>其他谱系边可能类似蒸馏</td><td>带类型的派生基线</td></tr></tbody></table>` },
        { title: "可识别的负控制设计", body: `<ol><li><strong>同基础无蒸馏控制。</strong>从同一基础模型出发，保持非教师数据、计算量、优化器、训练步数和后训练完全一致，唯一改变是否加入候选教师生成监督。</li><li><strong>替代教师控制。</strong>使用能力和领域匹配的其他商业教师运行完全相同的蒸馏流程，避免把“经过蒸馏流程”本身误当成特定候选信号。</li><li><strong>盲化候选面板。</strong>每个待审计学生都面对随机打乱的候选面板：受控真实教师、同家族候选、共同第三教师候选和能力匹配无关模型；评价者不知道哪个槽位是真实正例。</li><li><strong>留出污染筛查。</strong>最终证据必须在独立查询上区分真实受控教师与所有匹配控制，并筛查训练数据重叠、基准记忆、提示泄漏和发现集复用。</li></ol><p>每类控制对应不同的替代因果解释，结果必须按控制层分别报告；不能用大量容易的无关模型稀释真正决定可识别性的困难控制。</p>` },
        { title: "第二层 · 模拟 API 访问", body: `<p>冻结训练后的模型并通过 API 包装暴露。测试确定性与随机解码、隐藏系统提示词、响应截断、重复采样、可选 top-k log-probability，以及后端模型路由。方法必须在真实审计者可获得的信息条件下评价。</p><p>报告固定预算曲线，而不能只给无限查询下的结果；同时评价重复采样和 logprob 是否真正改变结论。</p>` },
        { title: "第三层 · 商业 API", body: `<p>优先选择公开披露蒸馏关系且相关端点可用的案例；其他模型只做候选池与控制集合预注册的观察性案例。真实 API 表格应报告证据画像、跨日期和提示词的稳定性、查询成本以及是否拒绝判断。</p><p>商业案例只验证外部适用性，不是主要真实关系基准；不能仅凭行为证据作出指控。</p>` },
        { title: "具体商业 API 面板", body: `<p>观察性面板统一通过 OpenRouter 调用，并采用“其余端点均为候选”的设计。初始冻结 slug 为 <code>openai/gpt-5.2</code>、<code>anthropic/claude-opus-4.1</code>、<code>google/gemini-3.5-flash</code>、<code>deepseek/deepseek-v4-pro</code>、<code>qwen/qwen3.7-plus</code> 和 <code>mistralai/mistral-medium-3-5</code> [[70,71,72,73,74,75,85]]。这些端点只用于观察性候选比较；除非某个精确模型被独立标记为可蒸馏且重新核验条款，否则其输出不能用于训练受控学生。</p><table class="matrix"><thead><tr><th>协议项</th><th>冻结设置</th></tr></thead><tbody><tr><td>审计日期</td><td>三次运行，相隔七天</td></tr><tr><td>探针预算</td><td>120 个只用于候选发现的成对探针 + 240 个留出推断成对探针</td></tr><tr><td>主要通道</td><td>80 个响应、80 个推理和 80 个偏好推断对</td></tr><tr><td>采样</td><td>每个成对端点在温度 0 与 0.2 各生成一次；温度 0.7 仅用于鲁棒性</td></tr><tr><td>服务清单</td><td>OpenRouter slug、实际 provider route、系统提示、推理模式、最大输出、日期、SDK 版本、response ID 与拒答/错误状态</td></tr><tr><td>共享调用预算</td><td>6 端点 × 360 对 × 2 个成对端点 × 2 个温度 × 3 日期 = <strong>25,920 次调用</strong></td></tr><tr><td>允许的结论</td><td>只报告候选条件观察证据；不能声称隐藏教师</td></tr></tbody></table><p>每个端点的输出按日期缓存一次，并在有序模型对分析中复用。禁止使用可变 <code>*-latest</code> 别名。提供方或模型在不同日期发生更新时，应记录端点漂移，并允许结论降级为结论不充分。</p>` },
        { title: "方向性与互相蒸馏的观察性分析", body: `<p>对每一对时间上可行的商业模型快照，分别运行 A→B 和 B→A 两个候选条件检验。只有当候选快照在待审计快照发布或更新时间之前已经存在时，该方向才进入检验；否则标记为“时间上不支持”，而不是强行计算。</p><table class="matrix"><thead><tr><th>A→B</th><th>B→A</th><th>观察性标签</th><th>仍无法解决的问题</th></tr></thead><tbody><tr><td>检测到</td><td>未检测到 / 结论不充分</td><td>指向 B 的不对称候选证据</td><td>直接蒸馏、间接影响或共同来源</td></tr><tr><td>检测到</td><td>检测到</td><td>对称或双向证据</td><td>互相蒸馏、共同教师、共享数据或能力收敛</td></tr><tr><td>未检测到</td><td>未检测到</td><td>在当前分辨率下没有证据</td><td>低于 δ* 的弱效应或未列出的版本</td></tr><tr><td>任一方向结论不充分</td><td>任意</td><td>方向未解决</td><td>功效、端点漂移、控制缺失或版本不明确</td></tr></tbody></table><p>最终报告的是有方向的<strong>候选证据图</strong>，不是模型谱系图。每条边记录精确版本对、时间可行性、三态结论、效应区间、机制画像和未排除的替代解释。若历史快照仍可调用，可做版本变化点分析，检验证据是否只在候选发布后出现；这会增强时间一致性，但仍不能证明直接训练使用。</p>` },
        { title: "评价指标、等效性与功效", body: `<p><strong>主要估计量：</strong>通道特异成对转移效应 <em>θ</em><sub>i,r</sub> 与联合校准的 omnibus <em>Z</em><sub>i,max</sub>。<strong>正向证据：</strong>在 maxT/step-down 校正下、固定 family-wise error 的候选级 TPR。<strong>负向证据：</strong>每个主要通道在预注册 <em>δ</em><sub>r</sub> 下的同时等效性、已知正例上的错误等效率，以及每个通道达到的功效。<strong>机制恢复：</strong>仅在 omnibus 检测成立的候选上报告条件式通道 precision/recall 与置信区间。<strong>不确定性：</strong>结论不充分率，并拆分为功效不足、探针不稳定、接口缺失、端点漂移和通道冲突。<strong>效率：</strong>候选发现调用与留出成对推断调用的数量。</p><p>置换 block 保持任务家族、成对编辑、replica 与控制层结构不变。同一个联合零分布同时校准通道选择和候选多重性。结果必须逐通道报告效应，按 G0-G4 来源层分别报告校准，并评价候选池缺失真实教师的情况。</p>` },
        { title: "核心实验矩阵", body: `<table class="matrix"><thead><tr><th>实验轴</th><th>必要取值</th></tr></thead><tbody><tr><td>训练关系</td><td>无教师、单教师、有限双教师</td></tr><tr><td>机制</td><td>响应、推理、偏好；安全和工具作为扩展</td></tr><tr><td>候选池</td><td>2、5、10+，以及真实教师缺失</td></tr><tr><td>控制模型</td><td>随机、能力匹配、共享基础、共享数据、共同第三教师</td></tr><tr><td>选择协议</td><td>随机、带留出检验的自适应选择、交叉拟合</td></tr><tr><td>访问</td><td>单输出、重复输出、可选 logprob</td></tr><tr><td>后处理</td><td>继续 SFT、改写、量化、模型合并</td></tr><tr><td>预算</td><td>分别固定发现预算和检验预算</td></tr></tbody></table>` },
        { title: "带成本的实验设计矩阵", body: `<p>成本首先用教师生成 token、训练运行数、本地生成数与 API 调用数表示；只有冻结精确 provider 价格后才换算美元。</p><table class="matrix"><thead><tr><th>阶段</th><th>工作量</th><th>训练 / 模型数</th><th>审计分配</th></tr></thead><tbody><tr><td>P0 最低受控实验</td><td>2 个可蒸馏教师 × 3 个机制 × 2 个 token 剂量 × 3 个种子，学生为 Qwen3-8B-Base</td><td><strong>36 个正例 + 36 个析因控制 = 72 次训练</strong>；最多 72M 许可兼容教师监督 token，低剂量目标是高剂量缓存的子集</td><td>3,000 个只由候选模型筛选的发现对；冻结 1,200 个留出对（每通道 400 个），每端点重复生成 2 次</td></tr><tr><td>P0 外部验证</td><td>R1-Distill-Qwen-7B、R1-Distill-Llama-8B 与对应架构基础检查点</td><td>不训练</td><td>使用同一 1,200 对留出清单；探针发现只能使用 R1 候选输出</td></tr><tr><td>P1 跨基础扩展</td><td>2 教师 × 3 机制 × 1 个高剂量 × 3 种子，学生为 Llama-3.1-8B</td><td><strong>新增 18 个正例 + 18 个析因控制</strong></td><td>复用冻结确认性家族，不重新选择测试项</td></tr><tr><td>P4 模拟服务压力</td><td>18 个代表性正例/控制 × 解码、包装、改写、量化与后训练设置</td><td>不新增核心训练</td><td>每个选中待审计模型使用 1,200 对；鲁棒性结论只覆盖测试路径</td></tr><tr><td>P5 OpenRouter 观察</td><td>6 个端点、360 对、2 个温度、3 个日期</td><td>不训练</td><td><strong>25,920 次共享调用</strong>；候选输出按日期缓存</td></tr></tbody></table><div class="equation">API\ 成本=∑<sub>p</sub>(N<sub>in,p</sub>·rate<sub>in,p</sub>+N<sub>out,p</sub>·rate<sub>out,p</sub>). <span class="eq-label">(8)</span></div><p>扩展前，P0 必须在全部控制上达到 family-wise error 要求、两个剂量均达到目标功效，并超过预注册机制恢复阈值。冻结 run manifest 记录 GPU 小时、教师输出 token、墙钟时间、检查点与随机种子。</p>` },
        { title: "派生、部署、反证与移除 campaign", body: `<table class="matrix"><thead><tr><th>实验</th><th>具体设置</th><th>科学问题</th></tr></thead><tbody><tr><td>Adapter 与全量更新</td><td>在一个 DeepSeek-V4-Flash/Qwen3 响应单元和一个 Qwen3.7-Plus/Qwen3 推理单元比较 LoRA rank 16 与全量 SFT</td><td>不同适配强度下，证据是否仍跟随教师训练边？</td></tr><tr><td>继续后训练</td><td>蒸馏后再训练 10k 条 UltraChat 样本</td><td>普通后续更新是否消除候选证据？</td></tr><tr><td>部署量化</td><td>在 12 个代表性学生上回放 bitsandbytes 8-bit 与 4-bit</td><td>服务压缩是否保留三态结论？</td></tr><tr><td>权重插值</td><td>与同基础兼容兄弟模型插值 α∈{0,0.25,0.5,0.75,1}</td><td>证据是否随受控学生贡献单调变化？</td></tr><tr><td>解码/包装 EOT</td><td>温度 0/0.2/0.7、三种种子、两个系统提示、答案顺序和改写变体</td><td>有限行为事件能否在选择阶段包含的服务变化下保持？</td></tr><tr><td>输出改写</td><td>使用 Qwen3-8B-Instruct 与 <code>mistral-small-2603</code> 中性改写</td><td>信号是否来自决策边界，而不是表面写作风格？</td></tr><tr><td>随机化反证</td><td>训练前打乱教师标签；审计时打乱候选—探针对应；用语义匹配随机提示替代主动探针</td><td>破坏教师特异方向后，所谓优势是否消失？</td></tr><tr><td>普通输出抽取</td><td>使用 20k 条普通教师输出；排除全部审计提示与 embedding 近重复</td><td>方法能否检测普通黑盒蒸馏的泛化，而不是探针记忆？</td></tr><tr><td>泄露探针移除</td><td>rank-16 LoRA；泄露 10/25/50/75% 发现探针；clean:leak 比例 1:1 与 10:1；10 次更新；三个种子</td><td>保持留出效用时，候选证据能被移除多少？</td></tr><tr><td>鲁棒探针选择</td><td>从 600 个合格提示中选择 120 个；比较 first-120、随机、来源 margin 与 hardened 四个同规模规则</td><td>有信息选择是否优于单纯增加样本数？</td></tr></tbody></table><p>若打乱教师标签或候选映射后仍保留同等优势、若普通输出学生无法与同基础无教师控制区分，或结果只依赖容易的无关模型，则否定确认性主张。鲁棒性只覆盖选择阶段明确包含的变换以及未见随机种子。</p>` },
        { title: "负结果规则", body: `<div class="notice">匹配控制消除候选特异证据时，应报告“未检测到超额证据”，不能把原始相似度转写为蒸馏结论。</div><div class="notice">零分布不稳定、检验功效低于预注册标准或留出效应不一致时，应返回“结论不充分”，而不是“未检测到”。</div><div class="notice">多个候选检测到证据时，应报告证据支持集合，不能强行选择最高分教师。</div><div class="notice">机制证据无法通过留出变换测试时，不能声称机制一致性。</div><div class="notice">商业 API 结果随日期或包装变化时，应报告版本敏感性，并把端点视为动态对象。</div>` },

      ],
    },
    "paper-roadmap": {
      eyebrow: "下一篇论文 · 主张与路线", title: "推荐论文主张与执行路线", lead: "以成对局部边界转移、选择有效的 maxT 推断、平衡受控蒸馏实验和商业 API 观察案例为核心的候选条件黑盒论文。", callout: "不能把行为证据包装成因果教师归因。第一篇论文先证明逐候选证据检验在困难负样本下具有校准误报率、足够功效和明确的结论不充分输出。",
      sections: [
        { title: "推荐论文主张", body: `<div class="definition-box"><b>核心主张</b>黑盒蒸馏会在局部决策边界中留下候选特异痕迹：相较匹配的非教师控制，学生更可能保留候选模型稳定的响应、推理或偏好转移。通过只使用候选模型的成对探针发现、选择有效的留出推断和联合校准通道最大值检验，可以在未知监督机制下输出“检测到 / 未检测到 / 结论不充分”。</div><p>更稳妥的标题方向是 <em>Candidate-Conditioned Black-box Distillation-Evidence Detection for Language Model APIs</em>。具有“谁教了模型”或“来源证明”含义的标题只适合具有真实谱系的受控实验。</p>` },
        { title: "贡献结构", body: `<ol><li><strong>问题定义：</strong>候选条件黑盒蒸馏证据检测，采用三态结论，并明确区分行为证据、受控归因、教师集合、机制画像和图重建。</li><li><strong>信号：</strong>使用候选特异的成对决策边界转移，减少共同正确答案和表面风格混杂。</li><li><strong>推断：</strong>在每次零分布随机化中重跑发现，使用未知机制条件下的联合校准 max-statistic，并通过分层后续检验识别响应/推理/偏好通道。</li><li><strong>评价：</strong>72 次平衡受控训练、按披露流程分层的公开蒸馏家族、困难负样本、服务路径压力测试和合规 OpenRouter 观察案例。</li></ol>` },
        { title: "建议论文结构", body: `<div class="steps"><div class="step"><strong>Introduction：</strong>商业模型只暴露输出、隐藏训练依赖；行为相似性无法证明因果来源。</div><div class="step"><strong>Problem and threat model：</strong>逐候选零假设、匹配控制、查询预算、三态结论和结论层级。</div><div class="step"><strong>Method：</strong>成对边界探针、候选特异发现、新实例化推断、通道效应、嵌套选择有效随机化和 maxT 校正。</div><div class="step"><strong>Controlled benchmark：</strong>平衡教师/公开/打乱四臂、正交机制、token 剂量、真实教师缺失和困难负样本。</div><div class="step"><strong>External validation：</strong>DeepSeek-R1 蒸馏学生、Llama 3.2 与 Minitron 按披露流程分别报告。</div><div class="step"><strong>Commercial API cases：</strong>输出有方向的 OpenRouter 候选证据图，并明确版本与因果边界。</div></div>` },
        { title: "分阶段执行计划", body: `<table class="matrix"><thead><tr><th>阶段</th><th>交付物</th><th>决策标准</th></tr></thead><tbody><tr><td>P0 · 探针可行性</td><td>在两个可蒸馏教师上构造成对转移，并比较原始一致性、罕见错误、随机对与主动边界探针</td><td>只有边界探针在留出数据上提供超出简单基线的教师特异效应才继续</td></tr><tr><td>P0.5 · 冻结推断</td><td>冻结任务家族划分、发现算法、嵌套随机化、maxT 检验族、δ<sub>r</sub>、功效、排除规则、1,200 个推断对和盲化 run manifest</td><td>完整算法冻结前不得查看确认性学生标签</td></tr><tr><td>P1 · 平衡因果 campaign</td><td>72 个 Qwen3-8B-Base 训练，覆盖 T₁/T₂/公开/打乱四臂、三种机制、两个 token 剂量和三个种子</td><td>要求 FWER 受控、两个剂量功效充分且机制后续检验正确</td></tr><tr><td>P2 · 公开披露蒸馏对</td><td>先做 R1 Qwen/Llama；P1 通过后再做 Llama 3.2 与 Minitron</td><td>按来源层分别报告，不合并计算因果准确率</td></tr><tr><td>P3 · 跨基础与后训练</td><td>平衡 Llama-3.1-8B 复现、全量 SFT、继续训练、量化、插值、改写和泄露探针移除</td><td>只保留在明确测试路径下成立的鲁棒性主张</td></tr><tr><td>P4 · OpenRouter 观察</td><td>六个版本固定端点、三个日期、有序模型对分析</td><td>只报告候选证据与拒绝判断，不报告隐藏真实关系</td></tr></tbody></table>` },
        { title: "继续 / 停止标准", body: `<div class="property-grid"><div class="property-card"><b>继续</b>逐候选检验达到预注册误报、功效和等效性目标，并在污染筛查的留出查询上把真实受控教师与盲化面板中的每一个匹配控制区分开；结论不充分得到校准，查询预算可接受。</div><div class="property-card"><b>有条件继续</b>候选条件证据检测成立，但唯一识别、教师集合或机制画像较弱。发表更窄的证据检测论文。</div><div class="property-card"><b>停止</b>性能主要由模型家族、基准准确率、表达风格或公开数据重叠驱动；留出效应消失；方法必须使用学生权重；或零分布无法稳定校准。</div><div class="property-card"><b>结论降级</b>商业案例只显示候选特异一致性但没有因果真实关系，只能报告观察性证据结论。</div></div>` },
        { title: "可直接用于投稿的汇报模板", body: `<h3>主要候选证据表</h3><table class="matrix"><thead><tr><th>候选</th><th>响应 θ̂ / CI</th><th>推理 θ̂ / CI</th><th>偏好 θ̂ / CI</th><th>Z<sub>max</sub></th><th>maxT p<sub>adj</sub></th><th>全通道等效性 / 最小功效</th><th>结论</th><th>支持的后续通道</th></tr></thead><tbody><tr><td>Tᵢ</td><td>效应 / [L,U]</td><td>效应 / [L,U]</td><td>效应 / [L,U]</td><td>统计量</td><td>p</td><td>是/否；min(1−β<sub>r</sub>)</td><td>检测到 / 未检测到 / 结论不充分</td><td>响应 / 推理 / 偏好 / 无</td></tr></tbody></table><h3>必须配套的表格</h3><ul><li><strong>G0 校准：</strong>处理臂、机制、剂量、种子、保留探针数、通道效应、omnibus p，以及是否恢复正确教师和机制。</li><li><strong>选择审计：</strong>发现 margin 分布、保留任务家族、随机化重跑、影子候选数量和校准范围诊断。</li><li><strong>外部来源层：</strong>G1–G4 分开报告，并明确候选快照匹配程度和披露流程。</li><li><strong>鲁棒性与失败：</strong>服务路径、后训练变换、功效不足/校准漂移原因和结论稳定性。</li></ul><h3>有边界的结果表述</h3><div class="claim-box"><b>检测到</b>“选择有效的 maxT 检验检测到候选 Tᵢ 的候选条件边界转移证据（p<sub>adj</sub>=…）。分层后续检验支持 … 通道；该结论不能证明完整或因果隐藏训练配方。”</div><div class="claim-box"><b>未检测到</b>“三个通道的同时置信区间均位于各自预注册可忽略效应区域内，最小实际功效为 …；在该分辨率下未检测到 Tᵢ 的证据。”</div><div class="claim-box"><b>结论不充分</b>“由于 …，联合校正正向检验与全通道等效性均未建立；当前证据不支持正向或负向谱系结论。”</div><div class="claim-box"><b>商业 API</b>“该有序端点对结果属于观察性、受版本限制且不具有随机分配；共享教师、共享数据、路由和间接影响仍无法排除。”</div><p>局限性部分必须明确讨论候选池不完整、选择性发现校准、影子候选不匹配、训练数据重叠、端点漂移、隐藏路由、机制设定错误、查询成本，以及行为证据本身无法证明因果关系。</p>` },
        { title: "网站如何服务这篇论文", body: `<p>“下一篇论文”四页应成为网站入口。直接检测与仅输出审计页面应链接到主要证据检验任务；教师归因与多教师恢复必须标记为受控辅助任务；混杂因素、基准与真实披露用于设计零假设和外部有效性评价。</p><p>白盒蒸馏与内部信号审计仍有价值，但应标记为“受控开发证据”。攻击、防御、代码仓库和行业报告只有在直接影响威胁模型、探针设计或评价协议时才进入主线。</p>` },

      ],
    },
    home: {
      eyebrow: "研究地图 · 机制优先分类",
      title: "大语言模型蒸馏与谱系研究观测站",
      lead: "以蒸馏机制为中心，系统整理大语言模型如何传递知识、这些依赖关系如何被审计，以及真实工业流程应如何评价。",
      callout: "网站的主分类轴是被传递的知识信号，而不是来源是否开源、闭源、学术或商业。访问权限、模型开放性、证据等级和代码可用性被视为正交属性。",
      stats: [["95","篇论文、工具、官方披露、模型卡和数据集"],["4","个从问题定义到执行计划的论文工作区"],["5","级区分官方披露、实验和报道的证据体系"]],
      sections: [
        { title: "下一篇论文工作区", body: `<div class="framework-grid"><a class="framework-card paper-card" href="paper-problem.html"><b>1. 黑盒审计问题</b><span>定义候选条件蒸馏证据检测，以及商业 API 上允许支持的结论。</span></a><a class="framework-card paper-card" href="paper-method.html"><b>2. 方法候选</b><span>留出机制探针、匹配控制残差和校准三态检验。</span></a><a class="framework-card paper-card" href="paper-benchmark.html"><b>3. 基准与实验</b><span>受控谱系、困难负样本、模拟 API 与商业观察性案例。</span></a><a class="framework-card paper-card" href="paper-roadmap.html"><b>4. 论文主张与路线</b><span>贡献边界、分阶段执行、负结果规则与继续/停止标准。</span></a></div>` },
        { title: "以机制为主线的研究地图", body: `<div class="framework-grid"><a class="framework-card" href="white-box-distillation.html"><b>1. 蒸馏方法</b><span>传递什么信号，教师具有何种访问条件？</span></a><a class="framework-card" href="output-only-auditing.html"><b>2. 蒸馏审计</b><span>输出、logit、表示、路由和权重中留下什么证据？</span></a><a class="framework-card" href="unauthorized-distillation.html"><b>3. 攻击与防御</b><span>能力如何被采集、保护、洗白或移除。</span></a><a class="framework-card" href="benchmarks.html"><b>4. 蒸馏评价</b><span>如何评价检测、归因、校准、鲁棒性和误指控。</span></a><a class="framework-card" href="model-family-compression.html"><b>5. 真实工业流程</b><span>模型家族、响应、推理和生产级蒸馏案例。</span></a><a class="framework-card" href="research-agenda.html"><b>6. 长期研究议程</b><span>在第一篇证据检测论文之后，再研究多教师、多角色和多阶段依赖重建。</span></a></div>` },
        { title: "三个正交分类轴", body: `<table class="matrix"><thead><tr><th>分类轴</th><th>核心问题</th><th>示例</th></tr></thead><tbody><tr><td>知识信号</td><td>传递了什么？</td><td>logit、表示、响应、推理、偏好、轨迹</td></tr><tr><td>教师拓扑</td><td>谁教谁，经过多少阶段？</td><td>自蒸馏、单教师、多教师、渐进式、多阶段、跨架构</td></tr><tr><td>审计访问</td><td>审计者能观察什么？</td><td>输出、top-k logprob、完整 logit、隐藏状态、路由、权重</td></tr></tbody></table>` },
        { title: "推荐阅读路径", body: `<ol class="reading-path"><li>围绕下一篇论文，先从<a href="paper-problem.html">黑盒审计问题</a>开始，并依次阅读四个论文工作区页面。</li><li>使用<a href="preliminary.html">背景与定义</a>统一术语。</li><li>把<a href="black-box-distillation.html">黑盒蒸馏</a>和<a href="output-only-auditing.html">仅输出审计</a>作为主要文献路径。</li><li>使用<a href="confounders-robustness.html">混杂因素与鲁棒性</a>和<a href="benchmarks.html">基准</a>判断方法可行性。</li><li>把<a href="research-agenda.html">长期研究议程</a>视为第一篇论文之后的扩展。</li></ol>` },
      ],
    },
    preliminary: {
      eyebrow: "基础概念 · 综述章节", title: "背景与定义", lead: "形式化介绍大语言模型蒸馏，梳理其与微调、模型抽取和模型谱系的关系，并建立发布后来源审计所需的证据要求。",
      sections: [
        {
          title: "什么是大语言模型蒸馏？",
          body: `<p><strong>知识蒸馏（knowledge distillation, KD）</strong>是一类训练范式：<em>学生模型（student model）</em>使用<em>教师模型（teacher model）</em>产生的监督信号进行优化。因此，蒸馏的判定依据是<strong>监督信号的来源与形式</strong>，而不是学生模型是否更小。学生可以参数更少、采用不同架构、与教师同架构，甚至只是同一模型的后续检查点。相反，单纯剪枝或量化并不自动构成蒸馏；只有在压缩恢复或后训练阶段继续使用教师监督时，才形成蒸馏关系。</p>
          <p>对参数为 θ 的自回归语言模型，给定输入 <em>x</em>，输出序列 <em>y</em> 的概率按 token 分解为</p>
          <div class="equation">p<sub>θ</sub>(y | x) = ∏<sub>t=1</sub><sup>|y|</sup> p<sub>θ</sub>(y<sub>t</sub> | x, y<sub>&lt;t</sub>). <span class="eq-label">(1)</span></div>
          <p>教师可以对这一计算过程暴露出的不同对象提供监督。经典知识蒸馏并不只使用硬标签，而是使用经温度缩放后的软概率分布。设教师 logit 为 <em>z</em><sub>T</sub>、温度为 τ，则教师软分布为</p>
          <div class="equation">q<sub>T</sub><sup>τ</sup>(v | x, y<sub>&lt;t</sub>) = exp(z<sub>T,v</sub>/τ) / ∑<sub>u</sub> exp(z<sub>T,u</sub>/τ). <span class="eq-label">(2)</span></div>
          <p>学生通常通过散度项匹配教师分布，并与普通语言建模损失联合训练。Hinton 等人系统提出了现代软目标（soft target）与温度缩放形式，强调非最大概率中包含硬标签无法表达的类别关系 [[60]]。简化目标可写为</p>
          <div class="equation">L<sub>KD</sub> = λτ² D(q<sub>T</sub><sup>τ</sup> || q<sub>S</sub><sup>τ</sup>) + (1 − λ)L<sub>LM</sub>. <span class="eq-label">(3)</span></div>
          <p>对于生成模型，“知识”并不限于 token 概率。Sequence-Level Knowledge Distillation 使用教师解码得到的目标序列开展序列级监督 [[61]]；DistilBERT 在预训练阶段联合语言建模、蒸馏和余弦距离损失 [[62]]；TinyBERT 则在通用预训练和任务学习两个阶段传递 embedding、隐藏状态、注意力矩阵和预测层知识 [[63]]。现代 LLM 流程还会把生成响应、解释轨迹、偏好排序、批评反馈、安全判断和工具轨迹作为监督 [[36,38,39,44]]。</p>
          <div class="definition-box"><b>本网站采用的工作定义</b>只要学生参数更新因果依赖于一个或多个教师模型产生的监督，就属于大语言模型蒸馏。监督可以是分布级、表示级、序列级、过程级、偏好级或轨迹级。本文使用“知识信号分类（knowledge-signal taxonomy）”等术语组织文献，但这些名称属于本综述的统一表述，并不意味着所有论文都采用同一命名。</div>`
        },
        {
          title: "为什么蒸馏在大语言模型生态中重要？",
          body: `<p>知识蒸馏最初的重要动机是经济部署：把集成模型或高容量教师的能力压缩到更易部署的学生中 [[60]]。这一目标在 LLM 时代更加突出，因为推理延迟、显存占用、服务吞吐和能源成本都会随模型规模显著增长。DistilBERT 和 TinyBERT 证明蒸馏可以进入语言模型预训练阶段，而不只是用于下游分类器 [[62,63]]。近期模型家族压缩进一步把教师监督与结构化剪枝或架构缩减结合，例如 Minitron 以及 Meta 公开披露的 Llama 3.2 1B/3B 训练流程 [[42,45]]。</p>
          <p>蒸馏同时演化为一种<strong>训练数据构建机制</strong>。Self-Instruct 从语言模型自举生成指令、输入和输出，并在微调前过滤无效或重复样本 [[36]]。Stanford Alpaca 使用 text-davinci-003 生成的 52K 指令示范微调 LLaMA 7B [[37]]。这些流程不需要教师权重或完整 logit；教师的核心价值是提供可扩展的合成监督通道。</p>
          <p>随后，被转移的对象从答案扩展到<strong>过程监督（process supervision）</strong>。Orca 使用复杂解释轨迹，并通过不同教师强度开展渐进式学习 [[38]]；Orca 2 更关注与任务匹配的推理策略，而不是模仿单一固定推理风格 [[39]]；DeepSeek-R1 则公开说明六个基于 Qwen 与 Llama 的稠密学生使用 R1 生成的推理数据训练 [[44]]。这些案例要求区分<em>响应蒸馏（response distillation）</em>与<em>推理/过程蒸馏（reasoning or process distillation）</em>：前者主要学习可见输出，后者试图传递中间求解行为。</p>
          <p>最后，蒸馏已经成为工业生产流程，而不仅是一个训练损失。Google 表示 Gemini 1.5 Flash 通过 Gemini 1.5 Pro 蒸馏训练 [[46]]；OpenAI 则提供授权的托管流程，把前沿模型输出、评价、数据集构建和低成本模型微调整合在一起 [[47]]。多模型数据工厂还可以把生成、批评、评分、过滤和安全角色分配给不同模型，distilabel 等工具将这种编排流程工程化 [[56]]。</p>
          <div class="claim-box"><b>为什么部署之后需要审计</b>当教师监督可以通过 API 获取时，同一种技术机制既可能服务于授权压缩、可复现研究和合同允许的训练，也可能被用于未授权能力采集。技术问题——“哪个教师以何种方式影响了学生”——必须与政策问题——“这种使用是否获得许可”——分开讨论。平台私有遥测可以支持协同采集活动的运营归因 [[49]]，但它与发布后仅分析模型本身的取证证据不是同一种证据通道。</div>`
        },
        {
          title: "蒸馏、微调、模型抽取与模型谱系",
          body: `<p>这些相邻概念经常被混用，因为它们可能同时出现在一个工程流程中。但它们描述的因果主张不同，因此需要不同证据。</p>
          <table class="matrix comparison-table"><thead><tr><th>概念</th><th>描述对象</th><th>支持该结论所需的最低证据</th></tr></thead><tbody>
            <tr><td>微调</td><td>在给定目标和数据集上的参数更新阶段。</td><td>训练配置、检查点变化或任务适配证据。</td></tr>
            <tr><td>知识蒸馏</td><td>使用教师生成监督更新学生。</td><td>证据能够说明监督由候选教师因果产生。</td></tr>
            <tr><td>模型抽取</td><td>通过查询恢复目标功能的攻击或能力获取目标。</td><td>受害模型查询过程，以及由其响应训练的替代模型。</td></tr>
            <tr><td>模型压缩</td><td>通过剪枝、量化、架构缩减或蒸馏降低服务与存储成本。</td><td>可测量的效率变化；蒸馏只是其中一种机制。</td></tr>
            <tr><td>模型谱系</td><td>检查点继承、继续训练、合并、压缩和教师影响构成的更广依赖图。</td><td>能够把目标边类型与合理替代解释区分开的证据。</td></tr>
          </tbody></table>
          <h3>微调描述优化操作，蒸馏描述监督来源</h3>
          <p>学生在教师生成答案上训练时，既发生了微调，也发生了蒸馏；模型在人工标注或公开语料上训练时，可能只是微调而不是蒸馏。自蒸馏（self-distillation）也可能发生：后续模型或检查点学习由自身或早期版本生成的监督。“fine-tuned from model X”通常描述权重祖先，而“distilled from model Y”描述监督依赖，两者不必来自同一个模型。</p>
          <h3>模型抽取是威胁目标，不是蒸馏的同义词</h3>
          <p>预测 API 模型抽取工作首先表明，攻击者可以查询目标并使用返回标签或分数训练替代模型 [[29]]；Knockoff Nets 进一步使用自适应构建的迁移集恢复黑盒功能 [[30]]；后续研究把抽取扩展到 NLP 和序列生成 API [[31,32]]。响应蒸馏只是抽取者可以采用的一种训练机制；完整模型抽取还涉及查询选择、任务覆盖、账号基础设施和目标功能定义。</p>
          <p>这种区分十分关键，因为可见模仿不等于广泛能力转移。The False Promise of Imitating Proprietary LLMs 表明，模仿数据可能复制表达风格，却无法把能力迁移到未被采样的任务分布 [[33]]。因此，审计不能把措辞或表面风格相似直接当成教师依赖证据。</p>
          <h3>模型谱系是带类型的图，而不是最近邻标签</h3>
          <p>一个发布模型可能继承某个基础家族的 tokenizer 与权重，再使用第二个模型生成的响应或推理数据训练，最后由第三个模型提供偏好监督。例如，DeepSeek-R1-Distill 公开说明学生基于 Qwen 或 Llama 权重，并使用 R1 生成的推理数据训练 [[44]]。此时，<em>权重父模型（weight parent）</em>与<em>输出教师（output teacher）</em>并不相同。可靠来源分析必须识别边类型——检查点继承、继续预训练、监督微调、模型合并或蒸馏——而不是只报告行为上最相似的候选 [[9,59]]。</p>`
        },
        {
          title: "从经典知识蒸馏到 LLM 数据工厂",
          body: `<p>语言模型蒸馏的发展，可以理解为监督接口不断扩展的过程。早期方法默认直接访问教师预测分布；序列建模引入教师解码目标；预训练语言模型让中间表示和预训练目标成为核心；现代 LLM 流程则可以从闭源 API 获得监督，让学生分布决定训练上下文，并把不同监督角色分配给不同模型。</p>
          <div class="method-timeline">
            <div class="timeline-item"><div class="timeline-year">2015</div><div><strong>软目标知识蒸馏。</strong><p>温度缩放后的类别分布传递硬标签之外的信息 [[60]]。</p></div></div>
            <div class="timeline-item"><div class="timeline-year">2016</div><div><strong>序列级知识蒸馏。</strong><p>教师解码序列成为结构化生成模型的监督 [[61]]。</p></div></div>
            <div class="timeline-item"><div class="timeline-year">2019–2020</div><div><strong>预训练语言模型压缩。</strong><p>DistilBERT 把 KD 引入预训练；TinyBERT 进一步传递 embedding、隐藏状态、注意力和预测层知识 [[62,63]]。</p></div></div>
            <div class="timeline-item"><div class="timeline-year">2022–2023</div><div><strong>合成指令与解释数据。</strong><p>Self-Instruct 与 Alpaca 扩展指令监督，Orca 转移复杂解释轨迹 [[36,37,38]]。</p></div></div>
            <div class="timeline-item"><div class="timeline-year">2023–2024</div><div><strong>生成式与在策略目标。</strong><p>MiniLLM 使用反向 KL 改进生成式 KD，Generalized Knowledge Distillation 在学生自生成序列上训练 [[40,41]]。</p></div></div>
            <div class="timeline-item"><div class="timeline-year">2024–2026</div><div><strong>家族压缩与工业生产流程。</strong><p>剪枝辅助、推理数据、托管蒸馏与多模型流程，使谱系对象从单条教师—学生边扩展为依赖图 [[42,44,45,47,56]]。</p></div></div>
          </div>
          <p>其中有两个方法学变化尤其重要。第一，训练分布可以转为<strong>在策略（on-policy）</strong>。传统监督式 KD 使用固定语料训练，训练上下文与学生推理时实际生成序列之间存在分布不匹配。MiniLLM 最小化反向 Kullback–Leibler 散度，并在学生采样序列上训练以缓解暴露偏差 [[40]]；Generalized Knowledge Distillation 则明确在学生自生成输出序列上请求教师反馈，并允许采用多种散度目标 [[41]]。</p>
          <p>第二，教师身份不再决定教师角色。同一个模型可以生成候选答案，另一个模型可以负责批评、排序、改写、过滤或提供奖励信号。这些操作可能转移决策边界，却不复制最终文本。因此，现代审计不仅要回答<em>哪个模型参与了训练</em>，还要回答<em>它以什么监督角色、在什么阶段参与</em>。</p>
          <div class="survey-note"><b>术语使用原则</b><em>Sequence-level knowledge distillation</em>、<em>reverse KL distillation</em>、<em>Generalized Knowledge Distillation</em>、<em>explanation traces</em>和<em>progressive learning</em>都与具体论文直接对应 [[61,40,41,38]]。相比之下，本网站把多教师、角色专用、渐进式和多阶段流程统一概括为<em>复合蒸馏（composite distillation）</em>。这是综述组织术语，应写成“本文使用该术语表示……”，而不能假定它已经是领域统一分类。</div>`
        },
        {
          title: "统一分类体系与威胁模型",
          body: `<p>有效分类必须分开回答不同问题。把某种方法称为“黑盒蒸馏”，只说明教师访问条件，并没有说明学生学习的是最终响应、推理轨迹、偏好排序还是工具轨迹。同样，“多教师”描述训练拓扑，却没有描述被传递的监督信号。因此，本网站沿四个维度组织蒸馏流程。</p>
          <table class="matrix"><thead><tr><th>维度</th><th>核心问题</th><th>代表取值</th></tr></thead><tbody>
            <tr><td>知识信号</td><td>传递了什么监督？</td><td>logit、隐藏表示、响应、解释轨迹、偏好、批评、工具轨迹</td></tr>
            <tr><td>教师拓扑</td><td>模型之间如何连接？</td><td>自蒸馏、单教师、多教师、渐进式、角色专用、多阶段</td></tr>
            <tr><td>审计访问</td><td>审计者可以观察什么？</td><td>输出、top-k logprob、完整 logit、隐藏状态、路由、梯度、权重、训练记录</td></tr>
            <tr><td>结论证据</td><td>现实谱系结论由什么支持？</td><td>官方披露、公开工件、受控实验、私有遥测或新闻报道</td></tr>
          </tbody></table>
          <p>形式化地，把模型供应链表示为有向属性图 <em>G</em> = (<em>V</em>, <em>E</em>)。每个节点对应模型检查点或在线服务；边 <em>e</em><sub>i→j</sub> 表示模型 <em>M</em><sub>i</sub> 对模型 <em>M</em><sub>j</sub> 的影响，并记录边类型 <em>z</em>（如权重继承、响应蒸馏、推理蒸馏、偏好监督或模型合并）、教师角色 <em>r</em> 和访问条件 <em>a</em>。</p>
          <div class="equation">e<sub>i→j</sub> = (M<sub>i</sub>, M<sub>j</sub>, z, r, a, w), &nbsp; G = (V, E). <span class="eq-label">(4)</span></div>
          <p>可选量 <em>w</em> 表示估计影响强度，但不能自动解释为教师贡献的精确训练样本比例。行为影响、优化权重、数据过滤和数据量通常无法仅从最终模型中完全识别。</p>
          <h3>威胁模型</h3>
          <p>待审计模型可以是开放权重模型，也可以只提供 API；候选教师同样可以是本地模型、公开 API 或未披露来源。审计者可能只能获取最终文本，也可能逐步获得 token 概率、学生早期检查点、隐藏状态、专家路由、参数或训练清单。真实教师可能不在候选池中，且多个候选教师可能通过不同角色共同参与训练。</p>
          <p>这些条件意味着问题应被定义为<strong>开放世界、带类型的归因任务</strong>。输出不一定是单个标签，也可以是具有覆盖保证的来源集合 [[7]]、多阶段依赖图 [[9]]，或者在证据无法区分教师影响与共享祖先、公开数据、共同第三方教师和一般能力收敛时拒绝判断。Model Provenance Constitution 提供了有价值的关系和报告术语，但规范性定义必须与实证证明分开 [[59]]。</p>`
        },
        {
          title: "可靠蒸馏审计应满足什么要求？",
          body: `<p>蒸馏审计要判断：待审计模型的观测结果，是否比合理替代解释更支持候选教师关系。对候选教师 <em>T</em> 和待审计学生 <em>S</em>，基本假设可以写为</p>
          <div class="equation">H<sub>0</sub>: T 未向 S 提供蒸馏监督 &nbsp;&nbsp; versus &nbsp;&nbsp; H<sub>1</sub>: T 向 S 提供了蒸馏监督。 <span class="eq-label">(5)</span></div>
          <p>真正困难的是构造 <em>H</em><sub>0</sub>。完全无关模型通常过于简单。可信零假设应包括同基础家族、重叠公开数据、相近能力、共享 tokenizer、共同第三方教师和相似后训练流程的模型。Model Provenance Testing 把仅输出归因定义为相对于无关模型相似性基线的多重假设检验 [[2]]；后续来源集合工作则用统计控制的候选集合替代强制唯一赢家 [[7]]。</p>
          <div class="property-grid">
            <div class="property-card"><b>构念有效性（construct validity）</b>分数应测量教师诱导依赖，而不是一般答案质量、模型规模、表达风格、tokenizer 重叠或共享祖先。</div>
            <div class="property-card"><b>可区分性与特异性</b>方法应把真实教师与困难负样本区分，并区分蒸馏、检查点继承、模型合并和普通微调。</div>
            <div class="property-card"><b>鲁棒性</b>在解码变化、提示词包装、继续微调、剪枝、量化、合并、改写或多阶段洗白后，结论仍应稳定。</div>
            <div class="property-card"><b>校准与拒绝判断</b>置信度应与实际错误匹配，考虑多候选比较，并支持“未知教师”或“证据不足”。</div>
            <div class="property-card"><b>效率</b>黑盒方法应报告固定置信度或误报率下的查询成本；白盒方法应报告所需检查点、显存和计算量。</div>
            <div class="property-card"><b>可复现性与结论纪律</b>训练边、困难负样本、提示词、访问假设和证据来源必须文档化。平台遥测和新闻报道不能写成独立复现的模型谱系证明。</div>
          </div>
          <p>不同证据通道具有不同优势与失效模式。仅输出指纹和主动探针可用于 API 模型 [[14,15]]，但容易受到共享能力和提示词包装混杂；学生权重与教师 API 的组合可以支持无数据输入合成和更强统计评分 [[3]]；参考检查点有助于隔离特定训练阶段新获得的行为 [[6]]；表示、专家路由、梯度和权重轨迹则提供更具体的白盒痕迹 [[4,8,10,11,12]]。平台私有遥测可以揭示外部审计者看不到的协同采集基础设施，但它支持的是运营活动归因，而不是自包含的模型取证结论 [[49]]。</p>
          <div class="claim-box"><b>结论层级</b><strong>检测（detection）</strong>判断是否发生某种蒸馏；<strong>归因（attribution）</strong>识别候选教师；<strong>角色归因</strong>进一步判断教师负责生成、评判、批评、过滤还是奖励；<strong>混合恢复</strong>估计教师集合或相对影响；<strong>谱系重建</strong>恢复带类型的多阶段图。每升一级都需要更强假设，论文不能只用低层实验支持高层结论。</div>
          <p>本网站后续页面将沿这一区分展开：蒸馏方法页面解释监督如何产生；审计页面研究哪些痕迹能够保留；攻击与防御页面讨论数据采集和信号操纵；评价页面定义困难负样本、校准和鲁棒性；真实案例页面则严格区分官方披露、实验推断与行业指控。</p>`
        }
      ],
    },
    taxonomy: {
      eyebrow: "基础概念", title: "分类体系与威胁模型", lead: "将知识信号、教师拓扑和审计访问分开的三轴分类，并为真实模型结论设置证据等级。",
      sections: [
        { title: "知识信号分类", body: `<table class="matrix"><thead><tr><th>信号</th><th>典型监督</th><th>可能的审计痕迹</th></tr></thead><tbody><tr><td>分布 / logit</td><td>教师 token 概率</td><td>似然与校准对齐</td></tr><tr><td>表示 / 特征</td><td>隐藏状态、注意力、关系</td><td>子空间和结构相似性</td></tr><tr><td>响应 / 指令</td><td>最终生成样本</td><td>决策、错误和格式继承</td></tr><tr><td>推理 / 过程</td><td>理由、子目标、解题策略</td><td>路径和中间动作相似性</td></tr><tr><td>偏好 / 反馈</td><td>评分、排序、批评、改写</td><td>评判边界和纠错习惯</td></tr><tr><td>Agent / 轨迹</td><td>工具调用和交互轨迹</td><td>工具策略和动作序列</td></tr></tbody></table>` },
        { title: "教师—学生拓扑", body: "拓扑描述自蒸馏、单教师、多教师混合、角色专用教师、渐进式或在线蒸馏、多阶段流程和跨架构转移。" },
        { title: "黑盒、灰盒与白盒访问", body: "黑盒只暴露输出；灰盒可能增加 top-k 概率或有限遥测；白盒可以暴露完整 logit、表示、路由、梯度、权重或检查点轨迹。访问条件与模型是否开放权重相互独立。" },
        { title: "开放权重与闭源模型", body: "开放权重只表示参数可获得，并不意味着训练数据、代码和许可证完全开放。闭源模型也可能参与官方披露的内部蒸馏或授权托管蒸馏。" },
        { title: "授权与未授权蒸馏", body: "同一种技术机制可能是内部授权、许可证允许、合同限制或被指控为滥用。技术证据和政策结论应分开报告。" },
        { title: "证据等级", body: `<table class="matrix"><thead><tr><th>等级</th><th>证据</th><th>允许的结论</th></tr></thead><tbody><tr><td>A</td><td>官方披露、模型卡、许可证或产品文档</td><td>确认公开描述的依赖关系</td></tr><tr><td>B</td><td>可追溯公开工件重建</td><td>具有来源链的文档化依赖</td></tr><tr><td>C</td><td>受控实验或统计证据</td><td>在明确假设下支持结论</td></tr><tr><td>D</td><td>平台基于私有遥测的归因</td><td>平台方的活动归因声明</td></tr><tr><td>E</td><td>新闻报道或指控</td><td>背景信息，不构成谱系证明</td></tr></tbody></table>` },
      ],
    },
    "white-box-distillation": { eyebrow: "蒸馏方法", title: "白盒蒸馏", lead: "基于分布、表示、注意力、路由或参数辅助压缩的教师内部监督。", sections: [
      { title: "分布 / logit 蒸馏", body: "学生匹配教师的 token 级概率分布，而不是只学习最大概率 token。温度、散度方向以及在策略或离策略采样决定了教师分布的哪些部分被转移。" },
      { title: "表示 / 特征蒸馏", body: "对齐教师与学生的隐藏状态或投影特征。跨宽度、跨深度和跨架构设置需要层映射或可学习投影器。" },
      { title: "注意力与关系蒸馏", body: "目标不一定匹配原始隐藏状态，也可以保持成对关系、注意力模式、token 几何或中间计算结构。" },
      { title: "路由与专家蒸馏", body: "混合专家模型暴露路由分布和专家协作模式，这些结构既可以被转移，也可以作为后续审计信号。" },
      { title: "参数辅助压缩", body: "当剪枝、架构缩减或量化后继续使用教师 logit、表示或纠正监督时，压缩流程构成知识蒸馏。" },
    ]},
    "black-box-distillation": { eyebrow: "蒸馏方法", title: "黑盒蒸馏", lead: "通过生成输出、推理轨迹、评判、批评、过滤或工具轨迹获得教师监督。", sections: [
      { title: "响应 / 指令蒸馏", body: "教师生成指令—响应对或任务示范。学生只使用可见序列训练，不需要访问教师概率分布。" },
      { title: "推理 / 理由蒸馏", body: "教师提供解释、中间步骤、子目标或解题策略。训练目标是模仿过程，而不仅是最终答案。" },
      { title: "偏好与评判蒸馏", body: `<p>在偏好蒸馏或评判器蒸馏中，教师不必直接生成最终答案。给定提示词 <em>x</em> 与多个候选输出 <em>y</em><sub>A</sub>、<em>y</em><sub>B</sub>、……，教师可以返回标量分数 <em>r</em><sub>T</sub>(<em>x</em>, <em>y</em>)、候选排序 π<sub>T</sub>、成对标签 <em>y</em><sub>A</sub> ≻<sub>T</sub> <em>y</em><sub>B</sub>，或解释某个候选为何违反评价规则的批评文本。这些判断可以用于监督奖励模型、偏好分类器，或直接优化学生策略。{{cite:47,56}}</p><div class="worked-example"><div class="worked-example-title">具体例子</div><div class="worked-example-grid"><div><b>提示词</b><span>解释为什么模型非常自信的答案仍可能不可靠。</span></div><div><b>候选 A</b><span>解释校准误差，并区分“模型置信度”与“答案正确性”。</span></div><div><b>候选 B</b><span>表达流畅，但错误声称高置信度通常能够证明答案正确。</span></div><div><b>教师判断</b><span>Score(A)=0.82，Score(B)=0.31；A ≻ B；批评：“B 夸大了置信度的证据价值。”</span></div><div><b>学生目标</b><span>提高选择 A 类回答的概率，并惩罚没有证据支持的确定性表达。</span></div></div></div><p>因此，学生继承的信号未必表现为容易识别的写作风格，而可能表现为成对胜者的一致性、评分间隔、批评类别、拒答阈值或安全规则边界。审计时应构造受控候选对，比较模型的选择、分数与规则触发情况，而不能只计算表面文本相似度。</p>` },
      { title: "批评与改写蒸馏", body: "教师识别缺陷、提出修正或重写学生输出，从而转移错误检测和修订策略。" },
      { title: "安全与过滤蒸馏", body: "模型可以充当分类器或数据策展器，决定哪些样本进入训练集。这会形成间接行为影响，但不一定复制可见表达风格。" },
      { title: "工具使用与 Agent 轨迹蒸馏", body: "教师生成工具选择、调用参数、中间观察和动作序列。审计必须比较策略和轨迹，而不能只看最终文本。" },
    ]},
    "composite-distillation": { eyebrow: "蒸馏方法", title: "复合蒸馏", lead: "组合多个教师、角色、阶段、架构或在策略交互的训练拓扑。", sections: [
      { title: "自蒸馏", body: "模型或早期检查点指导后续版本，常见监督包括生成标签、置信度目标或迭代式改进。" },
      { title: "在线与在策略蒸馏", body: "学生生成上下文，再请求教师在这些轨迹上反馈，使监督集中于学生当前错误和实际访问分布。" },
      { title: "渐进式蒸馏", body: "知识通过教师强度、任务难度或中间学生规模构成的课程逐步转移，而不是只在终端阶段完成。" },
      { title: "多教师蒸馏", body: "多个教师贡献重叠或互补信号，组合方式可以按领域、置信度或学习到的路由器决定。" },
      { title: "角色专用教师", body: "不同模型分别负责生成、批评、排序、过滤、安全或工具轨迹。教师身份与教师角色成为两个独立审计目标。" },
      { title: "多阶段与跨架构流程", body: "真实系统常串联生成、改写、排序和训练，并在 Transformer、循环或稀疏架构之间转移。单边来源模型不足以描述这种流程。" },
    ]},
    "output-only-auditing": { eyebrow: "蒸馏审计", title: "仅输出审计", lead: "待审计模型和候选教师都只能通过生成输出访问时的教师影响审计。", sections: [
      { title: "行为相似性检验", body: "在匹配提示词上比较决策，同时控制一般能力和答案正确性。原始文本相似度通常不足以支持来源结论。" },
      { title: "基于分歧的探针", body: "选择候选教师能够产生稳定不同决策的输入。这些探针比随机基准更有归因能力。" },
      { title: "罕见错误与决策边界", body: "共享的异常错误、边界附近选择和校准不确定性，通常比共同正确答案更具有诊断性。" },
      { title: "推理路径相似性", body: "比较子目标顺序、分支选择、纠错行为和中间动作，而不是表面措辞。" },
      { title: "偏好与评判一致性", body: "如果教师提供排序或批评，则成对偏好和评价规则边界可能比生成风格保留更强痕迹。" },
      { title: "开放集与拒绝判断", body: "真实教师可能不在候选池中。可信审计必须支持未知教师和拒绝判断。" },
    ]},
    "internal-signal-auditing": { eyebrow: "蒸馏审计", title: "内部信号审计", lead: "使用 token 概率、检查点残差、隐藏状态、注意力、路由、梯度和参数开展审计。", sections: [
      { title: "log-probability 证据", body: "评价待审计模型对候选教师输出赋予的概率，最好相对于匹配控制或早期检查点进行归一化。" },
      { title: "参考检查点残差", body: "减去蒸馏前已存在的行为，残差用于隔离候选教师暴露阶段产生的变化。" },
      { title: "隐藏状态与表示证据", body: "使用对齐子空间、CKA、CCA、Procrustes 映射或探针迁移比较内部几何，并控制架构差异。" },
      { title: "注意力与路由证据", body: "注意力乘积、专家选择和路由协作能够揭示可见答案之外继承的计算习惯。" },
      { title: "权重与训练轨迹证据", body: "参数指纹和检查点轨迹提供更强谱系证据，但前提是审计者合法持有权重或训练工件。" },
    ]},
    "teacher-lineage-attribution": { eyebrow: "蒸馏审计", title: "教师与谱系归因", lead: "从判断是否发生蒸馏，进一步区分教师身份、父检查点和替代派生机制。", sections: [
      { title: "蒸馏存在性检测", body: "检验观察到的相似性是否超出模型能力、共享数据、架构或共同祖先能够解释的范围。" },
      { title: "候选教师识别", body: "使用校准证据对候选教师排序或检验，并进行多重比较校正。" },
      { title: "父模型谱系", body: "独立判断待审计模型是否从某个基础家族继承权重或 tokenizer 结构。" },
      { title: "蒸馏与直接微调", body: "通过参考检查点、训练工件和困难负样本，区分教师生成监督与普通下游数据训练。" },
      { title: "蒸馏与模型合并", body: "模型合并转移参数，而不仅是监督。权重空间证据和行为分解应将其视为不同谱系边。" },
      { title: "集合值归因", body: "证据不足以隔离唯一来源时，应返回具有统计控制的候选教师集合，而不是强制获胜者。" },
    ]},
    "multi-teacher-recovery": { eyebrow: "蒸馏审计", title: "多教师恢复", lead: "恢复教师集合、教师角色、混合强度、缺失来源和多阶段依赖图。", sections: [
      { title: "教师集合恢复", body: "识别所有贡献可检测信号的候选教师，同时控制错误发现率。" },
      { title: "教师角色归因", body: "区分谁生成数据、谁评判偏好、谁改写输出、谁过滤样本。" },
      { title: "混合权重估计", body: "估计相对解释影响，但避免把行为权重错误解释为精确训练样本比例。" },
      { title: "未知教师检测", body: "为未观察教师和未建模训练过程保留概率或假设空间。" },
      { title: "多阶段依赖图", body: "把生成、批评、排序、过滤和最终训练表示为有向图，而不是单条教师—学生边。" },
      { title: "证据校准", body: "报告置信度、覆盖率和拒绝行为。多来源归因尤其容易产生过度自信的误报。" },
    ]},
    "unauthorized-distillation": { eyebrow: "攻击与防御", title: "未授权蒸馏", lead: "通过响应采集、推理抽取、概率访问和协同采集基础设施进行查询驱动的能力转移。", sections: [
      { title: "基于 API 的模型抽取", body: "使用受害模型 API 响应训练替代模型。查询选择和迁移集覆盖决定能够恢复多少功能。" },
      { title: "响应采集", body: "使用大规模提示集收集高质量示范，用于监督式响应蒸馏。" },
      { title: "推理数据抽取", body: "查询集中于代码、数学、规划或工具使用轨迹，因为这些中间结构对学生训练价值较高。" },
      { title: "基于 logprob 的抽取", body: "top-k 或完整 token 概率提供比最终答案更丰富的分布信息，能够提高分布恢复能力。" },
      { title: "账号与路由规避", body: "采集可能分散到多个账号、代理或第三方路由，以规避速率、身份和流量控制。" },
      { title: "多账号协同采集", body: "工业检测因此依赖跨账号聚类、基础设施指标、提示词重复和目标能力集中度。" },
    ]},
    "provenance-defenses": { eyebrow: "攻击与防御", title: "来源证明防御", lead: "用于揭示或阻止模型输出被未授权训练使用的信号与运营控制。", sections: [
      { title: "输出水印", body: "生成时 token 偏置可以标记文本，但其经过过滤、改写和学生训练后的存活性必须单独评价。" },
      { title: "模型指纹", body: "秘密行为查询或参数派生签名可以在模型发布后验证所有权或家族成员关系。" },
      { title: "放射性训练数据", body: "对发布样本进行修改，使下游训练产生可检测的统计痕迹。" },
      { title: "可随蒸馏转移的信号", body: "有效防御应在学生所使用的具体教师信号和训练后流程中保持。" },
      { title: "API 遥测", body: "提供方通过账号、请求、IP、支付、时间和基础设施元数据发现异常抽取。" },
      { title: "速率限制与滥用检测", body: "运营控制在学生发布之前减少采集规模或识别协同活动。" },
    ]},
    "evasion-removal": { eyebrow: "攻击与防御", title: "规避与移除", lead: "隐藏教师痕迹、移除嵌入信号或混淆发布后归因的变换。", sections: [
      { title: "改写与重述", body: "第二个模型在学生训练前改写教师输出，削弱风格和 token 水印证据。" },
      { title: "输出过滤", body: "数据策展器可以在样本进入训练集之前拒绝可检测模式。" },
      { title: "继续微调", body: "在无关数据上继续训练可以稀释教师特定行为，同时保留部分转移能力。" },
      { title: "模型合并", body: "模型合并混合多个行为来源，为观察到的相似性创造替代解释。" },
      { title: "量化与剪枝", body: "压缩可能扰动内部指纹，但不一定移除从教师学习的能力。" },
      { title: "教师信号洗白", body: "多阶段生成、批评、改写和过滤故意破坏教师与学生之间的直接可观察边。" },
    ]},
    benchmarks: { eyebrow: "蒸馏评价", title: "基准数据集", lead: "用于单教师、多教师、多阶段、开放世界和真实模型审计的来源真值模型集合。", sections: [
      { title: "受控单教师模型", body: "在真实关系已知的前提下改变教师身份、学生基础模型、规模、任务领域、数据量和随机种子。" },
      { title: "多教师模型", body: "包含平衡和高度不平衡混合、重叠教师和角色专用教师。" },
      { title: "多阶段流程", body: "构建“生成→批评→改写→排序→训练”流程，并保留完整来源清单。" },
      { title: "公开披露真实模型", body: "使用官方模型卡和技术报告进行外部验证，同时严格保留公开声明的证据强度。" },
      { title: "商业 API 案例", body: "除非服务条款和授权允许受控训练，否则应保持观察性和低查询量。" },
      { title: "开放世界候选池", body: "评价真实教师缺失、共同第三方教师和远大于真实来源的候选集合。" },
    ]},
    "metrics-protocols": { eyebrow: "蒸馏评价", title: "指标与实验协议", lead: "超越二分类 AUC，重点评价教师集合恢复、角色归因、校准、查询成本和错误指控。", sections: [
      { title: "蒸馏检测", body: "报告 AUROC、AUPRC 和低误报工作点，例如 1% FPR 下的 TPR。" },
      { title: "教师集合恢复", body: "多教师条件下使用集合精确率、集合召回率、错误发现率和覆盖率。" },
      { title: "角色归因", body: "对生成、推理、评判、批评、过滤、安全和工具角色计算 macro-F1。" },
      { title: "混合影响估计", body: "使用 MAE、秩相关和区间覆盖评价相对影响估计。" },
      { title: "校准与覆盖", body: "评价 ECE、选择性风险、拒绝覆盖率和来源集合大小。" },
      { title: "查询成本与误归因", body: "报告达到固定置信度所需 API 调用量，以及困难负样本上的误归因率。" },
    ]},
    "confounders-robustness": { eyebrow: "蒸馏评价", title: "混杂因素与鲁棒性", lead: "防止能力相似性、共同祖先和训练后变换被误解释为来源证据所需的控制。", sections: [
      { title: "共享基础模型", body: "从同一家族初始化的学生即使没有共享输出教师，也可能保持相似。" },
      { title: "共享公开数据", body: "共同基准、网络语料、代码仓库或合成数据集会造成相关行为。" },
      { title: "共同第三方教师", body: "两个模型可能都模仿未观察的第三个模型，产生虚假成对归因。" },
      { title: "能力收敛", body: "强模型常收敛到相同正确答案或高效策略，审计应强调判别边界，而不是普通成功样本。" },
      { title: "提示词与解码混杂", body: "系统提示词、温度、采样、输出格式和安全包装可能主导表面比较。" },
      { title: "继续训练与模型变换", body: "额外 SFT、偏好优化、合并、剪枝和量化会稀释或变换教师痕迹。" },
      { title: "缺失教师评价", body: "每个基准都应包含所有候选教师均不是真实教师的情况。" },
    ]},
    "model-family-compression": { eyebrow: "真实蒸馏流程", title: "模型家族压缩", lead: "将大型家族成员压缩为更小、更高效学生的公开内部或开放权重流程。", sections: [
      { title: "logit 引导的家族压缩", body: "大型家族成员向小模型提供 token 级目标，通常与剪枝或架构缩减结合。" },
      { title: "剪枝辅助蒸馏", body: "从大型检查点派生较小网络，再通过教师监督恢复能力。" },
      { title: "跨架构压缩", body: "把教师知识转移到循环、稀疏或其他结构不同的学生。" },
      { title: "闭源家族蒸馏", body: "商业提供方可能明确披露快速或小型产品由大型内部模型训练，但不公开完整损失或数据集。" },
    ]},
    "response-instruction-distillation": { eyebrow: "真实蒸馏流程", title: "响应与指令蒸馏", lead: "在另一个模型生成的指令、答案、解释或示范上训练学生的公开流程。", sections: [
      { title: "指令数据生成", body: "教师把种子任务扩展为大规模指令集合，并生成目标响应。" },
      { title: "闭源教师响应蒸馏", body: "当条款、授权和研究设计允许时，商业 API 可以为开放权重学生提供示范。" },
      { title: "托管蒸馏工作流", body: "商业平台把输出采集、评价、数据集管理和学生微调整合在同一流程中。" },
      { title: "能力转移限制", body: "任务覆盖和数据质量不足时，模仿可能只复制风格或表面行为，而不能恢复广泛能力。" },
    ]},
    "reasoning-process-distillation": { eyebrow: "真实蒸馏流程", title: "推理与过程蒸馏", lead: "传递解释、解题策略、中间动作或开放推理轨迹的流程。", sections: [
      { title: "解释轨迹蒸馏", body: "教师生成详细理由或逐步示范，用于监督学生的中间过程。" },
      { title: "推理策略蒸馏", body: "学生学习何时使用直接回答、任务分解、验证或其他任务相关策略。" },
      { title: "开放推理数据集", body: "社区项目生成并发布带有可复现训练和评价流程的推理轨迹。" },
      { title: "推理来源分析", body: "动作级审计判断中间陈述或决策更可能由教师、基础学生还是蒸馏后模型解释。" },
    ]},
    "production-pipelines": { eyebrow: "真实蒸馏流程", title: "工业生产流程", lead: "模型在最终学生训练前生成、批评、评分、过滤和修订数据的工业数据工厂。", sections: [
      { title: "内部家族蒸馏", body: "提供方使用大型内部教师训练低延迟模型，同时保持流程私有。" },
      { title: "托管蒸馏平台", body: "用户在统一托管流程中采集输出、运行评价、构建数据集并微调小模型。" },
      { title: "多模型数据工厂", body: "不同模型分别生成候选数据、批评缺陷、评价质量、执行安全规则并过滤最终语料。" },
      { title: "评判与奖励流程", body: "模型影响可能主要通过偏好或奖励进入，而不是复制文本。" },
      { title: "运营遥测", body: "提供方使用账号、基础设施、时间和请求模式证据监控疑似抽取流量，这些信息外部审计者无法获得。" },
    ]},
    repositories: { eyebrow: "资源与研究议程", title: "代码仓库", lead: "蒸馏训练、教师归因、模型谱系、来源防御和评价实现。", sections: [{ title: "仓库组织方式", body: "仓库卡片按照功能而不是发表来源分类：训练流程、检测与归因、谱系与指纹、防御以及基准。" }] },
    bibliography: { eyebrow: "资源与研究议程", title: "参考文献总表", lead: "全站论文、代码仓库、官方披露、政策和行业报告的可搜索索引。", sections: [{ title: "搜索与证据筛选", body: "可以搜索标题、方法、访问假设、教师信号、模型和证据等级。A–E 筛选保持官方披露、实验、平台遥测和新闻报道之间的区别。" }] },
    "research-agenda": { eyebrow: "资源 · 长期研究方向", title: "长期研究议程", lead: "多教师、多角色和多阶段依赖恢复是建立在可靠候选条件证据检验之上的后续问题。", callout: "第一篇论文先完成“下一篇论文”工作区中的受限任务。只有逐候选检验在困难负样本、候选缺失和 API 黑盒评价下控制误报与功效后，DistillGraph 才进入后续计划。", sections: [
      { title: "第一篇论文之后仍未解决的问题", body: "第一篇论文聚焦候选条件黑盒蒸馏证据检测。后续问题包括因果教师识别、更大教师集合、角色分离、相对影响、重复蒸馏、缺失中间模型和多阶段信号洗白。" },
      { title: "未来结构化问题", body: "给定待审计模型、候选与未知教师、可选参考检查点和异质访问预算，恢复带类型且具有不确定性的依赖结构。该任务严格难于候选归因，不能由同一组证据直接支持。" },
      { title: "作为后续框架的 DistillGraph", body: `<div class="steps"><div class="step"><strong>从校准候选检验开始。</strong>把第一篇论文的证据检测结论作为边筛选信号，而不是已证明的边。</div><div class="step"><strong>加入角色条件证据。</strong>只在具有受控真实关系时区分生成、推理、评判、批评、安全和工具角色。</div><div class="step"><strong>按可用访问条件升级。</strong>把 logit、参考检查点、表示、路由和权重作为可选佐证，而不是核心要求。</div><div class="step"><strong>输出不确定依赖图。</strong>保留未知来源节点、替代边和明确拒绝判断。</div></div>` },
      { title: "未来基准扩展", body: "单教师归因稳定后，再扩展到角色专用双教师流程、重复蒸馏、缺失中间节点、信号洗白和更大的不完整候选池。" },
      { title: "对第一篇论文的依赖", body: "如果仅输出证据检验无法在共享基础模型、共享数据、共同第三教师、API 随机性和候选缺失条件下控制误报与功效，就不应启动 DistillGraph 图重建。" },
    ]},
  },
  summaryZh: {
    r1: "研究能否仅根据学生模型输出识别其蒸馏教师，是直接教师归因的重要基线。",
    r2: "通过多重假设检验比较模型输出相似性，在纯黑盒条件下检测模型派生关系。",
    r3: "在学生权重可用、教师仅能通过 API 调用的条件下，结合无数据输入合成与统计评分检测知识蒸馏。",
    r4: "利用混合专家模型的路由和专家协作模式作为蒸馏结构信号，并扩展到影子 MoE 黑盒方案。",
    r5: "通过比较教师、基础学生和蒸馏学生的 token 概率，对推理过程中的动作进行来源归因。",
    r6: "比较后期学生与早期同谱系检查点对候选教师输出的相对拟合程度，实现参考检查点归一化检测。",
    r7: "用具有覆盖保证的来源集合替代强制唯一来源判断，适合多来源和不确定归因。",
    r8: "利用微调轨迹中参数变化与知识演化的一致性证明模型谱系。",
    r9: "ModSleuth 从论文、模型卡、数据卡、代码和配置中恢复递归模型与数据依赖图。",
    r10: "使用注意力权重乘积的奇异值构建不变量谱指纹，用于检测模型复用。",
    r11: "从随机输入扰动产生的梯度响应中提取模型内在签名，进行家族分类和派生检测。",
    r12: "通过线性分配对齐和无偏 CKA 比较注意力权重，识别常见训练后变换下的派生关系。",
    r13: "利用参数方向不变量和可读表示识别基础模型家族，并支持零知识证明。",
    r14: "主动探测未知 API，在开放集条件下识别底层大语言模型或模型家族。",
    r15: "使用审计模型进化判别提示词，再由检测模型根据响应识别模型家族。",
    r16: "提出统一模型指纹分类并发布 LeaFBench，覆盖大量模型实例和训练后变换。",
    r17: "系统综述大语言模型版权保护中的文本水印、模型水印、指纹、转移、移除和评价。",
    r18: "按白盒、黑盒和侧信道指纹整理相关论文与代码。",
    r19: "结合架构、tokenizer 和权重信号的生产级模型来源分析工具。",
    r20: "DEEPJUDGE 聚合多种模型相似度和生成测试，是大语言模型前的重要模型版权测试基础。",
    r21: "把秘密查询—响应对嵌入模型，用于发布后的黑盒所有权验证。",
    r22: "通过定向遗忘而不是传统触发后门嵌入隐蔽模型指纹。",
    r23: "利用跨轮上下文相关性构建多轮模型指纹。",
    r24: "系统测试水印在知识蒸馏中的继承与移除，揭示简单可迁移水印的局限。",
    r25: "提出面向来源和蒸馏追踪的局部化文本水印。",
    r26: "通过修改发布数据，使使用这些数据训练的模型产生可检测统计痕迹。",
    r27: "推断受保护数据集是否参与模型训练，为蒸馏数据所有权测试提供基础。",
    r28: "综述大语言模型功能抽取、训练数据抽取、提示词抽取、API 蒸馏及防御。",
    r29: "奠定基于预测 API 的查询式模型窃取威胁模型。",
    r30: "在自适应查询得到的受害模型输出上训练替代模型，恢复黑盒功能。",
    r31: "展示如何利用任务查询和伪标签抽取基于 BERT 的自然语言 API。",
    r32: "研究黑盒机器翻译系统的模仿攻击与防御，是序列生成模型抽取的重要前驱。",
    r33: "指出广泛模仿往往能复制表达风格，但在任务覆盖和数据质量不足时难以恢复真实能力。",
    r34: "刻画 top-k 概率截断条件下分布恢复的可识别集合，并区分分布恢复与能力转移。",
    r35: "展示教师中的细微偏差如何在蒸馏学生中传播和放大。",
    r36: "Self-Instruct 从模型自身生成指令、输入和输出，再过滤后用于指令微调。",
    r37: "Alpaca 使用 text-davinci-003 生成的 5.2 万条样本微调 LLaMA 7B。",
    r38: "Orca 使用 GPT-4 的解释轨迹、逐步思考过程和复杂指令开展渐进式学习。",
    r39: "Orca 2 训练小模型根据任务选择合适推理策略，而不是模仿固定思维链风格。",
    r40: "MiniLLM 使用反向 KL 和在策略采样改进生成式大语言模型知识蒸馏。",
    r41: "广义知识蒸馏在学生自生成序列上请求教师反馈，缓解训练与推理分布不匹配。",
    r42: "Minitron 将结构化剪枝与知识蒸馏结合，从大型检查点派生紧凑模型。",
    r43: "Llamba 将 Llama Transformer 跨架构蒸馏为循环 Mamba 风格模型。",
    r44: "DeepSeek-R1 发布六个基于 Qwen 和 Llama、使用 R1 推理数据蒸馏的稠密学生。",
    r45: "Meta 披露 Llama 3.2 1B/3B 由 Llama 3.1 8B 剪枝，并使用 8B/70B token 级目标训练。",
    r46: "Google 官方披露 Gemini 1.5 Flash 通过 Gemini 1.5 Pro 蒸馏训练。",
    r47: "OpenAI 提供从大型托管模型输出构建数据并微调低成本模型的授权蒸馏工作流。",
    r48: "Meta 公开说明开发者可以使用 Llama 输出改进其他模型。",
    r49: "Anthropic 基于私有平台遥测报告协同蒸馏活动与检测特征，但外部无法独立复现。",
    r50: "新闻报道 OpenAI 对 DeepSeek 使用自动化和路由采集模型输出的指控，不构成公开实验谱系证明。",
    r51: "新闻报道 Anthropic 对与 Alibaba/Qwen 相关的大规模 Claude 输出采集活动的指控。",
    r52: "行业报道解释授权与争议性蒸馏、法律灰区和工业安全问题。",
    r53: "OpenAI 服务条款中与自动抽取和利用输出开发竞争模型相关的限制。",
    r54: "综述任务对齐、理由蒸馏、多教师知识蒸馏和数据集蒸馏。",
    r55: "整理高效大语言模型研究，其中包含较完整的知识蒸馏文献。",
    r56: "用于合成数据和 AI 反馈流程的工具，支持生成、批评、评分、过滤和多模型编排。",
    r57: "面向推理模型数据生成、监督微调、强化学习和评价的开放复现项目。",
    r58: "社区开放推理轨迹生成与训练项目，可用于构建受控多教师基准。",
    r59: "定义模型来源关系、归因方法和报告术语的规范性文档。",
    r60: "现代知识蒸馏的奠基工作，提出软目标、温度缩放和经典教师—学生压缩目标。",
    r61: "把知识蒸馏从类别或 token 分布扩展到教师解码序列，建立序列级知识蒸馏范式。",
    r62: "在 BERT 预训练阶段联合语言建模、蒸馏和余弦距离损失，得到更小、更快的通用表示模型。",
    r63: "提出两阶段 Transformer 蒸馏，在通用和任务学习中传递 embedding、隐藏状态、注意力与预测层知识。",
    r64: "从低误报率视角重新规范成员推断评价，并提出似然比攻击；其目标是判断训练样本是否出现，而不是判断模型间蒸馏影响。",
    r65: "使用模型生成文本构造采样式伪似然，在输出黑盒条件下开展大语言模型成员推断；其结论仍针对数据样本成员关系。",
    r66: "Qwen3-8B-Base 官方模型卡；在受控实验中作为主要学生基础模型，并按 commit hash 固定。",
    r67: "Llama 3.1 8B 官方模型卡；用于跨家族学生复现和基础模型混杂控制。",
    r68: "Gemma 3 4B 预训练模型卡；用于核心方案通过后的较小容量与跨架构压力测试。",
    r69: "DeepSeek 官方披露的 R1 蒸馏学生，可作为推理蒸馏的外部正例，但不能替代独立训练 replica。",
    r70: "OpenAI 官方模型文档；用于冻结 GPT API 的精确模型 ID、端点能力和版本信息。",
    r71: "Gemini API 官方模型目录；用于固定 Gemini 3.5 Flash 等稳定端点并避免 latest 别名。",
    r72: "DeepSeek API 官方模型和价格文档；记录 DeepSeek-V4-Pro/Flash 的精确调用名称与服务变化。",
    r73: "Mistral 官方模型目录；用于固定 Mistral Medium 3.5 与 Small 4 的精确版本和接口。",
    r74: "阿里云 Model Studio 官方模型生命周期文档；用于固定 Qwen3.7-Plus 的版本、区域和发布日期。",
    r75: "Anthropic 官方 Claude 模型与价格文档；用于在 manifest 冻结时记录账户可见的精确快照。",
    r76: "UltraChat 200k 公开对话数据；在污染筛查后作为响应蒸馏提示来源和同数据控制。",
    r77: "GSM8K 小学数学问题；只作为模板来源，确认性探针重新生成数值以避免直接复用基准。",
    r78: "MATH 竞赛数学数据；用于定义推理任务家族和构造数值、选项均不重叠的留出探针。",
    r79: "UltraFeedback 二值偏好数据；使用其提示并重新生成回答与教师判断，以建立已知偏好监督边。",
    r80: "提出面向严格黑盒 LLM 所有权验证的有限答案目标反事实指纹，并评价公开派生模型池、OpenRouter、普通输出蒸馏、解码鲁棒性、模型合并和自适应 LoRA 擦除。",
    r81: "Meta 官方披露 Llama 3.2 1B/3B 使用 Llama 3.1 8B 与 70B 的 token-level logits，并结合剪枝和后续对齐；适合作为多教师混合流程外部案例。",
    r82: "NVIDIA 官方披露 Minitron Width/Depth 由 Llama 3.1 8B 剪枝并进行 94B-token 蒸馏式继续训练；适合作为剪枝加蒸馏外部案例。",
    r83: "OpenRouter 可蒸馏模型集合；汇总模型创建者明确允许把输出用于训练或蒸馏的端点。",
    r84: "OpenRouter 蒸馏合规文档；说明 is_trainable_text 元数据及人工核验具体模型条款的必要性。",
    r85: "OpenRouter 当前模型目录；用于冻结黑盒模型 slug、provider route、上下文、价格和端点可用性。",
    r86: "使用教师决策边界附近的对抗样本开展知识蒸馏，支持“决策边界是可迁移知识”的一般 KD 证据。",
    r87: "使用能够最小改变教师预测的反事实解释进行少样本 LLM 蒸馏，为边界信息在任务型 LLM 中的传递提供直接但受限的证据。",
    r88: "区分任务必须行为与非必须响应/行动图模式，并通过受控蒸馏验证教师特异行为收敛。",
    r89: "通过重写教师推理轨迹影响学生学习并嵌入可黑盒检测签名，说明非任务必需轨迹属性能够随蒸馏迁移。",
    r90: "系统显示多种 LLM 蒸馏方法会把教师的成员与记忆风险传递给学生，支持非效用属性也可能被继承。",
    r91: "仅使用黑盒教师决策，通过估计到决策边界的距离构造监督并完成蒸馏，支持边界信息可由决策输出提取。",
    r92: "Qwen3-8B 官方模型卡；在决定性行为签名 demo 中作为第一个开放教师。",
    r93: "Llama 3.1 8B Instruct 官方模型卡；作为第二个开放教师，并明确允许在许可证约束下使用输出改进其他模型。",
    r94: "Qwen3-1.7B-Base 官方模型卡；作为所有配对种子实验臂共享的学生初始化。",
    r95: "Qwen3-1.7B 指令模型卡；在决定性 demo 中作为同家族影子教师控制。"
  },
};

Object.assign(SITE_CONTENT.zhPages, NEXT_PAPER_ZH);
Object.assign(SITE_CONTENT.sectionRefs, NEXT_PAPER_SECTION_REFS);
Object.assign(SITE_CONTENT.pageDetails, NEXT_PAPER_PAGE_DETAILS);
