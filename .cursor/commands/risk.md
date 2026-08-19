---
description: Screen a protocol, pool, vault, or leverage idea against farming hard-no rules.
---

# /risk — screen a farm

**Pack:** `AGENTS.md` (pipeline **P5**)
**Skill:** `.cursor/skills/risk-screen/SKILL.md`

## Context

Protocol, pool, APY claim, TVL if known, chain. If empty → AskQuestion.

## Job

1. Read STATE phase (leverage banned in Phase 1).
2. Issue PASS / WATCH / FAIL with the skill's output block.
3. Offer `/update` to file the verdict; do it if the user wants a paper trail (default **yes** when they named a real venue).

No exploit steps. No "how to loop" recipes.
