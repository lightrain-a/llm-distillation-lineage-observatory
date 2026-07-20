# LLM Distillation & Lineage Observatory

A static, multi-page English research website organized around the technical lifecycle of LLM distillation: definitions, distillation mechanisms, auditing, attacks and defenses, evaluation, real-world pipelines, and research gaps.

## Information architecture

- **Preliminary** — definitions, taxonomy, access, and evidence levels
- **Distillation Methods** — white-box, black-box, and composite distillation
- **Distillation Auditing** — output-only, internal-signal, lineage, and multi-teacher recovery
- **Attacks & Defenses** — unauthorized distillation, provenance defenses, and removal
- **Distillation Evaluation** — benchmarks, metrics, confounders, and robustness
- **Real-world Distillation** — family compression, response, reasoning, and production pipelines
- **Resources** — repositories, bibliography, and research agenda

## Contents

- 22 second-level research pages grouped under seven first-level sections
- 59 curated papers, repositories, disclosures, reports, and policies
- Searchable and evidence-filtered literature cards
- Automatic per-page H2/H3 table of contents
- Open-weight/closed-model and black-box/white-box treated as orthogonal attributes
- Evidence grades A–E

## Preview locally

```bash
python -m http.server 8000
```

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
