const express = require('express');
const router = express.Router();
const associationsController = require('../controllers/associations.controller');

router.get('/:project_key', associationsController.getAssociatons); 
router.get('/country/:project_key', associationsController.getCountry);
router.get('/venue/:project_key', associationsController.getVenue);
router.get('/country/INTERNATIONAL/:project_key', associationsController.getAssociationsByCountryInternational);    
router.get('/country/national/:project_key', associationsController.getAssociatonsByCountry);
router.get('/featuredTournaments/:project_key', associationsController.getFeaturedTournaments);
router.get('/country/flags/:project_key', associationsController.getCountryFlag);

module.exports = router;