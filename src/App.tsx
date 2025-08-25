import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const dateObj = new Date()
  const dateTimeStarted = new Date('2021-07-05T09:00:00')
  const timeStarted = dateTimeStarted.getTime()
  const timeNow = dateObj.getTime()
  const [secondsPassed, setSecondsPassed] = useState(Math.floor((timeNow-timeStarted)/1000))

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsPassed(time => time + 1)
    }, 1000)

    // Cancels a timed, repeating action which was previously established 
    // by a call to setInterval()
    return () => clearInterval(interval);
  }, [])

  function convertSecondsToDate(seconds: number) {
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    let days = Math.floor(hours / 24)
    let years = Math.floor(days / (365.25))

    let daysSinceLastYear = Math.floor(days % 365 - 1)
    let hoursPassed = dateObj.getHours() < 9 ? (dateObj.getHours() + 24) - 9 : dateObj.getHours() - 9

    return (
      <>
        <h3>{years} years</h3>
        <h3>{daysSinceLastYear} days</h3>
        <h3>{hoursPassed} hours</h3>
        <h3>{dateObj.getMinutes()} minutes</h3>
        <h3>{dateObj.getSeconds()} seconds</h3>
      </>
    )
  }

  return (
    <div className='home'>
      <h1>Gico Carlo Evangelista</h1>
      <h2>
        Software Engineer for over:
      </h2>
      {convertSecondsToDate(secondsPassed)}
    </div>
  )
}

export default App
