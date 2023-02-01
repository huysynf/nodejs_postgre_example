const express = require('express');
const controller = require('../../controllers/databricks.controller');
const router = express.Router();
router
  .route('/te')
  .get(controller.testpostgre);

module.exports = router;
