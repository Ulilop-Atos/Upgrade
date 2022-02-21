import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Tests for <TodoAdd />', () => {

  const handleAddTodo = jest.fn();
  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should NOT call handleAddTodo', () => {

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() { } });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);

  });

  test('should call handleAddTodo', () => {

    const value = 'New Todo';

    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() { } });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });


});