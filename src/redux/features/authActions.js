import axiosHelper from '../../axiosHelper';

import { createAsyncThunk } from '@reduxjs/toolkit';

const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const signupuser = createAsyncThunk(
    'auth/signup',
    async ({ name, email, role, password }, { rejectWithValue }) => {
        try {
            const data = await axiosHelper.post(
                '/users',
                {
                    name,
                    email,
                    password,
                    role,

                },
                CONFIG
            );
            localStorage.setItem('userToken', data.token);
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

export const signinuser = createAsyncThunk(
    'auth/signin',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const data = await axiosHelper.post(
                '/auth',
                {
                    email,
                    password,
                },
                CONFIG
            );
            localStorage.setItem('userToken', data.token);
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

export const addngodetails = createAsyncThunk(
    'auth/ngoDetails',
    async ({ address, ngoDetails, userId }, { rejectWithValue }) => {
        try {
            const data = await axiosHelper.patch(
                `/users/${userId}`, {
                address, ngoDetails
            },
                CONFIG

            )
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)