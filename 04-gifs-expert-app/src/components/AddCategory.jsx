import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddCategory = ({ updateArray }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value); 

  const validate = (str) => {
    return str.match(/^[\S][\w\s]*\S$/gmiu);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const str = event.target[0].value;
    if(updateArray && validate(str)) {
      // Callback edit
      updateArray(prev => [str, ...prev]);
    }
  };

  return ( 
    <form onSubmit={ handleSubmit }>
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
  updateArray: PropTypes.func.isRequired,
};

export default AddCategory;
