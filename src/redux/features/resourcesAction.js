import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosHelper from '../../axiosHelper';

const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchresourcesuser = createAsyncThunk(
  'resources/',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await axiosHelper.get(
        `/resource/${userId}`,
        {

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

export const fetchresourcesadmins = createAsyncThunk(
  'resources/fetchResources',
  async ({ city, search, filter }, { rejectWithValue }) => {
    try {
      const queryParams = {};
      if (city) {
        queryParams.city = city;
      }
      if (search) {
        queryParams.search = search;
      }
      if (filter) {
        queryParams.filter = filter;
      }

      const data = await axiosHelper.get(
        '/resource',
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
