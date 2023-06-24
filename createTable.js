const { pool } = require("../Backend/connection");

pool.connect((error) => {
  if (error) throw error;
  console.log("connected");

  pool.query(
    "create table users (id int primary key auto_increment, name varchar(30), email varchar(30), password varchar(200), age int)",
    (error, result) => {
      if (error) throw error;
      console.log("Table created...");
    }
  );
  // pool.query("drop table users", (error, result) => {
  //   if (error) throw error;
  //   console.log("table droped...");
  // });
});
