import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Statistic, List, ListItem} from 'semantic-ui-react';

import {toTitleCase} from '../helpers';

const WeatherDisplay = ({name, sys, weather, main, wind}) => {
    return (
        <Card className={'weather-display'} color={'yellow'}>
            <Image centered circular style={{backgroundColor: 'white'}}>
                {/*<i className={`owi owi-lg owi-${weather[0].icon}`}/>*/}
                <i
                    className={`owi owi-${weather[0].icon}`}
                    style={{fontSize: '8em'}}
                />
            </Image>
            <Card.Content>
                <Card.Header>
                    {toTitleCase(name)}
                </Card.Header>
                <Statistic>
                    <Statistic.Value>{main.temp}°</Statistic.Value>
                    <Statistic.Label>Kelvin</Statistic.Label>
                </Statistic>
                {/*<h2 className="city-name">{toTitleCase(name)}</h2>*/}
                <h3 className="weather-desc">{toTitleCase(weather[0].description)}</h3>
                {/*<span className="temp">{main.temp} kelvin</span>*/}
                {/*<span className="temp-max">{main.temp_max} kelvin</span>*/}
                {/*<span className="temp-min">{main.temp_min} kelvin</span>*/}
                <List>
                    <ListItem>Humidity: {main.humidity}%</ListItem>
                </List>
                <List>
                    <ListItem>Pressure: {main.pressure} hPa</ListItem>
                </List>
                <List>
                    <ListItem>Wind-Speed: {wind.speed} meter/sec</ListItem>
                </List>
                <List>
                    <ListItem>Wind-degree: {wind.deg}°</ListItem>
                </List>
                {/*<span className="humidity">{main.humidity}%</span>*/}
                {/*<span className="pressure">{main.pressure} hPa</span>*/}
                {/*<span className="wind-speed">{wind.speed} meter/sec</span>*/}
                {/*<span className="wind-degree">{wind.degree}</span>*/}
            </Card.Content>
        </Card>
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