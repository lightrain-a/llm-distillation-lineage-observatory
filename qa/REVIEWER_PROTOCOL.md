# Independent Reviewer Protocol

This protocol prevents CodexFlow reviewers from spending their first turn scanning unrelated local projects.

## Observed failure mode

The editing workspace and the CodexFlow reviewer do not share the same filesystem namespace. A path such as `C:\mnt\data\llm_distill_observatory_site` is valid for MCP-Yu but may be absent or mapped differently for the reviewer. When a requested `cwd` is unavailable, CodexFlow falls back to its broad default root, currently `D:\Users\Administrator\Desktop\paper`.

Prompts containing phrases such as “review the repository,” “inspect the project,” or “academic research review” also activate a generic startup routine: discover `AGENTS.md`, load research/paper skills, enumerate the workspace, and locate relevant files. Under the broad fallback root, that routine scans unrelated paper projects. Large all-in-one review prompts amplify the problem because the agent attempts repository discovery before forming a judgment.

## Required launch pattern

1. **Use an evidence packet, not a repository-discovery request.** The prompt must contain the authoritative research goal, current outline, method proposal, experiment plan, and unresolved decisions.
2. **The first sentence must prohibit tools and discovery.** Use: `Do not use tools, browse, inspect files or directories, read skills, or modify files. Reason only from the evidence packet below.`
3. **Do not pass the MCP-Yu repository path as reviewer cwd.** Omit `cwd` unless a dedicated reviewer sandbox is known to exist in the CodexFlow runtime.
4. **Split the review into bounded turns.**
   - Turn A: problem formulation and claim boundary.
   - Turn B: method and confounders.
   - Turn C: benchmark, paper structure, and website outline.
   - Turn D: final acceptance review of the consolidated proposal.
5. **Do not request a report file in the first turn.** First obtain the review. File writing is a separate turn after the content is complete.
6. **If a report file is needed, read it through the same CodexFlow session.** Identical-looking paths are not assumed to be shared with MCP-Yu.
7. **Interrupt immediately if a `commandExecution` item appears.** Restart with the evidence-only prompt rather than allowing directory enumeration.
8. **Use an explicit verdict schema.** Each review ends with `REJECT`, `CONDITIONAL PASS`, or `PASS`, plus blocking issues. The iteration stops only when the independent reviewer returns `PASS` and `No blocking framework/content issues`.

## Acceptance priority

The reviewer evaluates, in order:

1. Whether the observatory leads naturally to the next-paper scientific question.
2. Whether the paper has one primary task and defensible claim level.
3. Whether the method distinguishes direct distillation from shared capability, ancestry, data, or third-teacher effects.
4. Whether the black-box commercial-API target remains central.
5. Whether white-box experiments are only controlled validation.
6. Whether the benchmark contains open-set, hard-negative, and abstention tests.
7. Whether the website content reflects the accepted paper framework.

Frontend polish is reviewed only for blocking usability or correctness defects.
