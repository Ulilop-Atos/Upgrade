import { useState } from 'react';

export const useCounter = ( initialCounter = 0 ) => {

  const [counter, setCounter] = useState(initialCounter);
  
  const increment = ( n = 1 ) => {
    if (typeof n !== typeof counter) {
      throw new Error(`Error on increment, ${n} is not a number.`);
    }
    setCounter(counter + n);
  };
  
  const decrement = ( n = 1 ) => {
    if (typeof n !== typeof counter) {
      throw new Error(`Error on decrement, ${n} is not a number.`);
    }    
    setCounter(counter - n);
  };
 
  const reset = ( n = initialCounter ) => {
    if (typeof n !== typeof counter) {
      throw new Error(`Error on reset, ${n} is not a number.`);
    } 
    setCounter( n );
  };

  return ({
    counter,
    decrement,
    increment,
    reset,
  });
}
