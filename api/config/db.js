const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd',
  database: 'test',
});

//connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
});

module.exports = db;
