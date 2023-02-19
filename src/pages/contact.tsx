import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../assets/user'
import datas from '../assets/data'
import Nav from '../components/Nav'
import OurTeam from '../components/ourteam'

const Contact = () => {
  return (
    <div className='pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
      <Navbar />
      <OurTeam data={data.users} />
      <Footer />
      <Nav data={datas.donations} />
    </div>
  )
}

export default Contact
