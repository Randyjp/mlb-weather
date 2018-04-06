// city's static map
import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{lat: -34.397, lng: 150.644}}
        center={props.position}
    >
        {props.isMarkerShown && <Marker position={props.position}/>}
    </GoogleMap>
)));

export default Map;