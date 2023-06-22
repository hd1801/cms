const mysql = require("mysql2");

module.exports = class Mysql {
  static connect() {
    // establish connection
    const db = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "my-secret-pw",
      database: "cumsdbms",
    });
    // connect to database
    db.connect((err) => {
      if (err) {
        throw err;
      }
      console.log("Mysql Connected");
    });
    return db;
  }
};
