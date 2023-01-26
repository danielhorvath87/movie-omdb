import { colors } from "@mui/material";

const MuiButton = {
  styleOverrides: {
    text:{
      padding: 0,
      textDecoration: 'underline',
      fontWeight: 600
    },
    containedPrimary: {
      color: '#000',
      background: colors.yellow[600],
      fontWeight: 600,

      '&:hover': {
        background: '#b78d13',
      }
    },
    containedSecondary: {
      color: '#fff',
      background: '#DC3444',

      '&:hover': {
        background: '#9c2530',
      }
    },
    contained: {
      boxShadow: 'none',
    },
  },
};

export default MuiButton;
