const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        index: true,
        unique: true,
        lowercase: true,
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
            lowercase: true,
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
    open_wea_id: {
        type: Number,
        trim: true,
        required: 'Please enter an Open Weather City ID'
    },
});


module.exports = mongoose.model('Venue', venueSchema);
