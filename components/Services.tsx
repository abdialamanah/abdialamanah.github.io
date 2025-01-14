import React from 'react'
import { services } from '@/data'
import { Meteors } from './ui/Meteors'

const Services = () => {
  return (
    <div className='py-20 px-2 sm:px-20 text-center flex flex-col justify-center items-center'>
      <div className='max-w-[350px]'>
        <h1 className='text-3xl font-bold font-montserrat uppercase'>what i do</h1>
        <p className='text-[15px] text-slate-200 tracking-wider'>A combination of technical expertise and creative design to deliver exceptional results.</p>
      </div>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-20">
      {
        services.map((service, index) => (
        <div className=" w-full relative max-w-[350px] h-[230px] text-center" key={index}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 flex justify-center w-full items-center text-center">
            {service.title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {service.description}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={10} />
        </div>
      </div>
        ))
      }
      
      </div>
    </div>
  )
}

export default Services
