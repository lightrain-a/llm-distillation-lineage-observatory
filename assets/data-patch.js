(() => {
  "use strict";

  const records = window.RESOURCE_DATA;
  if (!Array.isArray(records)) {
    console.error("Reference audit patch could not find window.RESOURCE_DATA.");
    return;
  }

  const updates = {
    r1: { year: "2025", venue: "Findings of ACL 2025", url: "https://aclanthology.org/2025.findings-acl.173/" },
    r2: { year: "2025", venue: "NeurIPS 2025", url: "https://neurips.cc/virtual/2025/poster/118754" },
    r3: { year: "2025", venue: "NeurIPS 2025", url: "https://openreview.net/forum?id=Qy5vFFeCZW" },
    r4: { title: "Leave It to the Experts: Detecting Knowledge Distillation via MoE Expert Signatures", year: "2025", venue: "arXiv" },
    r5: { year: "2026", venue: "ICLR 2026", url: "https://openreview.net/forum?id=Eem0IYVORm" },
    r8: { year: "2026", venue: "USENIX Security 2026", url: "https://www.usenix.org/conference/usenixsecurity26/presentation/shang" },
    r10: { year: "2026", venue: "AAAI 2026", url: "https://ojs.aaai.org/index.php/AAAI/article/view/40654" },
    r11: {
      title: "TensorGuard: Gradient-Based Model Fingerprinting for LLM Similarity Detection and Family Classification",
      year: "2025",
      venue: "ASE 2025",
      url: "https://conf.researchr.org/details/ase-2025/ase-2025-papers/18/TensorGuard-Gradient-Based-Model-Fingerprinting-for-LLM-Similarity-Detection-and-Fam"
    },
    r20: { year: "2022", venue: "IEEE S&P 2022", url: "https://doi.org/10.1109/SP46214.2022.9833747" },
    r22: {
      title: "ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models",
      year: "2026",
      venue: "ICASSP 2026",
      url: "https://doi.org/10.1109/ICASSP55912.2026.11464391"
    },
    r23: {
      title: "CTCC: A Robust and Stealthy Fingerprinting Framework for Large Language Models via Cross-Turn Contextual Correlation Backdoor",
      year: "2025",
      venue: "EMNLP 2025",
      url: "https://aclanthology.org/2025.emnlp-main.356/"
    },
    r24: { year: "2025", venue: "ACL 2025", url: "https://aclanthology.org/2025.acl-long.648/" },
    r25: { title: "TextSeal: A Localized LLM Watermark for Provenance & Distillation Protection", year: "2026", venue: "arXiv" },
    r28: { year: "2025", venue: "KDD 2025", url: "https://doi.org/10.1145/3711896.3736573" },
    r33: {
      title: "The False Promise of Imitating Proprietary Language Models",
      year: "2024",
      venue: "ICLR 2024",
      url: "https://proceedings.iclr.cc/paper_files/paper/2024/hash/4db16435e3a5a2ef3fc39b8f0d12498d-Abstract-Conference.html"
    },
    r35: {
      title: "Cascading Adversarial Bias from Injection to Distillation in Language Models",
      year: "2025",
      venue: "ICML 2025 DIG-BUG Workshop",
      url: "https://openreview.net/forum?id=eXONn94XLR"
    },
    r36: { year: "2023", venue: "ACL 2023", url: "https://aclanthology.org/2023.acl-long.754/" },
    r40: {
      title: "MiniLLM: Knowledge Distillation of Large Language Models",
      year: "2024",
      venue: "ICLR 2024",
      url: "https://proceedings.iclr.cc/paper_files/paper/2024/hash/8ac015d409635f196f9e3e9dcfb9a94e-Abstract-Conference.html"
    },
    r42: { title: "Compact Language Models via Pruning and Knowledge Distillation", year: "2024", venue: "NeurIPS 2024" },
    r44: {
      title: "DeepSeek-R1 Incentivizes Reasoning in LLMs through Reinforcement Learning",
      year: "2025",
      venue: "Nature",
      url: "https://doi.org/10.1038/s41586-025-09422-z"
    },
    r54: {
      title: "Knowledge Distillation and Dataset Distillation of Large Language Models: Emerging Trends, Challenges, and Future Directions",
      year: "2026",
      venue: "Artificial Intelligence Review",
      url: "https://doi.org/10.1007/s10462-025-11423-3"
    },
    r60: { year: "2015", venue: "NIPS 2014 Deep Learning Workshop / arXiv 2015" },
    r87: { year: "2025", venue: "NeurIPS 2025", url: "https://neurips.cc/virtual/2025/poster/119420" },
    r91: { year: "2021", venue: "ICML 2021", url: "https://proceedings.mlr.press/v139/wang21a.html" }
  };

  const preprintIds = new Set(["r4", "r6", "r7", "r9", "r15", "r16", "r17", "r25", "r34", "r38", "r39", "r43"]);
  const workshopIds = new Set(["r35", "r60", "r62"]);
  const modelCardIds = new Set(["r66", "r67", "r68", "r69", "r81", "r82", "r92", "r93", "r94", "r95"]);
  const datasetIds = new Set(["r76", "r77", "r78", "r79"]);
  const repositoryIds = new Set(["r18", "r19", "r21", "r55", "r56", "r57", "r58"]);
  const documentationIds = new Set(["r45", "r46", "r47", "r48", "r53", "r59", "r70", "r71", "r72", "r73", "r74", "r75", "r83", "r84", "r85"]);
  const newsIds = new Set(["r49", "r50", "r51", "r52"]);

  function resourceType(record) {
    if (record.id === "r80") return "internal";
    if (preprintIds.has(record.id) || /\barxiv\b/i.test(record.venue || "")) return "preprint";
    if (workshopIds.has(record.id) || /workshop/i.test(record.venue || "")) return "workshop";
    if (modelCardIds.has(record.id) || /model card/i.test(record.venue || "")) return "model-card";
    if (datasetIds.has(record.id) || /dataset/i.test(record.venue || "")) return "dataset";
    if (repositoryIds.has(record.id) || /github|repository/i.test(record.venue || "")) return "repository";
    if (documentationIds.has(record.id) || /documentation|official release|official product|policy|openrouter/i.test(record.venue || "")) return "documentation";
    if (newsIds.has(record.id) || /reuters|financial times|report/i.test(record.venue || "")) return "reporting";
    return "peer-reviewed";
  }

  records.forEach((record) => {
    if (updates[record.id]) Object.assign(record, updates[record.id]);
    record.resourceType = resourceType(record);
    record.publicationStatus = record.resourceType === "peer-reviewed"
      ? "formal"
      : record.resourceType === "workshop"
        ? "workshop"
        : record.resourceType === "preprint"
          ? "preprint"
          : "supporting-resource";
    record.metadataAudited = true;
  });

  const internal = records.find((record) => record.id === "r80");
  if (internal) {
    Object.assign(internal, {
      title: "Reserved internal work — excluded from external evidence synthesis",
      venue: "Internal manuscript",
      kind: "Internal ongoing work",
      url: "",
      repo: "",
      summary: "This stable reference slot is retained only to avoid renumbering later records. It is not a public publication and is excluded from the public bibliography and evidence synthesis.",
      hiddenFromPublic: true,
      resourceType: "internal",
      publicationStatus: "excluded"
    });
  }

  window.REFERENCE_AUDIT = Object.freeze({
    date: "2026-07-22",
    totalRecords: records.length,
    correctedRecords: Object.keys(updates).length + 1,
    verifiedPreprints: [...preprintIds],
    excludedRecords: ["r80"]
  });
})();
