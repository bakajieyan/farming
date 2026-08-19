-- Farming adventure — canonical store (Bun SQLite)
-- Apply via: bun farming/scripts/db-init.ts

PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  blocking INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK (status IN ('open', 'closed')),
  resolution TEXT,
  closed_on TEXT
);

CREATE TABLE IF NOT EXISTS decisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  decided_on TEXT NOT NULL,
  decision TEXT NOT NULL,
  why TEXT,
  replaces TEXT,
  status TEXT NOT NULL CHECK (status IN ('active', 'superseded')) DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS changelog (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  logged_on TEXT NOT NULL,
  title TEXT NOT NULL,
  kind TEXT NOT NULL,
  summary TEXT NOT NULL,
  why TEXT,
  files TEXT
);

CREATE TABLE IF NOT EXISTS log_scenes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  logged_on TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS state_kv (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
