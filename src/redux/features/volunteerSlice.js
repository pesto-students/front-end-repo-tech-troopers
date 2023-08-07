import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    oppurtunities: [],
    loading: false,
    error: null,
}

const volunteeringSlice = createSlice({
    name: 'volunteer',
    initialState,
    reducers: {
        fetchVolunteeringOppurtunitiesStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchVolunteeringOppurtunitiesSuceess(state, action) {
            state.loading = false;
            state.oppurtunities = action.payload
        },
        fetchVolunteeringOppurtunitiesFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {
    fetchVolunteeringOppurtunitiesStart,
    fetchVolunteeringOppurtunitiesSuceess,
    fetchVolunteeringOppurtunitiesFailure
} = volunteeringSlice.actions;

export default volunteeringSlice.reducer;