const express = require('express');
const { loginController } = require('../../controllers/auth-controller');
const router = express.Router();

router.post('/', loginController.verifyUser);

module.exports = router;
