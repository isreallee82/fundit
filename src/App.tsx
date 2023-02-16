import React from 'react'
import Index from './pages'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Donation from './pages/Donation'
import Contact from './pages/contact'
import User from './pages/Dashboard/user'
import Admin from './pages/Dashboard/admin'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Index />} />
        <Route path='/register' element={<Index />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/fundings' element={<Donation />} />
        <Route path='*' element={<h1>Page not Found!</h1>} />
      </Routes>
    </Router>
  )
}
