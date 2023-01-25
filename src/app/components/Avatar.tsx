import { Avatar as MuiAvatar, AvatarProps } from '@mui/material';
import { FC } from 'react';

const Avatar: FC<AvatarProps> = ({ ...rest }) => {
  return <MuiAvatar variant={'rounded'} sx={{ width: 80, height: 80 }} {...rest} />;
};

export default Avatar;
