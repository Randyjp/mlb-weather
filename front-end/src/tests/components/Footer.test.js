import React from 'react';
import {shallow} from 'enzyme';
import {GridColumn} from 'semantic-ui-react';

import Footer from '../../components/Footer';

it('renders without crashing', () => {
    shallow(<Footer />);
});

it('should render three <GridColumn> components', () => {
    const footer = shallow(<Footer/>);
    expect(footer.find(GridColumn)).toHaveLength(3);
});