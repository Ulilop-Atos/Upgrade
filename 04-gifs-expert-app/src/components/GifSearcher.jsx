import PropTypes from 'prop-types';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifSearcher = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

      { loading && <p className='animate__animated animate__flash'>Loading</p> }

      <div className="card-container animate__animated animate__fadeIn">
      {
        images.map( image => <GifItem key={image.id} {...image} /> )
      }
      </div>
    </>
  );
};

GifSearcher.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifSearcher;
