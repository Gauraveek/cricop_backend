const express = require('express');
const matchController = require('../controllers/match.controller');

const router = express.Router();

router.get('/featured/:project_key', matchController.featuredMatches);
router.get('/details/:project_key', matchController.matchDetails);
router.get('/ballByBall/:project_key', matchController.matchBallByBall)
router.get('/ballByBallFirstOver/:project_key', matchController.matchBallByBallFirstOver);
router.get('/ballByBallOverIndex/:project_key', matchController.matchBallByBallOverIndex);
router.get('/oversummary/:project_key', matchController.matchOverSummary);
router.get('/fixtures/:project_key', matchController.getFixtures);

module.exports = router
