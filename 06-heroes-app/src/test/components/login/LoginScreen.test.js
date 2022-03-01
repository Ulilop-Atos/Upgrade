import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', 
  ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,   
  })
);

describe('Test for <LoginScreen />', () => {

  const contextValue = {
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={[`/login`]}>
        <LoginScreen />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
    expect(wrapper.find('button').text().trim()).toBe('Login');
  });

  test('should dispatch and navigate to home', () => {

    const handleClick = wrapper.find('button').prop('onClick');

    handleClick();
    
    expect(contextValue.dispatch).toHaveBeenCalledWith(
      {
        payload: {
          mail: 'temp@mail.com', 
          name: 'Log Username',
        }, 
        type: types.login,
      }
      );
    expect(mockNavigate).toHaveBeenCalledWith('/', {replace: true});
    
    localStorage.setItem('lastPath','/dc');

    handleClick();
    
    expect(mockNavigate).toHaveBeenCalledWith('/dc', {replace: true});
      
  });

});