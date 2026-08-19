---
name: farming-adventure
description: Operate the DeFi farming adventure pack in farming/. Use when the user mentions farming, DeFi yield, Aave, Curve, Kamino, Solana staking/lending, $100 USDT/day, /update, /status, /monthly, the ChatGPT farming share, or continuing this adventure log.
---

# Farming adventure

This repo folder is a **paper trail** of a personal yield-farming plan. You document. You do not trade.

**Pack entry:** [`../../../AGENTS.md`](../../../AGENTS.md)
**State:** [`../../../adventure/STATE.md`](../../../adventure/STATE.md)

## Instructions

1. Read [`../../../AGENTS.md`](../../../AGENTS.md) and [`../../../adventure/STATE.md`](../../../adventure/STATE.md).
2. Route with the table in AGENTS.md. Default for "something happened" is **`/update`**.
3. Before another farming skill, read that skill's `SKILL.md`.
4. Money choices (new protocol, leverage, moving %, chain switch) → **AskQuestion**, then `/update`.
5. Never request seed phrases, private keys, or signed transactions.
6. Never write exploit/PoC/attack steps. Risk-screen is allow/deny of _documented_ venues, not hacking.

## Companion skills

| Need                 | Skill            |
| -------------------- | ---------------- |
| Append history       | `update-log`     |
| Capital / $/day math | `yield-math`     |
| Month-end            | `monthly-ritual` |
| Bucket %             | `allocation`     |
| Hard nos             | `risk-screen`    |
| Solana venues        | `solana-stack`   |

## Output

Speak like a chronicler: where we are (phase, $), what changed, what is still open in `DECISIONS.md`. Point at files you edited.
