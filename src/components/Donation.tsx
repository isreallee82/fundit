import { Donation } from '../../type.d'
import React from 'react'
// import data from '../assets/data'

type propsType = {
  datas: Donation[]
}

const Donate = (props: propsType) => {
  const { datas } = props
  const new_data = datas.map((data) => data)
  // const amount_raised = new_data.map((data) => data.amount_raised)
  // const Name = new_data.map((data) => data.name)
  // const Description = new_data.map((data) => data.description)
  console.log(new_data)
  return (
    <div className='lg:p-4 grid  justify-center w-full md:p-4 '>
      <div className='lg:text-3xl md:flex justify-center xs:hidden md:text-lg sm:text-lg font-bold text-center'>
        <h1 className='text-stone-300'>Donations</h1>
      </div>
      <div className='md:container md:mx-auto xs:mx-2  lg:px-28 md:px-16 sm:px-16 xs:px-0 lg:my-28 md:my-28 sm:my-16 grid rounded-3xl lg:grid-cols-3 md:grid-cols-2 md:gap-8 xs:gap-4 md:justify-items-center xs:grid-cols-2 m-8 p-2'>
        {new_data.map((data) => {
          return (
            <div className='md:w-full md:flex p-3 xs:hidden  bg-stone-300 bg-opacity-60 backdrop-filter backdrop-blur-sm gap-2 flex-col  rounded-3xl'>
              <div className='relative shrink-0'>
                <img
                  className='w-full md:h-64 xs:h-24 object-cover rounded-3xl'
                  src={require('../images/heropics.png')}
                  alt='donate'
                />
                <img
                  className='absolute rounded-lg object-cover top-6 left-6 md:w-16 xs:w-8 md:h-14 xs:h-7'
                  src={require('../images/538.png')}
                  alt='chain'
                />
              </div>
              <div className='flex flex-col gap-4 text-black-400 text-base mt-4 '>
                <h5 className='m-2'>
                  <strong>Name: </strong> {data.name}
                </h5>
                <h5 className='md:block xs:hidden md:text-base xs:text-xs'>
                  <strong>Description: </strong> {data.description}
                </h5>
                <div className='flex justify-between items-center p-2'>
                  <h5 className='text-green-800 font-bold md:text-base xs:text-sm '>
                    <strong>Amount raised:</strong> ${data.amount_raised}
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

//  <template>
//   <div>
//     <img className="rounded"  src={require('../538.png')} alt='chain' />
//     <div className="mt-2">
//       <div>
//         <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{{ eyebrow }}</div>
//         <div className="font-bold text-slate-700 leading-snug">
//           <a :href="url" className="hover:underline">{{ title }}</a>
//         </div>
//         <div className="mt-2 text-sm text-slate-600">{{ pricing }}</div>
//       </div>
//     </div>
//   </div>
// </template>

// <script>
//   export default {
//     props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
//   }
// </script>
