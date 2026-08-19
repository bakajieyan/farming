# Farming

Personal **documentation** of a DeFi yield-farming adventure. Not a trading bot, **not financial advice**, not a live deployment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)](./package.json)

**Author:** [Julrey Rosales](https://github.com/bakajieyan) ([@bakajieyan](https://github.com/bakajieyan)) · MIT · cite [`CITATION.cff`](./CITATION.cff)

Repo: [github.com/bakajieyan/farming](https://github.com/bakajieyan/farming)

Source conversation: [ChatGPT — DEXE Staking Earnings Calculation](https://chatgpt.com/share/6a8564f6-7be0-83ec-9518-eba489ea65e4)

**North star:** $100 USDT/day within 3–5 years, starting ~$1,000 + $200/month, preferring Solana / cheap gas, USDC + USDT.

## Setup

```bash
bun install
bun run db:init
bun run check
```

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Version **0.0.0**; releases via [Release Please](https://github.com/googleapis/release-please) on `main`.

## Layout

| Path                             | Role                                                  |
| -------------------------------- | ----------------------------------------------------- |
| [`AGENTS.md`](./AGENTS.md)       | Pipelines, command index, decision router             |
| [`db/`](./db/)                   | **Canonical** Bun SQLite (`adventure.sqlite`)         |
| [`adventure/`](./adventure/)     | Readable chronicle (LOG, CHANGELOG, STATE, DECISIONS) |
| [`.cursor/`](./.cursor/)         | Skills, rules, slash commands, references, agents     |
| [`CHANGELOG.md`](./CHANGELOG.md) | Repo releases (not the adventure log)                 |

## Commands

| Command       | Does                                                 |
| ------------- | ---------------------------------------------------- |
| `/update`     | Append a change to the adventure log + changelog     |
| `/status`     | Read current capital, phase, allocations             |
| `/log`        | Read or continue the narrative log                   |
| `/monthly`    | Run the 8-step monthly ritual and record it          |
| `/contribute` | Log a monthly (or extra) contribution                |
| `/rebalance`  | Compare actual vs phase target; document a rebalance |
| `/risk`       | Screen a protocol/pool against hard-no rules         |
| `/research`   | Refresh rates with sources; never treat APY as cash  |
| `/deploy`     | Write a live deployment _plan_ (docs only, no txs)   |
| `/milestone`  | Check capital vs the $1k → $300k ladder              |

## How to use

1. Read [`adventure/STATE.md`](./adventure/STATE.md) (or `SELECT * FROM state_kv` in `db/adventure.sqlite`) for where you are.
2. Read [`adventure/LOG.md`](./adventure/LOG.md) for how you got here.
3. When something happens, run **`/update`**.
4. Once a month, run **`/monthly`**.
5. Before touching a new farm, run **`/risk`**.

## Hard truths already in the log

- $100/day = $36,500/year. At a sustainable ~12% that is ~**$300k** of capital, not a 1,000% APY farm.
- $1,000 + $200/month + DeFi yield **does not** reach $250k in five years by itself.
- Do **not** blindly deploy the $1,000. Next real step is a dated live deployment plan (`/deploy`).
- DeFi core and memecoin/alpha capital stay **separate**.
