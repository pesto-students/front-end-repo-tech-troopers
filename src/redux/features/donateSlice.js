// donationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    donations: [], // Array to store the list of donations
    loading: false, // Flag to indicate if data is being fetched
    error: null, // Error message if there's an issue with fetching data
};

const donationSlice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        fetchDonationsSuccess(state, action) {
            state.donations = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDonationsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// donationSlice.js
export const { fetchDonationsSuccess, fetchDonationsFailure } = donationSlice.actions;

export default donationSlice.reducer;
