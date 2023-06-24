const mysql = require("mysql");

const pool = mysql.createConnection({
  host: "sql10.freemysqlhosting.net",
  user: "sql10628369",
  password: "GvuUU8NB3X",
  database: "sql10628369",
  port: 3306,
});

module.exports = { pool };
