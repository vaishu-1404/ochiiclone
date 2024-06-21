import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import Home from './components/Home'
import Service from './components/Service';
import Aboout from './components/Aboout';
import Achiev from './components/Achiev';
import Insights from './components/Insights';
import Contact from './components/Contact';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-950 text-white' >
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aboout" element={<Aboout />} />
          <Route path="/Achiev" element={<Achiev />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
