import { createSelector, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        token: null
    },
    reducers:{
        setLogin: (state, action) => {
            const {firstName, lastName, token} = action.payload;
            const fullName = firstName + ' ' + lastName;
            state.name = fullName;
            state.token = token
        }
    }
});

export const {setLogin} = userSlice.actions;
export const currentUser = createSelector(
    state => state.user,
  user => user.name
)
export default userSlice.reducer;