import { shallow } from 'enzyme';
import { HookApp } from "../HookApp";

describe('Tests for <HookApp />', () => { 
  
  test('should display properly', () => { 
    const wrapper =  shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
   });

 });