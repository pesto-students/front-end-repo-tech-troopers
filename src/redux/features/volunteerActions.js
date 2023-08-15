import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosHelper from '../../axiosHelper';

const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': `${localStorage.getItem('userToken')}`
  },
};

export const fetchvolunteersadmins = createAsyncThunk(
  '/voluntary/admin',
  async ({ }, { rejectWithValue }) => {
    try {
      const queryParams = {};

      const data = await axiosHelper.get(
        '/voluntary/admin',
        {
          params: queryParams,
        },
        CONFIG,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const fetchvolunteersuser = createAsyncThunk(
  'uservolunteers', // Provide a unique action name
  async ({ search, filter }, { rejectWithValue }) => { // You're not using the first parameter, so use "_"
    try {
      // Modify queryParams if needed
      const queryParams = {};
      if (search) {
        queryParams.search = search;
      }
      if (filter) {
        queryParams.filter = filter;
      }
      const data = await axiosHelper.get(
        '/voluntary',
        {
          params: queryParams,
        },
        CONFIG,
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

