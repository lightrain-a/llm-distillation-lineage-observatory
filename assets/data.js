window.RESOURCE_DATA=[
  {
    "id": "r1",
    "title": "Who Taught You That? Tracing Teachers in Model Distillation",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection"
    ],
    "access": [
      "Black-box student outputs"
    ],
    "evidence": "C — controlled behavioral evidence",
    "url": "https://arxiv.org/abs/2502.06659",
    "repo": "",
    "summary": "Asks whether the teacher of a distilled student can be identified from the student’s outputs; a foundational direct teacher-attribution baseline.",
    "tags": [
      "teacher attribution",
      "behavioral footprint"
    ]
  },
  {
    "id": "r2",
    "title": "Model Provenance Testing for Large Language Models",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": [
      "direct-detection",
      "lineage-fingerprinting",
      "repositories"
    ],
    "access": [
      "Black-box outputs"
    ],
    "evidence": "C — statistical provenance test",
    "url": "https://arxiv.org/abs/2502.00706",
    "repo": "https://github.com/ivicanikolicsg/model_provenance_testing",
    "summary": "Uses multiple hypothesis testing over output similarities to test whether one LLM is derived from another, including API-only settings.",
    "tags": [
      "black-box",
      "multiple testing"
    ]
  },
  {
    "id": "r3",
    "title": "Knowledge Distillation Detection for Open-weights Models",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": [
      "direct-detection",
      "repositories"
    ],
    "access": [
      "Student weights + teacher API"
    ],
    "evidence": "C — controlled detection",
    "url": "https://arxiv.org/abs/2510.02302",
    "repo": "https://github.com/shqii1j/distillation_detection",
    "summary": "Combines data-free input synthesis and statistical scoring when the student weights are available but the candidate teacher is API-only.",
    "tags": [
      "open-weight student",
      "teacher API"
    ]
  },
  {
    "id": "r4",
    "title": "Detecting Knowledge Distillation via MoE Expert Signatures",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection",
      "lineage-fingerprinting"
    ],
    "access": [
      "MoE routing or shadow-model black-box"
    ],
    "evidence": "C — structural evidence",
    "url": "https://arxiv.org/abs/2510.16968",
    "repo": "",
    "summary": "Uses transferred mixture-of-experts routing and collaboration habits as distillation signals, with a shadow-MoE route for black-box targets.",
    "tags": [
      "MoE",
      "routing signature"
    ]
  },
  {
    "id": "r5",
    "title": "Where Did This Sentence Come From? Tracing Provenance in LLM Reasoning Distillation",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection",
      "distillation-methods"
    ],
    "access": [
      "Teacher/base/distilled token probabilities"
    ],
    "evidence": "C — action-level provenance",
    "url": "https://arxiv.org/abs/2512.20908",
    "repo": "",
    "summary": "Attributes generated actions to teacher-, base-student-, or distilled-student-origin by comparing predictive probabilities under the same context.",
    "tags": [
      "reasoning provenance",
      "token attribution"
    ]
  },
  {
    "id": "r6",
    "title": "Reference-Based Distillation Detection in LLMs",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection"
    ],
    "access": [
      "Student logits + earlier checkpoint + teacher outputs"
    ],
    "evidence": "C — reference-normalized evidence",
    "url": "https://arxiv.org/abs/2607.09692",
    "repo": "",
    "summary": "Detects and attributes a teacher by measuring how a later checkpoint fits candidate-teacher outputs relative to an earlier same-lineage checkpoint.",
    "tags": [
      "reference checkpoint",
      "open world"
    ]
  },
  {
    "id": "r7",
    "title": "Provable Model Provenance Set for Large Language Models",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection",
      "lineage-fingerprinting"
    ],
    "access": [
      "Model comparison signals"
    ],
    "evidence": "C — coverage-guaranteed set inference",
    "url": "https://arxiv.org/abs/2602.00772",
    "repo": "",
    "summary": "Replaces forced single-source attribution with a statistically controlled provenance set intended to cover all true sources at a prescribed confidence.",
    "tags": [
      "set-valued inference",
      "multiple sources"
    ]
  },
  {
    "id": "r8",
    "title": "Attesting Model Lineage by Consisted Knowledge Evolution with Fine-Tuning Trajectory",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "direct-detection",
      "lineage-fingerprinting"
    ],
    "access": [
      "Weights + fine-tuning trajectory"
    ],
    "evidence": "C — parameter/knowledge trajectory",
    "url": "https://arxiv.org/abs/2601.11683",
    "repo": "",
    "summary": "Checks consistency between parameter changes and knowledge evolution across a fine-tuning trajectory to attest model lineage.",
    "tags": [
      "fine-tuning trajectory",
      "white-box"
    ]
  },
  {
    "id": "r9",
    "title": "Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper + Code + Demo",
    "categories": [
      "direct-detection",
      "surveys-tools",
      "repositories",
      "open-disclosures"
    ],
    "access": [
      "Public artifacts"
    ],
    "evidence": "B — source-grounded dependency graph",
    "url": "https://arxiv.org/abs/2606.12385",
    "repo": "https://github.com/cal-data-audit/modsleuth",
    "summary": "ModSleuth reconstructs recursive model and dataset dependencies from papers, model cards, dataset cards, code, and configuration files.",
    "tags": [
      "dependency graph",
      "public artifacts"
    ]
  },
  {
    "id": "r10",
    "title": "Ghost in the Transformer: Detecting Model Reuse with Invariant Spectral Signatures",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": [
      "lineage-fingerprinting",
      "repositories"
    ],
    "access": [
      "Weights"
    ],
    "evidence": "C — invariant spectral fingerprint",
    "url": "https://arxiv.org/abs/2511.06390",
    "repo": "https://github.com/DX0369/GhostSpec",
    "summary": "Builds data-free lineage fingerprints from singular values of invariant attention-weight products and aligns models with different layer counts.",
    "tags": [
      "SVD",
      "attention weights"
    ]
  },
  {
    "id": "r11",
    "title": "TensorGuard: Gradient-Based Model Fingerprinting for LLM Similarity and Family Classification",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "lineage-fingerprinting"
    ],
    "access": [
      "Weights and gradients"
    ],
    "evidence": "C — gradient-response fingerprint",
    "url": "https://arxiv.org/abs/2506.01631",
    "repo": "",
    "summary": "Extracts model-intrinsic signatures from gradient responses to random input perturbations for family classification and derivative detection.",
    "tags": [
      "gradients",
      "family classification"
    ]
  },
  {
    "id": "r12",
    "title": "AWM: Accurate Weight-Matrix Fingerprint for Large Language Models",
    "year": 2026,
    "venue": "ICLR 2026",
    "kind": "Paper + Code",
    "categories": [
      "lineage-fingerprinting",
      "repositories"
    ],
    "access": [
      "Weights"
    ],
    "evidence": "C — aligned weight similarity",
    "url": "https://arxiv.org/abs/2510.06738",
    "repo": "https://github.com/LUMIA-Group/AWM",
    "summary": "Uses linear-assignment alignment and unbiased CKA on attention weights to identify derivation under common post-training changes.",
    "tags": [
      "CKA",
      "weight alignment"
    ]
  },
  {
    "id": "r13",
    "title": "HuRef: HUman-REadable Fingerprint for Large Language Models",
    "year": 2024,
    "venue": "NeurIPS 2024",
    "kind": "Paper + Code",
    "categories": [
      "lineage-fingerprinting",
      "repositories"
    ],
    "access": [
      "Owner-side weights"
    ],
    "evidence": "C — invariant parameter direction",
    "url": "https://arxiv.org/abs/2312.04828",
    "repo": "https://github.com/LUMIA-Group/HuRef",
    "summary": "Uses parameter-direction invariants, a published human-readable representation, and zero-knowledge proof support to identify base-model families.",
    "tags": [
      "parameter invariants",
      "ZKP"
    ]
  },
  {
    "id": "r14",
    "title": "LLMmap: Fingerprinting for Large Language Models",
    "year": 2025,
    "venue": "USENIX Security 2025",
    "kind": "Paper + Code",
    "categories": [
      "lineage-fingerprinting",
      "repositories"
    ],
    "access": [
      "Black-box outputs"
    ],
    "evidence": "C — active API identification",
    "url": "https://www.usenix.org/conference/usenixsecurity25/presentation/pasquini",
    "repo": "https://github.com/pasquini-dario/LLMmap",
    "summary": "Actively probes an unknown API and classifies the underlying model or family, including open-set identification.",
    "tags": [
      "active probing",
      "API identification"
    ]
  },
  {
    "id": "r15",
    "title": "Hide and Seek: Fingerprinting Large Language Models with Evolutionary Learning",
    "year": 2024,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "lineage-fingerprinting"
    ],
    "access": [
      "Black-box outputs"
    ],
    "evidence": "C — learned discriminative prompts",
    "url": "https://arxiv.org/abs/2408.02871",
    "repo": "",
    "summary": "Uses an auditor LLM to evolve discriminative prompts and a detective LLM to identify model families from responses.",
    "tags": [
      "evolutionary prompts",
      "model family"
    ]
  },
  {
    "id": "r16",
    "title": "SoK: Large Language Model Copyright Auditing via Fingerprinting",
    "year": 2025,
    "venue": "arXiv",
    "kind": "SoK + Benchmark + Code",
    "categories": [
      "lineage-fingerprinting",
      "surveys-tools",
      "repositories",
      "datasets-benchmarks"
    ],
    "access": [
      "Black-box and white-box"
    ],
    "evidence": "B/C — taxonomy and benchmark",
    "url": "https://arxiv.org/abs/2508.19843",
    "repo": "https://github.com/shaoshuo-ss/LeaFBench",
    "summary": "Introduces a unified taxonomy and LeaFBench, with 149 model instances and 13 post-development transformations.",
    "tags": [
      "SoK",
      "benchmark"
    ]
  },
  {
    "id": "r17",
    "title": "Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Survey + Website",
    "categories": [
      "lineage-fingerprinting",
      "surveys-tools"
    ],
    "access": [
      "All"
    ],
    "evidence": "B — literature synthesis",
    "url": "https://arxiv.org/abs/2508.11548",
    "repo": "https://xuzhenhua55.github.io/awesome-llm-copyright-protection/",
    "summary": "Surveys text watermarking, model watermarking, fingerprinting, transfer, removal, evaluation, and open challenges.",
    "tags": [
      "survey",
      "copyright"
    ]
  },
  {
    "id": "r18",
    "title": "Awesome LLM Fingerprinting",
    "year": 2025,
    "venue": "GitHub",
    "kind": "Curated Repository",
    "categories": [
      "surveys-tools",
      "repositories"
    ],
    "access": [
      "All"
    ],
    "evidence": "B — curated literature index",
    "url": "https://github.com/shaoshuo-ss/Awesome-LLM-Fingerprinting",
    "repo": "https://github.com/shaoshuo-ss/Awesome-LLM-Fingerprinting",
    "summary": "A detailed paper index organized by white-box, black-box, and side-channel fingerprinting with code links and method attributes.",
    "tags": [
      "awesome list",
      "bibliography"
    ]
  },
  {
    "id": "r19",
    "title": "Cisco Model Provenance Kit",
    "year": 2026,
    "venue": "GitHub",
    "kind": "Toolkit",
    "categories": [
      "lineage-fingerprinting",
      "surveys-tools",
      "repositories"
    ],
    "access": [
      "Weights + tokenizer + metadata"
    ],
    "evidence": "B/C — multi-signal implementation",
    "url": "https://github.com/cisco-ai-defense/model-provenance-kit",
    "repo": "https://github.com/cisco-ai-defense/model-provenance-kit",
    "summary": "A production-oriented CLI combining architecture metadata, tokenizer, and weight signals against a model-family reference database.",
    "tags": [
      "toolkit",
      "tokenizer"
    ]
  },
  {
    "id": "r20",
    "title": "Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models",
    "year": 2021,
    "venue": "IEEE S&P / arXiv",
    "kind": "Paper + Code",
    "categories": [
      "lineage-fingerprinting",
      "surveys-tools"
    ],
    "access": [
      "Black-box and white-box"
    ],
    "evidence": "C — multi-signal similarity testing",
    "url": "https://arxiv.org/abs/2112.05588",
    "repo": "https://github.com/JialuoChen/DeepJudge",
    "summary": "DEEPJUDGE aggregates multiple similarity metrics and generated tests to assess model copying; a key pre-LLM foundation.",
    "tags": [
      "model copyright",
      "testing"
    ]
  },
  {
    "id": "r21",
    "title": "OML 1.0: Fingerprinting LLMs",
    "year": 2024,
    "venue": "GitHub / Whitepaper",
    "kind": "Toolkit",
    "categories": [
      "defenses-watermarks",
      "repositories"
    ],
    "access": [
      "Model training access"
    ],
    "evidence": "B/C — embedded fingerprint",
    "url": "https://github.com/sentient-agi/OML-1.0-Fingerprinting",
    "repo": "https://github.com/sentient-agi/OML-1.0-Fingerprinting",
    "summary": "Fine-tunes secret query-response pairs into a model for later black-box ownership verification.",
    "tags": [
      "embedded fingerprint",
      "ownership"
    ]
  },
  {
    "id": "r22",
    "title": "ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": [
      "defenses-watermarks",
      "repositories"
    ],
    "access": [
      "Model training access"
    ],
    "evidence": "C — embedded forgetting trace",
    "url": "https://arxiv.org/abs/2601.08189",
    "repo": "https://github.com/Xuzhenhua55/ForgetMark",
    "summary": "Encodes provenance through targeted unlearning rather than a conventional trigger-response backdoor.",
    "tags": [
      "targeted unlearning",
      "robustness"
    ]
  },
  {
    "id": "r23",
    "title": "CTCC: Cross-Turn Contextual Correlation Fingerprinting",
    "year": 2025,
    "venue": "GitHub / Paper",
    "kind": "Paper + Code",
    "categories": [
      "defenses-watermarks",
      "repositories"
    ],
    "access": [
      "Model training access"
    ],
    "evidence": "C — contextual fingerprint",
    "url": "https://github.com/Xuzhenhua55/CTCC",
    "repo": "https://github.com/Xuzhenhua55/CTCC",
    "summary": "Encodes multi-turn contextual correlations rather than obvious single-turn triggers.",
    "tags": [
      "multi-turn",
      "contextual correlation"
    ]
  },
  {
    "id": "r24",
    "title": "Can LLM Watermarks Robustly Prevent Unauthorized Knowledge Distillation?",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "defenses-watermarks",
      "extraction-attacks"
    ],
    "access": [
      "Teacher outputs + student training"
    ],
    "evidence": "C — attack/removal evaluation",
    "url": "https://arxiv.org/abs/2502.11598",
    "repo": "",
    "summary": "Tests watermark inheritance and develops pre- and post-distillation removal strategies, exposing weaknesses in naive transfer defenses.",
    "tags": [
      "watermark inheritance",
      "paraphrasing"
    ]
  },
  {
    "id": "r25",
    "title": "TextSeal: A Localized LLM Watermark for Provenance and Distillation Tracing",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "defenses-watermarks"
    ],
    "access": [
      "Generation-time watermarking"
    ],
    "evidence": "C — radioactive transfer signal",
    "url": "https://arxiv.org/abs/2605.12456",
    "repo": "",
    "summary": "A localized text watermark intended to transfer through downstream training and reveal unauthorized use.",
    "tags": [
      "radioactive watermark",
      "training provenance"
    ]
  },
  {
    "id": "r26",
    "title": "Radioactive Data: Tracing Through Training",
    "year": 2020,
    "venue": "ICML 2020",
    "kind": "Paper + Code",
    "categories": [
      "defenses-watermarks"
    ],
    "access": [
      "Training-data modification"
    ],
    "evidence": "C — training-data provenance signal",
    "url": "https://arxiv.org/abs/2002.00937",
    "repo": "https://github.com/facebookresearch/radioactive_data",
    "summary": "Foundational work on modifying released data so that models trained on it can later be statistically detected.",
    "tags": [
      "radioactive data",
      "foundational"
    ]
  },
  {
    "id": "r27",
    "title": "Dataset Inference: Ownership Resolution in Machine Learning",
    "year": 2021,
    "venue": "ICLR 2021",
    "kind": "Paper",
    "categories": [
      "defenses-watermarks",
      "lineage-fingerprinting"
    ],
    "access": [
      "Black-box or white-box"
    ],
    "evidence": "C — ownership hypothesis test",
    "url": "https://arxiv.org/abs/2104.10706",
    "repo": "",
    "summary": "Infers whether a protected dataset contributed to a model, suggesting designs for synthetic distillation-data ownership tests.",
    "tags": [
      "dataset ownership",
      "hypothesis testing"
    ]
  },
  {
    "id": "r28",
    "title": "A Survey on Model Extraction Attacks and Defenses for Large Language Models",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Survey",
    "categories": [
      "extraction-attacks",
      "surveys-tools"
    ],
    "access": [
      "All"
    ],
    "evidence": "B — literature synthesis",
    "url": "https://arxiv.org/abs/2506.22521",
    "repo": "",
    "summary": "Surveys functionality extraction, training-data extraction, prompt-targeted extraction, API-based distillation, and defenses.",
    "tags": [
      "survey",
      "model extraction"
    ]
  },
  {
    "id": "r29",
    "title": "Stealing Machine Learning Models via Prediction APIs",
    "year": 2016,
    "venue": "USENIX Security 2016",
    "kind": "Paper",
    "categories": [
      "extraction-attacks"
    ],
    "access": [
      "Prediction API"
    ],
    "evidence": "C — foundational extraction attack",
    "url": "https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/tramer",
    "repo": "",
    "summary": "Foundational prediction-API model extraction work that established the query-based stealing threat model.",
    "tags": [
      "prediction API",
      "foundational"
    ]
  },
  {
    "id": "r30",
    "title": "Knockoff Nets: Stealing Functionality of Black-Box Models",
    "year": 2019,
    "venue": "CVPR 2019",
    "kind": "Paper + Code",
    "categories": [
      "extraction-attacks"
    ],
    "access": [
      "Black-box outputs"
    ],
    "evidence": "C — transfer-set extraction",
    "url": "https://arxiv.org/abs/1812.02766",
    "repo": "https://github.com/tribhuvanesh/knockoffnets",
    "summary": "Trains a substitute on adaptively queried victim outputs and recovers substantial black-box functionality.",
    "tags": [
      "transfer set",
      "black-box"
    ]
  },
  {
    "id": "r31",
    "title": "Thieves on Sesame Street! Model Extraction of BERT-based APIs",
    "year": 2020,
    "venue": "ICLR 2020",
    "kind": "Paper",
    "categories": [
      "extraction-attacks"
    ],
    "access": [
      "NLP prediction API"
    ],
    "evidence": "C — NLP extraction",
    "url": "https://arxiv.org/abs/1910.12366",
    "repo": "",
    "summary": "Demonstrates extraction of BERT-based natural-language APIs using task queries and pseudo-labels.",
    "tags": [
      "BERT",
      "NLP API"
    ]
  },
  {
    "id": "r32",
    "title": "Imitation Attacks and Defenses for Black-box Machine Translation Systems",
    "year": 2020,
    "venue": "EMNLP 2020",
    "kind": "Paper",
    "categories": [
      "extraction-attacks",
      "defenses-watermarks"
    ],
    "access": [
      "Translation API"
    ],
    "evidence": "C — sequence-model imitation",
    "url": "https://arxiv.org/abs/2004.15015",
    "repo": "",
    "summary": "An early sequence-generation analogue of modern LLM response distillation, including defenses.",
    "tags": [
      "machine translation",
      "imitation"
    ]
  },
  {
    "id": "r33",
    "title": "The False Promise of Imitating Proprietary LLMs",
    "year": 2023,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": [
      "extraction-attacks",
      "distillation-methods"
    ],
    "access": [
      "Proprietary teacher outputs"
    ],
    "evidence": "C — empirical limits",
    "url": "https://arxiv.org/abs/2305.15717",
    "repo": "https://github.com/lm-sys/FastChat",
    "summary": "Finds that broad imitation can reproduce style but often transfers limited capability without sufficient task coverage and high-quality data.",
    "tags": [
      "proprietary LLM",
      "capability transfer"
    ]
  },
  {
    "id": "r34",
    "title": "Identified-Set Geometry of Distributional Model Extraction under Top-K Censored API Access",
    "year": 2026,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "extraction-attacks"
    ],
    "access": [
      "Top-k logprobs"
    ],
    "evidence": "C — theory and experiments",
    "url": "https://arxiv.org/abs/2605.10407",
    "repo": "",
    "summary": "Characterizes recoverability under top-k censoring and separates distribution recovery from capability transfer.",
    "tags": [
      "top-k logprobs",
      "identified set"
    ]
  },
  {
    "id": "r35",
    "title": "Cascading Adversarial Bias from Injection to Distillation in Large Language Models",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "extraction-attacks",
      "defenses-watermarks"
    ],
    "access": [
      "Teacher poisoning + student distillation"
    ],
    "evidence": "C — bias propagation",
    "url": "https://arxiv.org/abs/2505.24842",
    "repo": "",
    "summary": "Shows that subtle teacher bias can propagate and amplify in distilled students, creating supply-chain risk and possible provenance signals.",
    "tags": [
      "poisoning",
      "bias propagation"
    ]
  },
  {
    "id": "r36",
    "title": "Self-Instruct: Aligning Language Models with Self-Generated Instructions",
    "year": 2022,
    "venue": "ACL 2023",
    "kind": "Paper + Code",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Generator outputs"
    ],
    "evidence": "A/C — disclosed synthetic-data pipeline",
    "url": "https://arxiv.org/abs/2212.10560",
    "repo": "https://github.com/yizhongw/self-instruct",
    "summary": "Bootstraps instruction-following data from a language model; a foundational generator-model dependency in instruction tuning.",
    "tags": [
      "synthetic instructions",
      "data generation"
    ]
  },
  {
    "id": "r37",
    "title": "Stanford Alpaca",
    "year": 2023,
    "venue": "Project",
    "kind": "Model + Code",
    "categories": [
      "distillation-methods",
      "open-disclosures",
      "repositories"
    ],
    "access": [
      "text-davinci-003 outputs"
    ],
    "evidence": "A — explicit disclosure",
    "url": "https://crfm.stanford.edu/2023/03/13/alpaca.html",
    "repo": "https://github.com/tatsu-lab/stanford_alpaca",
    "summary": "Fine-tunes LLaMA 7B on 52K examples generated by text-davinci-003, a canonical black-box response-distillation case.",
    "tags": [
      "closed teacher",
      "instruction data"
    ]
  },
  {
    "id": "r38",
    "title": "Orca: Progressive Learning from Complex Explanation Traces of GPT-4",
    "year": 2023,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "GPT-4 explanation traces"
    ],
    "evidence": "A/C — disclosed explanation distillation",
    "url": "https://arxiv.org/abs/2306.02707",
    "repo": "",
    "summary": "Uses rich explanations and step-by-step traces from GPT-4 with progressive learning from easier to harder teachers.",
    "tags": [
      "GPT-4 teacher",
      "explanation traces"
    ]
  },
  {
    "id": "r39",
    "title": "Orca 2: Teaching Small Language Models How to Reason",
    "year": 2023,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Teacher-generated reasoning strategies"
    ],
    "evidence": "A/C — disclosed reasoning distillation",
    "url": "https://arxiv.org/abs/2311.11045",
    "repo": "",
    "summary": "Trains smaller models to select task-appropriate reasoning strategies rather than copy one fixed chain-of-thought style.",
    "tags": [
      "reasoning strategies",
      "small models"
    ]
  },
  {
    "id": "r40",
    "title": "MiniLLM: Knowledge Distillation of Large Language Models",
    "year": 2023,
    "venue": "ICLR 2024",
    "kind": "Paper + Code",
    "categories": [
      "distillation-methods",
      "repositories"
    ],
    "access": [
      "Teacher probabilities + student training"
    ],
    "evidence": "C — reverse-KL distillation",
    "url": "https://arxiv.org/abs/2306.08543",
    "repo": "https://github.com/microsoft/LMOps/tree/main/minillm",
    "summary": "Uses reverse KL and on-policy sampling to improve generative knowledge distillation.",
    "tags": [
      "reverse KL",
      "on-policy"
    ]
  },
  {
    "id": "r41",
    "title": "On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes",
    "year": 2024,
    "venue": "ICLR 2024",
    "kind": "Paper",
    "categories": [
      "distillation-methods"
    ],
    "access": [
      "Teacher/student distributions"
    ],
    "evidence": "C — generalized on-policy KD",
    "url": "https://arxiv.org/abs/2306.13649",
    "repo": "",
    "summary": "Trains on student-generated sequences and supports multiple divergence objectives.",
    "tags": [
      "on-policy KD",
      "student generations"
    ]
  },
  {
    "id": "r42",
    "title": "Compact Language Models via Pruning and Knowledge Distillation (Minitron)",
    "year": 2024,
    "venue": "NeurIPS 2024",
    "kind": "Paper + Code",
    "categories": [
      "distillation-methods",
      "open-disclosures",
      "repositories"
    ],
    "access": [
      "Teacher weights/logits"
    ],
    "evidence": "A/C — disclosed white-box compression",
    "url": "https://arxiv.org/abs/2407.14679",
    "repo": "https://github.com/NVIDIA/NeMo",
    "summary": "Combines structured pruning with knowledge distillation to derive compact models from larger checkpoints.",
    "tags": [
      "pruning",
      "white-box KD"
    ]
  },
  {
    "id": "r43",
    "title": "Llamba: Scaling Distilled Recurrent Models for Efficient Language Processing",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Teacher weights/representations"
    ],
    "evidence": "A/C — cross-architecture distillation",
    "url": "https://arxiv.org/abs/2502.14458",
    "repo": "",
    "summary": "Distills Llama-3.x transformers into recurrent Mamba-style models with little training data.",
    "tags": [
      "cross-architecture",
      "Mamba"
    ]
  },
  {
    "id": "r44",
    "title": "DeepSeek-R1 and DeepSeek-R1-Distill",
    "year": 2025,
    "venue": "Technical Report + GitHub",
    "kind": "Model Family + Code",
    "categories": [
      "distillation-methods",
      "open-disclosures",
      "repositories",
      "datasets-benchmarks"
    ],
    "access": [
      "Teacher-generated reasoning data"
    ],
    "evidence": "A — explicit official disclosure",
    "url": "https://arxiv.org/abs/2501.12948",
    "repo": "https://github.com/deepseek-ai/DeepSeek-R1",
    "summary": "Releases six Qwen- and Llama-based students fine-tuned on reasoning data generated by DeepSeek-R1, with explicit base-model information.",
    "tags": [
      "reasoning distillation",
      "Qwen",
      "Llama"
    ]
  },
  {
    "id": "r45",
    "title": "Llama 3.2 1B and 3B Lightweight Models",
    "year": 2024,
    "venue": "Meta Official Release",
    "kind": "Model Disclosure",
    "categories": [
      "open-disclosures",
      "distillation-methods"
    ],
    "access": [
      "Internal teacher logits"
    ],
    "evidence": "A — explicit official disclosure",
    "url": "https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/",
    "repo": "https://github.com/meta-llama/llama-models",
    "summary": "Meta states that the models were pruned from Llama 3.1 8B and trained with token-level targets from Llama 3.1 8B and 70B logits.",
    "tags": [
      "logit distillation",
      "pruning"
    ]
  },
  {
    "id": "r46",
    "title": "Gemini 1.5 Flash",
    "year": 2024,
    "venue": "Google Official Release",
    "kind": "Commercial Model Disclosure",
    "categories": [
      "closed-disclosures",
      "distillation-methods"
    ],
    "access": [
      "Internal teacher-student pipeline"
    ],
    "evidence": "A — explicit official disclosure",
    "url": "https://blog.google/innovation-and-ai/products/google-gemini-update-flash-ai-assistant-io-2024/",
    "repo": "",
    "summary": "Google explicitly states that Gemini 1.5 Flash was trained by Gemini 1.5 Pro through distillation.",
    "tags": [
      "Gemini Pro",
      "Gemini Flash"
    ]
  },
  {
    "id": "r47",
    "title": "Model Distillation in the OpenAI API",
    "year": 2024,
    "venue": "OpenAI Official Product",
    "kind": "Commercial Platform",
    "categories": [
      "closed-disclosures",
      "distillation-methods",
      "industry-reports"
    ],
    "access": [
      "Hosted teacher outputs + fine-tuning"
    ],
    "evidence": "A — official product disclosure",
    "url": "https://openai.com/index/api-model-distillation/",
    "repo": "",
    "summary": "An integrated workflow for using frontier-model outputs to fine-tune lower-cost models on the OpenAI platform.",
    "tags": [
      "OpenAI",
      "authorized distillation"
    ]
  },
  {
    "id": "r48",
    "title": "Llama 3.1 Output License and Model Distillation",
    "year": 2024,
    "venue": "Meta Official Release",
    "kind": "Policy / Disclosure",
    "categories": [
      "open-disclosures",
      "industry-reports"
    ],
    "access": [
      "Model outputs"
    ],
    "evidence": "A — official license statement",
    "url": "https://ai.meta.com/blog/meta-llama-3-1/",
    "repo": "",
    "summary": "Meta announced that developers may use Llama outputs, including 405B outputs, to improve other models.",
    "tags": [
      "license",
      "authorized distillation"
    ]
  },
  {
    "id": "r49",
    "title": "Detecting and Preventing Distillation Attacks",
    "year": 2026,
    "venue": "Anthropic Official Report",
    "kind": "Industry Report",
    "categories": [
      "industry-reports",
      "closed-disclosures",
      "defenses-watermarks"
    ],
    "access": [
      "Provider telemetry"
    ],
    "evidence": "D — provider attribution from private telemetry",
    "url": "https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks",
    "repo": "",
    "summary": "Anthropic reports coordinated campaigns and describes IP correlation, metadata, infrastructure indicators, traffic patterns, and capability targeting; the claims are not independently reproducible.",
    "tags": [
      "API telemetry",
      "provider claim"
    ]
  },
  {
    "id": "r50",
    "title": "OpenAI Says DeepSeek Used Distillation, According to a Memo",
    "year": 2026,
    "venue": "Reuters",
    "kind": "News Report",
    "categories": [
      "industry-reports",
      "closed-disclosures"
    ],
    "access": [
      "Company/policy claims"
    ],
    "evidence": "E — reported allegation",
    "url": "https://www.reuters.com/world/china/openai-accuses-deepseek-distilling-us-models-gain-advantage-bloomberg-news-2026-02-12/",
    "repo": "",
    "summary": "Reuters reports OpenAI’s allegation that DeepSeek used routers and automation to obtain outputs for training; this is not public experimental proof.",
    "tags": [
      "OpenAI",
      "DeepSeek"
    ]
  },
  {
    "id": "r51",
    "title": "Anthropic Says Alibaba Illicitly Extracted Claude Capabilities",
    "year": 2026,
    "venue": "Reuters",
    "kind": "News Report",
    "categories": [
      "industry-reports",
      "closed-disclosures"
    ],
    "access": [
      "Provider telemetry and correspondence"
    ],
    "evidence": "D/E — reported provider allegation",
    "url": "https://www.reuters.com/world/china/anthropic-says-alibaba-illicitly-extracted-claude-ai-model-capabilities-2026-06-24/",
    "repo": "",
    "summary": "Reports Anthropic’s allegation of a large Claude-output extraction campaign linked to Alibaba/Qwen; kept separate from independently verified lineage evidence.",
    "tags": [
      "Anthropic",
      "Alibaba"
    ]
  },
  {
    "id": "r52",
    "title": "What Is AI Distillation?",
    "year": 2026,
    "venue": "Financial Times",
    "kind": "News Explainer",
    "categories": [
      "industry-reports"
    ],
    "access": [
      "Industry reporting"
    ],
    "evidence": "E — journalistic synthesis",
    "url": "https://www.ft.com/content/4ee94860-d8e6-4f99-b59b-899e89ede5d5",
    "repo": "",
    "summary": "Explains legitimate and contested uses of distillation, the legal gray area, and industrial-security concerns.",
    "tags": [
      "legal context",
      "industry"
    ]
  },
  {
    "id": "r53",
    "title": "OpenAI Terms of Use: Restrictions Relevant to Extraction and Competing Models",
    "year": 2026,
    "venue": "OpenAI Policy",
    "kind": "Terms / Policy",
    "categories": [
      "industry-reports",
      "closed-disclosures"
    ],
    "access": [
      "Policy"
    ],
    "evidence": "A — official policy text",
    "url": "https://openai.com/policies/row-terms-of-use/",
    "repo": "",
    "summary": "Relevant to research design because service terms may restrict automated extraction or use of outputs to develop competing models.",
    "tags": [
      "terms of use",
      "research ethics"
    ]
  },
  {
    "id": "r54",
    "title": "Knowledge Distillation and Dataset Distillation of Large Language Models",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Survey",
    "categories": [
      "distillation-methods",
      "surveys-tools"
    ],
    "access": [
      "All"
    ],
    "evidence": "B — literature synthesis",
    "url": "https://arxiv.org/abs/2504.14772",
    "repo": "",
    "summary": "Surveys task alignment, rationale distillation, multi-teacher methods, and dataset distillation.",
    "tags": [
      "KD survey",
      "multi-teacher"
    ]
  },
  {
    "id": "r55",
    "title": "Awesome Efficient LLM",
    "year": 2026,
    "venue": "GitHub",
    "kind": "Curated Repository",
    "categories": [
      "surveys-tools",
      "repositories",
      "distillation-methods"
    ],
    "access": [
      "All"
    ],
    "evidence": "B — curated index",
    "url": "https://github.com/horseee/Awesome-Efficient-LLM",
    "repo": "https://github.com/horseee/Awesome-Efficient-LLM",
    "summary": "A broad efficiency bibliography with a substantial knowledge-distillation section.",
    "tags": [
      "awesome list",
      "efficient LLM"
    ]
  },
  {
    "id": "r56",
    "title": "distilabel",
    "year": 2026,
    "venue": "GitHub / Argilla",
    "kind": "Data Pipeline Toolkit",
    "categories": [
      "repositories",
      "distillation-methods",
      "surveys-tools"
    ],
    "access": [
      "Teacher APIs or local models"
    ],
    "evidence": "B — operational toolkit",
    "url": "https://github.com/argilla-io/distilabel",
    "repo": "https://github.com/argilla-io/distilabel",
    "summary": "A framework for synthetic-data and AI-feedback pipelines: generation, critique, scoring, filtering, and multi-model orchestration.",
    "tags": [
      "synthetic data",
      "AI feedback"
    ]
  },
  {
    "id": "r57",
    "title": "Open-R1",
    "year": 2025,
    "venue": "GitHub / Hugging Face",
    "kind": "Reproduction Toolkit",
    "categories": [
      "repositories",
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Open teacher/student pipelines"
    ],
    "evidence": "B/C — reproducible reasoning pipeline",
    "url": "https://github.com/huggingface/open-r1",
    "repo": "https://github.com/huggingface/open-r1",
    "summary": "An open initiative for reasoning-model data generation, supervised fine-tuning, reinforcement learning, and evaluation.",
    "tags": [
      "reasoning",
      "reproduction"
    ]
  },
  {
    "id": "r58",
    "title": "OpenThoughts",
    "year": 2025,
    "venue": "GitHub",
    "kind": "Data and Training Project",
    "categories": [
      "repositories",
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Teacher-generated reasoning data"
    ],
    "evidence": "B — disclosed synthetic pipeline",
    "url": "https://github.com/open-thoughts/open-thoughts",
    "repo": "https://github.com/open-thoughts/open-thoughts",
    "summary": "A community project for generating and training on open reasoning traces, useful for controlled multi-teacher benchmarks.",
    "tags": [
      "reasoning traces",
      "synthetic data"
    ]
  },
  {
    "id": "r59",
    "title": "Model Provenance Constitution",
    "year": 2026,
    "venue": "Cisco AI Defense / GitHub",
    "kind": "Specification",
    "categories": [
      "surveys-tools",
      "repositories",
      "datasets-benchmarks"
    ],
    "access": [
      "Conceptual"
    ],
    "evidence": "B — terminology/specification",
    "url": "https://github.com/cisco-ai-defense/model-provenance-kit/blob/main/docs/constitution/model_provenance_constitution.md",
    "repo": "https://github.com/cisco-ai-defense/model-provenance-kit",
    "summary": "Defines provenance relationships, attribution methodology, and reporting concepts intended to standardize model-origin claims.",
    "tags": [
      "specification",
      "terminology"
    ]
  },
  {
    "id": "r60",
    "title": "Distilling the Knowledge in a Neural Network",
    "year": 2015,
    "venue": "NeurIPS Deep Learning Workshop / arXiv",
    "kind": "Foundational Paper",
    "categories": [
      "distillation-methods",
      "surveys-tools"
    ],
    "access": [
      "Teacher probability distributions"
    ],
    "evidence": "C — foundational controlled experiments",
    "url": "https://arxiv.org/abs/1503.02531",
    "repo": "",
    "summary": "Formalizes modern knowledge distillation through softened teacher distributions and temperature-scaled training, establishing the canonical teacher–student compression objective.",
    "tags": [
      "soft targets",
      "temperature scaling",
      "classical KD"
    ]
  },
  {
    "id": "r61",
    "title": "Sequence-Level Knowledge Distillation",
    "year": 2016,
    "venue": "EMNLP 2016",
    "kind": "Foundational Paper",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Teacher-generated sequences"
    ],
    "evidence": "C — controlled sequence-model experiments",
    "url": "https://aclanthology.org/D16-1139/",
    "repo": "",
    "summary": "Extends distillation from token or class distributions to teacher-decoded target sequences, creating a foundational sequence-level supervision paradigm for generation models.",
    "tags": [
      "sequence-level KD",
      "teacher decoding",
      "generation"
    ]
  },
  {
    "id": "r62",
    "title": "DistilBERT, a Distilled Version of BERT: Smaller, Faster, Cheaper and Lighter",
    "year": 2019,
    "venue": "NeurIPS 2019 Workshop / arXiv",
    "kind": "Paper",
    "categories": [
      "distillation-methods",
      "open-disclosures"
    ],
    "access": [
      "Teacher logits and representations"
    ],
    "evidence": "C — controlled pre-training distillation",
    "url": "https://arxiv.org/abs/1910.01108",
    "repo": "https://github.com/huggingface/transformers",
    "summary": "Applies knowledge distillation during language-model pre-training with a triple objective combining language modeling, distillation, and cosine-distance losses.",
    "tags": [
      "pre-training distillation",
      "cosine loss",
      "BERT compression"
    ]
  },
  {
    "id": "r63",
    "title": "TinyBERT: Distilling BERT for Natural Language Understanding",
    "year": 2020,
    "venue": "Findings of EMNLP 2020",
    "kind": "Paper + Code",
    "categories": [
      "distillation-methods",
      "open-disclosures",
      "repositories"
    ],
    "access": [
      "Teacher embeddings, hidden states, attention, and logits"
    ],
    "evidence": "C — controlled Transformer distillation",
    "url": "https://aclanthology.org/2020.findings-emnlp.372/",
    "repo": "https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/TinyBERT",
    "summary": "Introduces a two-stage Transformer distillation framework that transfers embedding, hidden-state, attention, and prediction-layer knowledge during general and task-specific learning.",
    "tags": [
      "Transformer distillation",
      "two-stage learning",
      "intermediate representations"
    ]
  }
];