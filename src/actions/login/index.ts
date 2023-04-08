import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
		initialState: {
			loggedUser: ''
		},
		reducers: {
      setUser: (state, action) => {
        state.loggedUser = action.payload;
      }
		}
})

export const loginActions = loginSlice.actions;

export { loginSlice }
