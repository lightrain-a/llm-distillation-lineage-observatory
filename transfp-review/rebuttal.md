# Rebuttal Draft

## Efficient Hard-Label Ownership Verification via Adversarial Transferability

We thank all reviewers for the careful reading and constructive questions. We completed the requested additional experiments under a unified protocol and will revise the paper to report both the positive evidence and the newly identified failure conditions. The revised claim will be narrower: TransFP provides efficient hard-label statistical evidence of derivation when the suspect model retains sufficient local decision-boundary similarity to the protected model, but it is not guaranteed to survive purpose-built boundary-altering training, strong architecture replacement, poorly transferred fixed thresholds, or unauthenticated claimant-specific fingerprint construction.

---

## Response to Reviewer 5dsE

### Q1. Figure 1 shows noticeable overlap. Why should derived models consistently have smaller local logit discrepancies than independent models?

We agree that the original wording was too categorical. The analysis does **not** prove that every derived model must have smaller local discrepancy than every independent model. The deterministic result is conditional: a targeted fingerprint transfers when its protected-model margin dominates the local discrepancy between the protected and suspect models. Likewise, the ATSR concentration result only states that the empirical transfer rate concentrates around its own expectation; it does not guarantee a population-level gap between derived and independent models.

The new strong architecture-mismatch experiment confirms this limitation. We used a protected ViT and derived VGG/WRN models, with three seeds for each architecture and six independent controls. The results are:

- derived-model mean score: **0.1750**;
- independent-model mean score: **0.2167**;
- overall AUC: **0.2500**;
- failed model evaluations: **0**.

Thus, derivation alone does not imply small local discrepancy after a major architecture change. The separation observed in the original experiments should be interpreted as an empirical property of the evaluated standard derivations, not as a universal consequence of derivation.

**Revision.** We will revise the theory discussion to distinguish: (i) the conditional margin-dominance result; (ii) concentration of ATSR for a fixed suspect model; and (iii) the additional empirical assumption that the expected ATSR distributions of derived and independent models are separated. We will remove wording suggesting that derived models always have smaller local discrepancy and add the ViT-to-VGG/WRN failure result.

### Q2. Figure 6 compares perceptual quality across methods. Can the comparison be made fair by using the same source images?

We agree. Cross-image visual comparisons can confound the fingerprinting method with the underlying image content. We therefore recomputed TransFP's perceptual metrics by matching every fingerprint to its exact source image through the manifest source index. Across four anchor-selection strategies and three seeds, covering 1,200 fingerprints, we obtain:

- PSNR: **33.195 dB**;
- SSIM: **0.9623**;
- LPIPS-Alex: **0.00173**;
- perturbation constraint satisfied: **1,200/1,200 samples**.

These numbers quantify distortion relative to the corresponding clean image. For the cross-method visual figure, we will only use matched-source examples when a baseline preserves source identity. When a baseline generates or selects fingerprints without a one-to-one source correspondence, we will state that limitation rather than imply a same-image quantitative comparison.

**Revision.** We will replace the current visual comparison with matched-source examples where possible, describe the source-matching rule in the caption, and restrict the reported PSNR/SSIM/LPIPS values to fingerprints for which the clean counterpart is exactly identified.

---

## Response to Reviewer HF9i

### Q1. The first main concern is the scope of the theoretical guarantees. ATSR concentration does not by itself establish separability between derived and independent models.

We agree. The original presentation compressed two distinct statements:

1. **Conditional transfer:** if the targeted margin on the protected model is sufficiently larger than the local logit discrepancy, the target label transfers to the suspect model.
2. **Statistical concentration:** for a fixed suspect model and an accepted fingerprint distribution, empirical ATSR concentrates around the suspect model's expected transfer probability.

Neither statement guarantees that all derived models have higher expected ATSR than all independent models. Population-level separability is an empirical condition. Our new results make this boundary explicit:

- under the original standard derivations, TransFP remains highly discriminative;
- under strong ViT-to-VGG/WRN replacement, the ordering reverses and AUC falls to **0.25**;
- under purpose-built adversarial training, the mean TransFP score falls from 1.0 to **0.0267** for PGD-AT, **0.0467** for TRADES, and **0.0700** for MART.

These experiments show that the theory explains when transfer can be preserved, but does not establish that all derivation procedures satisfy the required local-closeness condition.

**Revision.** We will rewrite the theorem interpretation and contribution statement so that the guarantee is explicitly conditional. We will also add a separate assumption before the concentration corollary stating that the expected transfer probabilities of the two populations are separated, and we will present strong adversarial training and architecture replacement as counterexamples to universal separability.

### Q2. The second concern is parameter calibration and extrapolation. How are the margin band and decision threshold selected, and how well do they transfer?

We performed additional calibration experiments with disjoint model sets:

- within-dataset disjoint calibration/test AUC: **0.950-0.999**;
- calibration on KD proxies followed by testing on unseen derivation types: **0.935-1.000**;
- cross-dataset fixed-threshold false-positive rate: **3.3%-53.3%**, depending on transfer direction.

The ranking signal can remain strong while a fixed numerical threshold transfers poorly. Therefore, we should not present one threshold as universally portable across datasets, protected models, or deployment pipelines.

We also evaluated claimant-specific false ownership claims. Under the current threshold, the observed false-claim rates are 20.0% for derived targets, 25.0% for independent targets, and 33.3% for protected targets. These subgroups are small, so the values are stress diagnostics rather than population estimates, but they show that a score threshold alone is not cryptographic proof of claimant identity.

**Revision.** We will specify the exact disjoint calibration protocol, report cross-dataset threshold transfer separately from AUC, require protected-model- or dataset-specific calibration, and describe TransFP as statistical ownership evidence rather than an unforgeable ownership proof. We will also discuss registered fingerprint commitments or claimant authentication as deployment requirements.

---

## Response to Reviewer t2ar

### Q1. What is the practical flexibility of TransFP compared with ADV-TRA?

TransFP and ADV-TRA make different trade-offs. TransFP generates a compact set of margin-controlled targeted adversarial fingerprints from the protected model and verifies with a single hard-label transfer statistic. It does not require a trajectory-level verification rule or representative suspect models during fingerprint construction. This simplifies deployment and keeps online verification to top-1 queries.

ADV-TRA uses richer adversarial trajectories and may retain information that a single endpoint fingerprint does not. We therefore should not claim that TransFP is uniformly more flexible. The practical advantage of TransFP is lower construction and verification complexity under the evaluated standard derivations; the new stress tests show that this simplicity does not guarantee robustness to purpose-built boundary changes or strong architecture replacement.

The original paper reports TransFP construction times of 9.46 s on CIFAR-10, 8.35 s on CIFAR-100, and 11.61 s on Tiny-ImageNet-200, versus substantially higher trajectory-generation cost for ADV-TRA. For the current query-budget diagnostic, evaluating the fixed TransFP fingerprint matrix over 98 models takes 46.6 s in total, or approximately 0.476 s per model.

**Revision.** We will replace broad flexibility language with a direct comparison of access assumptions, construction objects, online statistics, and cost. We will state that ADV-TRA offers a richer trajectory representation, while TransFP offers a simpler endpoint-based hard-label protocol.

### Q2. Does threshold calibration use prior knowledge of the suspect derivation type?

The verifier does not use the held-out test models during calibration. However, the original protocol does use representative proxy models, such as distilled models, to choose the margin band and threshold. This is a form of prior knowledge about plausible derivation behavior, and it should be stated explicitly.

Our new proxy-to-unseen experiment shows that calibration on KD proxies can generalize to other derivation types with AUC **0.935-1.000**, but the cross-dataset fixed-threshold experiment yields FPRs from **3.3% to 53.3%**. Therefore, the method does not support a universal threshold independent of the source model, dataset, and calibration pool.

**Revision.** We will state exactly which model families are used for calibration, confirm that calibration and evaluation models are disjoint, and present per-source/per-dataset calibration as part of the protocol rather than as an optional implementation detail.

### Q3. Where do the fingerprint anchors come from, and how sensitive is the method to anchor selection?

Anchors are drawn from clean samples that the protected model classifies correctly. Candidate target labels are optimized under the perturbation budget, and fingerprints are retained only when their protected-model target margin falls in the accepted band.

We evaluated four anchor-selection strategies with three seeds each:

- random;
- confidence-stratified;
- margin-stratified;
- class-balanced.

Across 12 runs, qualification yield ranges from **97.4% to 99.1%**, every saved fingerprint has a **100% protected-source target hit rate**, and mean AUC at 100 queries is **0.9993**. Differences are more visible at very small query budgets, but all four strategies converge to strong separation at 100 queries.

**Revision.** We will define the clean-correct anchor pool, target assignment, margin-band acceptance, and rejection procedure in the method section, and add the four-strategy ablation to show that the main result is not specific to one random anchor set.

### Q4. Are the fingerprint and query budgets fairly matched across methods?

We agree that the original comparison did not make the accounting sufficiently explicit. We now use the following rule: each suspect-model top-1 response counts as one online query; offline construction is reported separately.

For TransFP, we subsampled the same per-query hit matrix at 5/10/20/30/50/100 queries with 200 repetitions. The AUC values are:

| Queries | 5 | 10 | 20 | 30 | 50 | 100 |
|---:|---:|---:|---:|---:|---:|---:|
| TransFP AUC | 0.9571 | 0.9744 | 0.9843 | 0.9892 | 0.9937 | 0.9987 |

For the newly reproduced baselines, we completed aligned 20/50/100-query evaluations:

| Method | Variant | AUC @ 20 | AUC @ 50 | AUC @ 100 |
|---|---|---:|---:|---:|
| CoRt / DEEPJUDGE | original `epsilon=0.1` | 0.8023 | 0.9148 | 0.9957 |
| CoRt / DEEPJUDGE | matched `8/255` | 0.9637 | 0.9760 | 0.9880 |
| CAE | original `epsilon=0.15` | 0.8611 | 0.8828 | 0.8978 |
| CAE | matched `8/255` | 0.8690 | 0.8534 | 0.8359 |
| UAP | native hard-label | 0.5859 | 0.6717 | 0.7935 |
| UAP | matched `8/255` | 0.9717 | 0.9620 | 0.9783 |

The TransFP diagnostic uses the original 98-model pool, whereas the added-baseline reproduction uses a disjoint 43-model held-out subset drawn from the paper's model pool. We will present these as two separate experimental blocks and will not imply a paired comparison across different model instances.

**Revision.** We will add an explicit query-accounting paragraph, separate offline construction from online verification, report original and matched perturbation budgets, and avoid mixing soft-output metrics into the hard-label table.

### Q5. How are time cost and perceptual stealthiness measured?

We will separate three quantities that were previously conflated:

1. offline fingerprint construction time;
2. online suspect-model inference time;
3. score computation time.

For the fixed TransFP query matrix, 98-model inference takes approximately **46.6 s** in total, or **0.476 s per model**. The paper's method-level construction-time table will remain separate from online verification cost.

For perceptual quality, every TransFP fingerprint is compared with its exact clean source image. Across 1,200 fingerprints, PSNR is **33.195 dB**, SSIM is **0.9623**, LPIPS-Alex is **0.00173**, and all 1,200 samples satisfy the perturbation constraint.

**Revision.** We will define the timer boundaries, hardware, batch size, and query count for each reported runtime, and will revise the visual comparison so that same-image matching is used whenever source correspondence exists.

### Q6. How are derived models generated, and are the baseline comparisons aligned to the same model pool?

All new baselines were evaluated with the same protected checkpoint, the same derived and independent model families, disjoint generation/evaluation subsets, and the same hard-label suspect interface. The held-out evaluation pool contains 23 derived models and 20 independent models, with no loading failures. Derived models cover knowledge distillation, fine-tuning, fine-pruning, hard-label model extraction, and weight quantization. Independent controls cover multiple architecture families.

During this audit, we identified an important setup-description inconsistency: the manuscript labels the CIFAR-10 protected model as ResNet-18, while the checkpoint and the derived-model configurations used for the reported main-result pool correspond to WideResNet-28-10. The new baseline runs were aligned to the **actual checkpoint used by the existing experiments**, not to a separately trained nominal ResNet-18.

We also distinguish official-code reproduction from independent adaptation:

- CoRt / DEEPJUDGE uses the author-maintained implementation, with a hard-label RobD-derived score in the main comparison;
- CAE uses a public reimplementation adapted to the aligned PyTorch model pool;
- UAP is reported in both its native representation and a regenerated matched-`8/255` hard-label variant;
- probability-based JSD and soft-output UAP results are excluded from the hard-label main table.

**Revision.** We will correct the protected-model architecture, provide exact checkpoint/configuration identifiers, publish the disjoint model manifests, state each baseline's code provenance and access assumptions, and record original versus matched perturbation budgets.

---

## Response to Reviewer 6Cae

### Q1. Please compare with AnaFP and discuss IrisFP.

We searched the paper pages, author information, and public GitHub results for AnaFP and IrisFP. As of 2026-07-24, we did not find public code for either method. We therefore do not report an unverifiable reimplementation as an official numerical comparison.

We did reproduce every requested method for which usable public code was available:

- CoRt / DEEPJUDGE;
- CAE;
- UAP.

Their aligned hard-label results are reported in the table above. We will also expand Related Work to explain the methodological differences. At a high level, AnaFP controls the relation between fingerprints and the decision boundary through analytical constraints, whereas IrisFP emphasizes richer boundary-intersection evidence and fingerprint-specific decision rules. TransFP instead uses targeted adversarial transfer and a shared hard-label ATSR statistic. Because code is unavailable, this comparison will remain conceptual rather than numerical.

**Revision.** We will explicitly state that no public implementation was found for AnaFP and IrisFP, add a methodological comparison in Related Work, and avoid presenting our own unverified reconstruction as an official baseline result.

### Q2. Please evaluate a stronger architecture mismatch, such as a transformer-based protected model and CNN-based suspect models.

We completed exactly this experiment. We used a protected ViT and derived VGG/WRN models, with three seeds for each derived architecture and six independent controls. The final architecture matrix gives:

- derived mean: **0.1750**;
- independent mean: **0.2167**;
- overall AUC: **0.2500**;
- failed evaluations: **0**.

This is a clear negative result. The current fingerprint does not transfer more strongly to the cross-architecture derived models than to the independent controls. The result demonstrates that the original phrase "across architectures" was too broad.

**Revision.** We will add this result to the main robustness/limitations discussion, distinguish mild architecture variation from complete architecture replacement, and narrow the claim to derivations that preserve sufficient local decision behavior.

---

## Consolidated manuscript changes

Following the reviewers' questions, we will make the following concrete revisions:

1. Correct the CIFAR-10 protected-model description from nominal ResNet-18 to the actual WideResNet-28-10 checkpoint used by the reported derived-model pool.
2. Rewrite the theoretical interpretation so that margin transfer and ATSR concentration are explicitly conditional and do not imply universal population separability.
3. Add the disjoint calibration, proxy-to-unseen, cross-dataset threshold-transfer, and false-claim experiments.
4. Add the three-seed PGD-AT, TRADES, and MART removal results:
   - PGD-AT TransFP score: **0.0267 +/- 0.0047**;
   - TRADES: **0.0467 +/- 0.0170**;
   - MART: **0.0700 +/- 0.0000**.
5. Add the ViT-to-VGG/WRN strong architecture-mismatch failure result, AUC **0.25**.
6. Add CoRt/DEEPJUDGE, CAE, and UAP with original and matched perturbation budgets and 20/50/100-query accounting.
7. State that AnaFP and IrisFP have no public code found as of 2026-07-24 and provide a conceptual comparison instead of unsupported numbers.
8. Add the four-strategy anchor-selection ablation and exact-source perceptual metrics.
9. Separate offline construction time, online inference time, and score-computation time.
10. Replace broad robustness and ownership-proof language with scoped statistical-evidence language.

We appreciate that the reviews exposed important boundaries of the method. The revised paper will report not only where targeted adversarial transfer is discriminative, but also the concrete conditions under which that evidence weakens, disappears, or reverses.
