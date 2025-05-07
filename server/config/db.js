const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'naivedya', 
  password: 'root', 
  database: 'Bank'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;