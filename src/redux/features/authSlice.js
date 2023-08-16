import { createSlice } from '@reduxjs/toolkit';
import {
  signupuser, signinuser, addngodetails, toggleresourcestatus, togglevolunteerstatus,
} from './authActions';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null,
  isLoggedIn: false, // for storing the JWT
  error: null,
  success: false,
  registration: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetStoreAuth: () => (initialState),
  },
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
      state.userInfo = payload;
      state.registration = true;
    },
    [addngodetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [toggleresourcestatus.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.action === 'APPROVE') {
        state.userInfo.resources.push(payload.resourceID);
      } else if (payload.action === 'ACTIVE') {
        state.userInfo.resources = state.userInfo.resources.filter(
          (resourceId) => resourceId !== payload.resourceID,
        );
      }
    },

    [toggleresourcestatus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [toggleresourcestatus.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [togglevolunteerstatus.fulfilled]: (state, { payload }) => {
      state.loading = false;

      if (payload.action === 'add') {
        state.userInfo.voluntary = [...state.userInfo.voluntary, payload.volunteerId];
      } else if (payload.action === 'remove') {
        state.userInfo.voluntary = state.userInfo.voluntary.filter(
          (id) => id !== payload.volunteerId,
        );
      }
    },

    [togglevolunteerstatus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [togglevolunteerstatus.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const {
  resetStoreAuth,
} = authSlice.actions;

export default authSlice.reducer;
