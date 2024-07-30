import React from 'react'
import Workshop from '../Components/WorkShop'
import ChangeInLife from '../Components/ChangeinLife'
import meditation from "../assets/meditation.jpg"
import Timeline from '../Components/Timeline'
import Bonus from '../Components/Bonus'

import Testimonials from '../Components/Testimonials'
import CoachProfile from '../Components/CoachProfile'
import FAQ from '../Components/FAQ'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CoachSection from '../Components/CoachSection'

function Session() {
  return (
    <div 
    className="flex flex-col bg-cover bg-fixed bg-center min-h-screen" 
    style={{ backgroundImage: `url(${meditation})` }}
  >
        <Header/>
        <ChangeInLife/>
        <Timeline/>
        <Bonus/>
        <Testimonials/>
        <CoachSection/>
        <FAQ/>
        <Footer/>
        
    </div>
  )
}

export default Session