import { createSlice } from "@reduxjs/toolkit";





export const passwordSlice = createSlice ({
  name:'password',
  initialState:[],

  reducers : {
    addPassword: (state,action) => {
      return [action.payload, ...state]
    },
    deletePassword: (state,action) => {

      const idItem= action.payload

      return state.filter((item) => item.id !== idItem)
    }
  }
})



export const { addPassword , deletePassword } = passwordSlice.actions

export default passwordSlice.reducer