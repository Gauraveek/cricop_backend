const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/tournamentStats/:project_key', Controller.statsController.tournamentStats);
router.get('/playerStats/:project_key', Controller.statsController.playerStats);
router.get('/associationPlayerStats/:project_key', Controller.statsController.associationPlayerStats);

module.exports = router;