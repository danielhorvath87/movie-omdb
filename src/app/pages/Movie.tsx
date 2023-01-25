import { Avatar } from '@mui/material';
import { isArray, isString } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Box from '../components/Box';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { Routes } from '../routes/routes';
import useMovie from './movie/useMovie';
import useSearch from './search/useSearch';

const Movie = (): JSX.Element => {
  const search = useSearch();
  const movie = useMovie();
  const navigate = useNavigate();

  return (
    <>
      {movie?.data?.result &&
        Object.entries(movie?.data?.result).map(([key, value]) => {
          if (key === 'Title' && isString(value)) {
            return <Typography key={key} variant="h1" mb={3}>{value}</Typography>;
          }

          if (key === 'Poster' && isString(value)) {
            return <Box key={key}><Avatar src={value} /></Box>;
          }

          if(isString(value)) {
            return <Typography key={key}>{key}: {value}</Typography>;
          }

          if(isArray(value)) {
            return <Typography key={key}>{key} {value?.map(( val, ii ) => val.Source)}</Typography>;
          }

          console.log('movie', key, value);
        })}

        <Button onClick={() => navigate(Routes.HOME)}>Back</Button>
    </>
  );
};

export default Movie;
