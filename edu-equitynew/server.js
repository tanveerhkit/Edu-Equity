const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');  // ✅ Import `path` module

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 Serve index.html as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔹 Connect to SQLite database
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error("❌ Database Connection Failed: ", err.message);
    } else {
        console.log("✅ Connected to SQLite Database.");
    }
});

// 🔹 Create users table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    number TEXT NOT NULL,
    password TEXT NOT NULL
)`);

app.post('/signup', (req, res) => {
    const { name, email, number, password } = req.body;

    if (!name || !email || !number || !password) {
        return res.status(400).json({ message: "❌ All fields are required!" });
    }

    const sql = `INSERT INTO users (name, email, number, password) VALUES (?, ?, ?, ?)`;

    db.run(sql, [name, email, number, password], function (err) {
        if (err) {
            console.error("❌ Signup Error:", err.message);
            return res.status(500).json({ message: "❌ Error signing up", error: err.message });
        }
        res.json({ message: "✅ Signup successful!", userId: this.lastID });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(sql, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ message: "❌ Error logging in", error: err.message });
        }
        if (row) {
            res.json({ message: "✅ Login successful!", success: true });
        } else {
            res.status(401).json({ message: "❌ Invalid credentials", success: false });
        }
    });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
