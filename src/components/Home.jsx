import React from 'react'
import LandingPage from './LandingPage'
import Banner from './Banner'
import About from './About'
import Eyes from './Eyes'
import Featured from './Featured'
import Card from './Card'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';

function Home() {

    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>

      < LandingPage />
      <Banner />
      <About />
      <Eyes />
      <Featured />
      <Card />
      <Footer />
      
    </div>
  )
}

export default Home
