import React, {Component, Fragment} from 'react';

import {Grid, GridColumn, GridRow, Divider} from 'semantic-ui-react';


import DropDown from './DropDown';
import WeatherDisplay from './WeatherDisplay';
import UnitSelector from './UnitSelector';
// import VenueInfo from './VenueInfo';
import Map from './Map';

class App extends Component {
    state = {
        venues: [],
        selectedVenue: null,
        weather: null,
        units: 'metric'
    };
    componentDidMount() {
        fetch('/venues')
            .then(res => res.json())
            .then(venues => this.setState({venues}));
    }
    handleUnitChange = (units) => {
        this.setState({units})
    };
    getWeather = (city_id) => {
        fetch(`/city/${city_id}`)
            .then(res => res.json())
            .then(weather => this.setState({weather}));

        const {venues} = this.state;
        const selectedVenue = venues.find(venue => venue.open_wea_id === city_id);
        this.setState({selectedVenue});
    };
    renderMap = () => {
        const {selectedVenue} = this.state;
        const key = 'AIzaSyDTJJE3Ow7Wro0wd-Mcdpa_-ZeYJVpywn8'; // I KNOW!!!

        if (selectedVenue) {
            return (
                <Fragment>
                    {/*<VenueInfo name={selectedVenue.name} altitude={selectedVenue.altitude}/>*/}
                    <Map
                        isMarkerShown={true}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `400px`}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        position={{
                            lat: selectedVenue.location.coordinates[1],
                            lng: selectedVenue.location.coordinates[0]
                        }}
                    />
                </Fragment>
            );
        }

        return null;
    };

    render() {
        const {venues, weather, units} = this.state;

        return (
            <Grid container className="App">
                <GridRow columns={1}>
                    <UnitSelector handleUnitChange={this.handleUnitChange} units={units}/>
                </GridRow>
                <GridRow columns={2} centered stretched>
                    <GridColumn>
                        <h1>MLB Venues</h1>
                        <DropDown venues={venues} getWeather={this.getWeather}/>
                    </GridColumn>
                </GridRow>
                <Divider/>
                <GridRow columns={2}>
                    <GridColumn>
                        {weather ? <WeatherDisplay {...weather}/> : null}
                    </GridColumn>
                    <GridColumn stretched>
                        {this.renderMap()}
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}

export default App;
