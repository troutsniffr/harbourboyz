import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx'
import Home from './Components/Home.tsx'
import './App.css'
import CamCards from './Components/CamCards.tsx'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path='/shhh' element={<CamCards />} />
      </Routes>
    </>
  )
}

export default App
