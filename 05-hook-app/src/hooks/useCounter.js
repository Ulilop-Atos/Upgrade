import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {

  const [state, setState] = useState(initialState);
  
  const increment = ( n = 1 ) => {
    if (typeof n !== typeof state) {
      throw new Error(`Cannot increment, ${n} is not a number.`)
    }
    setState(state + n);
  };
  
  const decrement = ( n = 1 ) => {
    if (typeof n !== typeof state) {
      throw new Error(`Cannot decrement, ${n} is not a number.`)
    }    
    setState(state - n);
  };
 
  const reset = ( n = initialState ) => {
    if (typeof n !== typeof state) {
      throw new Error(`Cannot set to ${n}, is not a number.`)
    } 
    setState( n );
  };

  return ({
    state,
    decrement,
    increment,
    reset,
  });
}
