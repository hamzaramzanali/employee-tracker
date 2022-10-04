const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
);

// app.get(`/api/movies`, (req, res) => {

//     db.query('SELECT * from movies', function (err, results) {
//         console.log(results);
//         res.json(results)
//     });
// });

// app.get(`/api/movies/:id`, (req, res) => {
//     const idFromUser = req.params.id
//     db.query('SELECT * from movies WHERE id = ?', idFromUser, function (err, results) {
//         console.log(results);
//         res.json(results)
//     });
// });


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));