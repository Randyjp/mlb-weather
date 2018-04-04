const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venuesController');
const {catchErrors} = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/venues',catchErrors(venueController.getVenues));
router.get('/venues/:name',catchErrors(venueController.getVenueByName));
router.get('/city/:city_id',catchErrors(venueController.getWeatherByCity));

module.exports = router;
