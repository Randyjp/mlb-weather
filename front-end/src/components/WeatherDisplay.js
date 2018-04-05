import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplay = ({name, sys, weather, main, wind}) => {
    return (
        <div className={'weather-display'}>
            <h2 className="city-name">{name}</h2>
            <h3 className="weather-desc">{weather[0].description}</h3>
            <span className="temp">{main.temp} kelvin</span>
            <span className="temp-max">{main.temp_max} kelvin</span>
            <span className="temp-min">{main.temp_min} kelvin</span>
            <span className="humidity">{main.humidity}%</span>
            <span className="pressure">{main.pressure} hPa</span>
            <span className="wind-speed">{wind.speed} meter/sec</span>
            <span className="wind-degree">{wind.degree}</span>
        </div>
    );
};

WeatherDisplay.propTypes = {
    base: PropTypes.string,
    clouds: PropTypes.object.isRequired,
    cod: PropTypes.number,
    coord: PropTypes.object,
    dt: PropTypes.number,
    id: PropTypes.number,
    main: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    sys: PropTypes.object.isRequired,
    weather: PropTypes.array.isRequired,
    wind: PropTypes.object.isRequired,
};

export default WeatherDisplay;