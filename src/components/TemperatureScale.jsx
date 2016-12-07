import React, { PropTypes } from 'react'
import classnames from 'classnames'

const TemperatureScale = ({scale}) => {
  const classes = classnames('wc-temperature-scale')
  return (
    <span className={classes}>&deg;{scale}</span>
  )
}

TemperatureScale.propTypes = {
  scale: PropTypes.string.isRequired
}

export default TemperatureScale
