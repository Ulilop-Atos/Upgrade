import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifSearcher from './components/GifSearcher';

const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['One Punch Man', 'Naruto']);

    return (
        <>
            <h2> GIFExpertApp </h2>
            <AddCategory updateArray={ setCategories } />
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
    props: PropTypes.any,
};

export default GifExpertApp;
