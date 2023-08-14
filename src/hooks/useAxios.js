import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, method = 'GET', requestBody = {}) => {
    setLoading(true);
    setError(null);
    const BASE_URL = 'https://brighter-days.onrender.com/api';
    let url = `${BASE_URL}/${endpoint}`;

    try {
      const response = await axios({
        method,
        headers: {
          'x-auth-token': `${localStorage.getItem('userToken')}`, // Set the default content type for requests
        },
        url,
        data: requestBody,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (endpoint, requestBody) => {
    await fetchData(endpoint, 'POST', requestBody);
  };

  const patchData = async (endpoint, requestBody) => {
    await fetchData(endpoint, 'PATCH', requestBody);
  };

  const deleteData = async (endpoint) => {
    await fetchData(endpoint, 'DELETE');
  };

  return { data, loading, error, fetchData, postData, patchData, deleteData };
};

export default useAxios;
