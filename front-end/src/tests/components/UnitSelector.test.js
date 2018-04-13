import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'semantic-ui-react';
import renderer from 'react-test-renderer';

import {UnitSystem} from '../../enums';
import UnitSelector from '../../components/UnitSelector';

it('renders without crashing', () => {
    shallow(<UnitSelector units={UnitSystem.METRIC} handleUnitChange={() => {
    }}/>);
});

it('should render correctly', () => {
    const tree = renderer.create(<UnitSelector handleUnitChange={()=>{}}
                                        units={UnitSystem.IMPERIAL}/>);
    expect(tree.toJSON()).toMatchSnapshot();

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

    it('simulates click events', () => {
        wrapper.find(Button).first().simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should have active class on right button ', () => {
        const first = wrapper.find(Button).first();
        const second = wrapper.find(Button).last();

        expect(first.props().active).toBeTruthy();
        expect(second.props().active).toBeFalsy();
    });
});

