import PropTypes from 'prop-types';
import { useState } from 'react';

export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [ target.name ]: target.value, 
    });
  }

  return [values, handleInputChange];

}

useForm.propTypes = {
  initialState: PropTypes.object,
}
