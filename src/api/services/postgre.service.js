const { Pool } = require('pg');
const postgreConfig = require('../../config/vars').postgre;

const pool = new Pool(postgreConfig);

// eslint-disable-next-line import/prefer-default-export
exports.getData = async () => await pool.query('select * from salesperformanceandforecast')
  .then((res) => {
    console.log(res);
    return res.rows;
  }) // brianc
  .catch((err) => {
    console.error('Error executing query', err.stack);
    return err;
  });
