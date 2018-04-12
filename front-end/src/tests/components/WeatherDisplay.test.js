import React from 'react';
import {shallow} from 'enzyme';
import {ListItem, CardHeader} from 'semantic-ui-react';

import WeatherDisplay from '../../components/WeatherDisplay';


describe('<WeatherDisplay/> component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<WeatherDisplay
            main={{
                humidity: 22,
                pressure: 1011,
                temp: 23.25,
                temp_max: 25,
                temp_min: 20
            }}
            name={'baltimore'}
            sys={{
                country: "US",
                id: 1316,
                message: 0.0065,
                sunrise: 1523529158,
                sunset: 1523576516,
                type: 1
            }}
            weather={
                [{
                    description: "few clouds",
                    icon: "02d",
                    id: 801,
                    main: "Clouds"
                }
                ]}
            wind={{
                deg: 215.005,
                speed: 7.47
            }}
        />);

    });

    it('should render four <ListItem> components', () => {
        expect(wrapper.find(ListItem)).toHaveLength(4);
    });

    it('should render four <CardHeader> component', () => {
        expect(wrapper.find(CardHeader)).toHaveLength(1);
    });
});

