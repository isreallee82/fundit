import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OurTeam from '../../components/ourteam'
import Nav from '../../components/nav'
import data from '../../assets/user'

const About = () => {
  return (
    <div className='pt-6 md:text-lg sm:text-base'>
      <Navbar />
      <OurTeam data={data.users}  />
      <Footer />
      <Nav />
    </div>
  )
}

export default About
