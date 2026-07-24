// References
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
let sql;

const app = express();

// Database definition
const db = new sqlite3.Database('./meal.db');

sql = `
CREATE TABLE IF NOT EXISTS SavedRecipes (
    SavedID INTEGER PRIMARY KEY,
    RecipeID INTEGER UNIQUE
)
`;

db.run(sql, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("SavedRecipes table ready.");
    }
});

// App run
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Running on port 3000');
});