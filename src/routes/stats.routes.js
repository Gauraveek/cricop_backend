const express = require('express');
const statsController = require('../controllers/stats.controller');

const router = express.Router();

router.get('/tournamentStats/:project_key', statsController.tournamentStats);
router.get('/playerStats/:project_key', statsController.playerStats);
router.get('/associationPlayerStats/:project_key', statsController.associationPlayerStats);

module.exports = router;