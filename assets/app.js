const APP_ASSET_BASE = new URL(".", document.currentScript.src);
const DATA = (window.RESOURCE_DATA || []).map((record, index) => ({ ...record, refNo: index + 1 }));
let SITE_CONTENT = {};
let language = localStorage.getItem("distill-observatory-language") || "en";

const NAV_GROUPS = [
  {
    title: "Next Paper",
    pages: [
      ["paper-problem.html", "Black-box Audit Problem"],
      ["paper-method.html", "Method Candidates"],
      ["paper-benchmark.html", "Benchmark & Experiments"],
      ["paper-roadmap.html", "Paper Thesis & Roadmap"],
    ],
  },
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
      ["research-agenda.html", "Long-term Agenda"],
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
  "paper-problem": {
    eyebrow: "Next Paper · Problem Formulation",
    title: "Candidate-conditioned Black-box Distillation-Evidence Detection",
    lead: "A paper-focused formulation for testing whether an API-only suspect exhibits candidate-specific behavioral evidence consistent with distillation after explicit non-distillation controls.",
    callout: "Recommended primary task: candidate-wise distillation-evidence detection with calibrated three-state decisions. Unique teacher attribution is a controlled secondary summary; mechanism inference is auxiliary; full dependency-graph reconstruction remains future work.",
    sections: [
      {
        title: "The single scientific question",
        body: `<p>Let <em>S</em> be an API-only suspect model, <em>𝒯={T₁,…,Tₘ}</em> a finite candidate pool, <em>𝒞ᵢ</em> matched non-distillation controls for candidate <em>Tᵢ</em>, and <em>B</em> a query budget. For each candidate, test:</p><div class="equation">H<sub>0,i</sub>: S shows no more candidate-specific agreement with T<sub>i</sub> than matched controls; &nbsp; H<sub>1,i</sub>: the agreement exceeds that null. <span class="eq-label">(1)</span></div><div class="definition-box"><b>Candidate-conditioned black-box distillation-evidence detection</b>Return, for every candidate, a calibrated evidence score and one of three decisions: <em>evidence detected</em>, <em>no evidence detected at the preregistered effect size</em>, or <em>inconclusive</em> because the null, stability, or statistical power is inadequate.</div><p>The multi-candidate output is an <strong>evidence-supported candidate set</strong>, not a recovered teacher set and not causal provenance. Direct teacher tracing and provenance testing motivate candidate comparisons, while set-valued inference motivates multiplicity control; the paper's claim remains behavioral evidence rather than hidden training fact [[1,2,7]].</p>`
      },
      {
        title: "A hierarchy of claims",
        body: `<table class="matrix comparison-table"><thead><tr><th>Level</th><th>Question</th><th>Recommended role</th></tr></thead><tbody><tr><td>L1 · Candidate-conditioned evidence</td><td>Does S show excess candidate-specific evidence for Tᵢ relative to its matched null?</td><td><strong>Primary contribution</strong></td></tr><tr><td>L2 · Candidate summary</td><td>Which candidates have detected evidence after multiplicity correction?</td><td>Primary set-valued summary, not causal attribution</td></tr><tr><td>L3 · Unique attribution / teacher set</td><td>Can one or several true teachers be recovered?</td><td>Controlled closed-world auxiliary evaluation only</td></tr><tr><td>L4 · Mechanism / role</td><td>Which evidence channels are consistent with response, reasoning, preference, safety, or tool supervision?</td><td>Auxiliary profile under controlled ground truth</td></tr><tr><td>L5 · Dependency graph</td><td>What multi-stage directed graph generated the suspect?</td><td>Future work</td></tr></tbody></table><p>A single supported candidate does not prove that it was the causal teacher: unlisted sources, shared data, common teachers, or unmodeled post-training can remain. Each higher level requires stronger assumptions and separate evaluation [[9,59]].</p>`
      },
      {
        title: "Related-work positioning by inferential target",
        body: `<p>The paper should position neighboring audit families by <em>what latent fact they try to infer</em>, not only by whether they use black-box access. Similar statistics can support fundamentally different claims.</p><table class="matrix"><thead><tr><th>Research family</th><th>Inferential object</th><th>Typical intervention / access</th><th>Defensible claim</th><th>Boundary relative to this paper</th></tr></thead><tbody><tr><td>Distillation-evidence detection [[1,2,3,6,7]]</td><td>Candidate-model influence on a released student</td><td>Post hoc; output-only through weight access</td><td>Candidate-conditioned excess evidence under explicit controls</td><td><strong>Primary task</strong></td></tr><tr><td>Watermarking [[24,25,26,27]]</td><td>Survival of a provider-inserted mark</td><td>Proactive intervention in outputs, data, or training</td><td>The designated mark is present or transferred</td><td>Stronger intervention, different null</td></tr><tr><td>Fingerprinting [[14,15,16]]</td><td>Model identity or ownership-linked behavior</td><td>Natural or engineered probes; black-/white-box</td><td>Model identity, similarity, or ownership evidence</td><td>Identity does not imply a teacher–student edge</td></tr><tr><td>Membership inference [[64,65]]</td><td>Whether a data record appeared in training</td><td>Scores, references, neighborhoods, or generated samples</td><td>Sample-level training membership</td><td>Data-to-model relation, not model-to-model influence</td></tr><tr><td>Teacher attribution [[1,6]]</td><td>Which candidate teacher generated supervision</td><td>Usually controlled candidate pools and stronger lineage assumptions</td><td>Teacher identity under closed or validated conditions</td><td>Controlled auxiliary task only</td></tr><tr><td>Lineage / dependency recovery [[7,9,59]]</td><td>One or more typed derivation edges</td><td>Set-valued tests, trajectories, internal evidence, or manifests</td><td>Source set or dependency structure with stated uncertainty</td><td>Future work requiring stronger identifiability</td></tr></tbody></table><p>The contribution must therefore be written as an output-only, candidate-conditioned statistical audit with controlled alternatives. It is not a watermark, an identity fingerprint, a sample-membership attack, or unrestricted lineage reconstruction.</p>`
      },
      {
        title: "Experimental design requirements",
        body: `<table class="matrix"><thead><tr><th>Requirement</th><th>Concrete implementation</th><th>Failure interpretation</th></tr></thead><tbody><tr><td>Known causal edges</td><td>Train controlled students from permission-compatible teacher outputs while keeping the base model, prompts, target-token count, optimizer, and training schedule fixed.</td><td>Without controlled edges, behavioral similarity cannot validate causal sensitivity.</td></tr><tr><td>External disclosed pairs</td><td>Evaluate public distillation families separately by provenance type: output distillation, multi-teacher logit distillation, and pruning-plus-distillation.</td><td>Pooling them as one positive class hides different supervision mechanisms and confounds.</td></tr><tr><td>Finite audit events</td><td>Use answer choices, next-step choices, A/B/tie judgments, error locations, refusal categories, and tool selections.</td><td>Free-form semantic matching can reproduce style similarity rather than training influence.</td></tr><tr><td>Candidate-only discovery</td><td>Build paired boundary probes from candidate and control outputs before querying the suspect.</td><td>Using suspect responses during probe selection invalidates confirmatory inference.</td></tr><tr><td>Randomization falsification</td><td>Shuffle teacher labels, candidate-to-probe assignments, and paired edits; compare with semantic-matched random probes.</td><td>A signal that survives destroyed teacher correspondence is not candidate-specific evidence.</td></tr><tr><td>Serving-path manifest</td><td>Freeze exact model slug, provider, system message, reasoning mode, decoder, date, region, and SDK version.</td><td>Mutable aliases or hidden routing can make apparent evidence non-reproducible.</td></tr><tr><td>Clean-output generalization</td><td>Exclude every audit item and near duplicate from training; positive students use only ordinary teacher-generated supervision.</td><td>Detection based on audit-item memorization does not establish general distillation evidence.</td></tr></tbody></table>`
      },
      {
        title: "Identifiability contract: two different estimands",
        body: `<div class="definition-box"><b>Controlled causal estimand</b>Among independently trained students with the same base checkpoint, prompt IDs, non-teacher data, optimizer, token budget, and post-training, estimate the effect of random assignment to teacher T<sub>i</sub> supervision rather than no-teacher or alternative-teacher supervision.</div><div class="equation">τ<sub>i</sub> = E[Y(S)\mid do(A=T<sub>i</sub>)] − E[Y(S)\mid do(A=control)]. <span class="eq-label">(3)</span></div><div class="definition-box"><b>Commercial observational estimand</b>For a version-pinned suspect endpoint, estimate excess candidate-conditioned behavioral evidence relative to the declared control panel. This quantity is an association under the audit protocol; it cannot identify a direct edge or exclude shared data, common teachers, indirect distillation, ancestry, or convergence.</div><p>The benchmark can therefore evaluate whether the audit statistic is sensitive and specific to a randomized direct training edge. The commercial study can only ask whether an endpoint is unusually compatible with a candidate and which mechanism channels carry that compatibility. A paper that converts the second estimand into the first is invalid, regardless of performance.</p>`
      },
      {
        title: "Threat model and access model",
        body: `<p>The test-time method requires black-box outputs from the suspect and either live access to each candidate or a preregistered candidate-response archive collected under the same prompt protocol. Repeated sampling, token log-probabilities, or tool-call traces are optional access tiers; the core result must survive ordinary prediction APIs. The candidate pool may be incomplete.</p><p>White-box or open-weight models provide controlled training edges, minimum detectable effects, causal ablations, and stress tests. Their internal signals and pre-distillation checkpoints are never required by the final decision rule. Candidate-wise decisions must distinguish <em>no detected evidence</em> from <em>inconclusive</em>; failure to reject an underpowered or unstable null is not evidence of absence.</p>`
      },
      {
        title: "Decision semantics, minimum effect, and power",
        body: `<p>The three decisions require two complementary tests. <strong>Detected</strong> means the candidate-conditioned effect is significantly above the matched-control null after multiplicity correction. <strong>Not detected</strong> is stronger than failing to reject that null: it requires an equivalence test showing that the effect lies inside a preregistered negligible-effect interval <em>[−δ*, δ*]</em> with target power <em>1−β*</em>. Otherwise the result is <strong>inconclusive</strong>.</p><div class="equation">d<sub>i</sub>=not\ detected \Longleftrightarrow CI<sub>1−2α</sub>(Δ<sub>i</sub>) ⊂ [−δ*,δ*] \;\land\; Power(δ*)≥1−β*. <span class="eq-label">(2)</span></div><p>The benchmark must estimate <em>δ*</em> from controlled lineages before the test set is opened, report sensitivity over scientifically plausible margins, and plan inference-query counts for the declared α, β*, API variance, and candidate multiplicity. A wide confidence interval, unstable null, or inadequate budget can only yield inconclusive.</p>`
      },
      {
        title: "Mechanism uncertainty",
        body: `<p>A suspect may inherit different objects from a teacher: final responses, reasoning traces, pairwise preferences, critiques, safety decisions, or tool trajectories. Therefore one generic text-similarity score is unlikely to be uniformly diagnostic. The auditor should maintain a family of mechanism-conditioned evidence channels rather than assume one distillation objective.</p><p>The intended output is an evidence profile such as <em>response-consistent</em>, <em>preference-consistent</em>, or <em>reasoning-consistent</em>. On controlled students this profile can be evaluated against ground truth. On commercial APIs it must be reported as consistency evidence, not proof of a hidden training recipe.</p>`
      },
      {
        title: "Confounders that define the paper",
        body: `<p>The difficult negatives are not random independent models. They include models sharing a base checkpoint, tokenizer, public instruction corpus, common synthetic-data generator, third-party teacher, RLHF preference data, safety policy, architecture, or deployment wrapper. Capability convergence can also create common correct answers without any direct training edge.</p><p>Operational factors—system prompts, decoding temperature, routing among backend models, silent model updates, refusal wrappers, and API nondeterminism—must be modeled as nuisance variation. A credible paper is distinguished by its hard-negative design and abstention behavior, not by high similarity on easy model pairs.</p>`
      },
      {
        title: "What commercial-API results may claim",
        body: `<div class="claim-box"><b>Permitted conclusion</b>“Under a preregistered candidate pool, prompt protocol, matched-control null, effect size, and multiplicity correction, candidate-specific behavioral evidence for T was detected / not detected / remained inconclusive.”</div><div class="claim-box"><b>Not permitted without external ground truth</b>“T was the teacher,” “S was definitely distilled from or stole T,” “no distillation occurred,” “the exact mixture weight is x%,” or “the hidden training graph was reconstructed.”</div><p>Official disclosures may provide controlled observational cases, but provider telemetry and reporting remain separate evidence classes. Commercial API experiments validate the audit protocol's external behavior, not an unknown causal lineage [[45,47,49]].</p>`
      },
    ],
    view: "research-agenda",
  },
  "paper-method": {
    eyebrow: "Next Paper · Method Design",
    title: "Candidate-Specific Behavioral Echo Testing",
    lead: "A black-box audit that tests complementary teacher-specific signatures—paired boundary transitions, structural response patterns, and rare-error or action patterns—without assuming any one signature must survive distillation.",
    callout: "Evidence supports the broader transfer of teacher-specific, non-task-essential behavior. Local boundary transfer is one plausible channel, not a universal premise. A selection-valid max-statistic detects whichever signature survives; signature follow-up does not by itself prove the hidden supervision recipe.",
    sections: [
      {
        title: "Evidence-backed hypothesis · behavioral echoes",
        body: `<p>The defensible premise is not that every distilled LLM must copy one geometric object. It is that ordinary output distillation can transfer <strong>candidate-specific behavior that is not required for task success</strong>. Direct LLM evidence already shows inherited syntactic templates, teacher-specific action patterns, rewritten reasoning-trace signatures, and teacher memorization; decision-boundary transfer is supported by general KD and task-aware LLM counterfactual distillation, but still requires direct verification under ordinary LLM output distillation [[1,86,87,88,89,90,91]].</p><table class="matrix"><thead><tr><th>Signature family</th><th>Existing support</th><th>Status in this paper</th></tr></thead><tbody><tr><td>Paired local-boundary transitions</td><td>Decision-boundary KD, decision-only black-box KD, counterfactual LLM KD, and finite-answer LLM fingerprint transfer [[80,86,87,91]]</td><td><strong>Plausible but provisional</strong>; retained only if the preliminary controlled experiment produces consistent results for both teachers.</td></tr><tr><td>Structural / POS response patterns</td><td>Distilled students retain teacher-preferred POS templates, while raw output similarity is unreliable [[1]]</td><td><strong>Direct LLM support</strong>; primary signature family.</td></tr><tr><td>Rare-error, reasoning, or action patterns</td><td>Controlled agent distillation produces teacher-specific action-graph convergence; trace and memorization properties also transfer [[88,89,90]]</td><td><strong>Direct LLM support</strong>; primary signature family.</td></tr></tbody></table><p>The central hypothesis is therefore existential rather than universal:</p><div class="equation">H_{1,i}: \max_{s\in\{B,S,E\}}\theta_{i,s}>0, <span class="eq-label">(2)</span></div><p>where <em>B</em>, <em>S</em>, and <em>E</em> denote boundary, structural, and error/action signatures. If only a structural or action signature survives, the method remains valid but the boundary-centric claim is discarded.</p>`
      },
      {
        title: "Three signature families and concrete interfaces",
        body: `<table class="matrix"><thead><tr><th>Signature</th><th>Discovery object</th><th>Held-out interface</th><th>Candidate-specific score</th></tr></thead><tbody><tr><td><strong>B · Paired boundary transition</strong></td><td>Transformation rules where the candidate stably changes a finite answer while matched models do not</td><td>300 fresh MCQ, next-subgoal, A/B/tie, or tool-choice pairs</td><td>Excess probability that the suspect reproduces the candidate's <em>a⁰→a¹</em> transition.</td></tr><tr><td><strong>S · Structural response pattern</strong></td><td>Candidate-preferred POS n-grams, discourse skeletons, answer-opening templates, and step-count bins</td><td>300 fresh open-ended prompts balanced by task and output length</td><td>Control-normalized frequency or likelihood of candidate-preferred structural templates.</td></tr><tr><td><strong>E · Error / reasoning / action pattern</strong></td><td>Candidate-specific rare wrong labels, first-error categories, optional subgoal order, or tool-action graph motifs</td><td>300 fresh difficult tasks where multiple valid solution paths exist</td><td>Control-normalized agreement on non-mandatory failure or action structure.</td></tr></tbody></table><p>All three families use candidate-only discovery and fresh inference instances. Raw answer agreement, BERTScore, teacher perplexity, POS-only classification, boundary-only testing, and generic provenance similarity are mandatory baselines. The preliminary experiment uses ordinary teacher outputs on identical mixed prompts; no watermark or special signature is injected.</p>`
      },
      {
        title: "Two estimands: population transfer and individual detection",
        body: `<p>The research program has two distinct estimands that must never be merged. <strong>D0 population feasibility</strong> asks whether assigning teacher <em>Tᵢ</em>'s outputs causes a positive average change in a signature family across independently trained students:</p><div class="equation">τ<sub>i,s</sub>=E[g<sub>s</sub>(S(T<sub>i</sub>))]−E[g<sub>s</sub>(S(control))]. <span class="eq-label">(3)</span></div><p>D0 supports only a population statement about the tested training pipeline. It does not estimate the error rate of classifying one unseen model.</p><p><strong>D1 individual detection</strong> instead freezes a decision rule <em>δ</em><sub>i</sub>(S) for one previously unseen suspect and evaluates model-level sensitivity, specificity, false attribution, evidence-set precision, and abstention on untouched trained models. Prompt items and repeated generations are nested measurements; the trained model is the resampling and permutation unit in both studies.</p><p>Each signature family <em>s∈{B,S,E}</em> defines a bounded score. D0 uses seed-block causal contrasts and an algorithm-level max statistic only to test whether any family transfers on average. D1 calibrates feature selection, signature selection, candidate multiplicity, and thresholds on an independent calibration cohort; the entire pipeline is then frozen before untouched confirmation. No D0 model may be reused as a D1 confirmation model.</p>`
      },
      {
        title: "Selection-valid candidate-specific discovery",
        body: `<p>Prompt templates, task generators, and semantic families are split before any model query into discovery and disjoint inference partitions. For each candidate and signature family, discovery selects a transformation rule, structural template set, or error/action motif using candidate stability and control contrast:</p><div class="equation">A<sub>i,s</sub>(D<sub>disc</sub>)=argmax<sub>A∈𝒜<sub>s</sub></sub>[Specificity<sub>i</sub>(A)·Stability<sub>i</sub>(A)·(1−ControlTransfer(A))]. <span class="eq-label">(4)</span></div><p>The selected object is instantiated on fresh entities, numbers, answer options, response prompts, or tool scenarios from the inference partition; no discovered item or near duplicate is reused. Confirmatory uncertainty reruns <em>A</em><sub>i,s</sub> inside every valid randomization. Cached discovery responses make this rerun query-free. Baselines receive identical discovery and inference budgets.</p>`
      },
      {
        title: "Individual decision rule after independent calibration",
        body: `<p>The three-state candidate decision belongs to D1, not D0. For an untouched suspect model, the frozen rule returns:</p><div class="equation">d<sub>i</sub>(S)∈{detected,not\ detected,inconclusive}, &nbsp; Ê<sub>α</sub>(S)={T<sub>i</sub>:d<sub>i</sub>(S)=detected}. <span class="eq-label">(5)</span></div><p><strong>Detected:</strong> the frozen omnibus score exceeds the candidate-wise threshold calibrated on independently trained models and survives multiplicity correction. <strong>Not detected:</strong> all signature effects are practically negligible at the preregistered resolution and the confirmation cohort demonstrates adequate model-level power. <strong>Inconclusive:</strong> neither condition holds or the suspect lies outside the calibration envelope.</p><p>D1 reports false attribution on candidate-absent models, singleton and set-valued precision, coverage, abstention, and sensitivity separately. Hierarchical follow-up identifies the observable signature that contributed to detection; it cannot uniquely identify response, reasoning, or preference supervision. The evidence-supported set is not causal provenance [[2,7]].</p>`
      },
      {
        title: "Power-aware model and query budgeting",
        body: `<p>More prompts improve measurement precision within one model but do not create more independently trained models. D0 therefore powers the paired seed-block population contrast; D1 separately powers sensitivity and false-attribution estimates across untouched models.</p><p>Discovery queries, calibration queries, and confirmation queries are budgeted separately. Before D1 confirmation, freeze the per-signature scores, candidate set, max-statistic, thresholds, negligible-effect regions, abstention rule, decoding protocol, and all exclusions. Adaptive querying cannot redefine any of these after confirmation begins.</p><p>Report model-level confidence intervals for every operating characteristic. Prompt-cluster and repeat-sampling uncertainty is handled hierarchically inside each trained model, never substituted for the number of independent models.</p>`
      },
      {
        title: "Worked hierarchical audit example",
        body: `<p>Suppose three candidates are tested with eight independently trained suspect models and 900 held-out items: 300 for each signature family. Independently trained models are the inferential units; prompts and repeated generations are nested measurements. Family-specific negligible-effect margins and a selection-valid maxT null are frozen before evaluation.</p><table class="matrix"><thead><tr><th>Candidate</th><th>Boundary θ̂ / Z</th><th>Structure θ̂ / Z</th><th>Error/action θ̂ / Z</th><th>Joint maxT p</th><th>Follow-up / equivalence</th><th>Decision</th></tr></thead><tbody><tr><td>T₁</td><td>0.28 / 3.92</td><td>0.05 / 0.88</td><td>0.03 / 0.51</td><td>0.010</td><td>Boundary follow-up passes; others unsupported</td><td><strong>DETECTED · boundary echo</strong></td></tr><tr><td>T₂</td><td>0.01 / 0.18</td><td>−0.01 / −0.21</td><td>0.02 / 0.33</td><td>0.93</td><td>All simultaneous intervals are negligible; power ≥0.84</td><td><strong>NOT DETECTED</strong></td></tr><tr><td>T₃</td><td>0.02 / 0.39</td><td>0.13 / 2.04</td><td>0.01 / 0.17</td><td>0.16</td><td>Structural interval crosses zero and its practical margin; power=0.57</td><td><strong>INCONCLUSIVE</strong></td></tr></tbody></table><p>T₁ is detected because one signature family survives strongly; inactive families do not dilute it. The follow-up says the observable echo is boundary-like, not that the hidden training recipe is known. T₂ receives a negative conclusion only because all families are equivalent with adequate power. T₃ remains inconclusive.</p><div class="notice">These values are pedagogical. The preliminary validation experiment below determines which signature families, if any, deserve to remain in the final paper.</div>`
      },
      {
        title: "From observable signatures to training mechanisms",
        body: `<p>Boundary, structural, and error/action signatures describe <strong>what survived</strong>, not necessarily <strong>how the student was trained</strong>. Ordinary response distillation can transfer style and errors; reasoning-trace distillation can affect structure and boundary behavior; preference data can alter both language patterns and decisions.</p><p>Mechanism recovery is therefore a separate controlled task. Only after candidate detection succeeds do mechanism-isolated students test whether a signature profile distinguishes response targets, reasoning traces, and pairwise preferences. On commercial APIs the site reports the signature profile without converting it into a hidden-recipe claim.</p>`
      },
      {
        title: "Candidate B · Reference-normalized development diagnostic",
        body: `<p>When an open-weight student and a pre-distillation or base checkpoint are available, measure the change induced during the suspected distillation stage:</p><div class="equation">R<sub>i,r</sub> = [sim<sub>r</sub>(S,T<sub>i</sub>) − sim<sub>r</sub>(S<sub>0</sub>,T<sub>i</sub>)]. <span class="eq-label">(7)</span></div><p>This design can validate whether mechanism-conditioned signatures respond causally to a known training edge and can diagnose shared-base confounding [[3,6]]. It is a development instrument and ablation baseline—not the final commercial-API requirement.</p>`
      },
      {
        title: "Boundary-transition submethod retained only after preliminary validation",
        body: `<p>If the preliminary controlled experiment confirms paired boundary transfer for both teachers, expand the boundary family with controlled variants that preserve task semantics while changing answer order, numerical thresholds, reasoning visibility, safety framing, or tool availability. The selected rule must generalize to fresh entities and unseen transformation seeds.</p><p>If boundary transfer fails but structural or action signatures pass, remove the geometric language from the paper rather than rescuing it post hoc. Boundary testing then becomes a documented negative result, not the method core.</p>`
      },
      {
        title: "Conditions required for a method contribution",
        body: `<p>Prior work already provides teacher tracing via POS templates, behavioral provenance tests, action-graph convergence, boundary-informed KD, trace watermark transfer, and finite-answer counterfactual fingerprints [[1,2,7,14,15,80,86,87,88,89,90,91]]. The paper is novel only if the <strong>candidate-specific multi-signature audit</strong>, <strong>selection-valid max-statistic</strong>, and <strong>small controlled validation followed by prespecified expansion</strong> improve calibrated teacher detection or query efficiency beyond the strongest single-signature baseline.</p><div class="notice">There is no method contribution if POS-only, action-graph-only, boundary-only, or generic provenance testing matches the omnibus test after leave-one-seed-block-out evaluation. The max test must add robustness across teachers rather than merely search many noisy features.</div>`
      },
      {
        title: "Recommended method boundary",
        body: `<div class="survey-note"><b>D0 population claim</b>Test whether ordinary teacher-output assignment causes an average candidate-specific behavioral echo across independently trained students assigned to different training conditions. D0 does not validate a detector for one model.</div><div class="survey-note"><b>D1 detector claim</b>Only an independently calibrated and untouched confirmation cohort may support model-level sensitivity, specificity, false attribution, evidence-set precision, and abstention.</div><div class="survey-note"><b>Conditional direction</b>If only structural or action signatures transfer at the population level, retain those families and delete the boundary-centric claim before D1.</div><div class="survey-note"><b>Stop condition and alternative direction</b>If no natural signature transfers under matched controls, stop passive lineage inference and move to non-causal convergence analysis, active trace watermarking, or provider-side telemetry [[88,89]].</div>`
      }
    ],
    view: "research-agenda",
  },
  "paper-benchmark": {
    eyebrow: "Next Paper · Benchmark",
    title: "Benchmark and Experimental Protocol",
    lead: "Begin with publicly disclosed teacher–student pairs, then run a single-A100 preliminary experiment with four explicitly defined training conditions, and expand to multi-seed causal validation only if candidate-teacher-specific behavior remains above matched controls.",
    callout: "Do not begin with the full 32-student D0 or 72-run mechanism experiment. First check known public distillation relationships, then use one A100 to verify the training, querying, and scoring procedure. Population effects require multiple independently trained student models.",
    sections: [
      {
        title: "Recommended experimental sequence for candidate-specific behavior",
        body: `<p>The recommended experiment has three concrete steps. First, test whether known public distillation pairs show candidate-teacher-specific directional transitions. Second, compare four explicitly defined training conditions to exclude base-model, alternative-teacher, and generic synthetic-training explanations. Third, increase the number of independently trained students.</p><table class="matrix"><thead><tr><th>Step</th><th>Concrete design</th><th>Compute</th><th>Decision and allowed conclusion</th></tr></thead><tbody><tr><td><strong>Step 1 · Check public distillation pairs without training</strong></td><td>Evaluate disclosed reasoning-distillation students and their base checkpoints, including the DeepSeek-R1-Distill family and OpenThoughts-derived artifacts. Discover probes from the candidate and matched controls only; test for diagonal candidate preference on fresh instances [[58,69]].</td><td>No student training; local inference on 7B-class checkpoints plus a fixed candidate endpoint where needed.</td><td>Continue only if public positives show larger base-normalized candidate echoes than alternative-teacher and base controls. This is external plausibility, not detector validation.</td></tr><tr><td><strong>Step 2 · Small controlled experiment with four training conditions</strong></td><td>Use <code>Qwen/Qwen3-1.7B-Base</code> and response-only LoRA-r16 to train four groups: T₁-output students, T₂-output students, same-family shadow-teacher students, and public-target students. Use one random seed to verify the full procedure, then run four paired random seeds if training and scoring are correct [[92,93,94,95]].</td><td>One A100 running models sequentially; finite-answer probes and short outputs. Procedure check: 0.2–0.5M target tokens. Small effect check: up to 8M target tokens per student.</td><td>For both teachers, the corresponding teacher-output group must reproduce its teacher's directional transitions more often than the alternative-teacher, shadow-teacher, and public-target groups on fresh tasks. The difference must disappear after candidate–probe correspondence is shuffled. Four random seeds only determine whether expansion is justified.</td></tr><tr><td><strong>Step 3 · Population-effect validation with 32 independent students</strong></td><td>Expand the same frozen four training conditions to eight paired random seeds per condition, for 32 independently trained students. After training-condition labels are revealed, do not alter probes, score definitions, exclusions, or the smallest effect of interest.</td><td>One A100 is sufficient sequentially; additional GPUs shorten total runtime but do not change the number of independent models used for inference.</td><td>Only this stage supports an average causal transfer claim. D1 individual-model detection begins only after D0 meets its preregistered continuation criteria.</td></tr></tbody></table><p>The primary preliminary-experiment statistic is the candidate transition rate of the teacher-trained student minus the hardest matched control. The initial boundary channel uses 240 held-out paired probes with budget curves at 20/40/80/120/240 pairs; structural behavior is retained as a secondary positive-control channel. Long free-form reasoning is deferred until the finite-answer signal is established.</p><div class="claim-box"><b>Practical stop condition</b>If public distillation pairs do not show higher scores for the disclosed teacher than for alternative teachers and base models, or if the teacher-output groups do not differ reliably from the shadow-teacher and public-target groups, stop the boundary-transition method before committing to 32 students or 72 mechanism-controlled runs.</div>`
      },
      {
        title: "Compute and experimental precedent in related work",
        body: `<p>Prior work indicates that the proposed feasibility study is within single-A100 reach. The main cost is not fitting one model in memory; it is training enough independent student models to distinguish a teacher effect from seed variation.</p><table class="matrix"><thead><tr><th>Work</th><th>Reported hardware</th><th>Experimental scale</th><th>Design lesson for this project</th></tr></thead><tbody><tr><td><strong>Who Taught You That?</strong> [[1]]</td><td>2× NVIDIA A100; memory size not specified.</td><td>Five teacher candidates, GPT-2/OLMo-1B students, multiple summarization/QA/instruction tasks; 10k Alpaca prompts; lr 3e-5 and task-dependent batches.</td><td>Teacher attribution is feasible on modest hardware, but static POS/output aggregation must be a baseline rather than our claimed novelty.</td></tr><tr><td><strong>AgentEcho</strong> [[88]]</td><td>GPU type not disclosed; many main evaluations use provider APIs.</td><td>Controlled LoRA of Qwen2.5-14B-Instruct on 200 teacher trajectories, rank 16, lr 2e-5, 10 epochs.</td><td>A small trajectory set can move non-mandatory behavior; compare against an alternative teacher rather than only the pre-training checkpoint.</td></tr><tr><td><strong>Trace Rewriting</strong> [[89]]</td><td>Nodes with 4× A100 or H100; authors state one such GPU is sufficient for an individual experiment.</td><td>1B–8B students, vLLM generation, LoRA rank/alpha 128, batch 32, four epochs, outputs up to 1k–2k tokens.</td><td>One A100 can support our smaller finite-answer 1.7B/7B pipeline; long reasoning should remain a later secondary protocol.</td></tr><tr><td><strong>Counterfactual KD</strong> [[87]]</td><td>4× RTX A6000.</td><td>Qwen2.5-1.5B teacher to 0.5B student, paired counterfactual inputs, budgets from 8 to 512 examples, five independent runs.</td><td>Use controlled input pairs, query-budget curves, and repeated runs; do not infer a boundary from a single stochastic response.</td></tr><tr><td><strong>ESF</strong> [[96]]</td><td>2× NVIDIA H20 for fingerprint generation experiments.</td><td>0.5B–8B LLMs; fine-tuning, LoRA, backdoor, INT4/INT8, and replacement; ten independent derived models per tamper type.</td><td>Independent derived models—not thousands of prompts—are what make model-level error estimates credible.</td></tr><tr><td><strong>Membership and Memorization in KD</strong> [[90]]</td><td>Exact GPU configuration not reported.</td><td>Teacher/student families from GPT-2, OPT, and Llama; several KD methods and privacy attacks on Dolly-15k.</td><td>Report missing hardware honestly and separate mechanism grids from the core feasibility claim.</td></tr><tr><td><strong>Decision-only / boundary KD</strong> [[86,91]]</td><td>Exact GPU configuration not reported.</td><td>Multiple datasets and network pairs; repeated boundary searches or boundary-supporting samples.</td><td>These works motivate directional transitions, but their continuous image perturbations must be replaced by semantically controlled text edits.</td></tr></tbody></table><div class="survey-note"><b>Resource conclusion</b>A single A100 can complete the recommended public distillation-pair check and the 1.7B preliminary experiment with four training conditions sequentially. Extra GPUs mainly shorten wall-clock time. The scientifically non-negotiable resource is the number of independently trained students.</div>`
      },
      {
        title: "Layer 1 · Controlled open-weight lineage",
        body: `<p>Construct students with known edges while exposing only black-box outputs to the proposed method. Vary candidate identity and supervision mechanism: response/instruction, reasoning/process, preference/judge, safety/filtering, and optionally tool trajectories. Include single-teacher students first, then limited two-teacher students with role separation.</p><p>White-box training logs and checkpoints provide ground truth for evaluation and ablation. They are not method inputs. This layer answers whether the black-box evidence statistic responds to the causal training edge rather than merely to family similarity.</p>`
      },
      {
        title: "D0 · Population-level natural-signature feasibility",
        body: `<p>D0 asks one population-level causal question: under the frozen training pipeline, does assigning ordinary outputs from candidate teacher T₁ or T₂ cause a positive average behavioral-echo effect across independently trained students? D0 does <strong>not</strong> validate an individual-model detector.</p><table class="matrix"><thead><tr><th>Component</th><th>Frozen design</th></tr></thead><tbody><tr><td>Candidate teachers</td><td><code>Qwen/Qwen3-8B</code> and <code>meta-llama/Llama-3.1-8B-Instruct</code> [[92,93]]</td></tr><tr><td>Student</td><td><code>Qwen/Qwen3-1.7B-Base</code>, LoRA rank 16, shared initialization checkpoints across paired seed blocks [[94]]</td></tr><tr><td>Controls</td><td><code>Qwen/Qwen3-1.7B</code> shadow-teacher outputs and public-reference targets [[95]]</td></tr><tr><td>D0a high-volume training conditions</td><td>T₁ outputs, T₂ outputs, shadow-teacher outputs, and public targets; 8 matched independent random seeds per training condition = <strong>32 trained models</strong></td></tr><tr><td>Training mixture</td><td>Identical prompts and <strong>8M target tokens</strong> per model; exact datasets and split construction are frozen separately before generation</td></tr><tr><td>Held-out measurement</td><td>300 boundary, 300 structural/POS, and 300 error/reasoning/action items; prompts are nested measurements</td></tr></tbody></table><p>The primary estimands are paired model-level contrasts τ<sub>T₁,s</sub> and τ<sub>T₂,s</sub>. Signature discovery rules are frozen from candidate-only development resources before training-condition labels are revealed. The seed block—not the prompt—is randomized and resampled.</p><h3>D0a decision</h3><ul><li><strong>Continuation criterion:</strong> after family-wise correction, at least one signature family has a positive model-level effect for both T₁ and T₂, and each simultaneous lower confidence bound exceeds a preregistered smallest population effect of interest δ<sub>pop</sub>. The value of δ<sub>pop</sub> is frozen from variance estimated without revealing training-condition labels and the intended query budget before training-condition labels are revealed; the effect must repeat on fresh task families.</li><li><strong>Continue with a narrower claim:</strong> structural or error/action effects transfer for both teachers while boundary transfer does not. Continue without a boundary-centric thesis.</li><li><strong>Stop:</strong> no signature transfers for both teachers, effects vanish on fresh task families, or the apparent effect is equally explained by shadow-teacher and public-target groups. Stop passive auditing before developing an individual detector.</li></ul><p><strong>D0b · Compare 2M and 8M target tokens.</strong> Only after the continuation criterion is met, repeat the four training conditions at <strong>2M target tokens</strong>. For both teachers, the paired 8M-minus-2M effect must be positive before reporting an effect of training-data volume. D0a and D0b support population claims only.</p><p><strong>D0c decomposition.</strong> A later shuffled-output training condition separates teacher style from input-conditioned transfer; it is not a null control.</p>`
      },
      {
        title: "D1 · Individual-model detector discovery, calibration, and confirmation",
        body: `<p>D1 begins only after D0 meets its preregistered continuation criteria. No D0 model enters D1 confirmation, and no D1 confirmation model is used to select features or thresholds. Seven model-source groups are fixed: T₁, T₂, public targets, and four alternative/shadow teachers matched on family, size, instruction tuning, data quality, capability, or common upstream influence.</p><table class="matrix"><thead><tr><th>Cohort</th><th>Model-level design</th><th>Permitted use</th></tr></thead><tbody><tr><td><strong>D1a discovery</strong></td><td>7 model-source groups × 4 new random seeds = <strong>28 models</strong></td><td>Select and simplify the B/S/E feature definitions and remove unstable signatures. No deployed threshold is estimated.</td></tr><tr><td><strong>D1b calibration</strong></td><td>7 model-source groups × 8 new random seeds = <strong>56 models</strong></td><td>Replay the entire frozen discovery pipeline inside model-level null resamples; freeze maxT calibration, candidate thresholds, practical-equivalence regions, and abstention.</td></tr><tr><td><strong>D1c untouched confirmation</strong></td><td>30 new T₁ models + 30 new T₂ models + 12 new models for each of five candidate-absent control groups = <strong>120 models</strong></td><td>Estimate the frozen detector's operating characteristics. No feature, threshold, candidate-set, or exclusion change is allowed.</td></tr></tbody></table><p>Preregistered confirmation targets are evaluated with exact model-level confidence intervals: the one-sided 95% upper bound for candidate-absent false attribution must be below 5%; the one-sided 95% lower bound for sensitivity must be at least 80% for each candidate; wrong-candidate inclusion must have an upper bound below 5%; and abstention is reported separately for positive, negative, and out-of-envelope models. With 60 candidate-absent models, zero false attributions yields an upper bound just below 5%.</p><p>The primary result is the frozen operating point, not confirmation-set AUC optimization. AUC and score distributions are secondary diagnostics. Sample sizes may increase after a preregistered precision calculation but cannot decrease or be changed after confirmation begins.</p>`
      },
      {
        title: "Benchmark model strata and exact models",
        body: `<table class="matrix"><thead><tr><th>Evidence stratum</th><th>Exact models</th><th>Use and allowed interpretation</th></tr></thead><tbody><tr><td><strong>D0 · Natural-signature preliminary validation</strong></td><td>Open teachers <code>Qwen/Qwen3-8B</code> and <code>meta-llama/Llama-3.1-8B-Instruct</code>; student <code>Qwen/Qwen3-1.7B-Base</code></td><td>Tests whether any natural teacher-specific signature survives ordinary output distillation. It determines the method direction, not the final paper claim [[86,87,88,89,90,91,92,93,94]].</td></tr><tr><td><strong>G0 · Controlled causal benchmark</strong></td><td>Teachers <code>deepseek/deepseek-v4-flash</code> and <code>qwen/qwen3.7-plus</code>; student base <code>Qwen/Qwen3-8B-Base</code></td><td>Both teachers must be marked distillable and pass a manual terms check before generation. These students provide the only causal ground truth for detection and mechanism recovery [[66,83,84,85]].</td></tr><tr><td><strong>G1 · Disclosed output/reasoning distillation</strong></td><td><code>deepseek-ai/DeepSeek-R1-Distill-Qwen-{1.5B,7B,14B,32B}</code> and <code>...-Llama-{8B,70B}</code>; candidate <code>deepseek/deepseek-r1-0528</code></td><td>External positive family. The current callable teacher snapshot may not equal the original generator, so results support teacher-family evidence, not exact-snapshot attribution [[44,69]].</td></tr><tr><td><strong>G2 · Multi-teacher logit distillation</strong></td><td><code>meta-llama/Llama-3.2-{1B,3B}-Instruct</code>; candidate set <code>Llama-3.1-{8B,70B}-Instruct</code></td><td>Meta discloses logits from both teachers plus pruning and later alignment. Evaluate set-valued candidate evidence; do not assign a unique teacher [[81]].</td></tr><tr><td><strong>G3 · Pruning plus distillation</strong></td><td><code>nvidia/Llama-3.1-Minitron-4B-{Width,Depth}-Base</code>; candidate <code>meta-llama/Llama-3.1-8B</code></td><td>Mixed-procedure external cases. Report whether candidate evidence survives architecture reduction, not whether distillation alone caused the signal [[82]].</td></tr><tr><td><strong>G4 · Commercial observation</strong></td><td>Six version-pinned OpenRouter endpoints</td><td>No ground truth. Report only directed candidate-evidence decisions and temporal stability [[85]].</td></tr></tbody></table><p>Every Hugging Face checkpoint is pinned by commit hash. Every API request stores the exact OpenRouter slug, provider route, response metadata, date, and request schema. Public disclosed cases are never pooled with G0 when estimating causal sensitivity or mechanism accuracy.</p>`
      },
      {
        title: "G0 · Mechanism-isolation experiment after D0",
        body: `<p>This 72-run experiment starts only after D0a meets its preregistered continuation criteria. It no longer asks whether a natural signature exists; it asks whether controlled response, reasoning, and preference supervision produce distinguishable signature profiles. Every supervision-mechanism × training-data-volume combination contains four training conditions with equal numbers of models.</p><table class="matrix"><thead><tr><th>Training condition</th><th>Exact design</th><th>Models</th></tr></thead><tbody><tr><td>Teacher T₁ positives</td><td>3 isolated supervision mechanisms × 2 target-token volumes × 3 independent random seeds</td><td><strong>18</strong></td></tr><tr><td>Teacher T₂ positives</td><td>the same six mechanism-and-token-volume combinations and random-seed indices as T₁</td><td><strong>18</strong></td></tr><tr><td>Public-supervision controls</td><td>3 supervision mechanisms × 2 target-token volumes × 3 random seeds; same prompts and token budget, with non-teacher gold or deterministic public targets</td><td><strong>18</strong></td></tr><tr><td>Shadow-teacher controls</td><td>3 supervision mechanisms × 2 target-token volumes × 3 random seeds; targets come from the independent open <code>Qwen/Qwen3-8B</code> shadow teacher under the same prompts and token budgets</td><td><strong>18</strong></td></tr><tr><td>Total planned runs</td><td>All LoRA-r16 runs on <code>Qwen/Qwen3-8B-Base</code></td><td><strong>72</strong></td></tr></tbody></table><p>The untouched base checkpoint is retained as a descriptive zero-update baseline but is not treated as an independently trained model. The two training-data volumes are <strong>3M and 12M teacher-supervision tokens</strong>. Within every block, the four training-condition labels are randomly assigned within each random-seed set and hidden from analysts until the analysis code is frozen. Prompt IDs, optimizer, update count, packed token budget, and evaluation split are identical. Response students optimize only final short answers; reasoning students optimize structured intermediate steps while final-answer contribution is excluded from the mechanism contrast; preference students use fixed response pairs and A/B/tie judgments with DPO β=0.1. The other candidate teacher supplies the alternative-teacher comparison, while the shadow-teacher group controls synthetic-output training and shared Qwen-family structure.</p><p><strong>Conditions for expanding the experiment.</strong> After the preregistered continuation criteria are met, repeat the four-condition design with 12M target tokens per model on <code>meta-llama/Llama-3.1-8B</code>: 18 positives and 18 matched controls. Then add <code>deepseek/deepseek-r1-0528</code> as an unseen reasoning teacher with three seeds. The full public DeepSeek, Llama 3.2, and Minitron families are evaluated only after the minimum 72-run experiment meets its preregistered criteria.</p>`
      },
      {
        title: "Replication hierarchy and inferential units",
        body: `<p>The trained student is always the independent experimental unit. Prompts, task templates, repeated generations, and decoding samples are nested measurements. D0 randomly assigns four training conditions within paired random-seed sets and estimates population causal effects across those blocks.</p><p>D1 uses entirely new models. Discovery models may define features; calibration models may determine thresholds; confirmation models may only be scored by the frozen pipeline. Confirmation resampling and exact binomial intervals operate at the model level. No prompt-level bootstrap can replace missing trained models.</p><p>Commercial endpoints do not provide multiple independently trained models from the same training condition. Repeated dates and API sessions measure observational stability only and cannot inherit D0/D1 causal or detector-error guarantees.</p>`
      },
      {
        title: "Hard-negative matrix",
        body: `<table class="matrix"><thead><tr><th>Negative type</th><th>Why it is difficult</th><th>Required control</th></tr></thead><tbody><tr><td>Shared base checkpoint</td><td>Inherited behavior exists without candidate-teacher distillation</td><td>Sibling students and base-normalized ablation</td></tr><tr><td>Shared public data</td><td>Models learn the same examples independently</td><td>Matched-data independent training</td></tr><tr><td>Common third teacher</td><td>Both models inherit correlated behavior</td><td>Candidate pool with the third teacher present/absent</td></tr><tr><td>Capability convergence</td><td>Strong models agree on easy correct answers</td><td>Disagreement and rare-error probes</td></tr><tr><td>Preference/safety convergence</td><td>Similar alignment policies mimic judge inheritance</td><td>Boundary-focused and policy-matched controls</td></tr><tr><td>Fine-tuning / merging / compression</td><td>Other lineage edges can resemble distillation</td><td>Typed derivative baselines</td></tr></tbody></table>`
      },
      {
        title: "Identification-valid negative-control design",
        body: `<ol><li><strong>Same-base no-distillation control.</strong> Train a student from the same base model with identical non-teacher data, compute, optimizer, schedule, and post-training, changing only whether candidate-generated supervision is present.</li><li><strong>Alternative-teacher controls.</strong> Run the identical distillation pipeline with capability- and domain-matched alternative teachers so that pipeline membership alone cannot explain the signal.</li><li><strong>Blinded candidate panel.</strong> For every suspect, test a shuffled panel containing the true teacher when controlled, same-family alternatives, common-third-teacher candidates, and unrelated capability-matched models; the evaluator must not know which slot is positive.</li><li><strong>Held-out contamination screen.</strong> Final evidence must distinguish the true controlled teacher from every matched control on held-out queries screened for training-data overlap, benchmark memorization, prompt leakage, and discovery-set reuse.</li></ol><p>Each control defines a different causal alternative. Results must be reported separately by control stratum; pooling easy unrelated models with identification-critical controls is not sufficient.</p>`
      },
      {
        title: "Layer 2 · Simulated API access",
        body: `<p>Freeze the trained models and expose them through an API wrapper. Test deterministic and stochastic decoding, hidden system prompts, response truncation, repeated sampling, optional top-k log-probabilities, and routing among model versions. The method should be evaluated under the exact information available to real auditors.</p><p>Run query-budget curves and report performance at fixed budgets rather than only asymptotic accuracy. Measure how often repeated sampling or log-probabilities materially change the conclusion.</p>`
      },
      {
        title: "Layer 3 · Real commercial APIs",
        body: `<p>Use publicly disclosed distillation relationships when an API endpoint and relevant candidate models are available. Otherwise present observational case studies with preregistered candidate pools and controls. A real-API table should report evidence profiles, stability across dates and prompts, query cost, and whether the method abstains.</p><p>Commercial case studies are external-validity demonstrations, not the main ground-truth benchmark. No accusation should be made from model behavior alone.</p>`
      },
      {
        title: "Concrete commercial API panel",
        body: `<p>The observational panel uses OpenRouter's unified API and an all-other-candidates design. The initial frozen slugs are <code>openai/gpt-5.2</code>, <code>anthropic/claude-opus-4.1</code>, <code>google/gemini-3.5-flash</code>, <code>deepseek/deepseek-v4-pro</code>, <code>qwen/qwen3.7-plus</code>, and <code>mistralai/mistral-medium-3-5</code> [[70,71,72,73,74,75,85]]. These endpoints are observational candidates only; their outputs are not used to train controlled students unless the exact model is independently marked distillable and its terms are rechecked.</p><table class="matrix"><thead><tr><th>Protocol item</th><th>Frozen value</th></tr></thead><tbody><tr><td>Audit dates</td><td>three runs separated by seven days</td></tr><tr><td>Probe budget</td><td>120 candidate-only discovery pairs + 240 held-out inference pairs</td></tr><tr><td>Primary channels</td><td>80 response, 80 reasoning, and 80 preference inference pairs</td></tr><tr><td>Sampling</td><td>temperature 0 and 0.2, one generation at each endpoint of every pair; temperature 0.7 is robustness-only</td></tr><tr><td>Serving manifest</td><td>OpenRouter slug, actual provider route, system prompt, reasoning mode, maximum output, date, SDK version, response ID, and refusal/error state</td></tr><tr><td>Shared-call budget</td><td>6 endpoints × 360 pairs × 2 endpoints × 2 temperatures × 3 dates = <strong>25,920 calls</strong></td></tr><tr><td>Allowed conclusion</td><td>candidate-conditioned observational evidence only; no hidden-teacher assertion</td></tr></tbody></table><p>Each endpoint's outputs are cached once per date and reused across ordered-pair analyses. Mutable <code>*-latest</code> aliases are forbidden. A provider or model update between dates is recorded as endpoint drift and can change the result to inconclusive.</p>`
      },
      {
        title: "Directional and mutual-distillation observational analysis",
        body: `<p>For every temporally feasible ordered pair of commercial snapshots (A→B), run the candidate-conditioned test with A as candidate and B as suspect, then repeat the reverse direction. A direction is eligible only if the candidate snapshot existed before the suspect snapshot's release or update window; otherwise it is marked temporally unsupported rather than tested.</p><table class="matrix"><thead><tr><th>A→B result</th><th>B→A result</th><th>Observational label</th><th>What remains unresolved</th></tr></thead><tbody><tr><td>detected</td><td>not detected / inconclusive</td><td>asymmetric candidate evidence toward B</td><td>direct distillation versus indirect/common-source influence</td></tr><tr><td>detected</td><td>detected</td><td>symmetric or bidirectional evidence</td><td>mutual distillation, shared teacher, shared data, or convergence</td></tr><tr><td>not detected</td><td>not detected</td><td>no evidence at the declared resolution</td><td>weaker effects below δ* or unlisted versions</td></tr><tr><td>either inconclusive</td><td>any</td><td>direction unresolved</td><td>power, drift, missing controls, or version ambiguity</td></tr></tbody></table><p>Report a directed <strong>candidate-evidence graph</strong>, not a lineage graph. Each edge stores the exact version pair, temporal eligibility, three-state decision, effect interval, mechanism profile, and unresolved alternative explanations. Where historical snapshots remain callable, a version-to-version change-point analysis tests whether evidence appears only after a candidate release; this strengthens temporal consistency but still does not prove direct training use.</p>`
      },
      {
        title: "Metrics, equivalence, and power",
        body: `<p><strong>D0 population metrics:</strong> paired seed-block effects τ<sub>i,s</sub>, simultaneous model-level confidence intervals, corrected population omnibus p-values, and replication on fresh task families. D0 does not report detector sensitivity, specificity, or false attribution.</p><p><strong>D1 detector metrics:</strong> frozen-operating-point sensitivity, specificity, candidate-absent false attribution, wrong-candidate inclusion, singleton/set precision, coverage, abstention, and practical-equivalence decisions with exact model-level intervals. AUC is secondary because it does not validate the deployed threshold.</p><p><strong>G0 mechanism metrics:</strong> signature-profile separation among response-, reasoning-, and preference-isolated students, evaluated independently of D1 detector performance. <strong>External uncertainty:</strong> calibration-envelope mismatch, missing interfaces, endpoint drift, and conflicting signatures.</p>`
      },
      {
        title: "Core experiment matrix",
        body: `<table class="matrix"><thead><tr><th>Axis</th><th>Required values</th></tr></thead><tbody><tr><td>Research stage</td><td>D0 population feasibility; D1 discovery/calibration/confirmation; G0 mechanism isolation; external G1–G4</td></tr><tr><td>Signature family</td><td>boundary, structural/POS, rare-error/reasoning/action</td></tr><tr><td>Training relation</td><td>public target, shadow teacher, single candidate teacher, limited two-teacher</td></tr><tr><td>Mechanism in G0</td><td>response, reasoning, preference; safety/tool as extensions</td></tr><tr><td>Candidate pool</td><td>2, 5, 10+, true teacher absent</td></tr><tr><td>Controls</td><td>public target, same-family shadow teacher, alternative candidate teacher, shared-base, shared-data, common-third-teacher</td></tr><tr><td>Selection protocol</td><td>candidate-only discovery, fresh inference instantiation, nested rerun calibration</td></tr><tr><td>Post-processing</td><td>continued SFT, paraphrasing, quantization, merging where applicable</td></tr></tbody></table>`
      },
      {
        title: "Costed experimental-design matrix",
        body: `<p>Costs are reported as teacher-output tokens, training runs, local generations, and API calls; dollar costs are computed only after exact provider rates are frozen.</p><table class="matrix"><thead><tr><th>Phase</th><th>Workload</th><th>Training / model count</th><th>Permitted conclusion</th></tr></thead><tbody><tr><td>D0a population feasibility</td><td>2 candidate teachers + 1 shadow teacher + public targets; 8 paired seeds; 8M target tokens</td><td><strong>32 trained models</strong></td><td>Average causal signature transfer only</td></tr><tr><td>D0b · Additional 2M-target-token experiment</td><td>Repeat the four training conditions at 2M tokens after D0a meets the continuation criterion</td><td><strong>32 additional models</strong>; D0 total 64</td><td>Comparison of 2M versus 8M target-token results only</td></tr><tr><td>D1a discovery</td><td>7 model-source groups × 4 new random seeds</td><td><strong>28 models</strong></td><td>Feature-family development only</td></tr><tr><td>D1b calibration</td><td>7 model-source groups × 8 new random seeds</td><td><strong>56 models</strong></td><td>Freeze maxT, thresholds, equivalence, and abstention</td></tr><tr><td>D1c confirmation</td><td>60 candidate-positive + 60 candidate-absent models</td><td><strong>120 untouched models</strong></td><td>Individual-model operating characteristics</td></tr><tr><td>G0 mechanism isolation</td><td>2 candidate teachers + public/shadow controls × 3 supervision mechanisms × 2 target-token volumes × 3 random seeds</td><td><strong>72 runs</strong></td><td>Mechanism-profile evidence only</td></tr><tr><td>External and OpenRouter</td><td>Disclosed models plus six endpoints across three dates</td><td>No training</td><td>External or observational evidence only</td></tr></tbody></table><p>D0 determines whether a population transfer effect exists; D1 determines whether individual-model detection meets the preregistered reliability criteria. G0 and commercial observation do not justify replacing either. Every run records GPU-hours, teacher-output tokens, wall-clock time, checkpoint hash, data manifest, model-source group, and random seed.</p>`
      },
      {
        title: "Derived-model, deployment-change, falsification, and removal experiments",
        body: `<table class="matrix"><thead><tr><th>Experiment</th><th>Concrete setting</th><th>Scientific question</th></tr></thead><tbody><tr><td>Adapter versus full update</td><td>LoRA rank 16 versus full SFT on one DeepSeek-V4-Flash/Qwen3 response cell and one Qwen3.7-Plus/Qwen3 reasoning cell</td><td>Does the signal follow the teacher edge across adaptation strength?</td></tr><tr><td>Continued post-training</td><td>10k additional UltraChat examples after distillation</td><td>Do ordinary updates erase candidate evidence?</td></tr><tr><td>Deployment quantization</td><td>bitsandbytes 8-bit and 4-bit replay of 12 representative students</td><td>Does serving compression preserve the decision?</td></tr><tr><td>Weight interpolation</td><td>shape-compatible same-base sibling interpolation α∈{0,0.25,0.5,0.75,1}</td><td>Does evidence vary monotonically with the controlled student contribution?</td></tr><tr><td>Decoder / wrapper EOT</td><td>temperatures 0/0.2/0.7, three seeds, two system prompts, answer-order and paraphrase variants</td><td>Does the finite event survive serving variation included during selection?</td></tr><tr><td>Output rewriting</td><td>neutral paraphrase through Qwen3-8B-Instruct and <code>mistral-small-2603</code></td><td>Is the signal decision-level rather than surface-style matching?</td></tr><tr><td>Randomization falsification</td><td>shuffle teacher labels before training; shuffle candidate-to-probe mappings; replace active probes with semantic-matched random prompts</td><td>Does the claimed gain disappear when the teacher-specific direction is destroyed?</td></tr><tr><td>Clean-output extraction</td><td>20k ordinary teacher outputs; exclude all audit prompts and embedding-near duplicates</td><td>Can the method detect generalization from ordinary black-box distillation rather than probe memorization?</td></tr><tr><td>Leaked-probe removal</td><td>rank-16 LoRA, 10/25/50/75% leaked discovery probes, clean:leak ratios 1:1 and 10:1, 10 updates, three seeds</td><td>How much candidate evidence can be removed while retaining held-out utility?</td></tr><tr><td>Robust probe selection</td><td>select 120 of 600 qualified prompts using source-derived removal simulations; compare first-120, random, source-margin, and hardened matched-size sets</td><td>Does informed selection beat sample-count effects?</td></tr></tbody></table><p>The confirmatory claim is rejected if shuffled labels or shuffled candidate mappings retain the same advantage, if clean-output students are indistinguishable from same-base no-teacher controls, or if performance depends only on easy unrelated models. Robustness is claimed only for the transformations explicitly included in selection and tested on unseen seeds.</p>`
      },
      {
        title: "Negative-result rules",
        body: `<div class="notice">If matched controls erase candidate-specific evidence, report no detected excess evidence; do not convert raw similarity into a distillation claim.</div><div class="notice">If the null is unstable, power is below the preregistered minimum, or the held-out effect is inconsistent, return inconclusive rather than no evidence.</div><div class="notice">If several candidates are detected, report the evidence-supported set; do not select a highest-score teacher.</div><div class="notice">If mechanism evidence does not survive held-out transformations, do not claim mechanism consistency.</div><div class="notice">If commercial API results change across dates or wrappers, report version sensitivity and treat the endpoint as a moving target.</div>`
      },
    ],
    view: "research-agenda",
  },
  "paper-roadmap": {
    eyebrow: "Next Paper · Thesis and Roadmap",
    title: "Recommended Paper Thesis and Execution Plan",
    lead: "A falsification-first candidate-conditioned audit: first test whether ordinary distillation preserves any teacher-specific behavioral echo, then expand to mechanism isolation and observational commercial APIs only after the natural-signature experiment meets its preregistered criteria.",
    callout: "Do not frame behavioral evidence as causal teacher attribution. First establish calibrated candidate-wise detection under hard negatives; unique attribution and multi-teacher recovery remain controlled secondary analyses.",
    sections: [
      {
        title: "Recommended thesis",
        body: `<div class="definition-box"><b>Population thesis after D0 meets the continuation criteria</b>Under the tested training pipeline, ordinary output distillation can cause an average transfer of at least one candidate-specific, non-task-essential behavioral signature across independently trained students.</div><div class="definition-box"><b>Detector thesis after D1 confirmation</b>A prospectively frozen black-box rule can classify previously unseen suspect models with preregistered model-level sensitivity, false-attribution, wrong-candidate, and abstention guarantees within its calibration envelope.</div><p>The first thesis does not imply the second. If D0 succeeds but D1 fails, the paper may report causal behavioral convergence but cannot claim a reliable individual-model audit. If only structural or action signatures transfer, all general boundary language is removed.</p>`
      },
      {
        title: "Contribution structure",
        body: `<ol><li><strong>Population question.</strong> Does randomized teacher-output assignment cause average candidate-specific behavioral echoes?</li><li><strong>Individual detector.</strong> Can an independently discovered, calibrated, and confirmed rule control false attribution and abstention on untouched models?</li><li><strong>Signal family.</strong> Complementary boundary, structural/POS, and error/reasoning/action signatures, each independently falsifiable.</li><li><strong>Evaluation.</strong> D0 population feasibility, D1 model-level detector validation, G0 mechanism isolation, stratified public distillation pairs, serving stress tests, and bounded OpenRouter observation.</li></ol>`
      },
      {
        title: "Suggested paper outline",
        body: `<div class="steps"><div class="step"><strong>Introduction.</strong> Prior work shows several teacher-specific properties can transfer, but no natural signature is known to be universal.</div><div class="step"><strong>Problem and threat model.</strong> Candidate-conditioned evidence, three-state decisions, candidate-pool incompleteness, and causal-versus-observational claim levels.</div><div class="step"><strong>Behavioral-echo method.</strong> Three signature families, candidate-only discovery, fresh inference instantiation, algorithm-level null calibration, and maxT correction.</div><div class="step"><strong>D0 population feasibility.</strong> Paired seed blocks estimate average causal transfer without claiming detector accuracy.</div><div class="step"><strong>D1 individual validation.</strong> Independent discovery, calibration, and untouched confirmation estimate false attribution, sensitivity, and abstention.</div><div class="step"><strong>Mechanism and external validation.</strong> G0 isolated mechanisms followed by DeepSeek-R1, Llama 3.2, Minitron, and serving transformations.</div><div class="step"><strong>Commercial API cases.</strong> Directed observational evidence graphs with explicit version and causal limits.</div></div>`
      },
      {
        title: "Staged execution plan",
        body: `<table class="matrix"><thead><tr><th>Stage</th><th>Deliverable</th><th>Decision</th></tr></thead><tbody><tr><td>D0a · Population feasibility</td><td>32 students, each trained on 8M target tokens, across two candidate-teacher output groups and two control groups</td><td>Continue only if a preregistered population effect transfers for both teachers on fresh task families</td></tr><tr><td>D0b · Compare 2M and 8M target tokens</td><td>32 additional students, each trained on 2M target tokens, after D0a meets the continuation criteria</td><td>Report a training-data-volume effect only when both teachers have a positive paired 8M-minus-2M difference</td></tr><tr><td>D1a · Detector discovery</td><td>28 new models across seven model-source groups</td><td>Freeze candidate feature definitions; no accuracy claim</td></tr><tr><td>D1b · Detector calibration</td><td>56 new models across the same seven model-source groups</td><td>Freeze maxT, thresholds, equivalence margins, and abstention</td></tr><tr><td>D1c · Untouched confirmation</td><td>120 new models: 60 candidate-positive and 60 candidate-absent</td><td>Require preregistered model-level error and coverage intervals</td></tr><tr><td>G0 · Mechanism isolation</td><td>72 mechanism-controlled runs</td><td>Evaluate mechanism profiles separately from detector validity</td></tr><tr><td>External and commercial</td><td>Disclosed models, serving stress, and OpenRouter endpoints</td><td>Report only the evidence level supported by each stratum</td></tr></tbody></table>`
      },
      {
        title: "Continuation, narrowing, and stop criteria",
        body: `<div class="property-grid"><div class="property-card"><b>D0 continuation criteria</b>At least one signature's simultaneous lower bound exceeds δ<sub>pop</sub> for both teachers and repeats on fresh task families. This permits a population-transfer claim only.</div><div class="property-card"><b>D1 validation criteria</b>On untouched models, candidate-absent false-attribution upper 95% bound &lt;5%, per-candidate sensitivity lower bound ≥80%, wrong-candidate upper bound &lt;5%, and abstention reported without threshold changes.</div><div class="property-card"><b>Continue without the boundary claim</b>Structural or action signatures transfer, but boundary transfer fails. Remove the boundary thesis before D1.</div><div class="property-card"><b>Stop condition and alternative plan</b>D0 failure stops passive auditing; D1 failure permits only population convergence claims, not individual attribution. Pivot to active watermarking or provider telemetry if needed.</div></div>`
      },
      {
        title: "Publication-ready reporting templates",
        body: `<h3>D0 population-effect table</h3><table class="matrix"><thead><tr><th>Teacher</th><th>Signature</th><th>Paired effect τ̂</th><th>Simultaneous CI</th><th>δ<sub>pop</sub></th><th>Fresh-family replication</th><th>Population conclusion</th></tr></thead><tbody><tr><td>Tᵢ</td><td>B / S / E</td><td>effect</td><td>[L,U]</td><td>margin</td><td>pass / fail</td><td>transfer / unresolved / stop</td></tr></tbody></table><h3>D1 untouched-confirmation table</h3><table class="matrix"><thead><tr><th>Metric</th><th>Estimate</th><th>Exact 95% interval</th><th>Preregistered target</th><th>Pass?</th></tr></thead><tbody><tr><td>Candidate-absent false attribution</td><td>rate</td><td>[L,U]</td><td>upper bound &lt;5%</td><td>yes/no</td></tr><tr><td>T₁ sensitivity</td><td>rate</td><td>[L,U]</td><td>lower bound ≥80%</td><td>yes/no</td></tr><tr><td>T₂ sensitivity</td><td>rate</td><td>[L,U]</td><td>lower bound ≥80%</td><td>yes/no</td></tr><tr><td>Wrong-candidate inclusion</td><td>rate</td><td>[L,U]</td><td>upper bound &lt;5%</td><td>yes/no</td></tr><tr><td>Abstention</td><td>positive / negative / OOD</td><td>[L,U]</td><td>reported, not optimized post hoc</td><td>—</td></tr></tbody></table><h3>Required companion tables</h3><ul><li><strong>D0 random-seed table:</strong> training condition, training-data volume, random seed, three signature effects, utility, and fresh-task replication.</li><li><strong>D1 development audit:</strong> which models entered discovery, calibration, and confirmation; selected features; null reruns; frozen thresholds; and all exclusions.</li><li><strong>D1 evidence-set table:</strong> true source, detected candidate set, singleton/set correctness, abstention, and calibration-envelope status for every confirmation model.</li><li><strong>G0 and external strata:</strong> mechanism profiles and G1–G4 evidence reported separately from D1 operating characteristics.</li></ul><h3>Bounded result language</h3><div class="claim-box"><b>D0 population result</b>“Randomized assignment of Tᵢ outputs caused an average … signature increase of … across paired independently trained student models; this is a population effect under the tested pipeline, not an individual-model detector guarantee.”</div><div class="claim-box"><b>D1 detected</b>“The prospectively frozen detector returned Tᵢ for this untouched model. Confirmation-set false-attribution and sensitivity intervals met the preregistered operating targets within the stated calibration envelope.”</div><div class="claim-box"><b>D1 inconclusive</b>“The model fell outside the frozen positive, negative, or calibration-envelope criteria; no positive or negative lineage conclusion is supported.”</div><div class="claim-box"><b>Commercial API</b>“This endpoint result is observational and version-bounded; D0/D1 controlled guarantees do not transfer automatically to hidden commercial systems.”</div><p>The limitations section must explicitly separate population transfer, individual detector reliability, and commercial observation; discuss candidate-pool incompleteness, selection calibration, shadow-teacher coverage, training-data overlap, endpoint drift, query cost, and the inability of behavior alone to prove causal provenance.</p>`
      },
      {
        title: "How the observatory should support the paper",
        body: `<p>The four “Next Paper” pages are the entry point. Existing taxonomy pages remain supporting background. Direct detection and output-only auditing should link to the primary evidence-test formulation; teacher attribution and multi-teacher recovery should be labeled controlled secondary tasks; confounders, benchmarks, and disclosures support the null and external-validity design.</p><p>White-box distillation and internal-signal auditing remain useful, but should be labeled <em>controlled development evidence</em>. Attacks, defenses, repositories, and industry reports should be demoted to reference material unless they directly change the threat model, probe design, or evaluation protocol.</p>`
      },
    ],
    view: "research-agenda",
  },
  home: {
    eyebrow: "Research map · mechanism-first taxonomy",
    title: "LLM Distillation & Lineage Observatory",
    lead: "A mechanism-centered map of how large language models transfer knowledge, how those dependencies can be audited, and how real-world pipelines should be evaluated.",
    callout: "The organizing axis is the transferred knowledge signal—not whether a source is open, closed, academic, or commercial. Access level, model availability, evidence grade, and code availability are treated as orthogonal attributes.",
    stats: [
      ["95", "curated papers, tools, model cards, datasets, and disclosures"],
      ["4", "paper-facing workspaces from problem to execution"],
      ["5", "evidence grades separating disclosure from allegation"],
    ],
    sections: [
      {
        title: "Next-paper workspace",
        body: `<div class="framework-grid"><a class="framework-card paper-card" href="paper-problem.html"><b>1. Black-box Audit Problem</b><span>Define candidate-conditioned evidence detection and defensible commercial-API claims.</span></a><a class="framework-card paper-card" href="paper-method.html"><b>2. Method Candidates</b><span>Held-out mechanism probes, matched-control residuals, and calibrated three-state tests.</span></a><a class="framework-card paper-card" href="paper-benchmark.html"><b>3. Benchmark & Experiments</b><span>Controlled lineages, hard negatives, simulated APIs, and observational commercial cases.</span></a><a class="framework-card paper-card" href="paper-roadmap.html"><b>4. Thesis & Roadmap</b><span>Contribution boundary, staged execution, negative-result rules, and go/no-go criteria.</span></a></div>`,
      },
      {
        title: "Mechanism-first research map",
        body: `<div class="framework-grid">
          <a class="framework-card" href="white-box-distillation.html"><b>1. Distillation Methods</b><span>What signal is transferred and under what teacher access?</span></a>
          <a class="framework-card" href="output-only-auditing.html"><b>2. Distillation Auditing</b><span>What evidence remains in outputs, logits, representations, routing, and weights?</span></a>
          <a class="framework-card" href="unauthorized-distillation.html"><b>3. Attacks & Defenses</b><span>How capabilities are harvested, protected, laundered, or removed.</span></a>
          <a class="framework-card" href="benchmarks.html"><b>4. Evaluation</b><span>How to measure detection, attribution, calibration, robustness, and false accusation.</span></a>
          <a class="framework-card" href="model-family-compression.html"><b>5. Real-world Pipelines</b><span>Documented model-family, response, reasoning, and production distillation.</span></a>
          <a class="framework-card" href="research-agenda.html"><b>6. Long-term Agenda</b><span>Multi-teacher, multi-role, and multi-stage reconstruction after the first evidence-detection paper.</span></a>
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
        body: `<ol class="reading-path"><li>For the next-paper direction, begin with <a href="paper-problem.html">Black-box Audit Problem</a> and follow the four-page workspace.</li><li>Use <a href="preliminary.html">Background & Definitions</a> for terminology.</li><li>Read <a href="black-box-distillation.html">Black-box Distillation</a> and <a href="output-only-auditing.html">Output-only Auditing</a> as the primary literature path.</li><li>Use <a href="confounders-robustness.html">Confounders & Robustness</a> and <a href="benchmarks.html">Benchmarks</a> to judge feasibility.</li><li>Treat the <a href="research-agenda.html">Long-term Agenda</a> as follow-up work beyond the first paper.</li></ol>`,
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
    eyebrow: "Resources · Longer-term Direction",
    title: "Long-term Research Agenda",
    lead: "Prioritized follow-up problems in distillation-process forensics, influence estimation, query-efficient auditing, and uncertain multi-stage lineage recovery.",
    callout: "These are research hypotheses, not established results. A proposer, an adversarial reviewer, and a final arbiter ranked them by novelty, identifiability, open-model feasibility, statistical validity, and experimental cost.",
    sections: [
      { title: "What remains after the first paper", body: "The first paper targets candidate-conditioned black-box distillation-evidence detection. Existing teacher-tracing, open-weight detection, reference-checkpoint, and set-valued provenance work already covers single-candidate or candidate-set evidence [[1,3,6,7]]. Remaining questions include causal teacher identification, larger teacher sets, role separation, influence estimation, repeated distillation, missing intermediate models, and multi-stage laundering." },
      { title: "Future structured problem", body: "Given a suspect, candidate and unknown teachers, optional reference checkpoints, and heterogeneous access budgets, recover a typed dependency structure with uncertainty. Existing set-valued provenance and dependency-recovery work implies that unknown sources, alternative edges, and uncertainty must remain explicit [[7,9,59]]. This problem is strictly harder than candidate attribution and should not be claimed from the same evidence." },
      { title: "How the candidate ideas were filtered", body: `<p>The discussion used three independent roles: a proposer generated narrow ideas, a hostile reviewer attacked novelty and identifiability, and a final arbiter ranked only the surviving directions. A direction was retained only when it changed the inferential target rather than merely replacing one similarity score with another [[1,2,3,5,6,7,8,9,16,88,89]].</p><table class="matrix"><thead><tr><th>Criterion</th><th>Required evidence</th><th>Automatic downgrade</th></tr></thead><tbody><tr><td>Novelty boundary</td><td>Clearly exceeds teacher tracing, generic derivative testing, reference-checkpoint detection, reasoning provenance, set-valued provenance, and agent-behavior similarity.</td><td>A new embedding, prompt optimizer, or similarity metric for the same claim.</td></tr><tr><td>Identifiability</td><td>Defines which latent fact is recoverable and which alternatives remain observationally equivalent.</td><td>Interpreting behavioral similarity as a direct training edge without matched controls.</td></tr><tr><td>Minimum causal design</td><td>Freezes teacher, student initialization, prompt pool, effective tokens, compute, and post-training while changing one target factor.</td><td>Comparing unrelated released models with unknown histories.</td></tr><tr><td>Statistical validity</td><td>Uses trained models as inference units, supports abstention, and predefines multiplicity, stopping, and coverage targets.</td><td>Prompt-level p-values or thresholds tuned on the final audit set.</td></tr><tr><td>Paper-level contribution</td><td>Provides a new estimand, calibrated decision rule, mechanism result, or identifiability theorem.</td><td>A robustness table or benchmark without a sharper scientific claim.</td></tr></tbody></table>` },
      { title: "Top-tier directions", body: `<table class="matrix comparison-table"><thead><tr><th>Rank</th><th>Direction</th><th>Publishable claim</th><th>Minimum experiment</th><th>Fatal risk</th></tr></thead><tbody><tr><td>1</td><td><strong>Same-teacher mechanism attribution</strong></td><td>For a fixed teacher, distinguish response SFT, preference/judge distillation, reasoning-trace distillation, and ordinary fine-tuning with calibrated abstention on unseen student architectures [[1,3,5,38,39,41,44,47,88,90]].</td><td>Three open teachers × two student families; identical checkpoints, prompt content, effective tokens, and compute; vary only the supervision mechanism.</td><td>The detector may learn length, format, or utility differences rather than the supervision mechanism.</td></tr><tr><td>2</td><td><strong>Calibrated teacher-mixture or influence intervals</strong></td><td>Return protocol-specific influence intervals or exposure levels instead of falsely claiming an exact real-world training-data percentage [[7,44]].</td><td>Controlled two-teacher mixtures at 0, 10, 25, 50, 75, 90, and 100 percent under a fixed total token budget; evaluate interval coverage and width on held-out students.</td><td>Training is nonlinear, so data proportion and behavioral influence may not be identifiable without partial-identification language.</td></tr><tr><td>3</td><td><strong>Anytime-valid, query-efficient auditing</strong></td><td>Reduce average black-box queries while preserving model-level false-attribution control under valid stopping and explicit inconclusive outcomes [[2,7,16]].</td><td>Compare fixed budgets with sequential evidence updates over frozen prompt groups; report average and tail query cost, sensitivity, false attribution, and abstention.</td><td>Adaptive probe selection can invalidate exchangeability, permutation, or conformal guarantees.</td></tr></tbody></table><div class="claim-box"><b>Recommended starting point</b>Same-teacher mechanism attribution has the cleanest causal contrast and the strongest separation from existing teacher-identity work. Query-efficient auditing is the fastest small-scale statistical experiment; mixture intervals offer the strongest uncertainty-quantification contribution.</div>` },
      { title: "Second-tier directions that require prior feasibility evidence", body: `<table class="matrix"><thead><tr><th>Direction</th><th>What would make it publishable</th><th>Evidence required before expansion</th></tr></thead><tbody><tr><td><strong>Provenance survival curves</strong></td><td>Model the predictable decay and half-life of different provenance signatures under continued SFT, domain adaptation, rewriting, pruning, quantization, or merging—not merely a robustness table [[16,24,33,44,89]].</td><td>Show that measurements at the smaller target-token volume predict later degradation and that different signatures have reproducibly different decay laws.</td></tr><tr><td><strong>Role-conditioned multi-teacher attribution</strong></td><td>Recover which teacher acted as generator, critic, judge, safety filter, or final rewriter while separating role from teacher identity [[7,56,88]].</td><td>Hold teacher identities fixed and swap roles; reject the direction if the method only detects the final rewriter.</td></tr><tr><td><strong>Ordered repeated-distillation ancestry</strong></td><td>Recover a partial order or ancestry set with unknown depth and missing intermediates, together with explicit non-identifiability results [[7,9,59]].</td><td>Distinguish A→B→C from {A,B}→C beyond naive chaining of pairwise scores; otherwise report impossibility rather than a full graph.</td></tr></tbody></table>` },
      { title: "Benchmark-only and observation-only directions", body: `<div class="claim-box"><b>Hard-negative confound benchmark</b>A benchmark covering shared bases, shared data, common third teachers, matched capability, shuffled outputs, absent candidates, and post-training is highly valuable, but should support a stronger method or statistical paper rather than stand alone [[2,7,9,16,59]].</div><div class="claim-box"><b>Version-bounded commercial API provenance</b>Endpoint snapshots, provider routing, and silent upgrades make causal ground truth unavailable. Commercial endpoints are suitable for version-frozen observational case studies, not the primary validation of a causal provenance method [[49,59]].</div><p>A further “better similarity score” or an unrestricted open-set teacher list is not prioritized: these would overlap too closely with existing teacher tracing, derivative testing, set-valued provenance, and model fingerprinting [[1,2,7,16]].</p>` },
      { title: "DistillGraph as a follow-up framework", body: `<div class="steps"><div class="step"><strong>Start from calibrated candidate tests.</strong> Use the first paper's evidence-detection decisions as an edge-screening primitive, not as proven edges [[1,2,7]].</div><div class="step"><strong>Add mechanism and role evidence.</strong> Introduce supervision-mechanism, generator, judge, critic, safety, and tool channels only where controlled ground truth exists [[5,56,88]].</div><div class="step"><strong>Escalate access when available.</strong> Add logits, references, representations, routing, and weights as optional corroboration rather than core requirements [[3,6,8,10,12]].</div><div class="step"><strong>Return uncertain graphs.</strong> Preserve unknown-source nodes, alternative edges, partial orders, and explicit abstention [[7,9,59]].</div></div>` },
      { title: "Future benchmark expansion", body: "After single-teacher evidence detection is stable, extend controlled benchmarks to mechanism-matched students, teacher-mixture proportion and target-token-count grids, role-swapped two-teacher pipelines, repeated distillation, missing intermediate nodes, laundering, and larger incomplete candidate pools [[16,44,45,59,88]]." },
      { title: "Dependency on the first paper", body: "Do not start graph reconstruction unless the output-only evidence tests control false positives and power under shared bases, shared data, common third teachers, API nondeterminism, and absent candidates [[7,9,16,33,44,45,47,49,59]]. Failure at that stage is a no-go for DistillGraph." },
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
let lastSidebarTrigger = null;
let integrityReport = { ok: false, errors: [] };

const isMobileNav = () => window.matchMedia("(max-width: 820px)").matches;
const getFocusable = (container) => [...container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')].filter((el) => !el.hidden && el.offsetParent !== null);

function captureReadingContext() {
  const headings = [...document.querySelectorAll("#dynamic-page h2, #dynamic-page h3")];
  if (!headings.length) return null;
  let index = 0;
  let best = Infinity;
  headings.forEach((heading, i) => {
    const distance = Math.abs(heading.getBoundingClientRect().top - 110);
    if (distance < best) {
      best = distance;
      index = i;
    }
  });
  return { index, viewportTop: headings[index].getBoundingClientRect().top };
}

function restoreReadingContext(context) {
  if (!context) return;
  const headings = [...document.querySelectorAll("#dynamic-page h2, #dynamic-page h3")];
  const target = headings[Math.min(context.index, headings.length - 1)];
  if (!target) return;
  window.scrollBy({ top: target.getBoundingClientRect().top - context.viewportTop, behavior: "auto" });
}

function ensureAccessibilityChrome() {
  const body = document.body;
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".mobile-toggle");
  const search = document.getElementById("site-search");
  if (!body || !sidebar || !main) return;

  if (!document.querySelector(".skip-link")) {
    const skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#dynamic-page";
    body.prepend(skip);
  }
  const skip = document.querySelector(".skip-link");
  skip.textContent = language === "zh" ? "跳到正文" : "Skip to main content";

  sidebar.id = "site-sidebar";
  sidebar.setAttribute("aria-label", language === "zh" ? "站点导航" : "Site navigation");
  main.id = "main-content";
  main.setAttribute("role", "main");
  nav?.setAttribute("aria-label", language === "zh" ? "研究主题" : "Research topics");
  const root = document.getElementById("dynamic-page");
  root?.setAttribute("tabindex", "-1");

  if (!sidebar.querySelector(".sidebar-close")) {
    const close = document.createElement("button");
    close.type = "button";
    close.className = "sidebar-close";
    close.textContent = "×";
    sidebar.prepend(close);
  }
  const close = sidebar.querySelector(".sidebar-close");
  close.setAttribute("aria-label", language === "zh" ? "关闭导航" : "Close navigation");

  if (!document.querySelector(".sidebar-overlay")) {
    const overlay = document.createElement("button");
    overlay.type = "button";
    overlay.className = "sidebar-overlay";
    overlay.hidden = true;
    body.appendChild(overlay);
  }
  const overlay = document.querySelector(".sidebar-overlay");
  overlay.setAttribute("aria-label", language === "zh" ? "关闭导航" : "Close navigation");

  if (toggle) {
    toggle.type = "button";
    toggle.setAttribute("aria-controls", "site-sidebar");
    toggle.setAttribute("aria-expanded", sidebar.classList.contains("open") ? "true" : "false");
  }
  if (search) {
    search.setAttribute("aria-label", language === "zh" ? "搜索当前页面的参考文献" : "Search references shown on this page");
    search.setAttribute("title", language === "zh" ? "只筛选当前页面展示的文献；全部记录请查看参考文献总表。" : "Filters only the references shown on this page; use Master Bibliography for all records.");
  }
  sidebar.setAttribute("aria-hidden", isMobileNav() && !sidebar.classList.contains("open") ? "true" : "false");
}

function openSidebar(trigger) {
  if (!isMobileNav()) return;
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const toggle = document.querySelector(".mobile-toggle");
  if (!sidebar || !overlay) return;
  lastSidebarTrigger = trigger || document.activeElement;
  sidebar.classList.add("open");
  sidebar.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.classList.add("mobile-nav-open");
  toggle?.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => sidebar.querySelector(".sidebar-close")?.focus());
}

function closeSidebar({ restoreFocus = true } = {}) {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const toggle = document.querySelector(".mobile-toggle");
  if (!sidebar || !overlay) return;
  sidebar.classList.remove("open");
  sidebar.setAttribute("aria-hidden", isMobileNav() ? "true" : "false");
  overlay.hidden = true;
  document.body.classList.remove("mobile-nav-open");
  toggle?.setAttribute("aria-expanded", "false");
  if (restoreFocus && lastSidebarTrigger instanceof HTMLElement) lastSidebarTrigger.focus();
}

function handleSidebarKeydown(event) {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar?.classList.contains("open")) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeSidebar();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = getFocusable(sidebar);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function validateSiteData() {
  const errors = [];
  const ids = new Set();
  DATA.forEach((record, index) => {
    if (record.refNo !== index + 1) errors.push(`Reference sequence mismatch at ${record.id || index + 1}`);
    if (!record.id || ids.has(record.id)) errors.push(`Duplicate or missing reference id: ${record.id || index + 1}`);
    ids.add(record.id);
    if (!SITE_CONTENT.summaryZh?.[record.id]) errors.push(`Missing Chinese summary: ${record.id}`);
  });
  Object.keys(PAGE_CONFIG).forEach((key) => {
    const enSections = PAGE_CONFIG[key]?.sections || [];
    const zhPage = SITE_CONTENT.zhPages?.[key];
    const zhSections = zhPage?.sections || [];
    const refRows = SITE_CONTENT.sectionRefs?.[key] || [];
    if (!zhPage) errors.push(`Missing Chinese page: ${key}`);
    if (zhPage && zhSections.length !== enSections.length) errors.push(`Bilingual section-count mismatch for ${key}: ${enSections.length} EN vs ${zhSections.length} ZH`);
    if (refRows.length !== enSections.length) errors.push(`Citation-row mismatch for ${key}: ${refRows.length} rows vs ${enSections.length} sections`);
    if (!SITE_CONTENT.pageDetails?.[key]?.en || !SITE_CONTENT.pageDetails?.[key]?.zh) errors.push(`Missing bilingual page details: ${key}`);
  });
  const checkRef = (value, context) => {
    if (!Number.isInteger(value) || value < 1 || value > DATA.length) errors.push(`Invalid reference ${value} in ${context}`);
  };
  Object.entries(SITE_CONTENT.sectionRefs || {}).forEach(([key, rows]) => rows.flat().forEach((value) => checkRef(value, `sectionRefs.${key}`)));
  Object.entries(PAGE_CONFIG).forEach(([key, page]) => (page.sections || []).flatMap((section) => inlineReferenceNumbers(section.body)).forEach((value) => checkRef(value, `PAGE_CONFIG.${key}`)));
  Object.entries(SITE_CONTENT.zhPages || {}).forEach(([key, page]) => (page.sections || []).flatMap((section) => inlineReferenceNumbers(section.body)).forEach((value) => checkRef(value, `zhPages.${key}`)));
  integrityReport = { ok: errors.length === 0, errors };
  window.__SITE_INTEGRITY_REPORT__ = integrityReport;
  document.documentElement.dataset.integrity = integrityReport.ok ? "pass" : "fail";
  if (errors.length) console.error("Site integrity errors:", errors);
  return integrityReport;
}

function configurePaperFigureFallbacks() {
  document.querySelectorAll(".paper-figure-image img").forEach((image) => {
    const fallback = image.closest(".paper-figure-panel")?.querySelector(".paper-figure-fallback");
    image.addEventListener("error", () => {
      image.hidden = true;
      if (fallback) fallback.hidden = false;
    }, { once: true });
  });
}

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
      const readingContext = captureReadingContext();
      language = language === "zh" ? "en" : "zh";
      localStorage.setItem("distill-observatory-language", language);
      grade = "all";
      renderAll();
      requestAnimationFrame(() => requestAnimationFrame(() => restoreReadingContext(readingContext)));
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
  const paperFigureBlock = paperFigure ? `<section class="panel paper-figure-panel"><div class="paper-figure-heading"><div><div class="eyebrow">${language === "zh" ? "2025 最新工作" : "Recent work · 2025"}</div><h2>${esc(paperFigureText.title)}</h2></div><a class="link-btn" href="${paperFigure.sourceHref}" target="_blank" rel="noopener">${language === "zh" ? "查看原论文 ↗" : "Open paper ↗"}</a></div><a class="paper-figure-image" href="${paperFigure.src}" target="_blank" rel="noopener"><img src="${paperFigure.src}" alt="${esc(paperFigureText.title)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"></a><div class="paper-figure-fallback" hidden><strong>${language === "zh" ? "原图暂时无法加载" : "The original figure is temporarily unavailable"}</strong><span>${language === "zh" ? "请通过论文入口查看原图和完整上下文。" : "Open the paper to view the figure and its full context."}</span><a class="link-btn" href="${paperFigure.sourceHref}" target="_blank" rel="noopener">${language === "zh" ? "查看原论文 ↗" : "Open paper ↗"}</a></div><figcaption>${paperFigureText.caption} ${citationHtml([paperFigure.refNo])}</figcaption></section>` : "";
  const sectionRefRows = SITE_CONTENT.sectionRefs?.[pageKey] || [];
  const sections = (config.sections || []).map((section, index) => {
    const refs = sectionRefRows[index] || [];
    const hasInlineCitations = citationTokenPattern.test(section.body);
    citationTokenPattern.lastIndex = 0;
    const renderedBody = expandCitationTokens(section.body);
    return `<section class="panel topic-section"><h2>${section.title}</h2><div class="section-body">${renderedBody}</div>${refs.length && !hasInlineCitations ? `<div class="section-reference-note"><span>${esc(ui.citedReferences || "References")}</span>${citationHtml(refs)}</div>` : ""}</section>`;
  }).join("");
  const questions = details?.questions?.length ? `<section class="panel questions-panel"><h2>${esc(ui.researchQuestions || "Research questions")}</h2><ol>${details.questions.map((question) => `<li>${esc(question)}</li>`).join("")}</ol></section>` : "";
  const hasResources = Boolean(config.view);
  const integrityBlock = pageKey === "bibliography" ? `<div class="integrity-status ${integrityReport.ok ? "pass" : "fail"}" role="status"><strong>${language === "zh" ? "自动完整性检查" : "Automated integrity check"}</strong><span>${integrityReport.ok ? (language === "zh" ? `通过：${DATA.length} 条编号连续，中文摘要、页面翻译和引用范围完整。` : `Passed: ${DATA.length} sequential records with complete Chinese summaries, page translations, and in-range citations.`) : (language === "zh" ? `发现 ${integrityReport.errors.length} 个问题，请查看浏览器控制台。` : `${integrityReport.errors.length} issues found; inspect the browser console.`)}</span></div>` : "";
  const resourceBlock = hasResources ? `<section class="literature-section"><h2>${esc(ui.selectedLiterature || "Selected literature and evidence")}</h2><p class="section-intro">${esc(ui.literatureIntro || "")}</p><p class="original-title-note">${esc(ui.originalTitleNote || "")}</p>${integrityBlock}<div class="filters"><button class="filter-btn active" data-grade="all">${esc(ui.allEvidence || "All evidence")}</button><button class="filter-btn" data-grade="A">${esc(ui.evidenceA || "A")}</button><button class="filter-btn" data-grade="B">${esc(ui.evidenceB || "B")}</button><button class="filter-btn" data-grade="C">${esc(ui.evidenceC || "C")}</button><button class="filter-btn" data-grade="D">${esc(ui.evidenceD || "D")}</button><button class="filter-btn" data-grade="E">${esc(ui.evidenceE || "E")}</button></div><div id="resource-list" class="resource-list"></div></section>` : "";
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
    button.type = "button";
    button.onclick = () => {
      document.querySelectorAll("[data-grade]").forEach((x) => x.classList.remove("active"));
      button.classList.add("active");
      grade = button.dataset.grade;
      renderResources();
    };
  });
  const mobileToggle = document.querySelector(".mobile-toggle");
  if (mobileToggle) mobileToggle.onclick = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar?.classList.contains("open")) closeSidebar();
    else openSidebar(mobileToggle);
  };
  const close = document.querySelector(".sidebar-close");
  if (close) close.onclick = () => closeSidebar();
  const overlay = document.querySelector(".sidebar-overlay");
  if (overlay) overlay.onclick = () => closeSidebar();
  document.querySelectorAll(".nav-level2").forEach((link) => {
    link.addEventListener("click", () => closeSidebar({ restoreFocus: false }));
  });
  configurePaperFigureFallbacks();
  if (!document.body.dataset.globalA11yHandlers) {
    document.addEventListener("keydown", handleSidebarKeydown);
    window.addEventListener("resize", () => {
      if (!isMobileNav()) closeSidebar({ restoreFocus: false });
      else document.querySelector(".sidebar")?.setAttribute("aria-hidden", document.querySelector(".sidebar")?.classList.contains("open") ? "false" : "true");
    });
    document.body.dataset.globalA11yHandlers = "true";
  }
}

function renderAll() {
  config = getActiveConfig();
  buildChrome();
  buildNavigation();
  renderPage();
  ensureAccessibilityChrome();
  buildPageToc();
  renderResources();
  wireInteractions();
}

async function init() {
  try {
    const module = await import(new URL("content.mjs?v=20260723-concrete-experiment-terms-v1", APP_ASSET_BASE).href);
    SITE_CONTENT = module.SITE_CONTENT || {};
    const methodModule = await import(new URL("paper-method-page.mjs?v=20260723-concrete-terms-v1", APP_ASSET_BASE).href);
    Object.assign(PAGE_CONFIG["paper-method"], methodModule.PAPER_METHOD_EN || {});
    Object.assign(SITE_CONTENT.zhPages["paper-method"], methodModule.PAPER_METHOD_ZH || {});
    SITE_CONTENT.sectionRefs["paper-method"] = methodModule.PAPER_METHOD_SECTION_REFS || [];
    SITE_CONTENT.pageDetails["paper-method"] = methodModule.PAPER_METHOD_PAGE_DETAILS || SITE_CONTENT.pageDetails["paper-method"];
  } catch (error) {
    console.warn("Bilingual content could not be loaded; falling back to English.", error);
    SITE_CONTENT = {};
    language = "en";
  }
  validateSiteData();
  renderAll();
}

const iaStylesheet = new URL("ia-style.css?v=20260723-ia-v18", APP_ASSET_BASE).href;
const iaRuntime = new URL("ia-runtime.js?v=20260723-ia-v18", APP_ASSET_BASE).href;
document.write(`<link rel="stylesheet" href="${iaStylesheet}"><script src="${iaRuntime}"><\/script>`);

init();
