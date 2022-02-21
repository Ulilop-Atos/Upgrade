import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Tests for <RealExampleRef />', () => { 
 
  const wrapper =  shallow(<RealExampleRef />);

  test('should display properly', () => { 
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  
  test('should display MultipleCustomHooks', () => {
    wrapper.find('button').simulate('click'); 
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);    
  });

})