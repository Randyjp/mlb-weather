import {UnitSystem} from './enums';

export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function formatTemperature(temp, scale) {
    if (typeof temp !== 'number') return 0;

    if (scale === UnitSystem.IMPERIAL) {
        temp = (temp * 9 / 5 + 32);
    }

    return Math.round(temp);
}

export function formatSpeed(speed, scale) {
    if (typeof speed !== 'number') return 0;

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
    if (array.length < 1) return [];
    return array[Math.floor(Math.random() * array.length)];
}