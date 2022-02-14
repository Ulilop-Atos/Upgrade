import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

  const [{name, email}, setFormState] = useState({
    name: '',
    email: '',
  });
  
  useEffect(() => {
  }, []);

  useEffect(() => {
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState(state => ({
      ...state,
      [ target.name ]: target.value, 
    }));
   }

  return (
  <>
    <h1>Use Effect</h1>
    <hr/>
    <div className='form-group'>
      <input 
        type='text' 
        name='name' 
        className='form-control'
        placeholder='Your name'
        autoComplete='off'
        autoCapitalize='true'
        value={name}
        onChange={handleInputChange} 
      />
      <input 
        type='email' 
        name='email' 
        className='form-control'
        placeholder='Your email'
        autoComplete='off'
        value={email}
        onChange={handleInputChange} 
      />
    </div>
  </>
  )
}
