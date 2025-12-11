import Database from 'better-sqlite3';

const sql = new Database('src/lib/server/db/lwcreel.db', { verbose: console.log });
sql.pragma('journal_mode = WAL');

export default sql;
