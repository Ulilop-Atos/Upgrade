import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', 
  ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,   
  })
);

describe('Tests for <Navbar />', () => { 
  
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Username Test',
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={ ['/'] }>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists() ).toBe(true);
    expect(wrapper.find('.text-info').text().trim()).toBe(`${contextValue.user.name}`);
  });

  test('should call the navigate dispatch on logout click', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });

});