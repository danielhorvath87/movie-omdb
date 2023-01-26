import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice } from '../pages/favorites/useFavorites';
import { searchSlice } from '../pages/search/useSearch';
import { movieSlice } from './../pages/movie/useMovie';

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    movie: movieSlice.reducer,
    favorites: favoritesSlice.reducer
  },
});
