import { faLock, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-[80%] h-auto absolute bottom-0 flex justify-center'>
      <nav className='text-white w-[100%] flex justify-center items-center gap-4 '>
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faLock} />
      </nav>
    </header>
  )
}

export default Navbar
