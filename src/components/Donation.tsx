import { Donation } from '../../type.d'
import React from 'react'
import { Link } from 'react-router-dom'

import makeBlokie from 'ethereum-blockies-base64'

type propsType = {
  data: Donation[]
}

const Donate = ({data}: propsType) => {
  const new_data = data.map((data) => data )
  var length = 32
  var mdlength = 200



  return (
    <div className='lg:p-4 grid  justify-center w-full md:p-4 '>
      <div className='lg:text-3xl md:flex justify-center xs:hidden md:text-lg sm:text-lg mt-6 font-bold text-center'>
        <h1 className='text-stone-300'>Donations</h1>
      </div>
      <div  className='md:container md:mx-auto xs:mx-2  lg:px-28 md:px-16 sm:px-16 xs:px-0 lg:my-28 md:my-28 sm:my-16 grid rounded-3xl lg:grid-cols-3 md:grid-cols-2 md:gap-8 xs:gap-4 md:justify-items-center xs:grid-cols-2 m-2 p-2'>
        {new_data.slice(0, 6).map((data) => {
          return (
            <div
              key={data.id}
              className='md:w-full md:flex p-3 ring-2 ring-stone-500 bg-opacity-60 backdrop-filter backdrop-blur-sm gap-2 flex-col text-stone-300 rounded-3xl'
            >
              <Link to={`/donate/${data.id}`}>
                <div className='relative shrink-0'>
                  <img
                    className='w-full md:h-64 xs:h-24 brightness-50 hover:brightness-90  object-cover rounded-3xl'
                    src={data.imgUrls}
                    alt='donate'
                  />
                  <img
                    className='absolute rounded-lg  object-cover top-4 left-4 md:w-16 xs:w-8 md:h-14 xs:h-7'
                    src={makeBlokie(data.address)}
                    alt='chain'
                  />
                </div>
              </Link>

              <div className='flex flex-col gap-4 text-black-400 text-base mt-4 '>
                <h5 className='my-2'>
                  <strong>Title: </strong> {data.name}
                </h5>
                <h5 className='md:block md:hidden sm:hidden md:text-base xs:text-sm'>
                  <strong>Description: </strong>{' '}
                  {data.description.substring(0, length) + '...'}
                </h5>
                <h5 className='md:block xs:hidden md:text-base xs:text-xs'>
                  <strong>Description: </strong>{' '}
                  {data.description.substring(0, mdlength) + '...'}
                </h5>
                <div className='flex justify-between items-center py-2'>
                  <h5 className='text-green-500 font-bold md:text-base xs:text-sm '>
                    <strong className='text-stone-300'>Amount raised:</strong> $
                    {data.amount_raised}
                  </h5>
                  <h5 className='md:text-sm xs:text-xs font-bold'>
                    {data.date}
                  </h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Donate
