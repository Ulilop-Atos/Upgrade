import '@testing-library/jest-dom';
import { returnArray } from "../../base/07-arrays-destructure";

describe('Tests on 07', () => {
    test('returnArray should be an array of number and string',() => {

        const [ str, num ] = returnArray();

        expect(typeof str).toBe('string');
        expect(str).toBe('ABC');
        
        expect(typeof num).toBe('number');
        expect(num).toBe(123);
    });
    
});