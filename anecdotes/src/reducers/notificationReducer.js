import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const notifications = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      const content = action.payload
      return content
    },
    hideNotification(state, action){
      return null
    }
  }
})

export const {showNotification, hideNotification} = notifications.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(hideNotification()
      )
    }, time*1000)
  }
}
export default notifications.reducer