const mysql = require("mysql2");
require("dotenv").config(); 

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "pass",
    database: process.env.DB_NAME || "form_submission",
    port: process.env.DB_PORT || 3306,
    connectionLimit: 10
});

module.exports = pool.promise();
