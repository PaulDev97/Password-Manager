import React from 'react'

const Cards = ({ password, app, img }) => {
  return (
    <div className='shadow-[0px_0px_5px_2px_#3c366b] rounded-lg  flex items-center  bg-primary-violet-card w-[80%] gap-4'>
      <div className='w-[30px] h-[30px] border-cyan-600 border-2'>
        <img className='w-[100%] h-[100%]' src={img} alt={app} />
      </div>
      <div>
        <h3 className='text-white'>{app}</h3>
        <span className='text-gray-100'>{password}</span>
      </div>
    </div>
  )
}

export default Cards
