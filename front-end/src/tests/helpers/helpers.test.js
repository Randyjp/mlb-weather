import {toTitleCase, formatTemperature, formatSpeed, getRandomItem} from './../../helpers';
import {UnitSystem} from './../../enums';

describe('toTitleCase helper', () => {
    test('Should convert string to title', () => {
        const noTitle = 'not today';
        expect(toTitleCase(noTitle)).toBe('Not Today');
    });

    test('Should handle empty strings', () => {
        const noTitle = '';
        expect(toTitleCase(noTitle)).toBe('');
    });

    test('Should throw exception on invalid argument type', () => {
        const noTitle = 100;

        expect(() => {
            toTitleCase(noTitle)
        }).toThrow('toTitleCase only takes strings');

        expect(() => {
            toTitleCase(noTitle)
        }).toThrow(TypeError);
    });
});

describe('formatTemperature helper', () => {
    test('Should round celsius temperatures', () => {
        const temp = 45.25;
        expect(formatTemperature(temp, UnitSystem.METRIC)).toBe(45);
    });

    test('Should convert celsius to fahrenheit and round', () => {
        const temp = 30;
        expect(formatTemperature(temp, UnitSystem.IMPERIAL)).toBe(86);
    });

    test('Should throw exception on invalid argument type', () => {
        const temp = '200';

        expect(() => {
            formatTemperature(temp, UnitSystem.METRIC)
        }).toThrow('temperature must be a number');

        expect(() => {
            formatTemperature(temp, UnitSystem.METRIC)
        }).toThrow(TypeError);
    });
});


describe('formatSpeed helper', () => {
    test('Should round meters/second temperatures', () => {
        const speed =  22.335555555;
        expect(formatSpeed(speed, UnitSystem.METRIC)).toBe(22.34);
    });

    test('Should convert meters/second to miles/hour and round', () => {
        const speed = 15;
        expect(formatSpeed(speed, UnitSystem.IMPERIAL)).toBe(33.60);
    });

    test('Should throw exception on invalid argument type', () => {
        const speed = '200';

        expect(() => {
            formatSpeed(speed, UnitSystem.METRIC)
        }).toThrow('speed must be a number');

        expect(() => {
            formatSpeed(speed, UnitSystem.METRIC)
        }).toThrow(TypeError);
    });
});

describe('getRandomItem helper', () => {
    test('Should return element from within array', () => {
        const array = [1, 2, 3];
        const item = getRandomItem(array);

        expect(array).toContain(item);
    });

    test('Should return element from within array', () => {
        const array = [1, 2, 3];
        const item = getRandomItem(array);

        expect(array).toContain(item);
    });

    test('Should throw exception if argument is not array', () => {
        const array = {};

        expect(() => {
            getRandomItem(array);
        }).toThrow(TypeError);
    });

    test('Should throw exception if array is empty', () => {
        const array = [];

        expect(() => {
            getRandomItem(array);
        }).toThrow(RangeError);
    });
});
