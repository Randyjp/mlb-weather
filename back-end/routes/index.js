const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venuesController');
const {catchErrors} = require('../handlers/errorHandlers');

/* GET home page. */
router.get('/',catchErrors(venueController.getVenues));

module.exports = router;
