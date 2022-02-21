import { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test on <AppRouter />', () => {

  const user = {
    id: 0, 
    name: 'Test Name',
    email: 'test@mail.com',
  }

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <AppRouter />
    </UserContext.Provider>
  );
   
  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot(); 
  });
})