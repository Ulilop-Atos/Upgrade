import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Tests for useFetch', () => { 
  
  test('should return default info', () => { 
    const { result } = renderHook(() => 
      useFetch('https://www.breakingbadapi.com/api/quote/random'));
    
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should return info, loading false and no error', async() => { 
    const { result, waitForNextUpdate } = renderHook(() => 
      useFetch('https://www.breakingbadapi.com/api/quote/random'));
    
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should return error, loading false and no data', async() => { 
    const { result, waitForNextUpdate } = renderHook(() => 
      useFetch('https://reqres.in/ERROR'));
    
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(loading).toBe(false);
    expect(data).toBe(null);
    expect(error).toBe(`An error ocurred fetching from https://reqres.in/ERROR`);
  });

});