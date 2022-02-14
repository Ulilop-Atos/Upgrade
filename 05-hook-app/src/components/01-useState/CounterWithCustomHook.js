import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {

  const {state: counter, increment, decrement, reset } = useCounter(100)

  return (
    <>
      <h1>Counter with Hook {counter} </h1>
      <hr />
      <button 
        className='btn'
        onClick={() => increment(5)}> +1 </button>
      <button 
        className='btn'
        onClick={() => decrement()}> -1 </button>
      <button 
        className='btn'
        onClick={() => reset()}> Reset </button>
    </>
  )
}
