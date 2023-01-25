import { Box as MuiBox, BoxProps } from '@mui/material';
import { FC } from 'react';

const Box: FC<BoxProps> = ({ children, ...rest }) => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

export default Box;
