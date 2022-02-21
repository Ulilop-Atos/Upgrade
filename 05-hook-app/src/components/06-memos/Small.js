import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Generated again');

    return (
        <small> { value } </small>
    )
});

