import React ,{useState} from 'react'
import { Navbar, Footer } from './components/index.js';
import "./App.css";
import { About, Home,Login, Register,Notfound, Dashboard } from "./pages/index.js";
import { FarmerDashboard,MillerDashboard,DealerDashboard, FciDashboard } from './pages/Dashboard/index.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { TrackingProvider } from './Context/TrackingContext.js';


export const App = () => {

  return (
  <Router>
    <div className='App'>
      <TrackingProvider>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/read' element={<Dashboard/>}/>
      <Route path='/read/farmer' element={<FarmerDashboard/>}/>
      <Route path='/read/miller' element={<MillerDashboard/>}/>
      <Route path='/read/dealer' element={<DealerDashboard/>}/>
      <Route path='/read/fci' element={<FciDashboard/>}/>
      <Route path="*" element={<Notfound />} />
     </Routes>
     <Footer/>
     </TrackingProvider>
    </div>
  </Router>
  )
}
