import { createSlice } from '@reduxjs/toolkit';
import { fetchvolunteersadmins, fetchvolunteersuser } from './volunteerActions';

const initialState = {
  volunteers: [],
  loading: false,
  error: null,
};

const volunteeringSlice = createSlice({
  name: 'volunteers',
  initialState,
  reducers: {
    resetStore: () => (initialState),
    deleteVolunteer(state, action) {
      const volunteerId = action.payload;
      state.volunteers = state.volunteers.filter((volunteer) => volunteer._id !== volunteerId);
    },
    fetchVolunteeringOppurtunitiesStartau(state) {
      state.loading = true;
      state.error = null;
    },
    fetchVolunteeringOppurtunitiesSuceess(state, action) {
      state.loading = false;
      state.oppurtunities = action.payload;
    },
    fetchVolunteeringOppurtunitiesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchvolunteersadmins.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchvolunteersadmins.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.volunteers = payload.voluntaryList;// registration successful
    },
    [fetchvolunteersadmins.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchvolunteersuser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchvolunteersuser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.volunteers = payload.voluntaryList;// registration successful
    },
    [fetchvolunteersuser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchVolunteeringOppurtunitiesStart,
  fetchVolunteeringOppurtunitiesSuceess,
  fetchVolunteeringOppurtunitiesFailure,
  deleteVolunteer,
  resetStore,
} = volunteeringSlice.actions;

export default volunteeringSlice.reducer;
