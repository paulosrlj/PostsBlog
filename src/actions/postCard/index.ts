import { createSlice } from "@reduxjs/toolkit";

const postCardSlice = createSlice({
    name: 'postCard',
		initialState: {
			titleValue: '',
			contentValue: '',
			valid: false
		},
		reducers: {
			verifyIfIsInvalid: (state) => {
				if (state.titleValue.length > 0 && state.contentValue.length > 0) {
					state.valid = true;
				}
				else {
					state.valid = false;
				}
			},
			updateTitleValue: (state, action) => {
				state.titleValue = action.payload;
			},
      updateContentValue: (state, action) => {
				state.contentValue = action.payload;
			}
		}
})

export const inputActions = postCardSlice.actions;

export { postCardSlice }
