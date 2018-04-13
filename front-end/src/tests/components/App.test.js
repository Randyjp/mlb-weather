import React from 'react';
import {mount} from 'enzyme';
import {Button} from 'semantic-ui-react';

import {UnitSystem} from '../../enums';
import App from '../../components/App';


describe('Testing <App/> component', () => {
    // let app;

    const venues = [
        {
            "_id": "5ac4f1270ddc171545561c81",
            "location": {"type": "Point", "coordinates": [-117.882685, 33.80029], "city": "anaheim"},
            "name": "angel stadium of anaheim",
            "altitude": 154,
            "open_wea_id": 5323810,
            "__v": 0
        }
    ];

    const weather = {
        "_id": "5ac67cf51dccb11eddec037a",
        "weather": [{"id": 721, "main": "Haze", "description": "haze", "icon": "50d"}, {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
        }],
        "coord": {"lon": -117.91, "lat": 33.84},
        "base": "stations",
        "main": {"temp": 290.85, "pressure": 1018, "humidity": 77, "temp_min": 288.15, "temp_max": 295.15},
        "wind": {"speed": 2.1},
        "clouds": {"all": 90},
        "dt": 1522955280,
        "sys": {"type": 1, "id": 411, "message": 0.0057, "country": "US", "sunrise": 1522935150, "sunset": 1522980962},
        "id": 5323810,
        "name": "anaheim",
        "cod": 200,
        "expires": "2018-04-05T19:55:57.548Z",
        "__v": 0
    };

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should render properly', () => {
        fetch
            .once(JSON.stringify(venues))
            .once(JSON.stringify(weather));

        mount(<App/>);
    });
});