import React from 'react'
import '../style.css'

const Popup = (props: any) => {
  return (
    <div className='xs:fixed md:w-2/6 md:top-28 z-40 xs:bottom-14 md:right-0 md:right-36 p-2 sm:w-2/6 xs:w-full lg:h-max md:h-max rounded-3xl bg-stone-300 bg-opacity-60 backdrop-filter backdrop-blur-lg '>
      <div className='bg-stone-300 rounded-3xl p-2 w-full h-full'>
        <span
          className='fixed pointer right-4 px-2 mr-3 text-xs font-medium text-stone-800 bg-stone-300 rounded-full dark:bg-stone-900 dark:text-stone-300'
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
        <div className='flex flex-col gap 2'>{props.content}</div>
      </div>
    </div>
  )
}

export default Popup
