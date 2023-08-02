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
            await axiosHelper.post(
                '/users',
                {
                    name,
                    email,
                    password,
                    role,

                },
                CONFIG
            );
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
            await axiosHelper.post(
                '/auth',
                {
                    email,
                    password,
                },
                CONFIG
            );
            localStorage.setItem('userToken', data.userToken);
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
