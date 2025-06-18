import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  const dateObj = new Date()
  const yearStarted = 2021
  const yearsWorked = dateObj.getFullYear() - yearStarted
    
  return (
    <>
      <h1>Gico Carlo Evangelista</h1>
      <h2>
        Software Engineer for over {yearsWorked} years. 
      </h2>
      <Footer/>
    </>
  )
}

export default App
