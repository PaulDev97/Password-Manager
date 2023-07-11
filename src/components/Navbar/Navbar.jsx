import { faLock, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [select, setSelect] = useState('user')

  const handleMenu = (menu) => {
    setSelect(menu)
  }


  return (
    <header className='w-full h-[20%] absolute bottom-5 flex items-center justify-center  '>
      <nav className=' w-[60%] h-[70px] flex justify-around items-center gap-6 text-xl rounded-lg  bg-primary-violet-card p-4 shadow-[0px_0px_10px_4px_#44337a] '>

        <NavLink 
          to='/' 
          onClick={() => handleMenu('user')}
          className={select === 'user' ? 'text-[#fafafa] bg-[#000000] p-2 rounded-lg ' : 'text-gray-600 p-2'}>
          
          <FontAwesomeIcon  icon={faUser} />
        </NavLink>

        <NavLink 
          to='password' 
          onClick={() => handleMenu('password')}
          className={select === 'password' ? 'text-[#fafafa] bg-[#000000] p-2 rounded-lg' : 'text-gray-600 p-2'}>

          <FontAwesomeIcon icon={faLock} />
        </NavLink>

        <NavLink 
          to='form' 
          onClick={() => handleMenu('form')}
          className={select === 'form' ? 'text-[#fafafa] bg-[#000000] p-2 rounded-lg' : 'text-gray-600 p-2'}>
          
          <FontAwesomeIcon  icon={faPlus} />
        </NavLink>

      </nav>
    </header>
  )
}

export default Navbar
