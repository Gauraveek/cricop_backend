const express = require('express');
const tournamentsController = require('../controllers/tournaments.controller');

const router = express.Router();

router.get('/:project_key', tournamentsController.getAllFeauteredTournaments);
router.get('/featuredMatches/:project_key', tournamentsController.getFeaturedMatches);
router.get('/fixtures/:project_key', tournamentsController.getFixtures);
router.get('/tournamentDetails/:project_key', tournamentsController.getTournamentDetails);
router.get('/tournamentTables/:project_key', tournamentsController.getTournamentDetails);
router.get('/teamDetails/:project_key', tournamentsController.getTeamDetails);

module.exports = router;