import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material';
import { FC } from 'react';

const IconButton: FC<IconButtonProps> = ({ children, ...rest }) => {
  return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default IconButton;
