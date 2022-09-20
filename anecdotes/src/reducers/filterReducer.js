import { createSlice } from "@reduxjs/toolkit";
//import store from "../store";

const initialState = []

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtersAnecdotes (state, action) {
      return action.payload.initialState.filter(anecdote => {
        return anecdote.content.toLowerCase().includes(action.payload.searchValue.toLowerCase())
      })
    }
  }
})

export const { filtersAnecdotes } = filterSlice.actions
export default filterSlice.reducer