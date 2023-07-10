import { faLock, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-auto absolute bottom-5 flex justify-center '>
      <nav className='text-white w-[60%] flex justify-around items-center gap-6 text-xl rounded-lg  bg-[#111] p-4 '>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faLock} />
        <FontAwesomeIcon icon={faPlus} />
      </nav>
    </header>
  )
}

export default Navbar
