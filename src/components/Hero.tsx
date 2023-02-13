import React from 'react'

const Hero = () => {
  return (
    <div className='mx-auto items-center justify-center flex lg:flex-row md:flex-col xs:flex-col lg:w-4/5 md:w-2/3  bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg md:my-24 lg:my-24 xs:my-8 xs:p-4 xs:rounded-3xl'>
      <div className='lg:ml-12 lg:pl-12 flex lg:my-16 md:flex-col xs:flex-col lg:w-1/2 md:w-full md:justify-center xs:w-full md:h-full lg:p-4'>
        <div className='lg:ml-4 container lg:my-12 md:my-12 sm:my-12 mx-auto p-2'>
          <h1 className='lg:text-8xl md:text-2xl sm:text-2xl bold text-center'>
            About the site more like an intro
          </h1>
        </div>
        <div className='flex gap-8 justify-center lg:flex-row md:flex-row m-8 md:p-2 lg:text-lg md:text-base xs:mb-4 '>
          <button className='rounded-3xl hover:bg-stone-900 px-4 py-2 bg-stone-600 text-white text-center '>
            Connect
          </button>
          <button className='rounded-lg px-4 py-2  hover:bg-stone-600 bg-stone-400 text-center text-white '>
            Explore
          </button>
        </div>
      </div>
      <div className='lg:flex xs:hidden md:justify-center lg:w-1/2 md:w-full sm:w-full sm:h-96 md:m-2'>
        <div className='lg:w-3/4 shrink-0 lg:h-full md:justify-center'>
          <img
            className='hero-pics lg:w-full object-cover object-center md:w-full lg:h-full rounded-lg'
            src={require('../images/heropics.png')}
            alt='hero-pics'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
