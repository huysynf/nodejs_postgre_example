const express = require('express');
const databricksRoute = require('./postgre.route');

const router = express.Router();

router.use('/api', databricksRoute);
module.exports = router;
