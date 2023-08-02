import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupuser, signinuser } from './authActions';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signupuser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signupuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [signupuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [signinuser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signinuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [signinuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
