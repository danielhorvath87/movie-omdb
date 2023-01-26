import { colors, Grid } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../routes/routes';

export const ArrayNavigation: Record<string, { name: string; pathname: string }> = {
  search: { name: 'Search', pathname: Routes.HOME },
  favorites: { name: 'Favorites', pathname: Routes.FAVORITES },
};

const Navigation: FC = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <Grid container spacing={2} textAlign={'center'}>
      {Object.entries(ArrayNavigation).map((key, value) => (
        <Grid key={value} item xs={6} sm={'auto'}>
          <Link
            
            to={key[1]['pathname']}
            state={{
              slug: key[0],
            }}
            style={{
              color: colors.grey['900'],
              fontWeight: 700,
              textDecoration: (key.includes(state?.slug) && 'underline') || 'none',
            }}
          >
            {key[1]['name']}
          </Link>
        </Grid>
      ))}
    </Grid>
  );

  /* return (
    <Stack spacing={2} direction={'row'} alignContent={'center'} alignItems={'center'}>
     
    </Stack>
  ); */
};

export default Navigation;
