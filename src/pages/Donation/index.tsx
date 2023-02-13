import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Donate from '../../components/Donation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import data from '../../assets/data'

const Donation = () => {
  return (
    <div className=' md:text-lg sm:text-base'>
      <Navbar />
      <Donate datas={data.donations} />
      <Footer />
    </div>
  )
}

export default Donation
