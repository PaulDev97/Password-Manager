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
      />


      <input
        type="text"
        name='password'
        onChange={handleChange}
        autoComplete='off'
        required
      />

      <button type='submit' className='bg-violet-600 rounded w-[100px] p-2'>Agregar</button>
    </form>
  )
}

export default Form