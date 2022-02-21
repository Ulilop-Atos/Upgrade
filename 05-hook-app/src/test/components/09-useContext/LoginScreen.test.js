import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Tests for <LoginScreen />', () => {

  const user = {
    id: 0, 
    name: 'Test Name',
    email: 'test@mail.com',
  }

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should display properly', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  test('should login properly', () => { 

    const userExample = {
      id: 123,
      name: 'Ferdinand',
      email: 'ferdinand@mail.com',
    };

    wrapper.find('button').simulate('click');
    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith(userExample);
  });
})