import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM }  from 'jsdom';
import fetch from 'jest-fetch-mock';

configure({adapter: new Adapter()});

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}


global.localStorage = localStorageMock;
global.fetch = fetch;
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);