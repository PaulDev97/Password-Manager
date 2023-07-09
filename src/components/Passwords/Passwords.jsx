import React from 'react'
import Cards from './Cards'

const Passwords = () => {

  const cardsObj = [
    {
      id: 1,
      img: './assets/icons/padlock.png',
      app: 'Facebook',
      password: '123456'
    },
    {
      id: 2,
      img: './assets/icons/padlock.png',
      app: 'Google',
      password: '45685'
    },
  ]

  return (
    <div className='sm:flex flex-col justify-center items-center gap-6 bg-red w-[100%] mt-[40px]'>
      {
        cardsObj.map(item => (
          <Cards key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default Passwords
