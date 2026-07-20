# LLM Distillation & Lineage Observatory

A static, multi-page English research website mapping LLM distillation detection, model lineage, extraction attacks, defenses, repositories, publicly disclosed dependencies, commercial-model reports, and research gaps.

## Contents

- 14 linked research pages
- 59 curated papers, repositories, disclosures, reports, and policies
- Global search and evidence-grade filters
- Explicit separation of open-weight/closed-model and black-box/white-box settings
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
