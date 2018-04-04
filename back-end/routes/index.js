const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venuesController');
const {catchErrors} = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/venues',catchErrors(venueController.getVenues));
router.get('/venues/:name',catchErrors(venueController.getVenueByName));

module.exports = router;
