import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {[ ]}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherAdded(state, action) {
        state.push(action.payload)
      },
  }
})

export const { weatherAdded } = weatherSlice.actions

export default weatherSlice.reducer