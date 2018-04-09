import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Statistic, List, ListItem} from 'semantic-ui-react';

import {toTitleCase} from '../helpers';

const WeatherDisplay = ({name, sys, weather, main, wind}) => {
    return (
        <Card className={'weather-display'} color={'yellow'}>
            <Image centered circular style={{backgroundColor: 'white'}}>
                <i
                    className={`owi owi-${weather[0].icon}`}
                    style={{fontSize: '8em'}}
                />
            </Image>
            <Card.Content textAlign={'center'}>
                <Card.Header>
                    {toTitleCase(name)}
                </Card.Header>
                <Statistic>
                    <Statistic.Value>{main.temp}°</Statistic.Value>
                    <Statistic.Label>Celsius</Statistic.Label>
                </Statistic>
                <h3 className="weather-desc">{toTitleCase(weather[0].description)}</h3>
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