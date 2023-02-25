
import { Link, useParams } from 'react-router-dom'
import React from 'react'
import makeBlokie from 'ethereum-blockies-base64'
import datas from '../assets/data'
// import { Donation } from '../../type'

// type propsType = {
//   data: Donation
//   Id: string
//   id: string
//   name: string
//   description: string
//   amount_raised: number
//   date: string
//   address: string
//   imgUrls: string
// }

const DonationDetails = () => {
   const {Id} = useParams()
const data  = datas.donations.find((data) => data.id === Id);
  const { id, name, description, amount_raised, date, address, imgUrls }: any = data

  return (
    <div className='flex flex-col bg-gradient-to-r from-stone-800 to-gray-900 h-screen '>
      <div className='lg:text-3xl md:flex justify-center md:text-lg sm:text-lg mt-6 font-bold text-center'>
        <h1 className='text-stone-300'>{name} Details</h1>
      </div>
     
        <div
          key={id}
          className='md:w-full md:flex md:flex-row p-3 bg-opacity-60 backdrop-filter backdrop-blur-sm gap-2 flex-col text-stone-300 '
        >
          <div className='relative constainer mx-8 shrink-0'>
            <img
              className='w-full md:h-64 xs:h-64 object-cover hover:blur-0 brightness-50 rounded-3xl'
              src={imgUrls}
              alt='donate'
            />
            <img
              className='absolute rounded-lg object-cover top-4 left-4 md:w-16 xs:w-8 md:h-14 xs:h-7'
              src={makeBlokie(address)}
              alt='chain'
            />
          </div>

          <div className='flex flex-col gap-4 text-black-400 text-base mt-4'>
            <h5 className='my-2'>
              <strong>Title: </strong>
              {name}
            </h5>
            <h5 className='md:block md:hidden sm:hidden md:text-base xs:text-sm'>
              <strong>Description: </strong>
              {description}
            </h5>
            <h5 className='md:block xs:hidden md:text-base xs:text-xs'>
              <strong>Description: </strong>
              {description}
            </h5>
            <div className='flex justify-between items-center py-2'>
              <h5 className='text-green-500 font-bold md:text-base xs:text-sm'>
                <strong className='text-stone-300'>Amount raised: </strong>$
                {amount_raised}
              </h5>
              <h5 className='md:text-sm xs:text-xs font-bold'>{date}</h5>
            </div>
            <Link to='/donations'>Donations</Link>
          </div>
        </div>
      </div>
  )
}

export default DonationDetails
