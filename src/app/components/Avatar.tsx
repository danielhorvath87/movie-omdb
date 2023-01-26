import { Avatar as MuiAvatar, AvatarProps } from '@mui/material';
import { FC } from 'react';

const Avatar: FC<AvatarProps & {width?: number | string, height?: number | string}> = ({ width = 80, height = 80, ...rest }) => {
  return <MuiAvatar variant={'rounded'} sx={{ width: width, height: height}} {...rest} />;
};

export default Avatar;
