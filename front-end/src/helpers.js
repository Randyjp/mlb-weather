import {UnitSystem} from './enums';

export function toTitleCase(str) {
    if(typeof str !== 'string') {
        throw new TypeError('toTitleCase only takes strings');
    }
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function formatTemperature(temp, scale) {
    if (typeof temp !== 'number') {
        throw new TypeError('temperature must be a number');
    }

    if (scale === UnitSystem.IMPERIAL) {
        temp = (temp * 9 / 5 + 32);
    }

    return Math.round(temp);
}

export function formatSpeed(speed, scale) {
    if (typeof speed !== 'number') {
        throw new TypeError('speed must be a number');
    }
    if (scale === UnitSystem.IMPERIAL) {
        speed = (speed * 2.24);
    }

    return Math.round(speed * 100) / 100;
}

export function setLocalStorage(objName, value) {
    localStorage.setItem(objName, value);
}

export function getLocalStorage(objName) {
    return localStorage.getItem(objName);
}

export function getRandomItem(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('getRandomItem expects an array');
    }
    if (array.length < 1) {
        throw new RangeError('array most me non-empty');
    }
    return array[Math.floor(Math.random() * array.length)];
}