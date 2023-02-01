const httpStatus = require('http-status');
const { omit } = require('lodash');

// exports.createSaleForecastItemData = async (req, res) => {
//   try {
//     const dataCreate = omit(req.body);
//     await createSaleForecastItemDatas(Object.values(dataCreate));
//     return res.json({ data: 'result', status: httpStatus.OK });
//   } catch (error) {
//     return res.json(responseError(error));
//   }
// };

exports.testpostgre = async (req, res) => {
  await testpostgre();
  return res.json({ data: 'result', status: httpStatus.OK });
};

exports.validateSalesPromotionItemData = async (req, res) => res.status(httpStatus.OK);
