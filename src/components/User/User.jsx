import React from 'react'


const User = () => {
  return (
    <div className=' sm:max-w-[100%] h-[320px]  border-x-cyan-300 border-2  m-auto flex  justify-center items-center overflow-hidden'>

      <div className='bg-primary-violet-card  w-[76%] h-[100%] rounded-full flex shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  justify-center items-center'>

        <div className=' bg-[#2e2a43]  w-[80%] h-[80%] rounded-full flex  justify-center items-center'>

          <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 w-[50%] h-[50%] rounded-full shadow-[0px_0px_10px_4px_#44337a]  flex  justify-center items-center'>

            <img src="./assets/icons/rocket.png" alt="rocket"  className='w-[80%] h-[80%] rotate-45 animate-fade-up animate-twice'/>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default User
