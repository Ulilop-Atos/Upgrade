import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import demoTodo from "../../fixtures/demoTodo";

describe('Tests for <TodoApp />', () => {

  Storage.prototype.setItem = jest.fn();

  test('should display properly', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should add Todos', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      demoTodo.forEach(todo => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(todo);
      });
    });

    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( ${demoTodo.length} )`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodo.length);
  });

  test('should delete Todos', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      demoTodo.forEach(todo => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(todo);
      });
      demoTodo.forEach(todo => {
        wrapper.find('TodoList').prop('handleDelete')(todo.id);
      });
    });

    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( 0 )`);
  });

});