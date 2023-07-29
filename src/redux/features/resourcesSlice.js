import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    resources: [],
    loading: false,
    error: null,
}

const resourcesSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
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
    }
});

export const {

    fetchResourcesSuccess,
    fetchResourcesStart
} = resourcesSlice.actions;

export default resourcesSlice.reducer;