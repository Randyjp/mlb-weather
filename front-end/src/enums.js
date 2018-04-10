import {Enum} from 'enumify';

export class UnitSystem extends Enum {
}

UnitSystem.initEnum(['METRIC', 'IMPERIAL']);


export const TemperatureScales = Object.freeze({
    METRIC: "Celsius",
    IMPERIAL: "Fahrenheit",
});

export const SpeedScales = Object.freeze({
    METRIC: "meters/second",
    IMPERIAL: "miles/hour",
});

