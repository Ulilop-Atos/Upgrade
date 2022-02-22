import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Test for <AppRouter />', () => {

  test('should display if user is not auth', () => {

    const contextValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe(`Login`);
  });
  
  test('should display home if user is auth', () => {

    const contextValue = {
      user: {
        logged: true,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('.navbar').exists() ).toBe(true);
  });
});