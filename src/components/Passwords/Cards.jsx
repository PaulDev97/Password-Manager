import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cards = ({ password, app }) => {
  return (
    <div className='shadow-[0px_0px_5px_2px_#3c366b] rounded-lg  flex items-center  bg-primary-violet-card w-[80%] gap-4 p-3'>
      <div className='w-[20px] h-[20px]'>
        <img className='w-[100%] h-[100%]' src='./assets/icons/padlock.png' alt={app} />
      </div>
      <div className='w-[75%] flex flex-col gap-2'>
        <h3 className='text-primary-white-text font-base font-light text-lg  break-words'>{app}</h3>
        <span className='text-gray-300 font-base text-xl font-semibold tracking-wide break-words   '>{password}</span>
      </div>

      <FontAwesomeIcon className='text-red-600 text-[15px]' icon={faTrash} />
    </div>
  )
}

export default Cards
