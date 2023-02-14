import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Donate from '../components/Donation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import datau from '../assets/data'
import data from '../assets/user'
import Nav from '../components/Nav'
import OurTeam from '../components/ourteam'

const Home = () => {
  return (
    <div className='pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
      <Navbar />
      <Hero />
      <About />
      <AboutUs />
      <Testimonials />
      <OurTeam data={datau}  />
      <Donate datas={data.donations} />
      <Footer />
      <Nav />
    </div>
  )
}

export default Home
