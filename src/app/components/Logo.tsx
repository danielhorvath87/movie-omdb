import { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../routes/routes";
import Box from "./Box";
import Typography from "./Typography";

type Props = {
  size?: number;
};

const Logo: FC<Props> = ({ size = 2 }) => {
  return (
    <Box
      sx={{ background: "transparent" }}
      m={0}
      textAlign={"center"}
      borderRadius={1}
    >
      <Link to={Routes.HOME} style={{ textDecoration: "none" }}>
        <Typography fontWeight={900} fontSize={size + "rem"} letterSpacing={-1}>
          OMDb API
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
