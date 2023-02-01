const httpStatus = require('http-status');
// const { omit } = require('lodash');
const { getData } = require('../services/postgre.service');
// exports.createSaleForecastItemData = async (req, res) => {
//   try {
//     const dataCreate = omit(req.body);
//     await createSaleForecastItemDatas(Object.values(dataCreate));
//     return res.json({ data: 'result', status: httpStatus.OK });
//   } catch (error) {
//     return res.json(responseError(error));
//   }
// };

exports.getData = async (req, res) => {
  const data = await getData();
  return res.json({ data, status: httpStatus.OK });
};

exports.validateSalesPromotionItemData = async (req, res) => res.status(httpStatus.OK);
