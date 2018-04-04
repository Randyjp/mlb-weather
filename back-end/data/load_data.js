require('dotenv').config({path: __dirname + '/../variables.env'});
require('dotenv').config({path: __dirname + ''});
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

const Venue = require('../models/Venues');

const venues = JSON.parse(fs.readFileSync(__dirname + '/venues.json', 'utf-8'));
const cities = JSON.parse(fs.readFileSync(__dirname + '/open_weather_city_list.json', 'utf-8'));

const getCityId = (city_name) => {
    console.log(city_name);
    for (const city of cities) {
        if (!(city.country === 'US' || city.country === 'CA')) continue;
        if (city.name.toLowerCase() === city_name.toLowerCase()) {
            console.log(typeof city.id);
            console.log(city.id);
            return city.id;
        }
    }
};

const real_venues = venues.map(({...venue}) => (
    {
        name: venue.name,
        location: {
            city: venue.city,
            coordinates: [
                venue.longitude,
                venue.latitude,
            ]
        },
        altitude: venue.altitude,
        open_wea_id: getCityId(venue.city)
    }
));

async function load_data() {
    try {
        console.log(real_venues);
        await Venue.insertMany(real_venues);
        process.exit();
    } catch (e) {
        console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
        console.log(e);
        process.exit();
    }
}

async function delete_data() {
    console.log('😢😢 Goodbye Data...');
    await Venue.remove();
    console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
    process.exit();
}

if (process.argv.includes('--delete')) {
    delete_data();
} else {
    load_data();
}


