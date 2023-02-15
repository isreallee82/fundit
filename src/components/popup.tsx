import React from 'react'
import '../style.css'

const Popup = (props: any) => {
  return (
    <div className='xs:fixed md:w-2/5 md:top-28 z-40 xs:bottom-14 md:right-0 md:right-36 p-4 sm:w-4/5 md:h-1/5 rounded-3xl bg-stone-100 bg-opacity-60 backdrop-filter backdrop-blur-lg '>
      <div className='bg-stone-300 rounded-3xl p-4 w-full h-full'>
        <span
          className='fixed pointer right-4 px-2 mr-3 text-xs font-medium text-stone-800 bg-stone-200 rounded-full dark:bg-stone-900 dark:text-stone-300'
          onClick={props.handleClose}
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
        {props.content}
      </div>
    </div>
  )
}

export default Popup
