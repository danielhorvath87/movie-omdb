import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/state';
import { MovieDetail } from '../movie/movie';
import { IFavorites } from './favorites';

const initialState: IFavorites = {
  result: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    result: (state, action) => {
      state.result = action.payload;
    },
  },
});

const useFavorites = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.favorites);

  const isFavorite = (imdbID: MovieDetail['imdbID']) => {
    const result = data?.result?.find(
      (item: { imdbID: MovieDetail['imdbID'] }) => item.imdbID === imdbID,
    );
    return (result && result) || false;
  };

  const setFavorite = (movie: MovieDetail) => {
    const { imdbID } = movie;

    if (isFavorite(imdbID)) {
      dispatch({
        type: 'favorites/result',
        payload: data.result.filter((item: MovieDetail) => item.imdbID !== imdbID),
      });
    }

    if (!isFavorite(imdbID)) {
      dispatch({ type: 'favorites/result', payload: [...data.result, movie] });
    }
  };

  return {
    data,
    isFavorite,
    setFavorite,
  };
};

export default useFavorites;
