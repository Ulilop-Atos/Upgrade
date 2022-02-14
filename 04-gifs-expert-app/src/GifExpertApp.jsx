import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifSearcher from './components/GifSearcher';

const GifExpertApp = ({ defaultCategories = ['One Punch Man', 'Naruto'] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2> GIFExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ul>
            {
                categories.map( (category, i) => 
                    <GifSearcher 
                    key={`${i}-${category}`}
                    category={category} 
                    /> 
                )
            }
            </ul>
        </>
    );
};

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array,
};

export default GifExpertApp;
