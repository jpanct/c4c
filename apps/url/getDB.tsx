import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

/**
 * Initally undefined, but we will use this mutable reference to cache the connection for future use
 * Our database contains a single table: 'url'
 * A url has two fields: id (Int) and original (String)
 */
let _db;

export async function getDB() {
  if (_db == null) {
    const conn = await open({
      filename: './urls.db',
      driver: sqlite3.Database,
    });
    _db = conn;
    await _db.run(
      'CREATE TABLE IF NOT EXISTS url (id INTEGER PRIMARY KEY AUTOINCREMENT, original TEXT);'
    );
  }
  return _db;
}
