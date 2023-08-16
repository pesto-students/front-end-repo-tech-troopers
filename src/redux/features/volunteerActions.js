import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosHelper from '../../axiosHelper';

const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': `${localStorage.getItem('userToken')}`,
  },
};

export const fetchvolunteersadmins = createAsyncThunk(
  'volunteer/',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosHelper.get(
        '/voluntary/admin',
        {
        },
        {},
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const fetchvolunteersuser = createAsyncThunk(
  'volunteer/uservolunteers', // Provide a unique action name
  async ({ search, filter }, { rejectWithValue }) => {
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
