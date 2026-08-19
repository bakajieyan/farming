# Canonical store

**Bun SQLite** is the operational source of truth (decision Q6).

| File                                     | Role                      |
| ---------------------------------------- | ------------------------- |
| [`schema.sql`](./schema.sql)             | Tables                    |
| [`adventure.sqlite`](./adventure.sqlite) | Live DB (created by init) |

```bash
bun farming/scripts/db-init.ts
```

```sql
SELECT id, status, resolution FROM questions;
SELECT key, value FROM state_kv;
SELECT * FROM questions WHERE status = 'open';  -- must be empty
```

Markdown under `../adventure/` is the readable chronicle. `/update` writes both.
