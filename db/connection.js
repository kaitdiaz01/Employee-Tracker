const mysql = require("mysql2");


const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employees'
    },
    console.log(`Connected to the employees_db database.`)
);


// Set up error handling in case there is a messed up connection
connection.connect(function(err) {
    if (err) throw err;
});


module.exports = connection;