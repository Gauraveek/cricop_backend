const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/:project_key', Controller.tournamentsController.getAllFeauteredTournaments);
router.get('/featuredMatches/:project_key', Controller.tournamentsController.getFeaturedMatches);
router.get('/fixtures/:project_key', Controller.tournamentsController.getFixtures);
router.get('/tournamentDetails/:project_key', Controller.tournamentsController.getTournamentDetails);
router.get('/tournamentTables/:project_key', Controller.tournamentsController.getTournamentDetails);
router.get('/teamDetails/:project_key', Controller.tournamentsController.getTeamDetails);

module.exports = router;