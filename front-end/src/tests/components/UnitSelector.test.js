import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'semantic-ui-react';

import {UnitSystem} from '../../enums';
import  UnitSelector from '../../components/UnitSelector';

it('renders without crashing', () => {
    shallow(<UnitSelector units={UnitSystem.METRIC} handleUnitChange={() => {}}/>);
});

describe('<UnitSelector/> component', () => {
    let wrapper;
    const spy = jest.fn();

    beforeEach(() => {

        wrapper = shallow(<UnitSelector
            units={UnitSystem.METRIC}
            handleUnitChange={spy}
        />);

    });

    it('should render two <Button> components', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('simulates click events', () =>{
        wrapper.find(Button).first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

