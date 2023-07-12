import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from '../../Redux/passwordSlice'
import { v4 as uuid } from 'uuid'

const Form = () => {

  const form = useRef()

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

    dispatch(addPassword({
      ...task,
      id: uuid()
    }))

    form.current.reset()
  }





  return (
    <form ref={form} onSubmit={submitForm} className='flex flex-col items-center justify-center w-full gap-4 mt-[40px]'>
      <input
        type="text"
        name='name'
        onChange={handleChange}
        autoComplete='off'
        required
        placeholder='E-mail o plataforma'
        className='border-none outline-none  py-1 px-2 rounded'
      />


      <input
        type="text"
        name='password'
        onChange={handleChange}
        autoComplete='off'
        required
        placeholder='Escribe la contraseña'
        className='border-none outline-none py-1 px-2 rounded'
      />

      <button type='submit' className=' bg-primary-violet-card  shadow-[0px_0px_10px_4px_#44337a] rounded w-[100px] p-2'>Agregar</button>
    </form>
  )
}

export default Form
