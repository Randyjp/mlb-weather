import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Statistic, List, ListItem} from 'semantic-ui-react';

import {SpeedScales, TemperatureScales, UnitSystem} from '../enums';
import {toTitleCase, formatSpeed, formatTemperature} from '../helpers';

const WeatherDisplay = ({name, sys, weather, main, wind, units}) => {
    const temperature = formatTemperature(main.temp, units);
    const speed = formatSpeed(wind.speed, units);
    const tempScale = units === UnitSystem.METRIC ? TemperatureScales.METRIC : TemperatureScales.IMPERIAL;
    const speedScale = units === UnitSystem.METRIC ? SpeedScales.METRIC : SpeedScales.IMPERIAL;

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
                    <Statistic.Value>{temperature}°</Statistic.Value>
                    <Statistic.Label>{tempScale}</Statistic.Label>
                </Statistic>
                <h3 className="weather-desc">{toTitleCase(weather[0].description)}</h3>
                <List>
                    <ListItem>Humidity: {main.humidity}%</ListItem>
                </List>
                <List>
                    <ListItem>Pressure: {main.pressure} hPa</ListItem>
                </List>
                <List>
                    <ListItem>Wind-Speed: {`${speed} ${speedScale}`}</ListItem>
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