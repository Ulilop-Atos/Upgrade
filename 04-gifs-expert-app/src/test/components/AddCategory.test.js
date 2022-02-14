import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests for <AddCategory />', () => {

  let wrapper
  const setCategories = jest.fn();
  
  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the input box', () => {
    const value = 'Test';
    // The obj in the 2nd arg is the event
    wrapper.find('input').simulate('change', { target: { value: value } });
    expect(wrapper.find('p').text()).toBe(value);

  });

  test('should not post info on Submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled()  
  });

  test('should call setCategories and clean the input box', () => { 
    const value = 'Test';
    // The obj in the 2nd arg is the event
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
    expect(wrapper.find('input').prop('value')).toBe('');
   })
});