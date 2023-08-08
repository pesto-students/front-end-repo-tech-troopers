import axiosHelper from '../../axiosHelper';

import { createAsyncThunk } from '@reduxjs/toolkit';

const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const fetchresourcesuser = createAsyncThunk(
    'resources/user',
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

export const fetchresourcesadmins = createAsyncThunk(
    'resources/',
    async ({ }, { rejectWithValue }) => {
        try {
            const data = await axiosHelper.get(
                '/resource',
                {

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

