import PropTypes from 'prop-types';
import React from 'react';

const GifItem = ({url, title}) => {
  return (
    <div className="card animate__delay-1s">
      <img src={url} alt={title}></img>
      <br/>
      <span>{title}</span>    
    </div>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifItem;
