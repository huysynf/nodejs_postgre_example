const express = require('express');
const controller = require('../../controllers/postgre.controller');

const router = express.Router();
router
  .route('/get')
  .get(controller.getData);

module.exports = router;
