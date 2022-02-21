import { mount } from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Tests on <HomeScreen />', () => { 
  
  const user = {
    id: 0, 
    name: 'Test Name',
    email: 'test@mail.com',
  }

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <HomeScreen />
    </UserContext.Provider>
  );
  
  test('should display properly', () => { 
    expect(wrapper).toMatchSnapshot();
   })
 })

