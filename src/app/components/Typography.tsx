import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { FC } from 'react';

const Typography: FC<TypographyProps> = ({ children, ...rest }) => {
  return <MuiTypography {...rest}>{children}</MuiTypography>;
};

export default Typography;
