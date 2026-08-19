# CHANGELOG — farming adventure

Append-only. Newest first. Every `/update` adds an entry. Do not rewrite history; strike through and add a correction entry if a fact was wrong.

Format:

```
## YYYY-MM-DD — short title
- **Kind:** conversation | decision | research | contribution | allocation | docs | ritual | correction
- **Summary:** one or two sentences
- **Why:** if a choice
- **Files:** paths touched
```

---

## 2026-08-19 — Repo shell 0.0.0 (license, prettier, release-please)

- **Kind:** docs
- **Summary:** Turned `farming/` into a real repo for [bakajieyan/farming](https://github.com/bakajieyan/farming): MIT copyright Julrey Rosales, Oxlint + Prettier, Lefthook, commitlint, quality CI, Release Please from **0.0.0**.
- **Why:** Empty GitHub repo needed the same kind of shell as v4 / typedbyhand.
- **Files:** `LICENSE`, `AUTHORS.md`, `package.json`, `.github/`, `prettier.config.mjs`, `release-please-config.json`

## 2026-08-19 — Closed Q1–Q6

- **Kind:** decision
- **Summary:** Human closed every parked question: Kamino native USDC+USDT lending ($400/$200); Orca-first LP; Base as EVM backup; Pump.fun optional and separate; stay at $200/mo until $5k or year-1; **Bun SQLite is canonical** (`farming/db/adventure.sqlite`), markdown is the readable chronicle. Exact Kamino market IDs and Orca pool ID remain live `/deploy` picks, not open strategy questions.
- **Why:** Stop a hanging question list; lock policy so `/deploy` has a recipe.
- **Files:** `adventure/DECISIONS.md`, `adventure/STATE.md`, `adventure/LOG.md`, `db/`, `.cursor/skills/solana-stack/SKILL.md`, `.cursor/skills/update-log/SKILL.md`, `AGENTS.md`

## 2026-08-19 — Cursor pack created from ChatGPT share

- **Kind:** docs
- **Summary:** Distilled [the ChatGPT thread](https://chatgpt.com/share/6a8564f6-7be0-83ec-9518-eba489ea65e4) into `farming/`: skills, rules, commands (`/update` and siblings), pipelines, adventure log, state, and decisions. No funds deployed.
- **Why:** Keep the strategy as a living paper trail instead of a chat that disappears.
- **Files:** `farming/**`

## 2026-08-19 — Solana-first, USDC/USDT, 3–5 year clock

- **Kind:** conversation
- **Summary:** Human constrained the plan: Solana or cheap-gas chains, prefer USDT and USDC, reach $100 USDT/day in 3–5 years. Assistant made Solana primary (Kamino / Jupiter / Orca / Raydium), one cheap EVM secondary, and showed that $200/month + DeFi yield cannot reach ~$250k–$365k in five years without much larger inflows (or a separate asymmetric engine).
- **Files:** `adventure/SOURCE.md`, `adventure/LOG.md`, `adventure/DECISIONS.md`

## 2026-08-19 — Concrete $1k → $100k plan requested

- **Kind:** conversation
- **Summary:** Human said "yes" to a concrete farming plan across Aave, Curve, Morpho, Pendle, LST. Assistant shifted from "force $100/day now" to a capital-growth system: phases, 60/30/10 sleeves, Pendle **PT over YT**, Morpho quality checklist, monthly 8-step ritual, and "do not blindly deploy $1,000 today."
- **Files:** `adventure/SOURCE.md`, `adventure/LOG.md`

## 2026-08-19 — Opening question: $100 USDT/day from DeFi

- **Kind:** conversation
- **Summary:** Human asked how to farm (Aave, Curve, staking, lending) and how much capital $100 USDT/day takes. Assistant framed it as yield-engineering: $36,500/year; at 3% you need ~$1.22M; at 10% ~$365k. Aave as boring base; Curve APY theater; looping marked dangerous; $1k + $200/mo is a learn-and-compound stage, not an income stage.
- **Files:** `adventure/SOURCE.md`, `adventure/LOG.md`
