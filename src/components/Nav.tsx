import React from 'react'
import { useState} from 'react'

const Nav = () => {
  // const [display, setDisplay] = useState(false)
    const [HandleChange, setHandleChange] = useState(false)
  return (
    <div className='space-y-5 sticky bottom-0 sm:hidden'>
      <div className='overflow-hidden rounded-sm border-t border-t-slate-400  bg-stone-500 bg-opacity-60 backdrop-filter backdrop-blur-2xl p-2'>
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
              href='/'
              className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
            >
              About
            </a>
          </li>
          <li className='flex-1'>
            <a
              href='/'
              className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-black hover:shadow'
            >
              Contact
              <span className='rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-grey hover:text-black '>
                {' '}
                8{' '}
              </span>
            </a>
          </li>
          <li className='flex-1'>
            <a
              href='/'
              className='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-grey  hover:bg-stone-700 hover:text-white hover:shadow'
            >
              Fundings
            </a>
          </li>
          <li className='flex-1 '>
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
    </div>
  )
}

export default Nav
