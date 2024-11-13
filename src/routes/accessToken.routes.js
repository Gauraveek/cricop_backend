const express = require('express')
const router = express.Router();
const accessToken = require('../controllers/auth.controller')

router.post('/auth/:project_key', accessToken.getToken);

module.exports = router;