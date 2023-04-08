import { configureStore } from '@reduxjs/toolkit'

import { inputSlice } from '../actions/input'
import { loginSlice } from '../actions/login'
import { postCardSlice } from '../actions/postCard'
import { fetchPostsSlice } from '../actions/fetchPosts'

export default configureStore({
  reducer: {
    signUpInput: inputSlice.reducer,
    postCard: postCardSlice.reducer,
    login: loginSlice.reducer,
    fetchPosts: fetchPostsSlice.reducer,
  }
})
