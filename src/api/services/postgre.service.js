const { Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '3.83.113.106',
  database: 'test_erp',
  password: '123456789',
  port: 5432,
});

// eslint-disable-next-line import/prefer-default-export
exports.testpostgre = async (dataCreate) => {


  // var format = require('pg-format');
  //
  // var values = [
  //   [7, 'john22', 'john22@gmail.com', '9999999922'],
  //   [6, 'testvk', 'testvk@gmail.com', '88888888888']
  // ];
  // client.query(format('INSERT INTO users (id, name, email, phone) VALUES %L', values),[], (err, result)=>{
  //   console.log(err);
  //   console.log(result);
  // });

  const dataCreateLength = dataCreate.length;
  const newClassificationCode = '';
  const largeClassificationOfProductCode = '';
  const smallClassificationOfProductCode = '';
  const largeClassificationOfUsesCode = '';
  const smallClassificationOfUsesCode = '';
  let statement = `insert into salesperformanceandforecast 
            (IDX_Id, PK_DataRegistrationYearMonthDay,PK_FactoryCode,PK_Year,Fiscal_year,
            PK_Period,PK_Month,PK_Day,PK_CustomerCode,PK_CustomerProductNumber,PK_InHouseProductNumber,
            Quantity,SellingPrice,SalesAmount,NewClassificationCode,
            CurrencyCode,LargeClassificationOfProductCode,SmallClassificationOfProductCode,
            LargeClassificationOfUsesCode,SmallClassificationOfUsesCode,
            Model,Version) 
            values `;
  for (const [index, createItem] of dataCreate.entries()) {
    let createDataStr = `("${createItem.id}","${createItem.version}","${createItem.factory_code}",
      "${createItem.year}",${createItem.fiscal_year},${createItem.period},${createItem.month},
      "${createItem.day}","${createItem.customer_code}","${createItem.pk_customer_product_number}"
      ,"${createItem.pk_in_house_product_number}","${createItem.quantity}",${createItem.selling_price}
      ,${createItem.sale_amount},"${newClassificationCode}"
      ,"${createItem.currency}"
      ,"${largeClassificationOfProductCode}","${smallClassificationOfProductCode}"
      ,"${largeClassificationOfUsesCode}","${smallClassificationOfUsesCode}"
      ,"${createItem.model}","${createItem.version}")`;
    createDataStr += index !== (dataCreateLength - 1) ? ', ' : '';
    statement += createDataStr;
  }
  return await pool.query('select * from salesperformanceandforecast')
    .then((res) => console.log(res)) // brianc
    .catch((err) => console.error('Error executing query', err.stack))
};
