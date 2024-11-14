const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/featured/:project_key', Controller.matchController.featuredMatches);
router.get('/details/:project_key', Controller.matchController.matchDetails);
router.get('/ballByBall/:project_key', Controller.matchController.matchBallByBall)
router.get('/ballByBallFirstOver/:project_key', Controller.matchController.matchBallByBallFirstOver);
router.get('/ballByBallOverIndex/:project_key', Controller.matchController.matchBallByBallOverIndex);
router.get('/oversummary/:project_key', Controller.matchController.matchOverSummary);
router.get('/fixtures/:project_key', Controller.matchController.getFixtures);

module.exports = router
