import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/state';

const initialState: State['search'] = {
  result: null,
  page: 0,
  query: '',
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    result: (state, action) => {
      state.result = action.payload;
    }
  },
});

const useFavorites = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.favorites);


  const updateList = () => {
//
  }

  return {
    data,
    updateList
  };
};

export default useFavorites
