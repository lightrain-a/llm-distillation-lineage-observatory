# LLM Distillation & Lineage Observatory

A static, multi-page bilingual research website organized around the technical lifecycle of LLM distillation: definitions, distillation mechanisms, auditing, attacks and defenses, evaluation, real-world pipelines, and research gaps. English is the default language, with a persistent Chinese/English switch.

## Information architecture

- **Next Paper** — black-box problem formulation, method candidates, benchmark, and execution roadmap
- **Preliminary** — definitions, taxonomy, access, and evidence levels
- **Distillation Methods** — white-box, black-box, and composite distillation
- **Distillation Auditing** — output-only, internal-signal, lineage, and multi-teacher recovery
- **Attacks & Defenses** — unauthorized distillation, provenance defenses, and removal
- **Distillation Evaluation** — benchmarks, metrics, confounders, and robustness
- **Real-world Distillation** — family compression, response, reasoning, and production pipelines
- **Resources** — repositories, bibliography, and longer-term research agenda

## Contents

- 26 second-level research pages grouped under eight first-level sections
- A four-page paper workspace centered on candidate-conditioned black-box distillation-evidence detection for commercial LLM APIs
- A long-form bilingual Preliminary survey chapter with formal definitions, equations, historical evolution, sentence-level citations, and full-resolution English/Chinese overview figures
- 95 curated papers, repositories, model cards, datasets, disclosures, reports, and policies with stable reference numbers `[1]`–`[95]`
- Inline, clickable citations from technical statements to the master bibliography
- Searchable and evidence-filtered literature cards with bilingual summaries
- English/Chinese interface, cross-page language persistence, reading-position preservation, and language-matched diagrams; original paper titles remain unchanged
- Worked methodological examples, including score-, ranking-, and pairwise-preference supervision in judge distillation
- Accessible mobile navigation with backdrop dismissal, Escape handling, focus trapping, and focus restoration
- Automatic per-page H2/H3 table of contents
- Open-weight/closed-model and black-box/white-box treated as orthogonal attributes
- Evidence grades A–E

## Preview locally

```bash
python -m http.server 8000
```

## Quality assurance

```bash
node --check assets/app.js
node --check assets/content.mjs
python qa/site_smoke_test.py
```

The browser test verifies bilingual rendering, reference-data integrity, reading-position preservation, accessible landmarks, mobile navigation behavior, and remote-figure fallback handling in headless Microsoft Edge.

Independent research reviews follow [`qa/REVIEWER_PROTOCOL.md`](qa/REVIEWER_PROTOCOL.md). The iteration is complete only when the reviewer returns `PASS` with no blocking framework or content issues.

## Deployment

The repository includes a GitHub Actions Pages workflow and the custom-domain file:

```text
distill.lightrain.asia
```

The expected public address is `https://distill.lightrain.asia`.

## Evidence grades

- **A** — official disclosure or policy
- **B** — source-grounded public artifact
- **C** — controlled experimental/statistical evidence
- **D** — provider attribution using private telemetry
- **E** — reporting or allegation
