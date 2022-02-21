import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password:'',
  });

  const {name, email, password } = formValues;

  useEffect( () => {
    console.log('Email changed')
  }, [ email ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
  <form onSubmit={handleSubmit}>
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
      <input 
        type='password' 
        name='password' 
        className='form-control'
        placeholder='********'
        autoComplete='off'
        value={password}
        onChange={handleInputChange} 
      />

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </div>
  </form>
  )
}
