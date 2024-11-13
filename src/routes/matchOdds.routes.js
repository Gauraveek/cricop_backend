const express = require('express');
const router = express.Router();

const matchOddsController = require('../controllers/matchOdds.controller');

router.get('/liveMatchOdds/:project_key', matchOddsController.liveMatchOdds);

module.exports = router;