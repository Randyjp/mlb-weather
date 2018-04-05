import React, {Component} from 'react';

import DropDown from './DropDown';
import WeatherDisplay from './WeatherDisplay';
import Map from './Map';

class App extends Component {
    state = {
        venues: [],
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
            .then(weather => this.setState({weather}))
    };

    render() {
        const {venues, weather} = this.state;

        return (
            <div className="App">
                <h1>MLB Venues</h1>
                <DropDown venues={venues} getWeather={this.getWeather}/>
                {weather ? <WeatherDisplay {...weather}/> : null}
                <Map
                    isMarkerShown={true}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default App;
