import { colors } from "@mui/material";

const fontFamily = `-apple-system, -apple-system, 
BlinkMacSystemFont, 'Segoe UI', Roboto, 
Oxygen, Ubuntu, Cantarell, 'Open Sans', 
'Helvetica Neue', sans-serif`;

const MuiTypography = {
  h1: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: colors.grey["900"],
    fontFamily: fontFamily,
  },
  h2: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: colors.grey["900"],
  },
  h3: {
    fontSize: "1.53125rem",
    color: colors.grey["900"],
  },
  h4: {
    fontSize: "0.7rem",
    margin: 0,
    color: colors.grey["900"],
  },
  h5: {
    fontSize: "1.3rem",
    fontWeight: 900,
    margin: 0,
    color: colors.grey["900"],
  },
  h6: {
    fontSize: "0.7rem",
    margin: 0,
    color: colors.grey["900"],
  },
  body1: {
    fontSize: "0.9rem",
    color: colors.grey["900"],
  },
  body2: {
    fontSize: "0.9rem",
    color: colors.grey["900"],
  },
};

export default MuiTypography;
