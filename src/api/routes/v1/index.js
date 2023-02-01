const express = require('express');
const databricksRoute = require('./databricks.route');

const router = express.Router();

router.use('/api', databricksRoute);
module.exports = router;
