import {toTitleCase} from './../../helpers';

describe('toTitleCase helper', () => {
    it('Should convert string to title', () => {
        const noTitle = 'not today';
        expect(toTitleCase(noTitle)).toBe('Not Today');
    });

    it('Should handle empty strings', () => {
        const noTitle = '';
        expect(toTitleCase(noTitle)).toBe('');
    });

    it('Should throw exception on invalid argument type', () => {
        const noTitle = 100;

        expect(() => {
            toTitleCase(noTitle)
        }).toThrow('toTitleCase only takes strings');

        expect(() => {
            toTitleCase(noTitle)
        }).toThrow(TypeError);
    });
});


