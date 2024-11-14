const express = require('express')
const router = express.Router();
const Controller = require('../controllers');

router.post('/auth/:project_key', Controller.authController.getToken);

module.exports = router;