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

const PAPER_FIGURES = {
  "teacher-lineage-attribution": {
    src: "https://arxiv.org/html/2502.06659/x1.png",
    sourceHref: "https://aclanthology.org/2025.findings-acl.173/",
    refNo: 1,
    en: {
      title: "Original overview: teacher model attribution",
      caption: "Given a distilled student and a finite set of candidate teachers, identify which teacher supplied the supervision. The figure is reproduced unchanged from Wadhwa et al., Ref. [1], under CC BY 4.0.",
    },
    zh: {
      title: "论文原图：教师模型归因",
      caption: "给定一个蒸馏学生和有限候选教师集合，识别哪一个教师提供了训练监督。该图未经改绘，直接转载自 Wadhwa 等人的参考文献 [1]，许可协议为 CC BY 4.0。",
    },
  },
  "output-only-auditing": {
    src: "https://arxiv.org/html/2502.00706/figures/tester.png",
    sourceHref: "https://openreview.net/forum?id=Iy4cAXotrf",
    refNo: 2,
    en: {
      title: "Original overview: model provenance testing",
      caption: "The tester compares a suspected parent–child pair against control models using black-box output similarity and multiple hypothesis testing. The figure is reproduced unchanged from Nikolić et al., Ref. [2], under CC BY 4.0.",
    },
    zh: {
      title: "论文原图：模型来源检验",
      caption: "该检验器利用黑盒输出相似性和多重假设检验，将疑似父模型—子模型关系与控制模型基线进行比较。该图未经改绘，直接转载自 Nikolić 等人的参考文献 [2]，许可协议为 CC BY 4.0。",
    },
  },
};

const PAGE_CONFIG = {
  home: {
    eyebrow: "Research map · mechanism-first taxonomy",
    title: "LLM Distillation & Lineage Observatory",
    lead: "A mechanism-centered map of how large language models transfer knowledge, how those dependencies can be audited, and how real-world pipelines should be evaluated.",
    callout: "The organizing axis is the transferred knowledge signal—not whether a source is open, closed, academic, or commercial. Access level, model availability, evidence grade, and code availability are treated as orthogonal attributes.",
    stats: [
      ["63", "curated papers, tools, disclosures, and reports"],
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
    eyebrow: "Preliminary · survey chapter",
    title: "Background & Definitions",
    lead: "A formal and historical introduction to LLM distillation, its relationship to fine-tuning and model extraction, and the evidentiary requirements of post-release lineage auditing.",
    sections: [
      {
        title: "What Is LLM Distillation?",
        body: `<p><strong>Knowledge distillation (KD)</strong> is a training paradigm in which a <em>student model</em> is optimized using supervision produced by a <em>teacher model</em>. The defining property is therefore the <strong>source and form of supervision</strong>, not merely that the student is smaller. A student can have fewer parameters, a different architecture, the same architecture as the teacher, or even be a later checkpoint of the same model. Conversely, pruning or quantization alone is not distillation unless teacher-derived supervision is used during recovery or post-training.</p>
        <p>For an autoregressive language model with parameters θ, an output sequence <em>y</em> conditioned on an input <em>x</em> is factorized token by token:</p>
        <div class="equation">p<sub>θ</sub>(y | x) = ∏<sub>t=1</sub><sup>|y|</sup> p<sub>θ</sub>(y<sub>t</sub> | x, y<sub>&lt;t</sub>). <span class="eq-label">(1)</span></div>
        <p>A teacher can supervise any object exposed by this computation. In classical KD, the teacher supplies a softened probability distribution rather than only a hard target. Given teacher logits <em>z</em><sub>T</sub> and temperature τ, the softened distribution is</p>
        <div class="equation">q<sub>T</sub><sup>τ</sup>(v | x, y<sub>&lt;t</sub>) = exp(z<sub>T,v</sub>/τ) / ∑<sub>u</sub> exp(z<sub>T,u</sub>/τ). <span class="eq-label">(2)</span></div>
        <p>The student is then trained to match this distribution, commonly through a divergence term combined with the ordinary language-modeling objective. Hinton et al. introduced the modern soft-target formulation and temperature scaling, emphasizing that non-maximum probabilities encode similarities that hard labels discard [[60]]. A simplified objective is</p>
        <div class="equation">L<sub>KD</sub> = λτ² D(q<sub>T</sub><sup>τ</sup> || q<sub>S</sub><sup>τ</sup>) + (1 − λ)L<sub>LM</sub>. <span class="eq-label">(3)</span></div>
        <p>For generative models, however, “knowledge” is not limited to a token distribution. Sequence-level KD replaces or augments dense probabilities with teacher-decoded target sequences [[61]]. DistilBERT combines language-modeling, distillation, and cosine-distance losses during pre-training [[62]], while TinyBERT transfers embeddings, hidden states, attention matrices, and prediction-layer outputs in a two-stage framework [[63]]. Modern LLM pipelines further use sampled responses, explanation traces, preference rankings, critiques, safety decisions, and tool trajectories as supervision [[36,38,39,44]].</p>
        <div class="definition-box"><b>Working definition used in this observatory</b>LLM distillation is any training process in which a student update is causally conditioned on supervision generated by one or more teacher models. The supervision may be distributional, representational, sequence-level, process-level, preference-based, or trajectory-based. Terms such as <em>knowledge-signal taxonomy</em> are survey terminology introduced here to organize these mechanisms; they are not presented as names universally adopted by the literature.</div>`
      },
      {
        title: "Why Distillation Matters in the LLM Ecosystem",
        body: `<p>The original motivation for KD was economical deployment: compress an ensemble or a high-capacity model into a cheaper student without discarding all of the teacher's learned structure [[60]]. This motivation remains central for LLMs because inference latency, accelerator memory, serving throughput, and energy cost scale poorly with model size. DistilBERT and TinyBERT established that distillation can be integrated into language-model pre-training rather than applied only to a downstream classifier [[62,63]]. Recent family-compression pipelines combine teacher supervision with structured pruning or architecture reduction, as in Minitron and Meta's disclosed Llama 3.2 1B/3B pipeline [[42,45]].</p>
        <p>LLM distillation also became a <strong>data-construction mechanism</strong>. Self-Instruct bootstraps instructions, inputs, and outputs from a language model and filters invalid or redundant generations before fine-tuning [[36]]. Stanford Alpaca used 52K instruction-following demonstrations generated by text-davinci-003 to fine-tune LLaMA 7B [[37]]. These systems do not require access to teacher weights or logits; the teacher is valuable because it supplies a scalable synthetic supervision channel.</p>
        <p>The transferred object has since expanded from answers to <strong>process supervision</strong>. Orca trains on complex explanation traces and uses progressive learning from different teacher strengths [[38]]. Orca 2 focuses on task-appropriate reasoning strategies rather than imitation of a single fixed reasoning style [[39]]. DeepSeek-R1 publicly identifies six dense Qwen- and Llama-based students trained on reasoning data generated by R1 [[44]]. These examples motivate a distinction between <em>response distillation</em>, which imitates visible outputs, and <em>reasoning or process distillation</em>, which attempts to transfer intermediate solution behavior.</p>
        <p>Finally, distillation is now a production workflow rather than only a research loss. Google states that Gemini 1.5 Flash was trained through distillation from Gemini 1.5 Pro [[46]], while OpenAI provides an authorized hosted workflow that combines frontier-model outputs, evaluations, dataset construction, and fine-tuning of lower-cost models [[47]]. Multi-model data pipelines can assign generation, critique, scoring, filtering, and safety roles to different models; toolkits such as distilabel operationalize this orchestration [[56]].</p>
        <div class="claim-box"><b>Why auditing follows from deployment</b>Once teacher-generated supervision can be collected through an API, the same mechanism supports authorized compression, reproducible research, contractual use, or unauthorized capability harvesting. The technical question—whether and how a teacher influenced a student—must therefore be separated from the policy question of whether that use was permitted. Provider telemetry may support claims about coordinated collection campaigns [[49]], but it is a different evidence channel from post-release analysis of the resulting model.</div>`
      },
      {
        title: "Distillation, Fine-tuning, Extraction, and Lineage",
        body: `<p>Several adjacent concepts are routinely conflated because they can occur in the same engineering pipeline. The distinctions below are operational rather than purely semantic: each concept defines a different causal claim and therefore requires different evidence.</p>
        <table class="matrix comparison-table"><thead><tr><th>Concept</th><th>What it describes</th><th>Minimum evidence for the claim</th></tr></thead><tbody>
          <tr><td>Fine-tuning</td><td>A parameter-update stage on a selected objective and dataset.</td><td>Training configuration, checkpoint change, or task-adaptation evidence.</td></tr>
          <tr><td>Knowledge distillation</td><td>Teacher-generated supervision used to update a student.</td><td>Evidence that the supervision was causally produced by the candidate teacher.</td></tr>
          <tr><td>Model extraction</td><td>An attack or acquisition objective that recovers functionality through queries.</td><td>A victim-query process and a substitute whose functionality is recovered from those responses.</td></tr>
          <tr><td>Model compression</td><td>Reduction of serving or storage cost by pruning, quantization, architecture reduction, or distillation.</td><td>A measured efficiency change; distillation is only one possible mechanism.</td></tr>
          <tr><td>Model lineage</td><td>The broader graph of checkpoint inheritance, continued training, merging, compression, and teacher influence.</td><td>Evidence that distinguishes the relevant edge type from plausible alternatives.</td></tr>
        </tbody></table>
        <h3>Fine-tuning is an optimization operation; distillation identifies the supervision source</h3>
        <p>A student trained on teacher-generated answers is both fine-tuned and distilled. A model trained on human labels or a public corpus may be fine-tuned without being distilled. Likewise, <em>self-distillation</em> is possible when a later model or checkpoint learns from supervision generated by itself or an earlier version. The phrase “fine-tuned from model X” generally describes weight ancestry, whereas “distilled from model Y” describes a supervision dependency; the two models need not be the same.</p>
        <h3>Model extraction is a threat objective, not a synonym for distillation</h3>
        <p>Prediction-API extraction work established that an adversary can query a target and train a substitute from the returned labels or scores [[29]]. Knockoff Nets extended this idea using adaptively constructed transfer sets [[30]], and later work demonstrated extraction against NLP and sequence-generation APIs [[31,32]]. Response distillation is one training mechanism available to an extractor, but extraction additionally includes query selection, coverage, account infrastructure, and the target functionality being recovered.</p>
        <p>This distinction matters because visible imitation does not guarantee broad capability transfer. The False Promise of Imitating Proprietary LLMs reports that imitation data can reproduce style while failing to transfer capability outside the sampled task distribution [[33]]. An audit should therefore avoid treating surface phrasing as sufficient evidence of teacher dependence.</p>
        <h3>Lineage is a typed graph, not a nearest-neighbor label</h3>
        <p>A released student may inherit its tokenizer and weights from one base family, receive responses or reasoning data from a second model, and receive preference judgments from a third. DeepSeek-R1-Distill, for example, discloses Qwen- and Llama-based students trained on R1-generated reasoning data [[44]]. In this case the <em>weight parent</em> and the <em>output teacher</em> are different. Reliable provenance analysis must identify the edge type—checkpoint inheritance, continued pre-training, supervised fine-tuning, merging, or distillation—rather than simply report the candidate with the highest behavioral similarity [[9,59]].</p>`
      },
      {
        title: "From Classical KD to LLM Data Factories",
        body: `<p>The evolution of language-model distillation can be read as a progressive expansion of the supervision interface. Early work assumed direct access to a teacher's predictive distribution. Sequence modeling introduced teacher-decoded targets. Pre-trained language models made intermediate representations and pre-training objectives central. Contemporary LLM pipelines can obtain supervision from closed APIs, use the student distribution to choose training contexts, and assign different supervision roles to different models.</p>
        <div class="method-timeline">
          <div class="timeline-item"><div class="timeline-year">2015</div><div><strong>Soft-target knowledge distillation.</strong><p>Temperature-scaled class distributions transfer information beyond the hard label [[60]].</p></div></div>
          <div class="timeline-item"><div class="timeline-year">2016</div><div><strong>Sequence-level knowledge distillation.</strong><p>Teacher-decoded sequences become supervision for structured generation rather than independent class decisions [[61]].</p></div></div>
          <div class="timeline-item"><div class="timeline-year">2019–2020</div><div><strong>Pre-trained language-model compression.</strong><p>DistilBERT integrates KD into pre-training; TinyBERT transfers embedding, hidden-state, attention, and prediction-layer knowledge [[62,63]].</p></div></div>
          <div class="timeline-item"><div class="timeline-year">2022–2023</div><div><strong>Synthetic instruction and explanation data.</strong><p>Self-Instruct and Alpaca scale instruction supervision; Orca transfers complex explanation traces [[36,37,38]].</p></div></div>
          <div class="timeline-item"><div class="timeline-year">2023–2024</div><div><strong>Generative and on-policy objectives.</strong><p>MiniLLM replaces standard forward KL with reverse KL for generative KD, while Generalized Knowledge Distillation trains on student-generated output sequences [[40,41]].</p></div></div>
          <div class="timeline-item"><div class="timeline-year">2024–2026</div><div><strong>Family compression and production pipelines.</strong><p>Pruning-assisted, reasoning-data, hosted, and multi-model pipelines make the true object of provenance a dependency graph rather than a single teacher–student pair [[42,44,45,47,56]].</p></div></div>
        </div>
        <p>Two methodological shifts are particularly important. First, the training distribution can become <strong>on-policy</strong>. Standard supervised KD trains on a fixed corpus, creating a mismatch between contexts observed during training and sequences produced by the student at inference. MiniLLM minimizes reverse Kullback–Leibler divergence and uses student-sampled sequences to reduce exposure bias [[40]]. Generalized Knowledge Distillation explicitly queries the teacher on student-generated output sequences and supports multiple divergence objectives [[41]].</p>
        <p>Second, teacher identity no longer determines teacher role. The same model may generate candidate answers, or a different model may critique, rank, rewrite, filter, or provide a reward signal. These operations can transfer decision boundaries without copying final text. Consequently, a modern audit must ask not only <em>which model contributed</em>, but also <em>through which supervision role and at which stage</em>.</p>
        <div class="survey-note"><b>Terminology discipline</b><em>Sequence-level knowledge distillation</em>, <em>reverse KL distillation</em>, <em>Generalized Knowledge Distillation</em>, <em>explanation traces</em>, and <em>progressive learning</em> are terms tied to specific papers [[61,40,41,38]]. By contrast, this observatory uses <em>composite distillation</em> as an umbrella label for multi-teacher, role-specialized, progressive, and multi-stage pipelines. The label is organizational and should be introduced as “we use the term,” not cited as an established consensus category.</div>`
      },
      {
        title: "A Unified Taxonomy and Threat Model",
        body: `<p>A useful taxonomy must separate dimensions that answer different questions. Calling a method merely “black-box distillation” identifies the teacher-access condition but does not say whether the student learned from final responses, reasoning traces, rankings, or tool trajectories. Similarly, “multi-teacher” describes topology but not the transferred signal. We therefore organize a pipeline along four axes.</p>
        <table class="matrix"><thead><tr><th>Axis</th><th>Question</th><th>Representative values</th></tr></thead><tbody>
          <tr><td>Knowledge signal</td><td>What supervision is transferred?</td><td>Logits, hidden representations, responses, explanation traces, preferences, critiques, tool trajectories</td></tr>
          <tr><td>Teacher topology</td><td>How are models connected?</td><td>Self-, single-, multi-teacher; progressive; role-specialized; multi-stage</td></tr>
          <tr><td>Audit access</td><td>What can the auditor observe?</td><td>Outputs, top-k logprobs, full logits, hidden states, routing, gradients, weights, training records</td></tr>
          <tr><td>Claim evidence</td><td>What supports the real-world conclusion?</td><td>Official disclosure, public artifact, controlled experiment, private telemetry, or reporting</td></tr>
        </tbody></table>
        <p>Formally, let a model supply chain be a directed attributed graph <em>G</em> = (<em>V</em>, <em>E</em>). Each node is a model checkpoint or service. A directed edge <em>e</em><sub>i→j</sub> records an influence from model <em>M</em><sub>i</sub> to model <em>M</em><sub>j</sub>, together with an edge type <em>z</em> (for example, weight inheritance, response distillation, reasoning distillation, preference supervision, or merging), a teacher role <em>r</em>, and an access condition <em>a</em>.</p>
        <div class="equation">e<sub>i→j</sub> = (M<sub>i</sub>, M<sub>j</sub>, z, r, a, w), &nbsp; G = (V, E). <span class="eq-label">(4)</span></div>
        <p>The optional quantity <em>w</em> denotes an estimated influence strength. It should not automatically be interpreted as the exact proportion of training examples contributed by a teacher: behavioral influence, optimization weighting, filtering, and data volume are not generally identifiable from the final model alone.</p>
        <h3>Threat model</h3>
        <p>The suspect model may be open-weight or API-only. Candidate teachers may likewise be local models, public APIs, or undisclosed sources. The auditor may receive only final text, or progressively stronger evidence such as token probabilities, an earlier student checkpoint, hidden states, expert routing, parameters, or training manifests. The true teacher may be absent from the candidate pool, and several candidates may have contributed through different roles.</p>
        <p>These conditions imply an <strong>open-world, typed attribution problem</strong>. The desired output is not always a single label. It may be a provenance set with coverage guarantees [[7]], a dependency graph [[9]], or an abstention when the evidence cannot distinguish teacher influence from shared ancestry, public data, common third teachers, or ordinary capability convergence. The Model Provenance Constitution provides useful standardized relationship and reporting concepts, but such specifications should be kept distinct from empirical proof [[59]].</p>`
      },
      {
        title: "Requirements of a Reliable Distillation Audit",
        body: `<p>Distillation auditing asks whether observations from a suspect model are better explained by a candidate teacher relationship than by plausible alternatives. For a candidate teacher <em>T</em> and suspect student <em>S</em>, the basic decision can be written as</p>
        <div class="equation">H<sub>0</sub>: T did not supply distillation supervision to S &nbsp;&nbsp; versus &nbsp;&nbsp; H<sub>1</sub>: T supplied distillation supervision to S. <span class="eq-label">(5)</span></div>
        <p>The hard part is specifying <em>H</em><sub>0</sub>. Unrelated models are often too easy. A credible null must include models with the same base family, overlapping public data, similar capability, shared tokenizers, common third teachers, and comparable post-training. Model Provenance Testing treats output-only attribution as a multiple-hypothesis-testing problem against a baseline of unrelated-model similarities [[2]], while later provenance-set work replaces a forced winner with a statistically controlled set of plausible sources [[7]].</p>
        <div class="property-grid">
          <div class="property-card"><b>Construct validity</b>The score must measure teacher-induced dependence rather than generic answer quality, model size, style, tokenizer overlap, or shared ancestry.</div>
          <div class="property-card"><b>Discriminability and specificity</b>The method should separate the true teacher from hard negatives and distinguish distillation from checkpoint inheritance, merging, or ordinary fine-tuning.</div>
          <div class="property-card"><b>Robustness</b>The conclusion should remain stable after decoding changes, prompt wrappers, continued fine-tuning, pruning, quantization, merging, paraphrasing, or multi-stage rewriting.</div>
          <div class="property-card"><b>Calibration and abstention</b>Reported confidence should match empirical error, account for multiple candidates, and support “unknown teacher” or “insufficient evidence” decisions.</div>
          <div class="property-card"><b>Efficiency</b>Black-box methods should report query cost at a fixed confidence or false-positive level; white-box methods should report required checkpoints, memory, and compute.</div>
          <div class="property-card"><b>Reproducibility and claim discipline</b>Training edges, hard negatives, prompts, access assumptions, and evidence sources must be documented. Provider telemetry and news reports cannot be presented as independently reproduced model-lineage proof.</div>
        </div>
        <p>Evidence channels have different strengths and failure modes. Output-only fingerprints and active probes can operate against APIs [[14,15]], but may be confounded by shared capability or prompt wrappers. Access to student weights and a teacher API enables data-free synthesis and stronger statistical scoring [[3]]. Reference checkpoints can isolate behavior acquired during a specific training interval [[6]], while representations, expert routing, gradients, and weight trajectories can provide more specific white-box traces [[4,8,10,11,12]]. Provider telemetry can reveal coordinated collection infrastructure unavailable to an external auditor, but it supports an operational campaign claim rather than a self-contained forensic result [[49]].</p>
        <div class="claim-box"><b>Claim ladder</b><strong>Detection</strong> asks whether some distillation occurred. <strong>Attribution</strong> asks which candidate teacher contributed. <strong>Role attribution</strong> asks whether the teacher generated, judged, critiqued, filtered, or rewarded. <strong>Mixture recovery</strong> estimates a teacher set or relative influence. <strong>Provenance reconstruction</strong> infers a typed multi-stage graph. Each step requires stronger assumptions than the previous one, and a paper should not report a higher-level claim using only a lower-level experiment.</div>
        <p>The remainder of this observatory follows this distinction. Distillation-method pages explain how supervision is produced; auditing pages study what traces survive; attacks and defenses examine collection and signal manipulation; evaluation pages define hard negatives, calibration, and robustness; and real-world pages separate official disclosure from experimental inference and allegation.</p>`
      }
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
      { title: "Preference and judge distillation", body: `<p>In preference- or judge-based distillation, the teacher does not need to generate the final answer. Given a prompt <em>x</em> and candidate outputs <em>y</em><sub>A</sub>, <em>y</em><sub>B</sub>, …, it can return a scalar score <em>r</em><sub>T</sub>(<em>x</em>, <em>y</em>), a ranking π<sub>T</sub>, a pairwise label such as <em>y</em><sub>A</sub> ≻<sub>T</sub> <em>y</em><sub>B</sub>, or a critique explaining why one candidate violates a rubric. These judgments can supervise a reward model, a preference classifier, or the student policy directly. {{cite:47,56}}</p><div class="worked-example"><div class="worked-example-title">Concrete example</div><div class="worked-example-grid"><div><b>Prompt</b><span>Explain why a highly confident model answer can still be unreliable.</span></div><div><b>Candidate A</b><span>Explains calibration error and distinguishes confidence from correctness.</span></div><div><b>Candidate B</b><span>Sounds fluent but claims that high confidence normally proves correctness.</span></div><div><b>Teacher judgment</b><span>Score(A)=0.82, Score(B)=0.31; A ≻ B; critique: “B overstates the evidential value of confidence.”</span></div><div><b>Student target</b><span>Increase the probability of choosing A-like responses and penalize unsupported certainty.</span></div></div></div><p>The inherited trace is therefore not necessarily a recognizable prose style. It may instead appear as agreement on pairwise winners, score margins, critique categories, refusal thresholds, or safety-rule boundaries. An auditor should construct controlled candidate pairs and compare these decisions, rather than only measure surface text similarity.</p>` },
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
  if (view === "preliminary") return ["r60", "r61", "r62", "r63"].includes(record.id) || cats.includes("surveys-tools") || includesAny(t, ["survey", "constitution", "copy, right", "model provenance testing"]);
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
const citationTokenPattern = /\[\[([0-9,\s]+)\]\]/g;
const expandCitationTokens = (html = "") => String(html).replace(citationTokenPattern, (_, raw) => citationHtml(raw.split(",").map((value) => Number(value.trim()))));
const inlineReferenceNumbers = (html = "") => {
  const refs = [];
  String(html).replace(citationTokenPattern, (_, raw) => {
    raw.split(",").map((value) => Number(value.trim())).filter(Number.isInteger).forEach((value) => refs.push(value));
    return "";
  });
  return refs;
};
const pageReferenceNumbers = () => {
  const configured = (SITE_CONTENT.sectionRefs?.[pageKey] || []).flat();
  const inline = (config?.sections || []).flatMap((section) => inlineReferenceNumbers(section.body));
  return [...new Set([...configured, ...inline])];
};
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
  const overviewSrc = language === "zh" ? "assets/figures/distillation-auditing-overview-zh.svg" : "assets/figures/distillation-auditing-overview-en.svg";
  const overviewCaption = language === "zh"
    ? "图 1. 大语言模型蒸馏与蒸馏审计的统一视图。点击图片可打开原尺寸 SVG。"
    : "Figure 1. A unified view of LLM distillation and distillation auditing. Open the SVG to inspect the full-resolution diagram.";
  const overviewFigure = pageKey === "preliminary" ? `<figure class="overview-figure"><a href="${overviewSrc}" target="_blank" rel="noopener"><img src="${overviewSrc}" alt="${esc(overviewCaption)}" loading="eager"></a><figcaption>${esc(overviewCaption)}</figcaption></figure>` : "";
  const detailRefs = citationHtml(pageReferenceNumbers().slice(0, 10));
  const detailPanel = details ? `<section class="panel scope-panel"><h2>${esc(ui.scopeTerminology || "Scope and terminology")}</h2><p>${details.overview} ${detailRefs}</p><h3>${esc(ui.keyTerms || "Key terms")}</h3><div class="term-list">${(details.terms || []).map((term) => `<span class="term-chip">${esc(term)}</span>`).join("")}</div></section>` : "";
  const paperFigure = PAPER_FIGURES[pageKey];
  const paperFigureText = paperFigure ? (paperFigure[language] || paperFigure.en) : null;
  const paperFigureBlock = paperFigure ? `<section class="panel paper-figure-panel"><div class="paper-figure-heading"><div><div class="eyebrow">${language === "zh" ? "2025 最新工作" : "Recent work · 2025"}</div><h2>${esc(paperFigureText.title)}</h2></div><a class="link-btn" href="${paperFigure.sourceHref}" target="_blank" rel="noopener">${language === "zh" ? "查看原论文 ↗" : "Open paper ↗"}</a></div><a class="paper-figure-image" href="${paperFigure.src}" target="_blank" rel="noopener"><img src="${paperFigure.src}" alt="${esc(paperFigureText.title)}" loading="lazy"></a><figcaption>${paperFigureText.caption} ${citationHtml([paperFigure.refNo])}</figcaption></section>` : "";
  const sectionRefRows = SITE_CONTENT.sectionRefs?.[pageKey] || [];
  const sections = (config.sections || []).map((section, index) => {
    const refs = sectionRefRows[index] || [];
    const hasInlineCitations = citationTokenPattern.test(section.body);
    citationTokenPattern.lastIndex = 0;
    const renderedBody = expandCitationTokens(section.body);
    return `<section class="panel topic-section"><h2>${section.title}</h2><div class="section-body">${renderedBody}${hasInlineCitations ? "" : citationHtml(refs)}</div>${refs.length && !hasInlineCitations ? `<div class="section-reference-note"><span>${esc(ui.citedReferences || "References")}</span>${citationHtml(refs)}</div>` : ""}</section>`;
  }).join("");
  const questions = details?.questions?.length ? `<section class="panel questions-panel"><h2>${esc(ui.researchQuestions || "Research questions")}</h2><ol>${details.questions.map((question) => `<li>${esc(question)}</li>`).join("")}</ol></section>` : "";
  const hasResources = Boolean(config.view);
  const resourceBlock = hasResources ? `<section class="literature-section"><h2>${esc(ui.selectedLiterature || "Selected literature and evidence")}</h2><p class="section-intro">${esc(ui.literatureIntro || "")}</p><p class="original-title-note">${esc(ui.originalTitleNote || "")}</p><div class="filters"><button class="filter-btn active" data-grade="all">${esc(ui.allEvidence || "All evidence")}</button><button class="filter-btn" data-grade="A">${esc(ui.evidenceA || "A")}</button><button class="filter-btn" data-grade="B">${esc(ui.evidenceB || "B")}</button><button class="filter-btn" data-grade="C">${esc(ui.evidenceC || "C")}</button><button class="filter-btn" data-grade="D">${esc(ui.evidenceD || "D")}</button><button class="filter-btn" data-grade="E">${esc(ui.evidenceE || "E")}</button></div><div id="resource-list" class="resource-list"></div></section>` : "";
  root.innerHTML = `<header><div class="eyebrow">${esc(config.eyebrow)}</div><h1>${esc(config.title)}</h1><p class="lead">${esc(config.lead)}</p></header>${overviewFigure}${callout}${stats}${detailPanel}${paperFigureBlock}${sections}${questions}${resourceBlock}`;
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
