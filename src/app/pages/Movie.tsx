import { Grid, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import ButtonFavorite from '../components/ButtonFavorite';
import ImdbRating from '../components/ImdbRating';
import Typography from '../components/Typography';
import { Routes } from '../routes/routes';
import useMovie from './movie/useMovie';

const Movie = (): JSX.Element => {
  const movie = useMovie();
  const navigate = useNavigate();
  const {
    data: { result },
  } = movie;

  if (!result) {
    return <Typography>No movie data</Typography>;
  }

  return (
    <>
      <Grid container spacing={1} justifyContent={'space-between'}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" mb={3}>
            {result['Title']} <ButtonFavorite movie={result} />
          </Typography>
          <Typography>
            {result['Year']} | {result['Rated']} | {result['Runtime']}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={'auto'} alignItems={'center'}>
          <ImdbRating rating={result['imdbRating']} votes={result['imdbVotes']} />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} md={4}>
          <Avatar alt={result['Title']} src={result['Poster']} width={'auto'} height={'auto'} />
        </Grid>
        <Grid item xs={12} md={8}>
          <List disablePadding>
            <ListItem disableGutters divider>
              <ListItemText secondary={result['Plot']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Awards" secondary={result['Awards']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Director" secondary={result['Director']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Writer" secondary={result['Writer']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Actors" secondary={result['Actors']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Genre" secondary={result['Genre']} />
            </ListItem>
            <ListItem disableGutters divider>
              <ListItemText primary="Released" secondary={result['Released']} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button variant={'contained'} onClick={() => navigate(Routes.HOME)}>
            Back
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Movie;
