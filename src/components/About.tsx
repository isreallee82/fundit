import React from 'react'

const About = () => {
  return (
    <div className='flex md:container mx-auto md:flex-row xs:flex-col md:my-24 xs:my-8'>
      <div className='md:w-1/2 xs:w-full '>
        <div className='flex md:m-4 xs:m-2 lg:p-2 md:p-1 flex-col md:text-sm lg:gap-12 md:gap-6 xs:gap-4'>
          <div className='flex justify-center flex-row gap-4'>
            <div className='rounded-full'>
              <button className='text-black backdrop-blur-sm bg-white/50  rounded-full md:px-4  md:py-2 xs:px-3 xs:py-1'>
                1
              </button>
            </div>
            <div className='backdrop-blur-sm bg-white/50 lg:px-4 lg:py-2 md:px-4 xs:px-2 md:py-2 xs:py-1 md:rounded-3xl xs:rounded-2xl'>
              <h5 className='text-black xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur{' '}
              </h5>
            </div>
          </div>
          <div className='md:flex xs:hidden justify-center flex-row gap-4'>
            <div className='rounded-full '>
              <button className='text-black backdrop-blur-sm bg-white/50  rounded-full md:px-4  md:py-2 xs:px-3 xs:py-1'>
                1
              </button>
            </div>
            <div className='backdrop-blur-sm bg-white/50 lg:px-4 lg:py-2 md:px-4 xs:px-2 md:py-2 xs:py-1 md:rounded-3xl xs:rounded-2xl'>
              <h5 className='text-black-200 xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur{' '}
              </h5>
            </div>
          </div>
          <div className='md:flex xs:hidden justify-center flex-row gap-4'>
            <div className='rounded-full'>
              <button className='text-black backdrop-blur-sm bg-white/50  rounded-full md:px-4  md:py-2 xs:px-3 xs:py-1'>
                1
              </button>
            </div>
            <div className='backdrop-blur-sm bg-white/50 lg:px-4 lg:py-2 md:px-4 xs:px-2 md:py-2 xs:py-1 md:rounded-3xl xs:rounded-2xl'>
              <h5 className='text-black-200 xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur{' '}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 xs:hidden xs:w-full'>
        <div className='flex justify-center w-full flex-row gap-16'>
          <div className='bg-stone-400 m-2 md:p-4'>vnfndfnfg</div>
          <div className='bg-stone-400 m-2 md:p-4'>ndfnfndfnf</div>
        </div>
      </div>
    </div>
  )
}

export default About
