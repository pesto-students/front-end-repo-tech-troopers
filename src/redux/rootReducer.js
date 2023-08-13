import { combineReducers } from '@reduxjs/toolkit';
import donateReducer from './features/donateSlice';
import ngoReducer from './features/ngoSlice';
import resourceReducer from './features/resourcesSlice';
import userReducer from './features/userSlice';
import volunteerReducer from './features/volunteerSlice';
import authSlice from './features/authSlice';

const rootReducer = combineReducers({
    user: userReducer,
    resources: resourceReducer,
    volunteers: volunteerReducer,
    ngoList: ngoReducer,
    donation: donateReducer,
    auth: authSlice
});

export default rootReducer;
