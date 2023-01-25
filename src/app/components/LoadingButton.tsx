import { LoadingButton as MuiLoadingButton, LoadingButtonProps } from '@mui/lab';
import { FC } from 'react';

const LoadingButton: FC<LoadingButtonProps> = ({ children, ...rest }) => {
  return <MuiLoadingButton {...rest}>{children}</MuiLoadingButton>;
};

export default LoadingButton;
