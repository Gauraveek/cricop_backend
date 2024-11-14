const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/liveMatchOdds/:project_key', Controller.matchOddsController.liveMatchOdds);

module.exports = router;