const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'mysql-502b1ad-banking-server.i.aivencloud.com',
  user: 'avnadmin', 
  password: 'AVNS_kktrROaJrYY3CIECJfo', 
  database: 'defaultdb',
  port: 19089
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
