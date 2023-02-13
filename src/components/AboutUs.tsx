import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-stone-100 flex xs:hidden justify-center container mx-auto lg:my-24 md:my-8 xs:my-8 md:flex-col xs:flex-col  rounded-xl text-base text-center'>
      <div className='text-stone-700 m-4 md:p-4'>
        <h1 className='m-4 p-4 font-extrabold text-4xl'>About us</h1>
      </div>
      <div className='flex justify-center  md:m-4 md:flex-row sm:flex-row lg:gap-24 md:gap-18'>
        <div className='flex md:flex-col xs:flex-col  text-center '>
          <div className='m-4'>
            <img
              className='rounded-full'
              width={100}
              src={require('../images/hero.png')}
              alt='manager'
            />
          </div>
          <div>
            <h5>leedox</h5>
          </div>
        </div>
        <div className='flex md:flex-col xs:flex-col  text-center '>
          <div className='m-4'>
            <img
              className='rounded-full'
              width={100}
              src={require('../images/hero.png')}
              alt='manager'
            />
          </div>
          <div>
            <h5>leedox</h5>
          </div>
        </div>
        <div className='flex md:flex-col xs:flex-col text-center '>
          <div className='m-4'>
            <img
              className='rounded-full'
              width={100}
              src={require('../images/hero.png')}
              alt='manager'
            />
          </div>
          <div>
            <h5>leedox</h5>
          </div>
        </div>
      </div>
      <div className='lg:my-24 md:my-12 xs:my-12  mx-auto container w-2/3 text-center'>
        <h5 className='text-slate-900 lg:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quas
          corporis veniam tempore totam quae aliquid sint tenetur cupiditate
          ipsa! Eligendi cupiditate corrupti asperiores saepe perspiciatis
          laudantium tenetur hic quod.
        </h5>
      </div>
    </div>
  )
}

export default AboutUs
