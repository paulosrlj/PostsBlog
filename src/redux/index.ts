import { configureStore } from '@reduxjs/toolkit'

import { inputSlice } from '../actions/input'
import { postCardSlice } from '../actions/postCard'

export default configureStore({
  reducer: {
    signUpInput: inputSlice.reducer,
    postCard: postCardSlice.reducer,
  }
})
