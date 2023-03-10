import React, { useState } from 'react'
import Sidebar from './sidebar'
import { Donation } from '../../type'
import { Link } from 'react-router-dom'

type propsType = {
  data: Donation[]
}
const Nav = (props: propsType) => {
  const { data } = props
  const new_data = data.map((data) => data.donations)
  const [toggleSidebar, setToggleSidebar] = useState(false)
  // console.log(data.donations.length)
  return (
    <>
      {toggleSidebar && <Sidebar />}
      <div className='space-y-5 sticky z-30 bottom-0 sm:hidden'>
        <div className='overflow-hidden rounded-sm border-t border-t-stone-500  bg-stone-500 bg-opacity-60 backdrop-filter backdrop-blur-2xl p-2'>
          <ul className='flex items-center gap-2 text-sm font-medium '>
            <li className='flex-1 '>
              <Link
                to='/'
                className='text-grey  relative flex items-center justify-center gap-2 rounded-lg bg-stone-600 px-3 py-2 shadow hover:bg-stone-700 hover:text-white'
              >
                FundIt
              </Link>
            </li>
            <li className='flex-1'>
              <Link
                to='/about'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
              >
                About
              </Link>
            </li>
            <li className='flex-1'>
              <Link
                to='/investors'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-black hover:shadow'
              >
                Investors
              </Link>
            </li>
            <li className='flex-1'>
              <Link
                to='/fundings'
                className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
              >
                Projects
                <span className='rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-black '>
                  {new_data.length}
                </span>
              </Link>
            </li>
            <li className='flex-1 '>
              <button
                onClick={() => setToggleSidebar(!toggleSidebar)}
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
      </div>
    </>
  )
}

export default Nav
