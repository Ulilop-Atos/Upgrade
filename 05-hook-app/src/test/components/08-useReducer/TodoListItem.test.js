import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import demoTodo from "../../fixtures/demoTodo";

describe('Tests for TodoListItem', () => {

  const firstTodo = demoTodo[0];
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={firstTodo}
      index={firstTodo.id}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display the text properly', () => {
    const text = wrapper.find('p').text().trim();
    expect(text).toBe(`${firstTodo.id + 1}. ${firstTodo.desc}`);
    expect(wrapper.find('.complete').exists()).toBe(false);
    expect(wrapper.find('p').hasClass('complete')).toBe(false);
  });

  test('should call handleDelete on button click', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(firstTodo.id);
  });

  test('should call handleToggle on paragraph click', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(firstTodo.id);
  });

  test('should have the class complete ont done TODO', () => {
    const todo = demoTodo[0];
    todo.done = true;

    const differentWrapper = shallow(
      <TodoListItem
        todo={todo}
        index={todo.id}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(differentWrapper.find('.complete').exists()).toBe(true);
    expect(differentWrapper.find('p').hasClass('complete')).toBe(true);
  });

});