import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

const Passwords = () => {

  const passwordsList = useSelector(state => state.password)

  console.log(passwordsList.length)

  return (
    <div className='sm:w-[95%] w-[401px] flex flex-col  m-auto   items-center gap-6 bg-red h-[60vh] mt-[20px]  border-white-2 sm:overflow-auto p-1 '>
      {
        passwordsList.length === 0
        ?<div className='mt-[80px] py-3 px-4 text-primary-white-text font-base font-light text-lg rounded-lg bg-primary-violet-card shadow-[0px_0px_5px_2px_#3c366b]'>No hay contraseñas</div>
        :passwordsList.map(item => (
          <Cards key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Passwords
