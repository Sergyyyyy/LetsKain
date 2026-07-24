const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();

const db = new sqlite3.Database('./meal.db');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Running on port 3000');
});