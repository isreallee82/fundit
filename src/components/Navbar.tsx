import React from 'react'
import { useState } from 'react'
import Sidebar from '../components/sidebar'
import Popup from './popup'

const Navbar = () => {
  const [HandleChange, setHandleChange] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)


const togglePopup = () => {
  setIsOpen(!isOpen)
}
  

  return (
    <>
      {toggleSidebar && <Sidebar />}
      <div className='z-20 sticky flex xs:mx-4 items-center lg:top-0 xs:top-0 md:container md:mx-auto sm:mx-auto sm:pl-4 rounded-full flex-row  bg-stone-500 bg-opacity-60 backdrop-filter backdrop-blur-lg xs:gap-0 md:justify-around sm:justify-between xs:justify-between md:p-1 sm:my-4'>
        <div className='flex gap-2 lg:hidden  items-center mx-4'>
          {' '}
          <svg
            onClick={() => setToggleSidebar(!toggleSidebar)}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='lg:hidden md:flex sm:flex w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='xl:hidden md:flex w-16 h-10 text-stone-100 cursor-pointer relative'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
            />
          </svg>
        </div>
        <div className='lg:flex md:gap-6 text-white md:flex xs:hidden sm:gap-2'>
          <ul className='flex items-center gap-2 text-sm font-medium '>
            <li className='flex-1 '>
              <a
                href='/'
                className='text-grey  relative flex items-center justify-center gap-2 rounded-lg bg-stone-600 px-3 py-2 shadow hover:bg-stone-700 hover:text-white'
              >
                FundIt
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='/about'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
              >
                About
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='/contact'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
              >
                Contact
                <span className='rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-black '>
                  {' '}
                  8{' '}
                </span>
              </a>
            </li>
            <li className='flex-1'>
              <a
                href='/fundings'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
              >
                Fundings
              </a>
            </li>
            <li className='flex-1 md:hidden '>
              <button
                onClick={() => setHandleChange(!HandleChange)}
                // data-drawer-target='separator-sidebar'
                // data-drawer-toggle='separator-sidebar'
                // aria-controls='separator-sidebar'
                type='button'
                className='w-full h-8 flex items-center justify-end gap-2  rounded-full hover:bg-stone-700 hover:text-white hover:shadow'
              >
                <span className='sr-only'>Open sidebar</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2.5}
                  stroke='currentColor'
                  className='w-full h-8 flex items-center justify-end gap-2  rounded-full hover:bg-stone-700 hover:text-white hover:shadow'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>

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
          {!isConnected ? (
            <button
              className=' bg-stone-700 text-stone-200 rounded-full p-2 xs:m-1 mr-0 px-4'
              onClick={togglePopup}
              type='submit'
            >
              Connect
            </button>
          ) : (
            <img
              onClick={() => setHandleChange(!HandleChange)}
              className=' h-12 w-12 object-cover rounded-full'
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
              alt='Current-profile'
            />
          )}
          {HandleChange && (
            <ul className='absolute z-40 mt-2 bg-white rounded-lg shadow-xl py-2'>
              <li className='px-4 text-base py-2'>
                <a href='/contact'>Profile</a>
              </li>
              <li className='px-4 text-base py-2'>
                <button onClick={() => setIsConnected(!isConnected)} type='submit'>Sign Out</button>
              </li>
            </ul>
          )}
        </div>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <div className='p-4 flex bg-stone-300 flex-col gap-2'>
                <b>Connect your wallet</b>
                <button
                  className=' bg-stone-700 text-stone-200 rounded-full p-2 xs:m-1 mr-0 px-4'
                  type='submit'
                >
                  Connect
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

export default Navbar
