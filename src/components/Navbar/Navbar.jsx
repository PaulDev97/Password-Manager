import { faLock, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-[20%] absolute bottom-5 flex items-center justify-center  '>
      <nav className='text-white w-[60%] h-[70px] flex justify-around items-center gap-6 text-xl rounded-lg  bg-[#111] p-4 '>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faLock} />
        <FontAwesomeIcon icon={faPlus} />
      </nav>
    </header>
  )
}

export default Navbar
