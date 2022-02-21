import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";
describe('Test for useFetchGifs', () => { 
  test('should return initial state', async() => { 
    // This fails
    // const { data, loading } =  useFetchGifs('Test');
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Test') );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
   });

  test('should return a gifs array and the loading should be false', async () => { 
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Test') );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(25);
    expect(loading).toBe(false);
   });
 }); 