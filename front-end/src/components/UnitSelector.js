import React from 'react';
import PropTypes from 'prop-types';

import {Button, ButtonGroup, ButtonOr} from 'semantic-ui-react';

const UnitSelector = ({handleUnitChange, units}) => (
    <ButtonGroup basic>
        <Button
            onClick={() => handleUnitChange('metric')}
            active={units === 'metric'}>
            °C
        </Button>
        <ButtonOr/>
        <Button
            onClick={() => handleUnitChange('imperial')}
            active={units === 'imperial'}>
            °F
        </Button>
    </ButtonGroup>

);

export default UnitSelector;