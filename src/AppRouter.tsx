import React from 'react' // we need this to make JSX compile
import Index from './pages'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css'
import { Web3ReactProvider } from '@web3-react/core'
// import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { PrivateRoutes } from "./routes/PrivateRoutes"
import { PublicRoutes } from "./routes/PublicRoutes"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Cookies from "universal-cookie";
const cookies = new Cookies();


function getLibrary(provider: any) {
  return new Web3Provider(provider)
}

const token = cookies.get("TOKEN");

const status: Status = token ? 'no-authenticated' : 'authenticated'

type Status = 'checking' | 'authenticated' | 'no-authenticated'




export const AppRouter = () => {

    // if (status === 'checking') return <div className="loading">Checking credentials...</div>

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <BrowserRouter>
                <Routes>
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/*" element={<PublicRoutes />} />
                }
                    <Route path='/' element={<Index />} />
                    <Route path='*' element={<Navigate to='/login' replace />} />
                </Routes>
            </BrowserRouter>
        </Web3ReactProvider>
    )
}

