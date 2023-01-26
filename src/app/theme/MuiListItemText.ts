import { colors } from "@mui/material";

const MuiListItemText = {
  styleOverrides: {
    primary: {
      fontWeight: 600,
      fontSize: "1.2rem",
      color: colors.grey["900"],
      marginBottom: '0.5rem'
    },
    secondary: {
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: '1.4rem',
      color: colors.grey["900"],
    },
  },
};

export default MuiListItemText;
