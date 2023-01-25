import { Button as MuiButton, ButtonProps } from '@mui/material';
import { FC } from 'react';

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
