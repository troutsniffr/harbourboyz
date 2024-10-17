import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx'
import Home from './Components/Home.tsx'
import './App.css'
import CamCards from './Components/CamCards.tsx'
import NorthCamCard from './Components/NorthCamCard.tsx'
import SouthCamCard from './Components/SouthCamCard.tsx'




function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path='/north' element={<NorthCamCard />} />
        <Route path='/shhh' element={<CamCards />} />
        <Route path='/south' element={<SouthCamCard />} />
      </Routes>
    </>
  )
}

export default App
