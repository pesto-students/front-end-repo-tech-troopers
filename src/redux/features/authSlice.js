import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signupuser, signinuser, addngodetails } from './authActions';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null,
  isLoggedIn: false, // for storing the JWT
  error: null,
  success: false,
  registration: false // for monitoring the registration process.
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
      state.success = true;
      state.userInfo = payload.userInfo;
      state.userToken = payload.token;
      state.isLoggedIn = true;// registration successful
    },
    [signupuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isLoggedIn = false;
    },
    [signinuser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signinuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.userInfo;
      state.userToken = payload.token;
      state.isLoggedIn = true;
    },
    [signinuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addngodetails.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addngodetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.address = payload.address;
      state.ngoDetails = payload.ngoDetails;
      state.registration = true;
    },
    [addngodetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  },
});

export default authSlice.reducer;
