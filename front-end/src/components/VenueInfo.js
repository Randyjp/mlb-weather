import React from 'react';
import PropTypes from 'prop-types';
import {toTitleCase} from '../helpers';

const VenueInfo = ({name, altitude, location}) => (
    <div className="venue-info">
        <h2 className="name">{toTitleCase(name)}</h2>
        <span className="altitude">{altitude} m</span>
    </div>
);

VenueInfo.propTypes = {
    name: PropTypes.string.isRequired,
    altitude: PropTypes.number.isRequired,
};

export default VenueInfo;