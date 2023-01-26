import { FC } from 'react';
import useFavorites from '../pages/favorites/useFavorites';
import { MovieDetail } from '../pages/movie/movie';
import Icon from './Icon';
import IconButton from './IconButton';

type Props = {
  movie: MovieDetail;
};

const ButtonFavorite: FC<Props> = ({ movie }) => {
  const { setFavorite, isFavorite } = useFavorites();

  return (
    <IconButton onClick={() => setFavorite(movie)}>
      {(isFavorite(movie['imdbID']) && <Icon icon={'heart1'} />) || <Icon icon={'heart2'} />}
    </IconButton>
  );
};

export default ButtonFavorite;
