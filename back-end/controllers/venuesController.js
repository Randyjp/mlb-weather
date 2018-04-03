const mongoose = require('mongoose');
const Venue = mongoose.model('Venue');

exports.getVenues = async (req, res) => {
    console.log('m,msfd');
    console.log(Venue);
    const venues = await Venue.find();
    console.log(venues);
    res.json(venues);
};