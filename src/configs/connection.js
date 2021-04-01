const { createPool } = require('mysql');
const { promisify } = require('util');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;

const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log('Error Connected ', err);
  } else if (connection) {
    console.log(`Database ${DB_HOST} connected`);
    connection.release();
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
