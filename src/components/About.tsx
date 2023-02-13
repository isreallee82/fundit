import React from 'react'

const About = () => {
  return (
    <div className='flex container mx-auto md:flex-row xs:flex-col md:my-24 xs:my-8'>
      <div className='md:w-1/2 xs:w-full '>
        <div className='flex md:m-4 xs:m-2 lg:p-2 md:p-1 flex-col md:text-sm lg:gap-12 md:gap-6 xs:gap-4'>
          <div className='flex justify-center flex-row gap-4'>
            <div className='rounded-full bg-slate-300 '>
              <button className='text-black-100 rounded-full md:px-4  md:py-2 xs:px-5 xs:py-2'>
                1
              </button>
            </div>
            <div className='bg-slate-200 lg:px-6 lg:py-2 md:px-4 xs:px-1 md:py-0 xs:py-1 md:rounded-3xl xs:rounded-lg'>
              <h5 className='text-black-200 xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing{' '}
              </h5>
            </div>
          </div>
          <div className='md:flex xs:hidden justify-center flex-row gap-4'>
            <div className='rounded-full bg-slate-300 '>
              <button className='text-black-100 rounded-full md:px-4  md:py-2 xs:px-5 xs:py-2'>
                1
              </button>
            </div>
            <div className='bg-slate-200 lg:px-6 lg:py-2 md:px-4 xs:px-1 md:py-0 xs:py-1 md:rounded-3xl xs:rounded-lg'>
              <h5 className='text-black-200 xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing{' '}
              </h5>
            </div>
          </div>
          <div className='md:flex xs:hidden justify-center flex-row gap-4'>
            <div className='rounded-full bg-slate-300 '>
              <button className='text-black-100 rounded-full md:px-4  md:py-2 xs:px-5 xs:py-2'>
                1
              </button>
            </div>
            <div className='bg-slate-200 lg:px-6 lg:py-2 md:px-4 xs:px-1 md:py-0 xs:py-1 md:rounded-3xl xs:rounded-lg'>
              <h5 className='text-black-200 xs:text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing{' '}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 xs:hidden xs:w-full'>
        <div className='flex justify-center w-full flex-row gap-16'>
          <div className='bg-slate-400 m-2 md:p-4'>vnfndfnfg</div>
          <div className='bg-slate-400 m-2 md:p-4'>ndfnfndfnf</div>
        </div>
      </div>
    </div>
  )
}

export default About
