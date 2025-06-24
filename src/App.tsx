import { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const timeStarted = new Date('2021-07-04T14:00:00.000Z').getTime()
  const timeNow = new Date().getTime()
  const [timePassed, setTimePassed] = useState(timeNow - timeStarted)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(time => time + 1)
    }, 1000)

    // Cancels a timed, repeating action which was previously established 
    // by a call to setInterval()
    return () => clearInterval(interval);
  }, [])

    
  return (
    <>
      <h1>Gico Carlo Evangelista</h1>
      <h2>
        Software Engineer for over {timePassed} seconds. 
      </h2>
      <Footer/>
    </>
  )
}

export default App
