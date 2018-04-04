import React, {Component} from 'react';

import DropDown from './DropDown';

class App extends Component {
    state = {
        venues: []
    };

    componentDidMount() {
        fetch('/venues')
            .then(res => res.json())
            .then(venues => this.setState({venues}));
    }

    render() {
        const {venues} = this.state;

        return (
            <div className="App">
                <h1>MLB Venues</h1>
                <DropDown venues={venues}/>
            </div>
        );
    }
}

export default App;
