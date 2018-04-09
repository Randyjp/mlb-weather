import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import {toTitleCase} from '../helpers';

import 'react-select/dist/react-select.css';


class DropDown extends React.Component {
    state = {
        selectedOption: ''
    };
    handleChange = (selectedOption) => {
        if (!selectedOption) return;
        this.setState({selectedOption});
        this.props.getWeather(selectedOption.value);
    };

    render() {
        const {selectedOption} = this.state;
        const value = selectedOption && selectedOption.value;
        const {venues} = this.props;

        return (
            <Select
                name={'form-field-name"'}
                value={value}
                onChange={this.handleChange}
                options={venues.map(venue => ({
                    value: venue.open_wea_id,
                    label: toTitleCase(venue.name)
                }))}
            />
        );
    }
}

DropDown.propTypes = {
    venues: PropTypes.array.isRequired,
    getWeather: PropTypes.func.isRequired,
};

export default DropDown;