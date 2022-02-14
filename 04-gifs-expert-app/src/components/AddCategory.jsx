import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value); 

  const validate = (str) => {
    return str.match(/^[\w][\w\s]*\S$/gmiu);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(setCategories && validate( inputValue ) ) {
      // Callback edit
      setCategories(prev => [ inputValue, ...prev]);
      setInputValue('');
    }
  };

  return ( 
    <form onSubmit={ handleSubmit }>
      <p>{inputValue}</p>
      <input 
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Search'
        pattern='^[\S][\w\s]*\S$'
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
