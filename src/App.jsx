import React from 'react'
import Weather from './components/Weather'
import CurrentLocation from './components/CurrentLocation'

const App = () => {
  return (
    <div className='app'>
      <Weather/>
      {/* <CurrentLocation /> */}
    </div>
  )
}

export default App