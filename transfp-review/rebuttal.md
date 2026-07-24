# Rebuttal Draft

## Efficient Hard-Label Ownership Verification via Adversarial Transferability

We thank the reviewers for the careful reading and constructive requests. We completed the requested additional experiments under a unified protocol and will revise the paper to reflect both the positive evidence and the newly identified failure conditions. The main clarification is that TransFP is effective when a derived model preserves enough of the protected model's local decision behavior, but it should not be claimed to withstand purpose-built boundary-altering training or strong cross-architecture derivation.

## Summary of new evidence

| Concern | New evidence | Main conclusion |
|---|---|---|
| Missing recent baselines | Reproduced CoRt/DEEPJUDGE, CAE, and UAP on the aligned model pool and hard-label interface | CoRt is the strongest added competitor; UAP is sensitive to its perturbation representation |
| Query-budget fairness | Evaluated 20/50/100-query variants and retained the original 5/10/20/30/50/100 TransFP diagnostic | TransFP remains query-efficient, but comparisons must distinguish original and matched-budget variants |
| Strong removal attacks | Completed PGD-AT, TRADES, and MART, three seeds each | All three substantially suppress the fingerprint; this is a genuine limitation |
| Strong architecture mismatch | Completed ViT-to-VGG/WRN, three seeds each, plus an architecture matrix | AUC is 0.25; the current fingerprint fails under this mismatch |
| Anchor-selection sensitivity | Four strategies, three seeds each | The conclusion is not specific to random anchor selection |
| Threshold transfer and false claims | Disjoint calibration, cross-dataset transfer, and claimant-specific tests | High AUC does not imply a universally portable fixed threshold |
| Reproducibility | Unified manifests, disjoint generation/evaluation pools, complete run ledgers | We will correct the source-architecture description and release exact configurations |

## 1. Additional baseline comparison

We reproduced every newly requested method for which usable public code was available:

- **CoRt / DEEPJUDGE:** author-maintained public implementation, adapted to the current PyTorch model pool. The main comparison uses the hard-label RobD-derived score. Probability-based JSD is not included in the hard-label table.
- **CAE:** public reimplementation of conferrable adversarial examples, adapted to the same protected model and disjoint surrogate/reference pools.
- **UAP:** both the native representation used by the available implementation and a matched-`8/255` hard-label adaptation.
- **AnaFP and IrisFP:** no public code was found as of 2026-07-24; we will state this explicitly rather than report an unverifiable reimplementation as an official result.

All added baselines use the same protected checkpoint, the same derived and independent model families, disjoint generation/evaluation subsets, and hard-label suspect-model queries. The held-out evaluation pool contains 23 derived models and 20 independent models, with no model-loading failures.

### Added hard-label baseline results

| Method | Variant | AUC @ 20 | AUC @ 50 | AUC @ 100 |
|---|---|---:|---:|---:|
| CoRt / DEEPJUDGE | original `epsilon=0.1` | 0.8023 | 0.9148 | 0.9957 |
| CoRt / DEEPJUDGE | matched `8/255` | 0.9637 | 0.9760 | 0.9880 |
| CAE | original `epsilon=0.15` | 0.8611 | 0.8828 | 0.8978 |
| CAE | matched `8/255` | 0.8690 | 0.8534 | 0.8359 |
| UAP | native hard-label | 0.5859 | 0.6717 | 0.7935 |
| UAP | matched `8/255` | 0.9717 | 0.9620 | 0.9783 |

These results materially strengthen the comparison. CoRt is the closest added competitor and approaches saturation at 100 queries. CAE is strong for fine-tuning, fine-pruning, extraction, and quantization, but is weaker for knowledge distillation. UAP is highly sensitive to how its universal perturbation is represented: simply rescaling the available native vector to `8/255` produced no useful source fooling, whereas regenerating a projected `8/255` UAP yielded substantially stronger hard-label AUC.

The current TransFP query-budget diagnostic reports AUCs of 0.9571, 0.9744, 0.9843, 0.9937, and 0.9987 at 5, 10, 20, 50, and 100 queries, respectively. Because that diagnostic uses the original 98-model pool while the added-baseline reproduction uses a disjoint 43-model held-out subset drawn from the same paper pool, we will present the two blocks separately and will not imply a paired comparison where the evaluated model instances differ.

**Revision.** We will add the reproduced baselines, clearly mark original versus matched perturbation budgets, state each method's access assumptions, and avoid mixing soft-output UAP or JSD results into the hard-label main table.

## 2. Query-budget fairness and runtime

The verification interface remains top-1 only. For TransFP, the same per-query hit matrix was subsampled at 5/10/20/30/50/100 queries with 200 repetitions. The AUC rises from 0.9571 at five queries to 0.9987 at 100 queries. Across 98 evaluated models, the complete inference pass took approximately 46.6 seconds, or 0.476 seconds per model.

For the newly reproduced baselines, we report 20/50/100-query results under the same accounting rule: every suspect-model evaluation is counted as a hard-label query, and no suspect logits are used by the primary metric.

**Revision.** We will state the exact query-count definition, separate offline fingerprint construction from online verification cost, and include both original-budget and matched-budget results where the public implementation uses a different perturbation scale.

## 3. Robustness to strong adversarial training

We agree that ordinary fine-tuning is insufficient as the only removal stress test. We therefore evaluated three stronger procedures, each with three seeds and 20 epochs:

| Method | Clean accuracy | PGD-20 accuracy | TransFP score |
|---|---:|---:|---:|
| PGD-AT | 0.8062 +/- 0.0015 | 0.4715 +/- 0.0020 | 0.0267 +/- 0.0047 |
| TRADES | 0.6018 +/- 0.0733 | 0.2543 +/- 0.0271 | 0.0467 +/- 0.0170 |
| MART | 0.5852 +/- 0.0016 | 0.3197 +/- 0.0037 | 0.0700 +/- 0.0000 |

All three methods reduce the fingerprint score from 1.0 to a level close to zero. The utility loss is non-negligible, especially for TRADES and MART, but the result still demonstrates a successful fingerprint-removal strategy. We therefore do not interpret this experiment as evidence of robustness.

This observation is consistent with the mechanism of TransFP: the method relies on preservation of the protected model's local decision behavior. Purpose-built adversarial training explicitly changes this behavior around adversarially sensitive regions and can destroy the transfer signal.

**Revision.** We will remove broad robustness wording, add this result as a prominent adaptive-removal limitation, and scope the empirical claim to standard derivations that retain sufficient local boundary similarity.

## 4. Strong cross-architecture derivation

We completed a stronger architecture-mismatch experiment using a protected ViT and derived VGG/WRN models, with three seeds for each derived architecture and six independent controls.

- Derived-model mean score: **0.1750**
- Independent-model mean score: **0.2167**
- Overall AUC: **0.2500**
- Failed model evaluations: **0**

This is a clear failure case: the derived models do not preserve the source fingerprint more strongly than the independent controls. The result also clarifies the scope of the theoretical argument. The analysis provides a transfer condition when local discrepancy is sufficiently small; it does not guarantee that derivation alone implies small discrepancy after a major architecture change.

**Revision.** We will explicitly distinguish same-/near-architecture derivation from strong architecture replacement, report the AUC=0.25 result, and revise claims such as "across architectures" so that they do not suggest universal cross-architecture transfer.

## 5. Anchor-selection sensitivity and perceptual quality

We evaluated four anchor-selection strategies with three seeds each:

- random;
- confidence-stratified;
- margin-stratified;
- class-balanced.

Across the 12 runs, qualification yield ranges from 97.4% to 99.1%, every saved fingerprint has a 100% protected-source target hit rate, and the mean AUC at 100 queries is 0.9993. The overall perceptual metrics are:

- PSNR: **33.195 dB**;
- SSIM: **0.9623**;
- LPIPS-Alex: **0.00173**;
- perturbation constraint satisfied: **1200/1200 samples**.

The result shows that the main finding is not an artifact of one random anchor set. Differences are more visible at very small query budgets, but all four strategies converge to strong AUC at 100 queries.

**Revision.** We will add the four-strategy ablation and clarify that anchor selection affects low-budget efficiency more than high-budget separability.

## 6. Calibration, threshold transfer, and false ownership claims

We performed disjoint calibration/test experiments, proxy-to-unseen transfer, cross-dataset threshold transfer, leave-one-family-out analysis, and threshold sensitivity tests.

- Within-dataset disjoint AUC: **0.950-0.999**.
- KD-proxy to unseen derivations: **0.935-1.000**.
- Cross-dataset fixed-threshold FPR: **3.3%-53.3%**, depending on transfer direction.

Thus, high ranking quality does not imply that one fixed numerical threshold transfers safely across datasets or protected models. We will require protected-model- or dataset-specific calibration rather than present a universal threshold.

We also evaluated claimant-specific false ownership claims. Under the current threshold, the observed false-claim rates are 20.0% for derived targets, 25.0% for independent targets, and 33.3% for protected targets. The number of claims in each subgroup is limited, so these values should be read as a stress diagnostic rather than a population estimate. Nevertheless, the experiment shows that a fingerprint score alone is not cryptographic proof of claimant identity.

**Revision.** We will describe TransFP as statistical ownership evidence, not an unforgeable proof; require registered fingerprint commitments or claimant authentication in deployment; and add the cross-dataset threshold and false-claim results to the limitations.

## 7. Experimental consistency and reproducibility

During the aligned reproduction, we identified a setup-description issue: the current manuscript labels the CIFAR-10 protected model as ResNet-18, while the checkpoint and derived-model configurations used for the reported main-result pool correspond to WideResNet-28-10. All new baselines were aligned to the actual checkpoint and model pool used by the existing experiments, not to a separately retrained nominal ResNet-18.

We will correct this description in the experimental setup and provide:

- the exact protected checkpoint configuration;
- disjoint generation/evaluation manifests;
- per-model method scores and status records;
- query-count definitions;
- perturbation-space and normalization conventions;
- seed-level PGD-AT/TRADES/MART metrics;
- explicit identification of official-code reproduction versus independent adaptation.

Smoke runs, wrong-normalization runs, failed preliminary MART runs, and duplicate jobs are retained in the internal ledger but excluded from all formal aggregates.

## 8. Revised claim and planned manuscript changes

The revised claim will be narrower and better supported:

> TransFP provides efficient hard-label statistical evidence of model derivation when the suspect model retains sufficient local decision-boundary similarity to the protected model. It performs strongly under the evaluated standard derivations and small query budgets, but it can fail under purpose-built adversarial training, strong architecture replacement, poorly transferred fixed thresholds, or unauthenticated claimant-specific fingerprint construction.

We will make the following concrete changes:

1. Correct the CIFAR-10 protected-model architecture and configuration.
2. Add CoRt/DEEPJUDGE, CAE, and UAP results with original and matched perturbation budgets.
3. Specify hard-label query accounting and separate offline construction from online verification.
4. Add the three-seed PGD-AT, TRADES, and MART removal results.
5. Add the ViT-to-VGG/WRN failure result and narrow cross-architecture claims.
6. Add the four-strategy anchor ablation and same-image perceptual metrics.
7. Add disjoint calibration, threshold-transfer, and false-claim results.
8. Replace broad robustness and ownership-proof language with scoped statistical-evidence language.

We appreciate that these requests exposed important boundaries of the method. The revised paper will be stronger because it will report not only where targeted adversarial transfer is discriminative, but also the concrete conditions under which that evidence weakens or reverses.
