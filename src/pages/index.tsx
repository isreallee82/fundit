import '@fortawesome/fontawesome-svg-core/styles.css'
import Hero from '../components/Hero'
import About from '../components/About'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'
import Donate from '../components/Donation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from '../assets/data'
import Nav from '../components/Nav'

function Home() {
  return (
    <div className='relative pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
      <Navbar />
      <Hero />
      <About />
      <AboutUs />
      <Testimonials />
      <Donate datas={data.donations} />
      <Footer />
      <Nav data={data.donations} />
    </div>
  )
}

export default Home
