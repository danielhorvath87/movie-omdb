import { DataGrid as MuiDataGrid, DataGridProps } from '@mui/x-data-grid';
import { FC } from 'react';

const DataGrid: FC<DataGridProps> = ({ ...rest }) => {
  return <MuiDataGrid rowHeight={100}  {...rest} />;
};

export default DataGrid;
