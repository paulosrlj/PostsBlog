import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'input',
		initialState: {
			inputValue: '',
			valid: false
		},
		reducers: {
			verifyIfIsInvalid: (state) => {
				console.log(state.inputValue)
				if (state.inputValue.length > 0) {
					state.valid = true;
				}
				else {
					state.valid = false;
				}
			},
			updateInput: (state, action) => {
				state.inputValue = action.payload;
			}
		}
})

export const inputActions = inputSlice.actions;

export { inputSlice }
