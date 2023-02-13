import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [HandleChange, setHandleChange] = useState(false)
  // const [display, setDisplay] = useState(false)

  return (
    <div className='z-20 flex sticky items-center top-4 md:container md:mx-auto rounded-full flex-row bg-slate-300 xs:gap-0 justify-around md:p-1 sm:my-4'>
      <div className='lg:flex md:gap-6 xs:hidden sm:gap-2'>
        <div className='md:justify-start  md:mx-4'>
          <a href='/'>Fundit</a>
        </div>

        <div className='lg:flex md:gap-4'>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
          <a href='/donate'>Fundings</a>
        </div>
      </div>
      <svg
        className='lg:hidden w-16 h-10 text-blue-500 cursor-pointer relative'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clip-rule='evenodd'
        ></path>
      </svg>

      <div className='flex md:flex-row md:gap-4 p-2'>
        <div className='md:flex xs:hidden flex-row lg:gap-6 lg:mx-8 md:mx-4  w-5/6'>
          <div>
            <div className='absolute pointer-events-auto'>
              <svg
                className='absolute text-slate-400 h-7 w-12'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-1 pl-10 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              placeholder='search ( press "\" to focus )'
              type='text'
              name='search'
            />
          </div>
          <div className='lg:flex lg:flex-row md:hidden'>
            <button
              type='submit'
              className='rounded-full hover:bg-slate-50 bg-slate-100 text-base pr-4 px-4'
            >
              Categories
            </button>
            <i className='fa-solid fa-plus'></i>
          </div>
        </div>
      </div>

      <div className='xs:justify-end'>
        <img
          onClick={() => setHandleChange(!HandleChange)}
          className=' h-12 w-12 object-cover rounded-full'
          src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
          alt='Current-profile'
        />
        {HandleChange && (
          <ul className='absolute z-40 mt-2 bg-white rounded-lg shadow-xl py-2'>
            <li className='px-4 text-base py-2'>
              <a href='/contact'>Profile</a>
            </li>
            <li className='px-4 text-base py-2'>
              <button type='submit'>Sign Out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar
