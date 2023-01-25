import { colors } from "@mui/material";

const MuiAppBar = {
  styleOverrides: {
    root: {
      background: '#fff',
      color: colors.grey[900],
      borderBottom: '1px solid ' + colors.grey['900'],
    }
  }
};

export default MuiAppBar;
