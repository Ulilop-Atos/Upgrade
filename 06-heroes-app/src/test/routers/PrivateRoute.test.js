import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import PrivateRoute from "../../routers/PrivateRoute";

describe('Tests for <PrivateRoute />', () => {

  const authContext = {
    user: {
      logged: true,
      username: 'Test Username',
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={authContext}>
      <MemoryRouter initialEntries={['/']} >
        <PrivateRoute>
          <h1>User is logged.</h1>
        </PrivateRoute>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should display the component if the user is authenticated', () => {
    expect(wrapper.find('h1').text().trim()).toBe('User is logged.');
  });

  test('should store the path', () => {
    expect(localStorage.getItem('lastPath')).toBe('/');
  });

});