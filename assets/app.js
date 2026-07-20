const APP_ASSET_BASE = new URL(".", document.currentScript.src);
const DATA = (window.RESOURCE_DATA || []).map((record, index) => ({ ...record, refNo: index + 1 }));
let SITE_CONTENT = {};
let language = localStorage.getItem("distill-observatory-language") || "en";

const NAV_GROUPS = [
  {
    title: "Preliminary",
    pages: [
      ["preliminary.html", "Background & Definitions"],
      ["taxonomy.html", "Taxonomy & Threat Model"],
    ],
  },
  {
    title: "Distillation Methods",
    pages: [
      ["white-box-distillation.html", "White-box Distillation"],
      ["black-box-distillation.html", "Black-box Distillation"],
      ["composite-distillation.html", "Composite Distillation"],
    ],
  },
  {
    title: "Distillation Auditing",
    pages: [
      ["output-only-auditing.html", "Output-only Auditing"],
      ["internal-signal-auditing.html", "Internal-signal Auditing"],
      ["teacher-lineage-attribution.html", "Teacher & Lineage Attribution"],
      ["multi-teacher-recovery.html", "Multi-teacher Recovery"],
    ],
  },
  {
    title: "Attacks & Defenses",
    pages: [
      ["unauthorized-distillation.html", "Unauthorized Distillation"],
      ["provenance-defenses.html", "Provenance Defenses"],
      ["evasion-removal.html", "Evasion & Removal"],
    ],
  },
  {
    title: "Distillation Evaluation",
    pages: [
      ["benchmarks.html", "Benchmarks"],
      ["metrics-protocols.html", "Metrics & Protocols"],
      ["confounders-robustness.html", "Confounders & Robustness"],
    ],
  },
  {
    title: "Real-world Distillation",
    pages: [
      ["model-family-compression.html", "Model-family Compression"],
      ["response-instruction-distillation.html", "Response & Instruction"],
      ["reasoning-process-distillation.html", "Reasoning & Process"],
      ["production-pipelines.html", "Production Pipelines"],
    ],
  },
  {
    title: "Resources",
    pages: [
      ["repositories.html", "Repositories"],
      ["bibliography.html", "Master Bibliography"],
      ["research-agenda.html", "Research Agenda"],
    ],
  },
];

const PAGE_CONFIG = {
  home: {
    eyebrow: "Research map · mechanism-first taxonomy",
    title: "LLM Distillation & Lineage Observatory",
    lead: "A mechanism-centered map of how large language models transfer knowledge, how those dependencies can be audited, and how real-world pipelines should be evaluated.",
    callout: "The organizing axis is the transferred knowledge signal—not whether a source is open, closed, academic, or commercial. Access level, model availability, evidence grade, and code availability are treated as orthogonal attributes.",
    stats: [
      ["59", "curated papers, tools, disclosures, and reports"],
      ["7", "research stages from preliminary concepts to evaluation"],
      ["5", "evidence grades separating disclosure from allegation"],
    ],
    sections: [
      {
        title: "Mechanism-first research map",
        body: `<div class="framework-grid">
          <a class="framework-card" href="white-box-distillation.html"><b>1. Distillation Methods</b><span>What signal is transferred and under what teacher access?</span></a>
          <a class="framework-card" href="output-only-auditing.html"><b>2. Distillation Auditing</b><span>What evidence remains in outputs, logits, representations, routing, and weights?</span></a>
          <a class="framework-card" href="unauthorized-distillation.html"><b>3. Attacks & Defenses</b><span>How capabilities are harvested, protected, laundered, or removed.</span></a>
          <a class="framework-card" href="benchmarks.html"><b>4. Evaluation</b><span>How to measure detection, attribution, calibration, robustness, and false accusation.</span></a>
          <a class="framework-card" href="model-family-compression.html"><b>5. Real-world Pipelines</b><span>Documented model-family, response, reasoning, and production distillation.</span></a>
          <a class="framework-card" href="research-agenda.html"><b>6. Research Agenda</b><span>Multi-teacher, multi-role, access-adaptive lineage auditing.</span></a>
        </div>`,
      },
      {
        title: "Three orthogonal taxonomy axes",
        body: `<table class="matrix"><thead><tr><th>Axis</th><th>Primary question</th><th>Examples</th></tr></thead><tbody>
          <tr><td>Knowledge signal</td><td>What is transferred?</td><td>Logits, representations, responses, reasoning, preferences, trajectories</td></tr>
          <tr><td>Teacher topology</td><td>Who teaches whom, and in how many stages?</td><td>Self-, single-, multi-teacher, progressive, multi-stage, cross-architecture</td></tr>
          <tr><td>Audit access</td><td>What can the auditor observe?</td><td>Outputs, top-k logprobs, full logits, hidden states, routing, weights</td></tr>
        </tbody></table>`,
      },
      {
        title: "Recommended reading path",
        body: `<ol class="reading-path"><li>Start with <a href="preliminary.html">Background & Definitions</a>.</li><li>Read the three <a href="white-box-distillation.html">Distillation Methods</a> pages.</li><li>Move to <a href="output-only-auditing.html">Distillation Auditing</a>.</li><li>Use <a href="benchmarks.html">Evaluation</a> to judge evidence quality.</li><li>End with the <a href="research-agenda.html">Research Agenda</a>.</li></ol>`,
      },
    ],
  },
  preliminary: {
    eyebrow: "Preliminary",
    title: "Background & Definitions",
    lead: "Core concepts needed to distinguish distillation from fine-tuning, model extraction, compression, and general lineage.",
    sections: [
      { title: "What is LLM distillation?", body: "LLM distillation transfers selected behavior or internal knowledge from a teacher into a student through a training objective or a teacher-generated data pipeline. The transferred object may be a probability distribution, hidden representation, final response, reasoning trace, preference judgment, critique, or tool trajectory." },
      { title: "Teacher, student, and distillation signal", body: "The teacher is the model producing supervision; the student is the model updated from that supervision. The distillation signal is the actual training target. A model name alone does not specify the mechanism: the same teacher can provide logits in a white-box pipeline, responses through an API, or rankings as a judge." },
      { title: "Distillation vs. fine-tuning", body: "Fine-tuning describes parameter updating on a downstream objective. Distillation is defined by the source of supervision. A student may be fine-tuned on teacher outputs, but ordinary fine-tuning on human or public data does not create a teacher–student distillation edge." },
      { title: "Distillation vs. model extraction", body: "Model extraction is the attacker or auditor perspective: queries are used to recover functionality or behavior. Response distillation is one mechanism for training the extracted substitute. Extraction can therefore contain distillation, but the two terms are not interchangeable." },
      { title: "Distillation vs. model lineage", body: "Lineage is broader than distillation. It includes direct checkpoint inheritance, continued pre-training, supervised fine-tuning, merging, pruning, quantization, and distillation. A reliable audit must distinguish these edge types rather than infer all derivation from behavioral similarity." },
      { title: "Why distillation auditing matters", body: "Industrial concerns include API abuse, unauthorized capability transfer, license compliance, supply-chain transparency, safety-policy inheritance, and false attribution. The practical requirement is calibrated evidence with an explicit abstention option—not forced accusations." },
    ],
    view: "preliminary",
  },
  taxonomy: {
    eyebrow: "Preliminary",
    title: "Taxonomy & Threat Model",
    lead: "A three-axis taxonomy separating knowledge signal, teacher topology, and auditor access, with evidence grades for real-world claims.",
    sections: [
      { title: "Knowledge-signal taxonomy", body: `<table class="matrix"><thead><tr><th>Signal</th><th>Typical supervision</th><th>Likely audit traces</th></tr></thead><tbody>
        <tr><td>Distribution / logit</td><td>Teacher token probabilities</td><td>Likelihood and calibration alignment</td></tr>
        <tr><td>Representation / feature</td><td>Hidden states, attention, relations</td><td>Subspace and structural similarity</td></tr>
        <tr><td>Response / instruction</td><td>Final generated examples</td><td>Decision, error, and format inheritance</td></tr>
        <tr><td>Reasoning / process</td><td>Rationales, subgoals, solution strategies</td><td>Path and intermediate-action similarity</td></tr>
        <tr><td>Preference / feedback</td><td>Scores, rankings, critiques, rewrites</td><td>Judge boundaries and correction habits</td></tr>
        <tr><td>Agent / trajectory</td><td>Tool calls and interaction traces</td><td>Tool policy and sequencing behavior</td></tr>
      </tbody></table>` },
      { title: "Teacher–student topology", body: "Topology describes self-distillation, single-teacher distillation, multi-teacher mixtures, role-specialized teachers, progressive or online distillation, multi-stage pipelines, and cross-architecture transfer." },
      { title: "Black-, gray-, and white-box access", body: "Black-box access exposes outputs; gray-box access may add top-k probabilities or limited telemetry; white-box access can expose full logits, representations, routing, gradients, weights, or checkpoint trajectories. Access is independent from whether a model is open-weight or proprietary." },
      { title: "Open-weight and proprietary models", body: "Open-weight describes parameter availability, not necessarily open training data, code, or licensing. Proprietary models can still participate in explicitly disclosed internal distillation or authorized hosted distillation workflows." },
      { title: "Authorized and unauthorized distillation", body: "The same technical mechanism can be authorized, licensed, internally managed, contractually restricted, or alleged to be abusive. Technical evidence and policy conclusions should be reported separately." },
      { title: "Evidence levels", body: `<table class="matrix"><thead><tr><th>Grade</th><th>Evidence</th><th>Permitted conclusion</th></tr></thead><tbody>
        <tr><td>A</td><td>Official disclosure, model card, license, or product document</td><td>Confirmed as publicly described</td></tr>
        <tr><td>B</td><td>Source-grounded public-artifact reconstruction</td><td>Documented dependency with traceable sources</td></tr>
        <tr><td>C</td><td>Controlled experimental or statistical evidence</td><td>Support under explicit assumptions</td></tr>
        <tr><td>D</td><td>Provider attribution from private telemetry</td><td>Provider-authored campaign claim</td></tr>
        <tr><td>E</td><td>News report or allegation</td><td>Context, not proof of a lineage edge</td></tr>
      </tbody></table>` },
    ],
    view: "taxonomy",
  },
  "white-box-distillation": {
    eyebrow: "Distillation Methods",
    title: "White-box Distillation",
    lead: "Teacher-internal supervision based on distributions, representations, attention, routing, or parameter-assisted compression.",
    sections: [
      { title: "Distribution / logit distillation", body: "The student is trained to match the teacher's token-level distribution rather than only the argmax token. Temperature, divergence choice, and on- versus off-policy sampling determine which aspects of the teacher distribution are transferred." },
      { title: "Representation / feature distillation", body: "Hidden states or projected features are aligned across teacher and student. Cross-width, cross-depth, and cross-architecture settings require layer mapping or learned projectors." },
      { title: "Attention and relation distillation", body: "Instead of matching raw hidden states, the objective preserves pairwise relations, attention patterns, token geometry, or intermediate computation structure." },
      { title: "Routing and expert distillation", body: "Mixture-of-experts models expose routing distributions and expert collaboration patterns that can be transferred or later used as structural audit signals." },
      { title: "Parameter-assisted compression", body: "Pruning, architecture reduction, and quantization become distillation pipelines when a teacher supplies logits, representations, or corrective supervision after compression." },
    ],
    view: "white-box-distillation",
  },
  "black-box-distillation": {
    eyebrow: "Distillation Methods",
    title: "Black-box Distillation",
    lead: "Teacher supervision acquired through generated outputs, reasoning traces, judgments, critiques, filters, or tool trajectories.",
    sections: [
      { title: "Response / instruction distillation", body: "A teacher generates instruction–response pairs or task demonstrations. The student learns from the visible sequence without direct access to the teacher distribution." },
      { title: "Reasoning / rationale distillation", body: "The teacher supplies explanations, intermediate steps, subgoals, or solution strategies. The target is process imitation rather than final-answer imitation alone." },
      { title: "Preference and judge distillation", body: "A teacher ranks candidate outputs, assigns scores, or applies a rubric. The inherited signal may appear most strongly in pairwise decisions rather than free-form generation." },
      { title: "Critique and rewrite distillation", body: "The teacher identifies defects, proposes corrections, or rewrites student outputs. This transfers error-detection and revision policies." },
      { title: "Safety and filtering distillation", body: "A model may act as a classifier or curator deciding which examples enter the training set. This creates indirect behavioral influence without copying its visible response style." },
      { title: "Tool-use and agent trajectory distillation", body: "Teachers generate tool selections, arguments, intermediate observations, and action sequences. Auditing must compare policies and trajectories, not just final text." },
    ],
    view: "black-box-distillation",
  },
  "composite-distillation": {
    eyebrow: "Distillation Methods",
    title: "Composite Distillation",
    lead: "Training topologies that combine multiple teachers, roles, stages, architectures, or on-policy interaction.",
    sections: [
      { title: "Self-distillation", body: "A model or earlier checkpoint teaches a later version of itself, often using generated labels, confidence targets, or iterative refinement." },
      { title: "Online and on-policy distillation", body: "The student generates the contexts on which teacher feedback is requested, concentrating supervision on the student's current mistakes and visited distribution." },
      { title: "Progressive distillation", body: "Knowledge is transferred through a curriculum of teacher strengths, task difficulty, or intermediate student sizes rather than one terminal stage." },
      { title: "Multi-teacher distillation", body: "Multiple teachers contribute overlapping or complementary signals. A mixture may be domain-based, confidence-weighted, or learned through a router." },
      { title: "Role-specialized teachers", body: "Different models may generate, critique, rank, filter, enforce safety, or produce tool trajectories. Teacher identity and teacher role become separate audit targets." },
      { title: "Multi-stage and cross-architecture pipelines", body: "Real systems often chain generation, rewriting, ranking, and post-training, while transferring from transformers to recurrent or sparse architectures. A single-edge provenance model is insufficient." },
    ],
    view: "composite-distillation",
  },
  "output-only-auditing": {
    eyebrow: "Distillation Auditing",
    title: "Output-only Auditing",
    lead: "Auditing candidate teacher influence when the suspect and teacher are available only through generated outputs.",
    sections: [
      { title: "Behavioral similarity tests", body: "Compare decisions over matched prompts, while controlling for generic capability and answer correctness. Raw text similarity is rarely sufficient." },
      { title: "Disagreement-based probes", body: "Select inputs where candidate teachers make stable, distinct decisions. These prompts provide more attribution power than random benchmarks." },
      { title: "Rare errors and decision boundaries", body: "Shared unusual mistakes, near-boundary choices, and calibrated uncertainty can be more diagnostic than common correct answers." },
      { title: "Reasoning-path similarity", body: "Compare subgoal order, branch selection, correction behavior, and intermediate actions rather than surface wording." },
      { title: "Preference and judge consistency", body: "When a teacher supplied rankings or critiques, pairwise preferences and rubric boundaries may retain stronger traces than generation style." },
      { title: "Open-set and abstaining detection", body: "The true teacher may be missing from the candidate pool. A credible auditor must support unknown-teacher decisions and abstention." },
    ],
    view: "output-only-auditing",
  },
  "internal-signal-auditing": {
    eyebrow: "Distillation Auditing",
    title: "Internal-signal Auditing",
    lead: "Evidence from token probabilities, checkpoint residuals, hidden states, attention, routing, gradients, and parameters.",
    sections: [
      { title: "Log-probability evidence", body: "Evaluate how strongly the suspect assigns probability to candidate-teacher outputs, ideally relative to matched controls or an earlier checkpoint." },
      { title: "Reference-checkpoint residuals", body: "Subtract behavior present before distillation. The residual isolates what changed during the candidate teacher exposure." },
      { title: "Hidden-state and representation evidence", body: "Use aligned subspaces, CKA, CCA, Procrustes mapping, or probe transfer to compare internal geometry while accounting for architectural mismatch." },
      { title: "Attention and routing evidence", body: "Attention products, expert choices, and routing collaboration can reveal inherited computation habits beyond visible answers." },
      { title: "Weight and training-trajectory evidence", body: "Parameter fingerprints and checkpoint trajectories provide stronger lineage evidence, but only when the auditor legitimately possesses the weights or training artifacts." },
    ],
    view: "internal-signal-auditing",
  },
  "teacher-lineage-attribution": {
    eyebrow: "Distillation Auditing",
    title: "Teacher & Lineage Attribution",
    lead: "From detecting that distillation occurred to distinguishing teacher identity, parent checkpoint, and alternative derivation mechanisms.",
    sections: [
      { title: "Distillation existence detection", body: "Test whether the observed similarity exceeds what can be explained by model capability, shared data, architecture, or common ancestry." },
      { title: "Candidate-teacher identification", body: "Rank or test candidate teachers using calibrated evidence, while correcting for multiple comparisons." },
      { title: "Parent-model lineage", body: "Determine whether the suspect inherits weights or tokenizer structure from a base family independently of any output teacher." },
      { title: "Distillation vs. direct fine-tuning", body: "Use reference checkpoints, training artifacts, and hard negatives to distinguish teacher-generated supervision from ordinary downstream data." },
      { title: "Distillation vs. model merging", body: "Merging transfers parameters rather than only supervision. Weight-space evidence and behavioral decomposition should treat it as a different lineage edge." },
      { title: "Set-valued attribution", body: "When evidence cannot isolate one source, return a statistically controlled set of plausible teachers rather than a forced winner." },
    ],
    view: "teacher-lineage-attribution",
  },
  "multi-teacher-recovery": {
    eyebrow: "Distillation Auditing",
    title: "Multi-teacher Recovery",
    lead: "Recovering teacher sets, roles, mixture strength, missing sources, and multi-stage dependency graphs.",
    sections: [
      { title: "Teacher-set recovery", body: "Identify all candidate teachers that contribute detectable signal while controlling the false discovery rate." },
      { title: "Teacher-role attribution", body: "Separate who generated data, who judged preferences, who rewrote outputs, and who filtered examples." },
      { title: "Mixture-weight estimation", body: "Estimate relative explanatory influence, while avoiding the unsupported claim that behavioral weights equal exact training-data proportions." },
      { title: "Unknown-teacher detection", body: "Reserve probability mass or a hypothesis for unobserved teachers and unmodeled training processes." },
      { title: "Multi-stage dependency graphs", body: "Represent generation, critique, ranking, filtering, and final training as a directed graph rather than a single teacher–student edge." },
      { title: "Evidence calibration", body: "Report confidence, coverage, and abstention behavior. Multi-source attribution is especially vulnerable to overconfident false positives." },
    ],
    view: "multi-teacher-recovery",
  },
  "unauthorized-distillation": {
    eyebrow: "Attacks & Defenses",
    title: "Unauthorized Distillation",
    lead: "Query-driven capability transfer through response harvesting, reasoning extraction, probability access, and coordinated collection infrastructure.",
    sections: [
      { title: "API-based model extraction", body: "A substitute model is trained from victim API responses. Query selection and transfer-set coverage determine how much functionality is recovered." },
      { title: "Response harvesting", body: "Large prompt sets are used to collect high-quality demonstrations for supervised response distillation." },
      { title: "Reasoning-data extraction", body: "Queries target code, math, planning, or tool-use traces whose intermediate structure is especially valuable for student training." },
      { title: "Logprob-based extraction", body: "Top-k or full token probabilities expose richer distributional information than final answers and can improve distribution recovery." },
      { title: "Account and router evasion", body: "Collection may be distributed across accounts, proxies, or third-party routers to avoid rate, identity, and volume controls." },
      { title: "Multi-account collection", body: "Industrial detection therefore relies on cross-account clustering, infrastructure indicators, prompt repetition, and capability-target concentration." },
    ],
    view: "unauthorized-distillation",
  },
  "provenance-defenses": {
    eyebrow: "Attacks & Defenses",
    title: "Provenance Defenses",
    lead: "Signals and operational controls intended to reveal or deter unauthorized training on model outputs.",
    sections: [
      { title: "Output watermarks", body: "Generation-time token biases can mark text, but their survival through filtering, paraphrasing, and student training must be tested separately." },
      { title: "Model fingerprints", body: "Secret behavioral queries or parameter-derived signatures can verify ownership or family membership after release." },
      { title: "Radioactive training data", body: "Released examples are modified so that downstream training creates a detectable statistical trace." },
      { title: "Distillation-transferable signals", body: "A useful defense should survive the specific teacher signal and post-training pipeline used by the student." },
      { title: "API telemetry", body: "Providers detect suspicious extraction using account, request, IP, payment, timing, and infrastructure metadata." },
      { title: "Rate limiting and abuse detection", body: "Operational controls reduce collection volume or identify coordinated campaigns before a student is released." },
    ],
    view: "provenance-defenses",
  },
  "evasion-removal": {
    eyebrow: "Attacks & Defenses",
    title: "Evasion & Removal",
    lead: "Transformations that hide teacher traces, remove embedded signals, or confound post-release attribution.",
    sections: [
      { title: "Paraphrasing and rewriting", body: "A second model rewrites teacher outputs before student training, weakening style and token-watermark evidence." },
      { title: "Output filtering", body: "Detectable samples or patterns can be rejected by a curator before they enter the training set." },
      { title: "Additional fine-tuning", body: "Continued training on unrelated data may dilute teacher-specific behavior while preserving transferred capability." },
      { title: "Model merging", body: "Merging can blend multiple behavioral sources and create alternative explanations for observed similarity." },
      { title: "Quantization and pruning", body: "Compression can perturb internal fingerprints without necessarily removing the capability learned from a teacher." },
      { title: "Teacher-signal laundering", body: "Multi-stage generation, critique, rewriting, and filtering intentionally breaks a direct observable edge between teacher and student." },
    ],
    view: "evasion-removal",
  },
  benchmarks: {
    eyebrow: "Distillation Evaluation",
    title: "Benchmarks",
    lead: "Ground-truth model collections for single-teacher, multi-teacher, multi-stage, open-world, and real-world auditing.",
    sections: [
      { title: "Controlled single-teacher models", body: "Vary teacher identity, student base, model size, task domain, data volume, and random seed while keeping the true edge known." },
      { title: "Multi-teacher models", body: "Include balanced and highly imbalanced mixtures, overlapping teachers, and role-specialized teachers." },
      { title: "Multi-stage pipelines", body: "Build generation→critique→rewrite→rank→train pipelines with complete provenance manifests." },
      { title: "Real-world disclosed models", body: "Use official model cards and reports as external validation, while preserving the exact strength of the public claim." },
      { title: "Commercial API case studies", body: "Keep these observational and low-query unless terms and authorization permit controlled training." },
      { title: "Open-world candidate pools", body: "Evaluate missing teachers, common third teachers, and candidate pools that grow far beyond the true sources." },
    ],
    view: "benchmarks",
  },
  "metrics-protocols": {
    eyebrow: "Distillation Evaluation",
    title: "Metrics & Protocols",
    lead: "Evaluation beyond binary AUC, emphasizing teacher-set recovery, role attribution, calibration, query cost, and false accusation.",
    sections: [
      { title: "Distillation detection", body: "Report AUROC, AUPRC, and low-false-positive operating points such as TPR at 1% FPR." },
      { title: "Teacher-set recovery", body: "Use set precision, set recall, false discovery rate, and coverage when multiple teachers may be present." },
      { title: "Role attribution", body: "Measure macro-F1 over generator, reasoner, judge, critic, filter, safety, and tool roles." },
      { title: "Mixture estimation", body: "Evaluate relative influence estimates with MAE, rank correlation, and interval coverage." },
      { title: "Calibration and coverage", body: "Measure ECE, selective risk, abstention coverage, and provenance-set size." },
      { title: "Query cost and false attribution", body: "Report the number of API calls needed for a fixed confidence level and the false attribution rate on hard negatives." },
    ],
    view: "metrics-protocols",
  },
  "confounders-robustness": {
    eyebrow: "Distillation Evaluation",
    title: "Confounders & Robustness",
    lead: "Controls required to prevent capability similarity, common ancestry, and post-training transformations from becoming false provenance evidence.",
    sections: [
      { title: "Shared base models", body: "Students initialized from the same family can remain similar without sharing an output teacher." },
      { title: "Shared public data", body: "Common benchmarks, web corpora, code repositories, or synthetic datasets can create correlated behavior." },
      { title: "Common third teachers", body: "Two models may both imitate an unobserved third model, producing spurious pairwise attribution." },
      { title: "Capability convergence", body: "Strong models often converge on the same correct answer or efficient strategy. Audits must emphasize discriminative boundaries rather than ordinary success." },
      { title: "Prompt and decoder effects", body: "System prompts, temperature, sampling, output formatting, and safety wrappers can dominate superficial comparisons." },
      { title: "Continued post-training", body: "Additional SFT, preference optimization, merging, pruning, and quantization can dilute or transform teacher traces." },
      { title: "Missing-teacher evaluation", body: "Every benchmark should contain cases where none of the supplied candidates is the true teacher." },
    ],
    view: "confounders-robustness",
  },
  "model-family-compression": {
    eyebrow: "Real-world Distillation",
    title: "Model-family Compression",
    lead: "Documented internal or open-weight pipelines that compress a larger family member into smaller or more efficient students.",
    sections: [
      { title: "Logit-guided family compression", body: "Large family members provide token-level targets to smaller models, often after pruning or architectural reduction." },
      { title: "Pruning-assisted distillation", body: "A smaller network is derived from a larger checkpoint and then recovers capability through teacher supervision." },
      { title: "Cross-architecture compression", body: "Teacher knowledge is transferred into recurrent, sparse, or otherwise structurally different students." },
      { title: "Proprietary family distillation", body: "Commercial providers may explicitly disclose that a fast or small product model was trained from a larger internal model without revealing the full loss or dataset." },
    ],
    view: "model-family-compression",
  },
  "response-instruction-distillation": {
    eyebrow: "Real-world Distillation",
    title: "Response & Instruction Distillation",
    lead: "Publicly documented pipelines that train students on instructions, answers, explanations, or examples generated by another model.",
    sections: [
      { title: "Instruction-data generation", body: "Teachers expand seed tasks into large instruction collections and generate target responses." },
      { title: "Closed-teacher response distillation", body: "A proprietary API can provide demonstrations for an open-weight student when terms, authorization, and research design permit it." },
      { title: "Hosted distillation workflows", body: "Commercial platforms integrate output collection, evaluation, dataset management, and student fine-tuning." },
      { title: "Capability-transfer limits", body: "Imitation can reproduce style or surface behavior without recovering broad capability when coverage and data quality are insufficient." },
    ],
    view: "response-instruction-distillation",
  },
  "reasoning-process-distillation": {
    eyebrow: "Real-world Distillation",
    title: "Reasoning & Process Distillation",
    lead: "Pipelines that transfer explanations, solution strategies, intermediate actions, or open reasoning traces.",
    sections: [
      { title: "Explanation-trace distillation", body: "Teachers produce detailed rationales or step-by-step demonstrations that supervise the student's intermediate process." },
      { title: "Reasoning-strategy distillation", body: "Students learn when to apply direct answers, decomposition, verification, or other task-dependent strategies." },
      { title: "Open reasoning datasets", body: "Community projects generate and release reasoning traces with reproducible training and evaluation pipelines." },
      { title: "Reasoning provenance", body: "Action-level auditing asks which intermediate statements or decisions are better explained by the teacher, base student, or post-distillation model." },
    ],
    view: "reasoning-process-distillation",
  },
  "production-pipelines": {
    eyebrow: "Real-world Distillation",
    title: "Production Distillation Pipelines",
    lead: "Industrial data factories in which models generate, critique, score, filter, and revise data before final student training.",
    sections: [
      { title: "Internal family distillation", body: "Providers train lower-latency models from larger internal teachers while keeping the pipeline private." },
      { title: "Hosted distillation platforms", body: "Users collect outputs, run evaluations, build datasets, and fine-tune smaller hosted models in one managed workflow." },
      { title: "Multi-model data factories", body: "Different models can generate candidate data, critique defects, score quality, enforce safety, and filter the final corpus." },
      { title: "Judge and reward pipelines", body: "A model's influence may enter primarily through preferences or rewards rather than copied text." },
      { title: "Operational telemetry", body: "Providers monitor extraction-like traffic using account, infrastructure, timing, and request-pattern evidence unavailable to external auditors." },
    ],
    view: "production-pipelines",
  },
  repositories: {
    eyebrow: "Resources",
    title: "Repositories",
    lead: "Implementations for distillation training, teacher attribution, model lineage, provenance defenses, and evaluation.",
    sections: [
      { title: "How repositories are organized", body: "Repository cards are tagged by function rather than publication source: training pipelines, detection and attribution, lineage and fingerprinting, defenses, and benchmarks." },
    ],
    view: "repositories",
  },
  bibliography: {
    eyebrow: "Resources",
    title: "Master Bibliography",
    lead: "A searchable index of all curated papers, repositories, disclosures, policies, and industry reports.",
    sections: [
      { title: "Search and evidence filters", body: "Search titles, methods, access assumptions, teacher signals, models, and evidence grades. A–E filters preserve the distinction between official disclosure, experimental evidence, provider telemetry, and reporting." },
    ],
    view: "all",
  },
  "research-agenda": {
    eyebrow: "Resources",
    title: "Research Agenda",
    lead: "The strongest open problem is access-adaptive, evidence-calibrated recovery of multi-teacher, multi-role, multi-stage model dependencies.",
    callout: "Proposed direction: DistillGraph — recover a teacher set, role assignment, evidence channel, confidence level, and explicit abstention under output-only through weight-level access.",
    sections: [
      { title: "Research gaps", body: "Current methods often assume one teacher, one final distillation stage, a known reference checkpoint, or one evidence channel. Industrial pipelines violate all four assumptions." },
      { title: "Proposed problem", body: "Given a suspect model, candidate teachers, optional reference checkpoints, and an access budget, infer whether distillation occurred, which teachers contributed, what roles they played, and when the evidence is insufficient." },
      { title: "DistillGraph framework", body: `<div class="steps"><div class="step"><strong>Disagreement probe selection.</strong> Find inputs where candidate teachers separate in decisions, preferences, critiques, or tool policies.</div><div class="step"><strong>Role-conditioned signatures.</strong> Build generator, reasoner, judge, critic, safety, and tool evidence.</div><div class="step"><strong>Access-adaptive escalation.</strong> Add logits, representations, routing, and weight trajectories as access increases.</div><div class="step"><strong>Open-world inference.</strong> Return a calibrated teacher set or abstain.</div></div>` },
      { title: "Benchmark design", body: "Construct single- and multi-teacher students, role-specialized pipelines, multi-stage laundering, hard negatives, disclosed real models, and commercial observational cases." },
      { title: "Experimental roadmap", body: "Begin with two teachers and three roles on open-weight models, validate against publicly disclosed distilled families, then add output-only commercial APIs under low-query and terms-compliant protocols." },
    ],
    view: "research-agenda",
  },
};

const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const pageKey = document.body.dataset.page || "home";
let config = PAGE_CONFIG[pageKey] || PAGE_CONFIG.home;
const esc = (s) => String(s || "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const slugify = (s) => String(s || "section").toLowerCase().replace(/&/g, "and").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/(^-|-$)/g, "");
const recordText = (r) => JSON.stringify(r).toLowerCase();
const includesAny = (text, terms) => terms.some((term) => text.includes(term));

function matchesView(record, view) {
  const t = recordText(record);
  const cats = record.categories || [];
  if (!view || view === "none") return false;
  if (view === "all") return true;
  if (view === "preliminary") return cats.includes("surveys-tools") || includesAny(t, ["survey", "constitution", "copy, right", "model provenance testing"]);
  if (view === "taxonomy") return cats.includes("surveys-tools") || cats.includes("datasets-benchmarks") || includesAny(t, ["taxonomy", "provenance constitution", "sok:"]);
  if (view === "white-box-distillation") return (cats.includes("distillation-methods") || cats.includes("open-disclosures") || cats.includes("closed-disclosures")) && includesAny(t, ["logit", "probabilities", "distribution", "weights", "representation", "routing", "pruning", "recurrent", "mamba", "on-policy", "minillm", "minitron", "llama 3.2", "gemini 1.5 flash"]);
  if (view === "black-box-distillation") return (cats.includes("distillation-methods") || cats.includes("open-disclosures") || cats.includes("closed-disclosures")) && includesAny(t, ["outputs", "response", "instruction", "reasoning", "explanation", "gpt-4", "text-davinci", "teacher-generated", "hosted", "critique", "feedback", "synthetic"]);
  if (view === "composite-distillation") return (cats.includes("distillation-methods") || cats.includes("open-disclosures")) && includesAny(t, ["self-instruct", "on-policy", "progressive", "multi-teacher", "cross-architecture", "data pipeline", "distilabel", "open-r1", "openthoughts", "orca 2", "minitron", "llamba"]);
  if (view === "output-only-auditing") return (cats.includes("direct-detection") || cats.includes("lineage-fingerprinting")) && includesAny(t, ["black-box", "outputs", "api identification", "behavioral", "evolutionary", "who taught"]);
  if (view === "internal-signal-auditing") return (cats.includes("direct-detection") || cats.includes("lineage-fingerprinting")) && includesAny(t, ["logits", "weights", "gradients", "routing", "trajectory", "token probabilities", "spectral", "cka", "parameter"]);
  if (view === "teacher-lineage-attribution") return cats.includes("direct-detection") || cats.includes("lineage-fingerprinting");
  if (view === "multi-teacher-recovery") return includesAny(t, ["who taught", "provenance set", "reference-based", "multiple sources", "multi-teacher", "dependency graph", "modsleuth", "teacher attribution"]);
  if (view === "unauthorized-distillation") return cats.includes("extraction-attacks");
  if (view === "provenance-defenses") return cats.includes("defenses-watermarks");
  if (view === "evasion-removal") return cats.includes("defenses-watermarks") && includesAny(t, ["removal", "paraphrasing", "imitation attacks", "watermarks robustly prevent", "bias", "laundering", "rewrite", "robustness"]);
  if (view === "benchmarks") return cats.includes("datasets-benchmarks") || includesAny(t, ["benchmark", "leafbench", "model provenance testing"]);
  if (view === "metrics-protocols") return cats.includes("datasets-benchmarks") || includesAny(t, ["multiple hypothesis", "coverage", "testing framework", "provenance set", "ownership hypothesis", "identified-set"]);
  if (view === "confounders-robustness") return includesAny(t, ["robust", "removal", "paraphrasing", "post-development", "transformations", "false promise", "pruning", "quantization", "merge", "shared"]);
  if (view === "model-family-compression") return includesAny(t, ["llama 3.2", "minitron", "llamba", "gemini 1.5 flash", "minillm", "on-policy distillation"]);
  if (view === "response-instruction-distillation") return includesAny(t, ["self-instruct", "stanford alpaca", "model distillation in the openai api", "false promise", "distilabel", "instruction"]);
  if (view === "reasoning-process-distillation") return includesAny(t, ["deepseek-r1", "orca:", "orca 2", "open-r1", "openthoughts", "reasoning distillation", "sentence come from"]);
  if (view === "production-pipelines") return includesAny(t, ["openai api", "gemini 1.5 flash", "llama 3.2", "deepseek-r1", "distilabel", "detecting and preventing distillation attacks", "dependency graph"]);
  if (view === "repositories") return Boolean(record.repo);
  if (view === "research-agenda") return cats.includes("direct-detection") || cats.includes("datasets-benchmarks") || includesAny(t, ["multi-teacher", "provenance set", "dependency graph"]);
  return cats.includes(view);
}

const getUi = () => SITE_CONTENT.ui?.[language] || SITE_CONTENT.ui?.en || {};
const getNavLabel = (label) => language === "zh" ? (SITE_CONTENT.navZh?.[label] || label) : label;
const getActiveConfig = () => {
  const base = PAGE_CONFIG[pageKey] || PAGE_CONFIG.home;
  const translated = language === "zh" ? SITE_CONTENT.zhPages?.[pageKey] : null;
  return translated ? { ...base, ...translated, view: base.view } : base;
};
const getPageDetails = () => SITE_CONTENT.pageDetails?.[pageKey]?.[language] || SITE_CONTENT.pageDetails?.[pageKey]?.en || null;
const referenceHref = (refNo) => currentFile === "bibliography.html" ? `#ref-${refNo}` : `bibliography.html#ref-${refNo}`;
const citationHtml = (refs = []) => {
  const unique = [...new Set(refs.filter((n) => Number.isInteger(n) && n > 0 && n <= DATA.length))];
  if (!unique.length) return "";
  return `<span class="inline-citations">${unique.map((n) => `<a href="${referenceHref(n)}" title="Reference ${n}">[${n}]</a>`).join(" ")}</span>`;
};
const pageReferenceNumbers = () => [...new Set((SITE_CONTENT.sectionRefs?.[pageKey] || []).flat())];
let tocObserver = null;

function buildChrome() {
  const ui = getUi();
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  const topbar = document.querySelector(".topbar");
  const counter = document.getElementById("result-count");
  let toggle = document.getElementById("language-toggle");
  if (!toggle && topbar) {
    toggle = document.createElement("button");
    toggle.id = "language-toggle";
    toggle.className = "language-toggle";
    topbar.insertBefore(toggle, counter || null);
  }
  if (toggle) {
    toggle.textContent = ui.languageButton || (language === "zh" ? "EN" : "中文");
    toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    toggle.onclick = () => {
      language = language === "zh" ? "en" : "zh";
      localStorage.setItem("distill-observatory-language", language);
      grade = "all";
      renderAll();
    };
  }
  const search = document.getElementById("site-search");
  if (search) search.placeholder = ui.searchPlaceholder || "Search…";
  const sidebarNote = document.querySelector(".sidebar-note");
  if (sidebarNote) sidebarNote.innerHTML = `<a href="taxonomy.html">${language === "zh" ? "证据等级 A–E" : "Evidence grades A–E"}</a><br>${esc(ui.sidebarNote || "")}`;
  const brandStrong = document.querySelector(".brand strong");
  const brandSpan = document.querySelector(".brand span");
  if (brandStrong) brandStrong.textContent = language === "zh" ? "蒸馏谱系" : "Distillation Lineage";
  if (brandSpan) brandSpan.textContent = language === "zh" ? "研究观测站" : "Research Observatory";
  const footer = document.querySelector(".footer");
  if (footer) footer.textContent = language === "zh" ? "大语言模型蒸馏与谱系研究观测站" : "LLM Distillation & Lineage Observatory";
}

function buildNavigation() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  nav.innerHTML = NAV_GROUPS.map((group) => {
    const isCurrentGroup = group.pages.some(([href]) => href === currentFile);
    const links = group.pages.map(([href, label]) => `<a class="nav-level2${href === currentFile ? " active" : ""}" href="${href}">${esc(getNavLabel(label))}</a>`).join("");
    return `<details class="nav-group"${isCurrentGroup || pageKey === "home" ? " open" : ""}><summary class="nav-level1"><span>${esc(getNavLabel(group.title))}</span><span class="nav-chevron">⌄</span></summary><div class="nav-children">${links}</div></details>`;
  }).join("");
}

function renderPage() {
  const root = document.getElementById("dynamic-page");
  if (!root) return;
  const ui = getUi();
  config = getActiveConfig();
  const details = getPageDetails();
  document.title = pageKey === "home" ? config.title : `${config.title} · ${language === "zh" ? "大语言模型蒸馏与谱系研究观测站" : "LLM Distillation Lineage Observatory"}`;
  const stats = config.stats ? `<div class="grid">${config.stats.map(([n, label]) => `<div class="stat"><b>${esc(n)}</b><span>${esc(label)}</span></div>`).join("")}</div>` : "";
  const callout = config.callout ? `<div class="callout"><strong>${esc(ui.coreFraming || "Core framing.")}</strong> ${config.callout}</div>` : "";
  const detailRefs = citationHtml(pageReferenceNumbers().slice(0, 10));
  const detailPanel = details ? `<section class="panel scope-panel"><h2>${esc(ui.scopeTerminology || "Scope and terminology")}</h2><p>${details.overview} ${detailRefs}</p><h3>${esc(ui.keyTerms || "Key terms")}</h3><div class="term-list">${(details.terms || []).map((term) => `<span class="term-chip">${esc(term)}</span>`).join("")}</div></section>` : "";
  const sectionRefRows = SITE_CONTENT.sectionRefs?.[pageKey] || [];
  const sections = (config.sections || []).map((section, index) => {
    const refs = sectionRefRows[index] || [];
    return `<section class="panel topic-section"><h2>${section.title}</h2><div class="section-body">${section.body}${citationHtml(refs)}</div>${refs.length ? `<div class="section-reference-note"><span>${esc(ui.citedReferences || "References")}</span>${citationHtml(refs)}</div>` : ""}</section>`;
  }).join("");
  const questions = details?.questions?.length ? `<section class="panel questions-panel"><h2>${esc(ui.researchQuestions || "Research questions")}</h2><ol>${details.questions.map((question) => `<li>${esc(question)}</li>`).join("")}</ol></section>` : "";
  const hasResources = Boolean(config.view);
  const resourceBlock = hasResources ? `<section class="literature-section"><h2>${esc(ui.selectedLiterature || "Selected literature and evidence")}</h2><p class="section-intro">${esc(ui.literatureIntro || "")}</p><p class="original-title-note">${esc(ui.originalTitleNote || "")}</p><div class="filters"><button class="filter-btn active" data-grade="all">${esc(ui.allEvidence || "All evidence")}</button><button class="filter-btn" data-grade="A">${esc(ui.evidenceA || "A")}</button><button class="filter-btn" data-grade="B">${esc(ui.evidenceB || "B")}</button><button class="filter-btn" data-grade="C">${esc(ui.evidenceC || "C")}</button><button class="filter-btn" data-grade="D">${esc(ui.evidenceD || "D")}</button><button class="filter-btn" data-grade="E">${esc(ui.evidenceE || "E")}</button></div><div id="resource-list" class="resource-list"></div></section>` : "";
  root.innerHTML = `<header><div class="eyebrow">${esc(config.eyebrow)}</div><h1>${esc(config.title)}</h1><p class="lead">${esc(config.lead)}</p></header>${callout}${stats}${detailPanel}${sections}${questions}${resourceBlock}`;
}

let grade = "all";
function renderResources() {
  const list = document.getElementById("resource-list");
  const search = document.getElementById("site-search");
  const count = document.getElementById("result-count");
  const ui = getUi();
  if (!list) {
    if (count) count.textContent = ui.researchGuide || "Research guide";
    return;
  }
  const q = (search?.value || "").toLowerCase().trim();
  let rows = DATA.filter((record) => matchesView(record, config.view));
  if (grade !== "all") rows = rows.filter((record) => (record.evidence || "").startsWith(grade));
  if (q) rows = rows.filter((record) => `${recordText(record)} ${SITE_CONTENT.summaryZh?.[record.id] || ""} ${record.refNo}`.toLowerCase().includes(q));
  rows.sort((a, b) => a.refNo - b.refNo);
  if (count) count.textContent = language === "zh" ? `${rows.length} ${ui.items || "篇参考文献"}` : `${rows.length} ${ui.items || "references"}`;
  list.innerHTML = rows.length ? rows.map((record) => {
    const summary = language === "zh" ? (SITE_CONTENT.summaryZh?.[record.id] || record.summary) : record.summary;
    return `<article class="card reference-card" id="ref-${record.refNo}"><div class="card-top"><div><h3><a class="ref-number" href="#ref-${record.refNo}">[${record.refNo}]</a> ${esc(record.title)}</h3><div class="meta">${record.year} · ${esc(record.venue)} · ${esc(record.kind)}</div></div><div class="links">${record.url ? `<a class="link-btn" href="${record.url}" target="_blank" rel="noopener">${esc(ui.primarySource || "Primary source ↗")}</a>` : ""}${record.repo ? `<a class="link-btn repo" href="${record.repo}" target="_blank" rel="noopener">${esc(ui.repository || "Repository ↗")}</a>` : ""}</div></div><p>${esc(summary)}</p><div class="badges"><span class="badge reference-badge">${esc(ui.referenceNumber || "Reference")} [${record.refNo}]</span><span class="badge evidence">${esc(record.evidence)}</span>${(record.access || []).map((x) => `<span class="badge">${esc(x)}</span>`).join("")}${(record.tags || []).map((x) => `<span class="badge">${esc(x)}</span>`).join("")}</div></article>`;
  }).join("") : `<div class="empty">${esc(ui.noItems || "No items match this page and filter.")}</div>`;
  if (location.hash.startsWith("#ref-")) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: "center" }));
}

function buildPageToc() {
  const toc = document.getElementById("page-toc");
  const content = document.getElementById("dynamic-page");
  if (!toc || !content) return;
  tocObserver?.disconnect();
  const headings = [...content.querySelectorAll("h2, h3")];
  if (!headings.length) {
    toc.hidden = true;
    return;
  }
  toc.hidden = false;
  const used = new Set();
  headings.forEach((heading) => {
    let id = heading.id || slugify(heading.textContent) || `section-${used.size + 1}`;
    let unique = id;
    let n = 2;
    while (used.has(unique)) unique = `${id}-${n++}`;
    heading.id = unique;
    used.add(unique);
  });
  toc.innerHTML = `<div class="toc-title">${esc(getUi().onThisPage || "On this page")}</div><div class="toc-links">${headings.map((heading) => `<a class="toc-${heading.tagName.toLowerCase()}" href="#${heading.id}">${esc(heading.textContent)}</a>`).join("")}</div>`;
  const links = [...toc.querySelectorAll("a")];
  tocObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-15% 0px -72% 0px", threshold: [0, 1] });
  headings.forEach((heading) => tocObserver.observe(heading));
}

function wireInteractions() {
  const search = document.getElementById("site-search");
  if (search) search.oninput = renderResources;
  document.querySelectorAll("[data-grade]").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll("[data-grade]").forEach((x) => x.classList.remove("active"));
      button.classList.add("active");
      grade = button.dataset.grade;
      renderResources();
    };
  });
  const mobileToggle = document.querySelector(".mobile-toggle");
  if (mobileToggle) mobileToggle.onclick = () => document.querySelector(".sidebar")?.classList.toggle("open");
}

function renderAll() {
  config = getActiveConfig();
  buildChrome();
  buildNavigation();
  renderPage();
  buildPageToc();
  renderResources();
  wireInteractions();
}

async function init() {
  try {
    const module = await import(new URL("content.mjs", APP_ASSET_BASE).href);
    SITE_CONTENT = module.SITE_CONTENT || {};
  } catch (error) {
    console.warn("Bilingual content could not be loaded; falling back to English.", error);
    SITE_CONTENT = {};
    language = "en";
  }
  renderAll();
}

init();
