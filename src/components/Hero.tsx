import React, { useState } from 'react'
import Wallet from './Wpopup'
import { connectors } from './conectors'
import { useWeb3React } from '@web3-react/core'

const Hero = () => {
  const { activate } = useWeb3React()
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className='md:mx-auto items-center justify-center flex lg:flex-row md:flex-col xs:flex-col lg:w-4/5 md:w-2/3  bg-stone-200 bg-opacity-60 backdrop-filter backdrop-blur-lg md:my-24 lg:my-24 xs:my-8 xs:p-10 md:m-2 xs:m-4 xs:rounded-3xl'>
        <div className='lg:ml-12 lg:pl-12 flex lg:my-16 md:flex-col xs:flex-col lg:w-1/2 md:w-full md:justify-center xs:w-full md:h-full lg:p-4'>
          <div className='lg:w-3/4 shrink-0 lg:h-full md:justify-center'>
            <img
              className='hero-pics lg:hidden object-cover object-center xs:w-full xs:h-64 rounded-3xl'
              src='https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='hero-pics'
            />
          </div>
          <div className='lg:ml-4 container lg:my-12 md:my-12 sm:my-12 mx-auto m-2 p-2'>
            <h1 className='xl:text-7xl lg:text-6xl md:text-2xl sm:text-2xl bold text-center'>
              The purpose of this platform is to support less privileged individuals and promote social good in a transparent and secure way.The purpose of this platform is to support less privileged individuals and promote social good in a transparent and secure way.
            </h1>
          </div>
          <div className='flex gap-8 justify-center lg:flex-row md:flex-row m-2 md:p-2 lg:text-lg md:text-base xs:mb-4 '>
            <div className='flex pt-2 pb-6'>
              <button
                type='submit'
                className='rounded-3xl  hover:bg-stone-600 xs:px-3 xs:py-1  lg:py-1 ring-2 ring-stone-600 hover:ring-stone-500 p-2 bg-stone-600 text-white text-center '
                onClick={togglePopup}
              >
                Connect
              </button>
            </div>
            <div>
              <button
                type='submit'
                className='rounded-lg lg:px-8 lg:py-4  xs:px-6 xs:py-3 ring-2 ring-stone-900 hover:ring-stone-700  bg-stone-900 text-center text-white '
              >
                <a href='/fundings'>Explore</a>
              </button>
            </div>
          </div>
        </div>
        <div className='lg:flex xs:hidden md:justify-center lg:w-1/2 md:w-full sm:w-full sm:h-96 md:m-2'>
          <div className='lg:w-3/4 shrink-0 lg:h-full md:justify-center'>
            <img
              className='hero-pics lg:w-full object-cover object-center md:w-full lg:h-full rounded-3xl'
              src='https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt='hero-pics'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <Wallet
          content={
            <>
              <div className='p-4 '>
                <b>Connect your Account</b>
                <p className='m-2'>
                  Please connect your wallct in other to make a donation on this page
                </p>
                <button
                  className=' bg-stone-700 text-stone-200 rounded-full p-2 xs:m-1 mr-0 px-4'
                  onClick={() => {
                    activate(connectors.Injected)
                  }}
                >
                  Coinbase Wallet
                </button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  )
}

export default Hero
