const { Pool } = require('pg');
const postgreConfig = require('../../config/vars').postgre;
// eslint-disable-next-line import/order
const format = require('pg-format');

const pool = new Pool(postgreConfig);

// eslint-disable-next-line import/prefer-default-export
exports.all = async () => await pool.query('select * from salesperformanceandforecast')
  .then((res) => {
    console.log(res);
    return res.rows;
  }) // brianc
  .catch((err) => {
    console.error('Error executing query', err.stack);
    return err;
  });

// eslint-disable-next-line consistent-return
exports.create = async (dataCreate) => {
  if (dataCreate.length > 1) {
    const data = JSON.parse(dataCreate.slice(1, -1));
    try {
      await pool.query(format('INSERT INTO salesperformanceandforecast  VALUES %L', data))
        .then((res) => {
          console.log(res);
          return res.rowCount;
        }) // brianc
        .catch((err) => {
          console.error('Error executing query', err.stack);
          return err;
        });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
};
