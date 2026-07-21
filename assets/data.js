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
  },
  {
    "id": "r64",
    "title": "Membership Inference Attacks From First Principles",
    "year": 2022,
    "venue": "IEEE Symposium on Security and Privacy 2022",
    "kind": "Paper",
    "categories": [
      "surveys-tools",
      "datasets-benchmarks"
    ],
    "access": [
      "Black-box or score access"
    ],
    "evidence": "C — controlled privacy-auditing experiments",
    "url": "https://arxiv.org/abs/2112.03570",
    "repo": "",
    "summary": "Reframes membership-inference evaluation around true-positive rate at very low false-positive rates and introduces likelihood-ratio attacks, illustrating that sample-membership evidence is a different statistical target from model-to-model distillation evidence.",
    "tags": [
      "membership inference",
      "low-FPR evaluation",
      "likelihood ratio"
    ]
  },
  {
    "id": "r65",
    "title": "Sampling-based Pseudo-Likelihood for Membership Inference Attacks",
    "year": 2025,
    "venue": "Findings of ACL 2025",
    "kind": "Paper",
    "categories": [
      "surveys-tools",
      "datasets-benchmarks"
    ],
    "access": [
      "Output-only generated text"
    ],
    "evidence": "C — controlled black-box LLM privacy audit",
    "url": "https://aclanthology.org/2025.findings-acl.465/",
    "repo": "",
    "summary": "Uses sampling-based pseudo-likelihood derived from generated text to test whether a target text was included in an LLM's training data, providing an output-only membership-inference comparator whose claim concerns data records rather than teacher-model influence.",
    "tags": [
      "membership inference",
      "output-only auditing",
      "pseudo-likelihood"
    ]
  },
  {
    "id": "r66",
    "title": "Qwen3-8B-Base Model Card",
    "year": 2025,
    "venue": "Hugging Face / Qwen",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "distillation-methods"],
    "access": ["Open weights"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/Qwen/Qwen3-8B-Base",
    "repo": "https://huggingface.co/Qwen/Qwen3-8B-Base",
    "summary": "Official Apache-2.0 Qwen3 8B base checkpoint selected as one controlled student base for same-family and cross-family distillation experiments.",
    "tags": ["Qwen3", "student base", "open weights"]
  },
  {
    "id": "r67",
    "title": "Llama 3.1 8B Model Card",
    "year": 2024,
    "venue": "Hugging Face / Meta",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "distillation-methods"],
    "access": ["Open weights under Llama 3.1 license"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B",
    "repo": "https://huggingface.co/meta-llama/Llama-3.1-8B",
    "summary": "Official Llama 3.1 8B base checkpoint used as a cross-family controlled student base and as the base of a disclosed DeepSeek-R1 distilled model.",
    "tags": ["Llama 3.1", "student base", "cross-family"]
  },
  {
    "id": "r68",
    "title": "Gemma 3 4B Pretrained Model Card",
    "year": 2025,
    "venue": "Hugging Face / Google",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "distillation-methods"],
    "access": ["Open weights under Gemma terms"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/google/gemma-3-4b-pt",
    "repo": "https://huggingface.co/google/gemma-3-4b-pt",
    "summary": "Official Gemma 3 4B pretrained checkpoint used as a smaller cross-architecture stress-test student after the two-base confirmatory study.",
    "tags": ["Gemma 3", "small student", "cross-architecture"]
  },
  {
    "id": "r69",
    "title": "DeepSeek-R1-Distill-Qwen-7B Model Card",
    "year": 2025,
    "venue": "Hugging Face / DeepSeek",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "distillation-methods", "datasets-benchmarks"],
    "access": ["Open weights and disclosed teacher relation"],
    "evidence": "A/B — official disclosed distillation artifact",
    "url": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "repo": "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "summary": "Officially disclosed dense student distilled from DeepSeek-R1 on a Qwen base, used as an external positive validation case rather than a training replica.",
    "tags": ["DeepSeek-R1", "disclosed positive", "reasoning distillation"]
  },
  {
    "id": "r70",
    "title": "OpenAI API Models",
    "year": 2026,
    "venue": "OpenAI Platform Documentation",
    "kind": "Official API Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Commercial prediction API"],
    "evidence": "A — official endpoint documentation",
    "url": "https://platform.openai.com/docs/models",
    "repo": "",
    "summary": "Official OpenAI model documentation used to freeze the exact GPT model identifier, availability, and endpoint metadata for commercial-teacher and observational audits.",
    "tags": ["OpenAI API", "commercial teacher", "version pinning"]
  },
  {
    "id": "r71",
    "title": "Gemini API Models",
    "year": 2026,
    "venue": "Google AI for Developers",
    "kind": "Official API Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Commercial prediction API"],
    "evidence": "A — official endpoint documentation",
    "url": "https://ai.google.dev/gemini-api/docs/models",
    "repo": "",
    "summary": "Official Gemini model catalog used to select stable, versioned Gemini endpoints and avoid mutable latest aliases in the commercial model panel.",
    "tags": ["Gemini API", "commercial teacher", "stable endpoint"]
  },
  {
    "id": "r72",
    "title": "DeepSeek API Models and Pricing",
    "year": 2026,
    "venue": "DeepSeek API Documentation",
    "kind": "Official API Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Commercial prediction API"],
    "evidence": "A — official endpoint documentation",
    "url": "https://api-docs.deepseek.com/quick_start/pricing",
    "repo": "",
    "summary": "Official DeepSeek API documentation listing the current V4 Pro and V4 Flash endpoints, used for version-pinned teacher generation and observational audits.",
    "tags": ["DeepSeek API", "V4", "commercial teacher"]
  },
  {
    "id": "r73",
    "title": "Mistral Models Overview",
    "year": 2026,
    "venue": "Mistral Documentation",
    "kind": "Official API and Model Documentation",
    "categories": ["closed-disclosures", "open-disclosures", "datasets-benchmarks"],
    "access": ["Commercial API and open weights"],
    "evidence": "A/B — official model catalog",
    "url": "https://docs.mistral.ai/models/overview",
    "repo": "",
    "summary": "Official Mistral model catalog used to freeze a current generalist endpoint and distinguish stable versioned models from latest or labs aliases.",
    "tags": ["Mistral API", "commercial candidate", "model version"]
  },
  {
    "id": "r74",
    "title": "Alibaba Cloud Model Studio Model Lifecycle",
    "year": 2026,
    "venue": "Alibaba Cloud Model Studio Documentation",
    "kind": "Official API Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Commercial prediction API"],
    "evidence": "A — official endpoint documentation",
    "url": "https://help.aliyun.com/en/model-studio/newly-released-models",
    "repo": "",
    "summary": "Official lifecycle page used to pin exact Qwen commercial endpoint versions, including region-specific availability and release dates.",
    "tags": ["Qwen API", "Model Studio", "version pinning"]
  },
  {
    "id": "r75",
    "title": "Claude Model and Pricing Documentation",
    "year": 2025,
    "venue": "Anthropic Documentation",
    "kind": "Official API Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Commercial prediction API"],
    "evidence": "A — official model documentation",
    "url": "https://docs.anthropic.com/en/docs/about-claude/pricing",
    "repo": "",
    "summary": "Official Anthropic documentation used to freeze the exact Claude Opus or Sonnet snapshot available to the account when the commercial audit manifest is created.",
    "tags": ["Claude API", "commercial candidate", "snapshot pinning"]
  },
  {
    "id": "r76",
    "title": "UltraChat 200k",
    "year": 2023,
    "venue": "Hugging FaceH4 Dataset",
    "kind": "Dataset",
    "categories": ["datasets-benchmarks", "repositories", "distillation-methods"],
    "access": ["Open conversational prompts and responses"],
    "evidence": "B — public training dataset",
    "url": "https://huggingface.co/datasets/HuggingFaceH4/ultrachat_200k",
    "repo": "https://huggingface.co/datasets/HuggingFaceH4/ultrachat_200k",
    "summary": "A large public conversation corpus used here only as a prompt source for response-distillation training and same-data controls after overlap filtering.",
    "tags": ["instruction prompts", "response distillation", "same-data control"]
  },
  {
    "id": "r77",
    "title": "GSM8K",
    "year": 2021,
    "venue": "OpenAI / Dataset",
    "kind": "Dataset",
    "categories": ["datasets-benchmarks", "distillation-methods"],
    "access": ["Open grade-school math problems"],
    "evidence": "B/C — public benchmark and controlled reasoning prompts",
    "url": "https://huggingface.co/datasets/openai/gsm8k",
    "repo": "https://huggingface.co/datasets/openai/gsm8k",
    "summary": "Grade-school mathematics problems used as one reasoning-template source, with held-out numerical regeneration rather than direct benchmark reuse for confirmatory probes.",
    "tags": ["reasoning", "math", "template regeneration"]
  },
  {
    "id": "r78",
    "title": "MATH Dataset",
    "year": 2021,
    "venue": "NeurIPS 2021",
    "kind": "Dataset",
    "categories": ["datasets-benchmarks", "distillation-methods"],
    "access": ["Open competition mathematics problems"],
    "evidence": "B/C — public reasoning benchmark",
    "url": "https://huggingface.co/datasets/hendrycks/competition_math",
    "repo": "https://huggingface.co/datasets/hendrycks/competition_math",
    "summary": "Competition mathematics problems used to define reasoning families and generate disjoint transformed probes with new values and answer options.",
    "tags": ["reasoning", "mathematics", "held-out probes"]
  },
  {
    "id": "r79",
    "title": "UltraFeedback Binarized",
    "year": 2023,
    "venue": "Hugging FaceH4 Dataset",
    "kind": "Dataset",
    "categories": ["datasets-benchmarks", "repositories", "distillation-methods"],
    "access": ["Open prompts and preference pairs"],
    "evidence": "B — public preference dataset",
    "url": "https://huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized",
    "repo": "https://huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized",
    "summary": "Public preference prompts used as a prompt source; candidate responses and teacher judgments are regenerated so the controlled preference edge is known.",
    "tags": ["preference distillation", "pairwise judgment", "DPO"]
  },
  {
    "id": "r80",
    "title": "Targeted Counterfactual Fingerprinting for Black-Box LLM Ownership Verification",
    "year": 2027,
    "venue": "Research Manuscript",
    "kind": "Paper",
    "categories": ["lineage-fingerprinting", "datasets-benchmarks", "evasion-removal"],
    "access": ["Final generated text only at verification"],
    "evidence": "C — controlled multi-family experiments",
    "url": "",
    "repo": "",
    "summary": "Introduces finite-answer targeted counterfactual fingerprints for strict black-box LLM ownership verification and evaluates derived-model pools, an OpenRouter source-versus-control study, clean-query distillation, decoding robustness, model merging, and adaptive LoRA erasure.",
    "tags": ["LLM fingerprinting", "counterfactual probes", "clean-query distillation"]
  },
  {
    "id": "r81",
    "title": "Llama 3.2 1B and 3B Model Cards",
    "year": 2024,
    "venue": "Meta / Hugging Face",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "distillation-methods", "datasets-benchmarks"],
    "access": ["Open weights under Llama 3.2 license"],
    "evidence": "A/B — officially disclosed logit distillation",
    "url": "https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct",
    "repo": "https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct",
    "summary": "Meta reports that Llama 3.2 1B and 3B used logits from Llama 3.1 8B and 70B as token-level targets and used distillation after pruning, providing a disclosed multi-teacher, mixed-procedure external case.",
    "tags": ["Llama 3.2", "logit distillation", "pruning plus distillation"]
  },
  {
    "id": "r82",
    "title": "Llama-3.1-Minitron-4B Width and Depth Base Models",
    "year": 2024,
    "venue": "NVIDIA / Hugging Face",
    "kind": "Official Model Cards",
    "categories": ["open-disclosures", "distillation-methods", "datasets-benchmarks"],
    "access": ["Open weights under NVIDIA Open Model License"],
    "evidence": "A/B — officially disclosed pruning plus distillation",
    "url": "https://huggingface.co/nvidia/Llama-3.1-Minitron-4B-Width-Base",
    "repo": "https://huggingface.co/nvidia/Llama-3.1-Minitron-4B-Width-Base",
    "summary": "NVIDIA reports width- and depth-pruned Llama 3.1 8B students followed by 94B-token continued training with distillation, providing mixed pruning-plus-distillation external cases.",
    "tags": ["Minitron", "pruning", "continued distillation"]
  },
  {
    "id": "r83",
    "title": "Distillable AI Models Collection",
    "year": 2026,
    "venue": "OpenRouter",
    "kind": "Official Model Collection",
    "categories": ["closed-disclosures", "datasets-benchmarks", "distillation-methods"],
    "access": ["Commercial APIs with explicit distillation permission"],
    "evidence": "A — platform-maintained permission metadata",
    "url": "https://openrouter.ai/collections/distillable-models",
    "repo": "",
    "summary": "OpenRouter collection of models whose creators explicitly allow output use for training or distillation; used to restrict controlled teacher-data generation to permission-compatible endpoints.",
    "tags": ["OpenRouter", "distillable", "teacher permission"]
  },
  {
    "id": "r84",
    "title": "Distillation Compliance with Provider and Model-Creator Policies",
    "year": 2026,
    "venue": "OpenRouter Documentation",
    "kind": "Official Documentation",
    "categories": ["closed-disclosures", "datasets-benchmarks", "distillation-methods"],
    "access": ["Policy metadata and model catalog"],
    "evidence": "A — official compliance guidance",
    "url": "https://openrouter.ai/docs/cookbook/evaluate-and-optimize/distillation",
    "repo": "",
    "summary": "Documents OpenRouter's is_trainable_text metadata and recommends verifying model-specific terms before using outputs for training, providing the compliance gate for controlled teacher selection.",
    "tags": ["distillation compliance", "is_trainable_text", "terms verification"]
  },
  {
    "id": "r85",
    "title": "OpenRouter Model Catalog",
    "year": 2026,
    "venue": "OpenRouter",
    "kind": "Official API Catalog",
    "categories": ["closed-disclosures", "datasets-benchmarks"],
    "access": ["Unified black-box API"],
    "evidence": "A — current model identifiers and endpoint metadata",
    "url": "https://openrouter.ai/models",
    "repo": "",
    "summary": "Current OpenRouter model catalog used to freeze exact model slugs, provider routing, context limits, supported parameters, prices, and endpoint availability for observational audits.",
    "tags": ["OpenRouter", "model catalog", "version pinning"]
  },
  {
    "id": "r86",
    "title": "Knowledge Distillation with Adversarial Samples Supporting Decision Boundary",
    "year": 2018,
    "venue": "AAAI 2019 / arXiv",
    "kind": "Paper",
    "categories": ["distillation-methods", "datasets-benchmarks"],
    "access": ["Teacher gradients during controlled distillation"],
    "evidence": "C — controlled decision-boundary distillation experiments",
    "url": "https://arxiv.org/abs/1805.05532",
    "repo": "",
    "summary": "Shows that adversarial samples near a teacher classifier's decision boundary provide informative knowledge for student training, supporting decision-boundary transfer as a general KD mechanism outside LLMs.",
    "tags": ["decision boundary", "adversarial samples", "knowledge transfer"]
  },
  {
    "id": "r87",
    "title": "Few-Shot Knowledge Distillation of LLMs With Counterfactual Explanations",
    "year": 2025,
    "venue": "arXiv",
    "kind": "Paper",
    "categories": ["distillation-methods", "datasets-benchmarks"],
    "access": ["Teacher-generated counterfactual explanations"],
    "evidence": "C — controlled LLM counterfactual-distillation experiments",
    "url": "https://arxiv.org/abs/2510.21631",
    "repo": "",
    "summary": "Uses teacher counterfactual explanations that minimally flip predictions to map decision boundaries and improve few-shot LLM distillation, providing direct but task-aware support for boundary-informed LLM transfer.",
    "tags": ["LLM distillation", "counterfactual explanations", "decision boundary"]
  },
  {
    "id": "r88",
    "title": "When Agents Look the Same: Quantifying Distillation-Induced Similarity in Tool-Use Behaviors",
    "year": 2026,
    "venue": "ACL 2026",
    "kind": "Paper + Code",
    "categories": ["lineage-fingerprinting", "datasets-benchmarks", "distillation-methods"],
    "access": ["Output and tool-use trajectories"],
    "evidence": "C — controlled distillation plus multi-provider behavioral study",
    "url": "https://aclanthology.org/2026.acl-long.478/",
    "repo": "https://github.com/Syuchin/AgentEcho",
    "summary": "Separates mandatory task behavior from non-mandatory response and action-graph patterns, and reports controlled evidence that distillation drives teacher-specific behavioral convergence beyond general improvement.",
    "tags": ["behavioral homogenization", "action graphs", "teacher-specific convergence"]
  },
  {
    "id": "r89",
    "title": "Protecting Language Models Against Unauthorized Distillation through Trace Rewriting",
    "year": 2026,
    "venue": "ACL 2026",
    "kind": "Paper + Code",
    "categories": ["provenance-defenses", "evasion-removal", "distillation-methods"],
    "access": ["Teacher reasoning traces during data generation"],
    "evidence": "C — controlled reasoning-distillation and watermark experiments",
    "url": "https://aclanthology.org/2026.acl-long.519/",
    "repo": "https://github.com/xhOwenMa/trace-rewriting",
    "summary": "Shows that structured modifications to teacher reasoning traces can alter student learning and can embed black-box-detectable signatures in distilled students, demonstrating transfer of non-task-essential trace properties.",
    "tags": ["reasoning traces", "API watermark", "anti-distillation"]
  },
  {
    "id": "r90",
    "title": "Membership and Memorization in LLM Knowledge Distillation",
    "year": 2025,
    "venue": "EMNLP 2025",
    "kind": "Paper",
    "categories": ["distillation-methods", "datasets-benchmarks", "confounders-robustness"],
    "access": ["Controlled teacher and student checkpoints"],
    "evidence": "C — multi-technique LLM distillation experiments",
    "url": "https://aclanthology.org/2025.emnlp-main.1015/",
    "repo": "",
    "summary": "Finds that membership and memorization risks can transfer from teachers to students across multiple LLM distillation techniques, supporting the broader claim that teacher-specific non-utility properties may survive distillation.",
    "tags": ["memorization transfer", "privacy", "LLM distillation"]
  },
  {
    "id": "r91",
    "title": "Zero-Shot Knowledge Distillation from a Decision-Based Black-Box Model",
    "year": 2021,
    "venue": "arXiv",
    "kind": "Paper + Code",
    "categories": ["distillation-methods", "datasets-benchmarks"],
    "access": ["Decision-only black-box teacher"],
    "evidence": "C — controlled black-box boundary-distillation experiments",
    "url": "https://arxiv.org/abs/2106.03310",
    "repo": "https://github.com/zwang84/zsdb3kd",
    "summary": "Constructs soft supervision from distances to a black-box teacher's decision boundaries and distills students without teacher logits, supporting boundary information as an extractable black-box knowledge source.",
    "tags": ["decision-only teacher", "boundary distance", "black-box KD"]
  },
  {
    "id": "r92",
    "title": "Qwen3-8B Model Card",
    "year": 2025,
    "venue": "Hugging Face / Qwen",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "datasets-benchmarks"],
    "access": ["Open weights under Apache-2.0"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/Qwen/Qwen3-8B",
    "repo": "https://huggingface.co/Qwen/Qwen3-8B",
    "summary": "Official Qwen3 8B instruction-tuned checkpoint used as one open teacher in the decisive behavioral-signature demo.",
    "tags": ["Qwen3-8B", "demo teacher", "open weights"]
  },
  {
    "id": "r93",
    "title": "Llama 3.1 8B Instruct Model Card",
    "year": 2024,
    "venue": "Hugging Face / Meta",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "datasets-benchmarks"],
    "access": ["Open weights under Llama 3.1 license"],
    "evidence": "B — official model artifact and output-use terms",
    "url": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct",
    "repo": "https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct",
    "summary": "Official Llama 3.1 8B Instruct checkpoint used as the second open teacher; the model card explicitly permits using outputs to improve other models subject to its license.",
    "tags": ["Llama 3.1", "demo teacher", "distillation permitted"]
  },
  {
    "id": "r94",
    "title": "Qwen3-1.7B-Base Model Card",
    "year": 2025,
    "venue": "Hugging Face / Qwen",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "datasets-benchmarks"],
    "access": ["Open weights under Apache-2.0"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/Qwen/Qwen3-1.7B-Base",
    "repo": "https://huggingface.co/Qwen/Qwen3-1.7B-Base",
    "summary": "Official Qwen3 1.7B base checkpoint used as the shared student initialization for all paired-seed demo arms.",
    "tags": ["Qwen3-1.7B", "student base", "paired seeds"]
  },
  {
    "id": "r95",
    "title": "Qwen3-1.7B Model Card",
    "year": 2025,
    "venue": "Hugging Face / Qwen",
    "kind": "Official Model Card",
    "categories": ["open-disclosures", "repositories", "datasets-benchmarks"],
    "access": ["Open weights under Apache-2.0"],
    "evidence": "B — official model artifact",
    "url": "https://huggingface.co/Qwen/Qwen3-1.7B",
    "repo": "https://huggingface.co/Qwen/Qwen3-1.7B",
    "summary": "Official Qwen3 1.7B instruction-tuned checkpoint used as a same-family shadow teacher control in the decisive demo.",
    "tags": ["Qwen3-1.7B", "shadow teacher", "same-family control"]
  }
];