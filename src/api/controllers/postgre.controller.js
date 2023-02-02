const httpStatus = require('http-status');
// const { omit } = require('lodash');
const { omit } = require('lodash');
const { all, create } = require('../services/postgre.service');
// exports.createSaleForecastItemData = async (req, res) => {
//   try {
//     const dataCreate = omit(req.body);
//     await createSaleForecastItemDatas(Object.values(dataCreate));
//     return res.json({ data: 'result', status: httpStatus.OK });
//   } catch (error) {
//     return res.json(responseError(error));
//   }
// };

exports.all = async (req, res) => {
  const data = await all();
  return res.json({ data, status: httpStatus.OK });
};

exports.create = async (req, res) => {
  const data = await create(req.query.data);
  return res.json({ data, status: httpStatus.OK });
};

exports.createPost = async (req, res) => {
  const data = await create(omit(req?.body)?.data);
  return res.json({ data, status: httpStatus.OK });
};

exports.validateSalesPromotionItemData = async (req, res) => res.status(httpStatus.OK);
