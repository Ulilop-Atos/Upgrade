import '@testing-library/jest-dom';
import { getHello } from "../../base/02-template-string";

describe('Tests 02', () => {
    test('getHello should be "Hello (name)"',() => {
        const name = 'Fer';
        const test = getHello(name);
        expect(test).toBe('Hello ' + name);
    });
    
    test('getHello should be "Hello world" when no prop passed.',() => {
        const test = getHello();
        expect(test).toBe('Hello world');
    });
});