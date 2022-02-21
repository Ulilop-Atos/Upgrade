import PropTypes from 'prop-types'
import React from 'react'

const ErrorScreen = ({ error, message = '😅'}) => {
  return (
    <>
      <h1>Error {error}</h1>
      <br />
      <h2>{message}</h2>
    </>
  )
}

ErrorScreen.propTypes = {
  error: PropTypes.number.isRequired,
  message: PropTypes.string,
}

export default ErrorScreen