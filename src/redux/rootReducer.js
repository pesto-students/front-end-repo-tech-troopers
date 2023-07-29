import { combineReducers } from '@reduxjs/toolkit';
import donateReducer from './features/donateSlice';
import ngoReducer from './features/ngoSlice';
import resourceReducer from './features/resourcesSlice';
import userReducer from './features/userSlice';
import volunteerReducer from './features/volunteerSlice';

const rootReducer = combineReducers({
    user: userReducer,
    resources: resourceReducer,
    volunteer: volunteerReducer,
    ngoList: ngoReducer,
    donation: donateReducer,
});

export default rootReducer;
