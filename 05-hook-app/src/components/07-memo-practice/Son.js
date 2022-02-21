import React from 'react';

export const Son = React.memo(({ number, increase }) => {

    console.log('Generated again');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increase( number ) }
        >
            { number }
        </button>
    )
})
