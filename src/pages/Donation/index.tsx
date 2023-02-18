import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Donate from '../../components/Donation'
import Navbar from '../../components/Navbar'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import data from '../../assets/data'

const Donation = () => {
  return (
    <div className='pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
      <Navbar  />
      <Donate datas={data.donations} />
      <Footer />
      <Nav data={data.donations} />
    </div>
  )
}

export default Donation
