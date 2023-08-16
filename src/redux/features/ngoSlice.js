// ngoListSlice.js
import { createSlice } from '@reduxjs/toolkit';

// ngoListSlice.js

const initialState = {
  ngoList: [], // Array to store the list of NGOs
  loading: false, // Flag to indicate if data is being fetched
  error: null, // Error message if there's an issue with fetching data
};

const ngoListSlice = createSlice({
  name: 'ngoList',
  initialState,
  reducers: {
    resetStoreNgo: () => (initialState),
    setLoading(state) {
      state.loading = true;
    },
    fetchNgoListSuccess(state, action) {
      state.ngoList = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchNgoListFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// ngoListSlice.js
export const {
  setLoading, fetchNgoListSuccess, fetchNgoListFailure, resetStoreNgo,
} = ngoListSlice.actions;

export default ngoListSlice.reducer;
