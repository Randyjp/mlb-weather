import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        fetch('/venues/miller')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                {/*<pre>{this.state.users.weather[0]}</pre>*/}
            </div>
        );
    }
}

export default App;
