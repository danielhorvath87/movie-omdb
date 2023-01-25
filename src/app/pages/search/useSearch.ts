import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandle from '../../hooks/useErrorHandle';
import { State } from '../../types/state';
import axiosInstance from '../../utils/axiosInstance';

const initialState: State['search'] = {
  result: null,
  page: 0,
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    result: (state, action) => {
      state.result = action.payload;
    },
    query: (state, action) => {
      state.query = action.payload;
    },
    page: (state, action) => {
      state.page = action.payload;
    },
  },
});

const useSearch = () => {
  const err = useErrorHandle();
  const axios = axiosInstance();
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.search);

  const setQuery = (value: string) => {
    dispatch({ type: 'search/query', payload: value });
  };

  const setPage = (value: number) => {
    dispatch({ type: 'search/page', payload: value });
  };

  const getList = () => {
    axios
      .get(`/?s=${data.query}&page=${data.page + 1}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((_response) => {
        dispatch({
          type: 'search/result',
          payload: { ..._response.data, ['totalResults']: parseInt(_response.data.totalResults) },
        });
      })
      .catch((error) => {
        err.handle(error);
      });
  };

  const getItem = (imdbID: string) => {
    console.log(imdbID)
  };

  return {
    data,
    getList,
    getItem,
    setQuery,
    setPage,
  };
};

export default useSearch;