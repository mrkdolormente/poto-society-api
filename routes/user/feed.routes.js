const express = require('express');
const router = express.Router();

const { feedController } = require('../../controllers/user-controller');

router.get('/', feedController.getFeed);

module.exports = router;
