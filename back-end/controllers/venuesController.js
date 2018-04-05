const mongoose = require('mongoose');
const axios = require('axios');

const Venue = mongoose.model('Venue');
const CityWeather = mongoose.model('CityWeather');


// getVenueWeather = async (city_id) => {
//     const key = process.env.WEATHER_KEY;
//
//     const url = `http://api.openweathermap.org/data/2.5/forecast?id=${venue.open_wea_id}&APPID=${key}`;
//     console.log(url);
//     const response = await axios(url);
//     console.log(response);
//     return response.data;
// };

exports.getVenues = async (req, res) => {
    const venues = await Venue.find();
    res.json(venues);
};

exports.getVenueByName = async (req, res) => {
    const key = process.env.WEATHER_KEY;
    const {name} = req.params;

    const venue = await Venue.findOne({name: new RegExp(name, 'i')});

    const url = `http://api.openweathermap.org/data/2.5/weather?id=${venue.open_wea_id}&APPID=${key}`;

    const response = await axios(url);

    res.json(response.data);
};

exports.getWeatherByCity = async (req, res) => {
    const key = process.env.WEATHER_KEY;
    const {city_id} = req.params;
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${city_id}&APPID=${key}`;

    const previousWeather = await CityWeather.findOne({
        id: city_id,
        expires: {$gt: Date.now()}
    });

    if (previousWeather) {
        //found it, still valid just return it
        res.json(previousWeather);
    } else {
        //not a thing, look it up
        const response = await axios(url);

        const weather = await  (new CityWeather({
            ...response.data,
            expires: Date.now() + 600000 // expires in 10 minutes
        })).save();

        res.json(weather);
    }

};
