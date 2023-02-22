import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css'
import About from './pages/About'
import Donation from './pages/Donation'
import Contact from './pages/contact'
import User from './pages/Dashboard/user'
import Admin from './pages/Dashboard/admin'
import Login from './pages/login'
import { Web3ReactProvider } from '@web3-react/core'
// import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import Investors from './pages/investors'
import ProjectDetails from './pages/projectDetails'
import data from './assets/data'

function getLibrary(provider: any) {
  return new Web3Provider(provider)
}


export default function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Index />} />
          <Route path='/register' element={<Index />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<User />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/investors' element={<Investors />} />
          <Route path='/about' element={<About />} />
          <Route path='/fundings' element={<Donation />} />
          <Route path='/donate/:id' element={<ProjectDetails data={data.donations[0]} />} />
          <Route path='*' element={<h1>Page not Found!</h1>} />
        </Routes>
      </Router>
    </Web3ReactProvider>
  )
}
