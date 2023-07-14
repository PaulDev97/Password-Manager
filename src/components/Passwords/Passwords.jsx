import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

const Passwords = () => {

  const passwordsList = useSelector(state => state.password)

  console.log(passwordsList)

  return (
    <div className='sm:w-[95%] w-[401px] flex flex-col  m-auto   items-center gap-6 bg-red h-[60vh] mt-[20px]  border-white-2 overflow-auto p-1 overflow-y-scroll no-scrollbar '>
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
