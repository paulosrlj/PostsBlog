import { configureStore } from '@reduxjs/toolkit'

import { inputSlice } from '../actions/input'

export default configureStore({
  reducer: {
    signUpInput: inputSlice.reducer
  }
})