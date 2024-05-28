import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keyword: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeKeyword: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeKeyword } = searchSlice.actions

export default searchSlice.reducer
