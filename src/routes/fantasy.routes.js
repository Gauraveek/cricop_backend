const express = require('express');
const Controller = require('../controllers');

const router =  express.Router();

router.get('/matchCredits/:project_key', Controller.fantasyController.getMatchCredits);
router.get('/matchPoints/:project_key', Controller.fantasyController.getMatchPoints);

module.exports = router;