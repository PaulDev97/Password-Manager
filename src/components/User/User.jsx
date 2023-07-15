import React from 'react'
import { useSelector } from 'react-redux'


const User = () => {

  const totalPasswords = useSelector(state => state.password)

  return (

    <main className='flex flex-col justify-center items-center '>
      <div className=' sm:max-w-[100%] phone:max-w-[100%] w-[400px] h-[320px] m-auto flex justify-center items-center overflow-hidden'>

        <div className='bg-primary-violet-card phone:w-[90%]   w-[76%] h-[100%] rounded-full flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  justify-center items-center'>

          <div className=' bg-[#2e2a43]  w-[80%] h-[80%] rounded-full flex  justify-center items-center'>

            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-[50%] h-[50%] rounded-full shadow-[0px_0px_10px_4px_#44337a]  flex  justify-center items-center'>

              <img src="./assets/icons/rocket.png" alt="rocket" className='w-[80%] h-[80%] rotate-45 animate-fade-up animate-twice' />

            </div>
          </div>
        </div>
      </div>

      <div className='w-full  mt-8 flex justify-center items-center gap-3'>

        <div className='sm:w-[80%] lg:w-[400px]  flex flex-col justify-center items-center gap-4 rounded-lg bg-primary-violet-card shadow-[0px_0px_5px_2px_#3c366b] py-3' >
          <h3 className='text-primary-white-text font-base font-light text-lg  break-words'>Contraseñas guardadas</h3>
          <span className='text-violet-400 text-[20px] font-base'>{totalPasswords.length}</span>
        </div>

      </div>

    </main>
  )
}

export default User
