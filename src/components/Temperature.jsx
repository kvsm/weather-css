import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Temperature = ({temperature}) => {
  const classes = classnames('wc-temperature')
  return (
    <span className={classes}>
      {temperature}
    </span>
  )
}

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired
}

Temperature.defaultProps = {
  temperature: 39
}

export default Temperature
