import { colors, Stack } from '@mui/material';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../routes/routes';

export const ArrayNavigation: Record<string, { name: string, pathname: string }> = {
  search: { name: 'Search', pathname: Routes.HOME },
  favorites: { name: 'Favorites', pathname: Routes.FAVORITES },
};

const Navigation: FC = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <Stack spacing={2} direction={'row'}>
      {Object.entries(ArrayNavigation).map((key, value) => (
        <Link
          key={value}
          to={key[1]['pathname']}
          state={{
            slug: key[0],
          }}
          style={{ color: colors.grey['900'], fontWeight: 700, textDecoration: key.includes(state?.slug) && 'underline' || 'none'}}
        >
          {key[1]['name']} 
        </Link>
      ))}
    </Stack>
  );
};

export default Navigation;
