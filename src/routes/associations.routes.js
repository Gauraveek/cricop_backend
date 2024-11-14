const express = require('express');
const router = express.Router();
const Controller = require('../controllers');

router.get('/:project_key', Controller.associationController.getAssociatons); 
router.get('/country/:project_key', Controller.associationController.getCountry);
router.get('/venue/:project_key', Controller.associationController.getVenue);
router.get('/country/INTERNATIONAL/:project_key', Controller.associationController.getAssociationsByCountryInternational);    
router.get('/country/national/:project_key', Controller.associationController.getAssociatonsByCountry);
router.get('/featuredTournaments/:project_key', Controller.associationController.getFeaturedTournaments);
router.get('/country/flags/:project_key', Controller.associationController.getCountryFlag);

module.exports = router;