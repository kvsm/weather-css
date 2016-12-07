import React from 'react'
import Backdrop from './components/Backdrop'
import Weather from './components/Weather'

class App extends React.Component {
  render () {
    return (
      <div>
        <Backdrop />
        <Weather />
      </div>
    )
  }
}

export default App
