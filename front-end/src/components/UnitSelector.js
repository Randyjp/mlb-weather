import React from 'react';
import PropTypes from 'prop-types';

import {UnitSystem} from '../enums';

import {Button, ButtonGroup, ButtonOr} from 'semantic-ui-react';

const UnitSelector = ({handleUnitChange, units}) => (
    <ButtonGroup basic>
        <Button
            onClick={() => handleUnitChange(UnitSystem.METRIC)}
            active={units === UnitSystem.METRIC}>
            °C
        </Button>
        <ButtonOr/>
        <Button
            onClick={() => handleUnitChange(UnitSystem.IMPERIAL)}
            active={units === UnitSystem.IMPERIAL}>
            °F
        </Button>
    </ButtonGroup>

);

export default UnitSelector;