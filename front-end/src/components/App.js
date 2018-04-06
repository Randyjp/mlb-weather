import React, {Component} from 'react';

import DropDown from './DropDown';
import WeatherDisplay from './WeatherDisplay';
import Map from './Map';

class App extends Component {
    state = {
        venues: [],
        selectedVenue: null,
        weather: null
    };

    componentDidMount() {
        fetch('/venues')
            .then(res => res.json())
            .then(venues => this.setState({venues}));
    }

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
            );
        }

        return null;
    };

    render() {
        const {venues, weather} = this.state;

        return (
            <div className="App">
                <h1>MLB Venues</h1>
                <DropDown venues={venues} getWeather={this.getWeather}/>
                {weather ? <WeatherDisplay {...weather}/> : null}
                {this.renderMap()}
            </div>
        );
    }
}

export default App;
