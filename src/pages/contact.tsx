import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Donate from '../components/Donation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../assets/data'

const Contact = () => {
  return (
    <div className='pt-6 md:text-lg sm:text-base'>
      <Navbar />
      <Hero />
      <About />
      <AboutUs />
      <Testimonials />
      <Donate datas={data.donations} />
      <Footer />
    </div>
  )
}

export default Contact
