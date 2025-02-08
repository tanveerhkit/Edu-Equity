const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database (or open if it exists)
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error("❌ Error opening database", err);
    } else {
        console.log("✅ SQLite Database connected");
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            number TEXT,
            password TEXT
        )`);
    }
});

module.exports = db;
