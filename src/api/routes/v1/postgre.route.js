const express = require('express');
const controller = require('../../controllers/postgre.controller');

const router = express.Router();
router
  .route('/all')
  .get(controller.all);

router
  .route('/create')
  .get(controller.create);


router
  .route('/create-post')
  .post(controller.createPost);
module.exports = router;
