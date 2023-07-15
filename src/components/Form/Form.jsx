import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from '../../Redux/passwordSlice'
import { v4 as uuid } from 'uuid'

const Form = () => {

  const form = useRef()

  const [emptyInput , setEmptyInput] = useState(false)
  const [addPasswordCard , setAddPasswordCard] = useState(false)

  const dispatch = useDispatch()
  

  const [task, setTask] = useState({
    id: '',
    name: '',
    password: ''
  })

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })


  }

  const submitForm = (e) => {
    e.preventDefault()


    

    if (task.name.trim().length === 0  && task.password.trim().length === 0) {
      setEmptyInput(true)
      
      setInterval(() => {
        setEmptyInput(false)
      }, 3000);
    }
    else {
      
      setAddPasswordCard(true)
      
      setInterval(() => {
        setAddPasswordCard(false)
      }, 3000);
      
      dispatch(addPassword({
        ...task,
        id: uuid()
      }))

    }


    form.current.reset()
  }





  return (
    <form ref={form} onSubmit={submitForm} className='flex flex-col items-center justify-center w-full gap-8 mt-[40px]'>
      <input
        type="text"
        name='name'
        onChange={handleChange}
        autoComplete='off'
        required
        placeholder='E-mail o plataforma'
        className='border-none outline-none  py-3 px-4 rounded bg-[#111] text-[#fafafa]   '
      />


      <input
        type="text"
        name='password'
        onChange={handleChange}
        autoComplete='off'
        required
        placeholder='Escribe la contraseña'
        className='border-none outline-none  py-3 px-4 rounded bg-[#111] text-[#fafafa]'
      />

     

      <button type='submit' className=' text-[#fafafa] bg-[#111]  shadow-[0px_0px_10px_4px_#44337a] rounded w-[100px] p-2 font-base'>Agregar</button>

      <div className='mt-[50px]'>

        {emptyInput &&<div className='text-[#fafafa] bg-red-500 text-[20px]  py-3 px-4 rounded shadow-[0px_0px_10px_2px_#e53e3e] font-base '>❌</div>}

        {addPasswordCard && <div className='text-[white] text-[20px] bg-green-600 py-3 px-4 rounded shadow-[0px_0px_10px_2px_#38a169] font-base '>✔</div>}
    
      </div>

    
    </form>
  )
}

export default Form
