import React, {Component} from 'react';

import DropDown from './DropDown';
import WeatherDisplay from './WeatherDisplay';

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
            </div>
        );
    }
}

export default App;
