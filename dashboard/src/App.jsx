import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import ShowMesses from './vendorDashboard/pages/ShowMesses';
import { Routes, Route } from 'react-router-dom' 

import "./App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/show-messes' element={<ShowMesses />} /> {/* Add this */}
      </Routes>
      
      

      

    </div>
  )
}

export default App