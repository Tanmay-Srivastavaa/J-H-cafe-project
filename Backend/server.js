const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tanmay#123',
    database: 'jh_cafe'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL Database: jh_cafe');
});


// Register
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    
    db.query(sql, [username, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: "Username or email already exists" });
        res.status(201).json({ message: "Registration successful!" });
    });
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    
    db.query(sql, [username, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length > 0) {
            // Send back user data so frontend knows who logged in
            res.status(200).json({ message: "Login successful", user: results[0] });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

// --- REVIEW ROUTES ---

app.get('/reviews', (req, res) => {
    const sql = "SELECT * FROM reviews ORDER BY created_at DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});

app.post('/reviews', (req, res) => {
    const { user_id, rating, comment, reviewer_name } = req.body;
    const sql = "INSERT INTO reviews (user_id, rating, comment, reviewer_name) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [user_id, rating, comment, reviewer_name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Review posted successfully!" });
    });
});

app.listen(3000, () => {
    console.log('Backend server running on http://localhost:3000');
});