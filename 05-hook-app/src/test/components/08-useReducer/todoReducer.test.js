import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import demoTodo from "../../fixtures/demoTodo";

describe('Tests for todoReducer', () => { 
  
  test('should return the default state', () => { 
    const state = todoReducer(demoTodo,{});
    expect(state).toEqual(demoTodo);
  });
  
  test('should add a new todo', () => { 
    const newTodo = {
      id:0,
      desc:'TEST TODO',
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };
    
    const state = todoReducer(demoTodo, action);
    expect(state).toEqual([...demoTodo, newTodo]);
  });

  test('should delete a todo', () => { 

    const original = demoTodo.length;
    expect(original).not.toBe(0);

    const firstId = demoTodo[0].id;

    const action = {
      type: 'delete',
      payload: firstId,
    };
    
    const state = todoReducer(demoTodo, action);
    expect(state.length).toBe(original - 1);
    expect(state).toEqual(demoTodo.filter(e => e.id !== firstId));
  });

  test('should toggle done in a todo', () => { 
    const original = demoTodo.length;
    expect(original).not.toBe(0);

    const firstId = demoTodo[0].id;
    const action = {
      type: 'toggle',
      payload: firstId,
    };
    
    const state = todoReducer(demoTodo, action);
  
    expect(state[0].id).toBe(demoTodo[0].id);
    expect(state[0].done).not.toBe(demoTodo[0].done);
    expect(state.filter(e => e.id !== firstId)).toEqual(demoTodo.filter(e => e.id !== firstId));
  })

})