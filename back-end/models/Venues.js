const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        required: 'Please enter a venue name'
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        city: {
            type: String,
            trim: true,
            required: 'Please enter a city name'
        },
        coordinates: [{
            type: Number,
            required: 'You must supply coordinates'
        }],
    },
    altitude: {
        type: Number,
        required: 'You must supply an altitude'
    },
    venue_w_chan_loc: {
        type: String,
        trim: true,
        required: 'Please enter a weather channel location'
    },
});


module.exports = mongoose.model('Venue', venueSchema);
