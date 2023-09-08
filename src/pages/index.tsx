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
import Feature from '../components/Feautures'
import HeroSec from '../components/HeroSec'

function Home() {
  return (
    <div className='relative pt-6 bg-gradient-to-r from-stone-800 to-gray-900 md:text-lg sm:text-base'>
      <Navbar />
      <Hero />
      <HeroSec />
      <About />
      <Feature />
      <AboutUs />
      <Donate data={data.donations} />
      <Testimonials />
      <Footer />
      <Nav data={data.donations} />
    </div>
  )
}

export default Home
