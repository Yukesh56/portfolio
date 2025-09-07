import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = 'portfolio/' element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

