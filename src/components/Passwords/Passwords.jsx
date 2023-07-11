import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

const Passwords = () => {

  const passwordsList = useSelector(state => state.password)

  console.log(passwordsList)

  return (
    <div className='sm:flex flex-col  items-center gap-6 bg-red w-[100%] h-[60vh] mt-[20px]  border-white-2 overflow-auto p-1 relative'>
      {
        passwordsList.length === 0
        ?<div>no hay passwords</div>
        :passwordsList.map(item => (
          <Cards key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Passwords
