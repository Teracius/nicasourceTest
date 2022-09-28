import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    strings: [],
  },
  reducers: {
    increment: (state,action) => {

      state.strings.push(action.payload)
    },
  },
})

export const { increment } = counterSlice.actions
