import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import demoTodo from "../../fixtures/demoTodo";

describe('Tests for <TodoList />', () => { 
  
  const wrapper = shallow (
    <TodoList 
      todos={demoTodo}
      handleDelete = {jest.fn()}
      handleToggle = {jest.fn()}
    />
  );

  test('should display properly', () => { 
    expect(wrapper).toMatchSnapshot();
   })

  test('should have the same items', () => { 
    const todoListItem = wrapper.find('TodoListItem');
    expect(todoListItem.length).toBe(demoTodo.length);
    expect(todoListItem.at(0).prop('handleDelete')).toEqual( expect.any(Function));
    expect(todoListItem.at(0).prop('handleToggle')).toEqual( expect.any(Function));
    expect(todoListItem.map(e => e.prop('todo'))).toEqual(demoTodo);
   })
 })