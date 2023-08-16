import { createSlice } from '@reduxjs/toolkit';
import { fetchresourcesadmins, fetchresourcesuser } from './resourcesAction';

const initialState = {
  resources: [],
  loading: false,
  error: null,
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    resetStoreResources: () => (initialState),

    deleteResource(state, action) {
      const resourceId = action.payload;
      state.resources = state.resources.filter((resource) => resource._id !== resourceId);
    },
    fetchResourcesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchResourcesSuccess(state, action) {
      state.loading = false;
      state.resources = action.payload;
    },
    fetchResourcesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchresourcesuser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchresourcesuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resources = payload.resourceList;// registration successful
    },
    [fetchresourcesuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchresourcesadmins.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchresourcesadmins.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.resources = payload.resourceList;// registration successful
    },
    [fetchresourcesadmins.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

  },
});

export const {

  fetchResourcesSuccess,
  fetchResourcesStart,
  deleteResource,
  resetStoreResources,
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
