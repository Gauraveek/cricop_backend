const express = require('express');
const fantasyController = require('../controllers/fantasy.controller');

const router =  express.Router();

router.get('/matchCredits/:project_key', fantasyController.getMatchCredits);
router.get('/matchPoints/:project_key', fantasyController.getMatchPoints);

module.exports = router;