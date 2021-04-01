const pool = require('../configs/connection');

const Add = async (data) => pool.query(
  'INSERT INTO movies.logs SET ?',
  data,
);

const logsModel = { Add };

module.exports = logsModel;
