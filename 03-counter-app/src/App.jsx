import React, { StrictMode } from 'react';
import FirstApp from './FirstApp';

const App = (props) => {
  return (
    <StrictMode > 
        <FirstApp hiFrom={'Goku'} {...props} /> 
    </StrictMode>);
};

export default App;
