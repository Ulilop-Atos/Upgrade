import authReducer from "../../auth/authReducer";
import { types } from "../../types";

describe('Tests for authReducer', () => { 
  
  test('should return the default state', () => {
    const state = { logged: false };
    const test = authReducer(state, {});
    expect(test).toEqual(state);
  });

  test('should auth and keep the data of the user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Test',
        mail: 'this@mail.com',
      },
    };
    const test = authReducer({ logged: false }, action);
    expect(test).toEqual({
      logged: true,
      name: 'Test',
      mail: 'this@mail.com',
    });
  });

  test('should logout and delete the user data', () => {
    const state = {
      name: 'Test',
      mail: 'this@mail.com',
    };
    const test = authReducer(state, { type: types.logout });
    expect(test).toEqual({ logged: false });
  });

});