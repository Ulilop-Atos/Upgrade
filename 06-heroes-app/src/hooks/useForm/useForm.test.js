import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe('Tests for useForm', () => { 
  
  const initialForm = {
    name: 'Test Name',
    mail: 'test@mail.com',
  };

  test('should return default values', () => { 
    const { result } = renderHook(() => useForm());
    const [ value, handleInputChange, reset ] = result.current;
    
    expect(value).toEqual({});
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should return initial state given one', () => { 
    const { result } = renderHook(() => useForm(initialForm));
    const [ value ] = result.current;
    
    expect(value).toEqual(initialForm);
  });

  test('should change a value on the form (name)', () => { 
    const name = 'New Name';
   
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: name,
        }
      });
    });
    
    const [ value ] = result.current;
    
    expect(value).toEqual({...initialForm, name});
  });

  test('should reset the form', () => { 
    
    const { result } = renderHook(() => useForm(initialForm));
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Error name'
        }
      });
      handleInputChange({
        target: {
          name: 'new_prop',
          value: 'Keeping this is an error'
        }
      });
    });
    
    const [ valueBeforeReset ] = result.current;

    act(() => {
      reset();
    });
    
    const [ valueAfterReset ] = result.current;
    
    expect(valueBeforeReset).not.toEqual(initialForm);
    expect(valueAfterReset).toEqual(initialForm);
  });

});