import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Test for useCounter', () => { 

 test('should return default values', () => { 
    const { result } = renderHook( () => useCounter());
    expect(result.current.state).toBe(0);
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should set the initial value', () => { 
    const initialValue = 10;
    const { result } = renderHook( () => useCounter(initialValue));
    expect(result.current.state).toBe(initialValue);
  });

  test('should increase the value properly', () => { 
    const initialValue = 10;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { increment } = result.current;
    act( () => {
      increment();
    });
    expect(result.current.state).toBe(initialValue + 1);
  });

  test('should increase the value plus n properly', () => { 
    const initialValue = 10;
    const n = 5;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { increment } = result.current;
    act( () => {
      increment(n);
    });
    expect(result.current.state).toBe(initialValue + n);
  });

  test('should decrease the value properly', () => { 
    const initialValue = 10;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { decrement } = result.current;
    act( () => {
      decrement();
    });
    expect(result.current.state).toBe(initialValue - 1);
  });

  test('should decrease the value plus n properly', () => { 
    const initialValue = 10;
    const n = 5;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { decrement } = result.current;
    act( () => {
      decrement(n);
    });
    expect(result.current.state).toBe(initialValue - n);
  });

  test('should reset the value after increasing and decreasing', () => { 
    const initialValue = 10;
    const n = 5;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { increment, decrement, reset } = result.current;
    act( () => {
      increment(n);
      reset();
    });
    expect(result.current.state).toBe(initialValue);
    act( () => {
      decrement(n);
      reset();
    });
    expect(result.current.state).toBe(initialValue);
  })

  test('should reset the value to a given n', () => { 
    const initialValue = 10;
    const n = 5;
    const { result } = renderHook( () => useCounter(initialValue));
    const  { reset } = result.current;
    act( () => {
      reset(n);
    });
    expect(result.current.state).toBe(n);
  })

});