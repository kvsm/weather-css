import React from 'react'
import classnames from 'classnames'
import Tether from 'react-tether'
import Temperature from './Temperature'
import TemperatureScale from './TemperatureScale'

const Weather = (props) => {
  const classes = classnames('wc-weather')
  return (
    <div className={classes}>
      <Tether
        attachment="top left"
        targetAttachment="top right"
        >
          <Temperature />
          <TemperatureScale scale="C" />
      </Tether>
    </div>
  )
}

export default Weather
