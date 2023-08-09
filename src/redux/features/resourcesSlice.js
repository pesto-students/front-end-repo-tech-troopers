import { createSlice } from '@reduxjs/toolkit';
import { fetchresourcesadmins, fetchresourcesuser } from './resourcesAction';

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
    },
    extraReducers: {
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
    }
});

export const {

    fetchResourcesSuccess,
    fetchResourcesStart
} = resourcesSlice.actions;

export default resourcesSlice.reducer;