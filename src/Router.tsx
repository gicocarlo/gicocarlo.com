import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import About from './components/About/About'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
