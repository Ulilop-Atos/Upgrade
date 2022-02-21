import '@testing-library/jest-dom';
import { getActiveUser, getUser } from "../../base/05-functions";

describe('Tests on 05', () => {
    test('getUser should be object',() => {
        const user = {
            uid: 'ABC123456798',
            username: 'MyName01',
        };

        const test = getUser();

        expect(test).toEqual(user);
    });
    
    test('getActiveUser should be object',() => {
        const  name = 'Username'; 

        const user = {
            uid: 'ABC123456798',
            username: name,
        };

        const test = getActiveUser(name);

        expect(test).toEqual(user);
    });
});