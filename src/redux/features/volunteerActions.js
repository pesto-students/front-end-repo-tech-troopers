import axiosHelper from '../../axiosHelper';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchvolunteersuser = createAsyncThunk(
    'volunteers/fetchvolunteersuser', // Provide a unique action name
    async (_, { rejectWithValue }) => { // You're not using the first parameter, so use "_"
        try {
            // Modify queryParams if needed

            const data = await axiosHelper.get(
                '/voluntary',
                {
                    // You can add request options here
                },
                CONFIG
            );
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const fetchvolunteersadmins = createAsyncThunk(
    'volunteers/fetchvolunteersadmins',
    async ({ userId }, { rejectWithValue }) => {
        try {
            const queryParams = {};
            queryParams.userId = userId;


            const data = await axiosHelper.get(
                '/voluntary/admin',
                {
                    params: queryParams,
                },
                CONFIG
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }

);


