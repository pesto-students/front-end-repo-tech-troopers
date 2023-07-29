import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    role: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true,
                state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.user = action.payload.user;
            state.role = action.payload.role
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        },
        logout(state) {
            state.user = null;
            state.role = null;
            state.error = null;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    logout
} = userSlice.actions;

export default userSlice.reducer;
