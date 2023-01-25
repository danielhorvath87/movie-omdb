import { colors } from '@mui/material';

const MuiDataGrid = {
  styleOverrides: {
    columnHeaders: {
      background: colors.grey['900'],
    },
    columnHeaderTitle: {
      color: colors.yellow[600],
      fontWeight: 900
    },
    row: {
      cursor: 'pointer',
    },
  },
};

export default MuiDataGrid;
