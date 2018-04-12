import React from 'react';
import Select from 'react-select';
import {shallow} from 'enzyme';

import DropDown from '../../components/DropDown';


describe('<DropDown/> component', () => {
    let wrapper;
    const spy = jest.fn();
    const venue = [
        {
            "_id": "5ac4f1270ddc171545561c9b",
            "location": {"type": "Point", "coordinates": [-77.007435, 38.872987], "city": "washington"},
            "name": "nationals park",
            "altitude": 23,
            "open_wea_id": 5815135,
            "__v": 0
        }
    ];

    beforeEach(() => {

        wrapper = shallow(<DropDown venues={venue} getWeather={spy}/>);

    });

    it('should render one <Select> component', () => {
        expect(wrapper.find(Select)).toHaveLength(1);
    });

    it('simulates change events', () => {
        wrapper.find(Select).simulate('change', venue);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(venue.city_id);
    });
});

