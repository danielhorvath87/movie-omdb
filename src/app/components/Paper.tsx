import { Paper as MuiPaper, PaperProps } from '@mui/material';
import { FC } from 'react';

const Paper: FC<PaperProps> = ({ children, ...rest }) => {
  return <MuiPaper {...rest}>{children}</MuiPaper>;
};

export default Paper;
