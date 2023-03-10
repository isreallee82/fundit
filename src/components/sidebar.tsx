import { useWeb3React } from '@web3-react/core'
import React, { useState } from 'react'
import data from '../assets/data'
import datas from '../assets/user'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const { active } = useWeb3React()
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <>
      {!toggleSidebar && (
        <aside
          className='fixed top-0 left-0 rounded-full z-30 w-64 h-full transition-transform -translate-x-full xs:translate-x-0 duration-300 delay-700'
          aria-label='Sidebar'
        >
          <div className='h-full px-3 py-4 overflow-y-auto bg-stone-200 dark:bg-stone-700 bg-opacity-10 backdrop-filter backdrop-blur-2xl'>
            <span
              className='inline-flex items-center justify-end px-2 ml-3 text-xs font-medium text-stone-800 bg-white rounded-full dark:bg-stone-900 dark:text-stone-300'
              onClick={() => setToggleSidebar(!toggleSidebar)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>
            <ul className='space-y-2 mt-4'>
              <li className='flex items-center'>
                <Link
                 to='/'
                  className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                    <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                  </svg>
                  <span className='ml-3'>Dashboard</span>
                </Link>
              </li>
              {active && (
                <li>
                  <Link
                   to='/'
                    className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                  >
                    <svg
                      aria-hidden='true'
                      className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                    </svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Wallet
                    </span>
                    <span className='inline-flex items-center justify-center px-2 ml-3 text-xs font-medium text-stone-800 bg-stone-200 rounded-full dark:bg-stone-900 dark:text-stone-200'>
                      Pro
                    </span>
                  </Link>
                </li>
              )}
              {active && (
                <li>
                  <Link
                   to='/create-project'
                    className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                  >
                    <svg
                      aria-hidden='true'
                      className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                    </svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Create Project
                    </span>
                    <span className='inline-flex items-center justify-center px-2 ml-3 text-xs font-medium text-stone-800 bg-stone-200 rounded-full dark:bg-stone-900 dark:text-stone-200'>
                      Pro
                    </span>
                  </Link>
                </li>
              )}
              {active && (
                <li>
                  <Link
                   to='/fundings'
                    className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                  >
                    <svg
                      aria-hidden='true'
                      className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                      <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                    </svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Projects
                    </span>
                    <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-xs font-medium text-stone-800 bg-stone-100 rounded-full dark:bg-stone-900 dark:text-stone-300'>
                      {data.donations.length}
                    </span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                 to='/'
                  className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
                  <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-xs font-medium text-stone-800 bg-stone-100 rounded-full dark:bg-stone-900 dark:text-stone-300'>
                    {datas.users.length}
                  </span>
                </Link>
              </li>
            </ul>
            <ul className='pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700'>
              {' '}
              <li>
                <Link
                 to='/'
                  className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                 to='/'
                  className='flex items-center p-2 text-base font-normal text-slate-100 rounded-lg dark:text-white hover:bg-stone-500 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-slate-100 transition duration-75 dark:text-stone-300 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  )
}

export default Sidebar
