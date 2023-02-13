import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex sm:flex-col container xs:hidden mx-auto justify-center  lg:px-24 '>
      <div className='text-center'>
        <h1 className='text-black text-4xl'>Testimonials</h1>
      </div>
      <div className='grid justify-items-center lg:my-24 md:my-24 sm:my-14 md:py-18 sm:py-18 md:grid-cols-2 sm:grid-cols-2 gap-14 m-2 md:p-4 mx-auto'>
        <div className='lg:w-2/3  md:w-full justify-item-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          <div className='w-full'>
            <img
              className='rounded-lg'
              width={100}
              src={require('../images/hero.png')}
              alt='authour-1'
            />
          </div>
          <div>
            <h5 className='lg:text-lg md:text-base sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos commodi quia tenetur.
            </h5>
          </div>
        </div>
        <div className='lg:w-2/3  md:w-full justify-item-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          <div className='w-full'>
            <img
              className='rounded-lg'
              width={100}
              src={require('../images/hero.png')}
              alt='authour-1'
            />
          </div>
          <div>
            <h5 className='lg:text-lg md:text-base sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos commodi quia tenetur.
            </h5>
          </div>
        </div>
        <div className='lg:w-2/3  md:w-full justify-item-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          <div className='w-full'>
            <img
              className='rounded-lg'
              width={100}
              src={require('../images/hero.png')}
              alt='authour-1'
            />
          </div>
          <div>
            <h5 className='lg:text-lg md:text-base sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos commodi quia tenetur.
            </h5>
          </div>
        </div>
        <div className='lg:w-2/3 md:w-full justify-item-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
          <div className='w-full'>
            <img
              className='rounded-lg'
              width={100}
              src={require('../images/hero.png')}
              alt='authour-1'
            />
          </div>
          <div>
            <h5 className='lg:text-lg md:text-base sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos commodi quia tenetur.
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
