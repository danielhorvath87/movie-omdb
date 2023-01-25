import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useErrorHandle from '../../hooks/useErrorHandle';
import { State } from '../../types/state';
import axiosInstance from '../../utils/axiosInstance';

const initialState: State['movie'] = {
  result: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    result: (state, action) => {
      state.result = action.payload;
    },
  },
});

const useSearch = () => {
  const navigate = useNavigate()
  const err = useErrorHandle();
  const axios = axiosInstance();
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.movie);

  const getItem = (imdbID: string) => {
    axios
      .get(`/?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((_response) => {
        dispatch({
          type: 'movie/result',
          payload: _response.data,
        });
        navigate(`/movie/${imdbID}`, { state: { slug: 'movie', imdbID: imdbID } })
      })
      .catch((error) => {
        err.handle(error);
      });
  };

  return {
    data,
    getItem,
  };
};

export default useSearch;
