import { useState } from 'react';

export const useCounter = ( initialState = 0 ) => {

  const [state, setState] = useState(initialState);
  
  const increment = ( n = 1 ) => {
    setState(state + n );
  };
  
  const decrement = ( n = 1 ) => {
    setState(state - n );
  };
 
  const reset = ( n = initialState ) => {
    setState( initialState );
  };

  return ({
    state,
    decrement,
    increment,
    reset,
  });
}
