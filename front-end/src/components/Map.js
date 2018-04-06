// city's static map
import React from 'react';
import PropTypes from 'prop-types';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={props.position}
        center={props.position}
    >
        {props.isMarkerShown && <Marker position={props.position}/>}
    </GoogleMap>
)));

Map.propTypes = {
    position: PropTypes.object.isRequired,
    isMarkerShown: PropTypes.bool.isRequired,
    googleMapURL: PropTypes.string.isRequired,
};

export default Map;