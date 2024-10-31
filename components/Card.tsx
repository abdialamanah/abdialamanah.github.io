import React from 'react'

const Card = () => {
  return (
    <div className='px-5 sm:px-10 '>
    <div className='row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent  flex flex-col space-y-4 mb-8'>
      <div className='flex flex-row justify-between px-5 gap-3 sm:gap-6 sm:px-20'>
        <div className='text-center'>
          <p className='sm:text-6xl text-4xl'>10+</p>
          <h1>Projects</h1>
        </div>
        <div className='text-center'>
          <p className='sm:text-6xl text-4xl'>1 Yr</p>
          <h1>Experience</h1>
        </div>
        <div className='text-center '>
          <p className='sm:text-6xl text-4xl'>7+</p>
          <h1>Tech Skill</h1>
        </div>
        <div className='text-center hidden sm:block'>
          <p className='sm:text-6xl text-4xl'>99%</p>
          <h1>Client Satisfaction</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
