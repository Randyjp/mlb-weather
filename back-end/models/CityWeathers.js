const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const cityWeatherSchema = new mongoose.Schema({
    dt: Number,
    id: {
        type: Number,
        index: true
    },
    cod: Number,
    base: {
        type: String,
        lowercase: true,
    },
    clouds: {
        type: mongoose.Schema.Types.Mixed,
        required: 'Please enter a clouds object'
    },
    coord: {
        type: mongoose.Schema.Types.Mixed,
        required: 'Please enter a coordinates object'
    },
    main: {
        type: mongoose.Schema.Types.Mixed,
        required: 'Please enter a main object'
    },
    name: {
        type: String,
        lowercase: true,
        required: 'Please enter city name'
    },
    sys: {
        type: mongoose.Schema.Types.Mixed,
        required: 'Please enter a sys object'
    },
    weather: {
        type: Array,
        required: 'Please enter a weather array'
    },
    wind: {
        type: mongoose.Schema.Types.Mixed,
        required: 'Please enter a wind object'
    },
    expires: {
        type: Date,
        required: 'Please enter expiration date'
    }
});

module.exports = mongoose.model('CityWeather',  cityWeatherSchema);