import React from 'react'
import Cards from './Cards'

const Passwords = () => {

  const cardsObj = [
    {
      id: 1,
      app: 'Facebook',
      password: '123456'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
    {
      id: 2,
      app: 'Google',
      password: '4568fghjea'
    },
  ]

  return (
    <div className='sm:flex flex-col  items-center gap-6 bg-red w-[100%] h-[80vh] mt-[20px]  border-white-2 overflow-auto p-1'>
      {
        cardsObj.map(item => (
          <Cards key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Passwords
