import { Grid } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import Avatar from '../components/Avatar';
import DataGrid from '../components/DataGrid';
import Typography from '../components/Typography';
import useFavorites from './favorites/useFavorites';
import { Movie } from './search/search';
import useSearch from './search/useSearch';

const Favorites = (): JSX.Element => {
  const search = useSearch();
  const favorites = useFavorites()

  const columns: GridColDef[] = [
    {
      field: 'Poster',
      headerName: Movie.POSTER,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <Avatar alt={params.row.Title} src={params.value} />,
    },
    {
      field: 'Title',
      headerName: Movie.TITLE,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 500
    },
    {
      field: 'Type',
      headerName: Movie.TYPE,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
    {
      field: 'Year',
      headerName: Movie.YEAR,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
    {
      field: 'imdbID',
      headerName: Movie.IMDBID,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="space-between">
      <Grid item xs={12} md={8}>
        <Typography variant="h1">Favorites</Typography>
      </Grid>
  
      <Grid item xs={12}>
        <DataGrid
          getRowId={() => Math.random()}
          columns={columns}
          rows={favorites.data?.result || []}
          onRowClick={(param) => search.getItem(param.row.imdbID)}
          pagination
          rowCount={favorites.data?.result?.length || 0}
          rowsPerPageOptions={[5, 25, 50, 75, 100]}
          autoHeight={true}
          pageSize={25}
        />
      </Grid>
    </Grid>
  );
};

export default Favorites;
