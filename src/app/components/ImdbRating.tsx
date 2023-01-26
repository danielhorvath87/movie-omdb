import { colors } from '@mui/material';
import { FC } from 'react';
import Box from './Box';
import Icon from './Icon';
import Typography from './Typography';

type Props = {
  rating: string;
  votes: string;
};

const ImdbRating: FC<Props> = ({ rating, votes }) => {
  return (
    <Box textAlign={'center'} border={`1px solid ${colors.grey['700']}`} borderRadius={'4px'} p={1}>
      <Typography fontWeight={900} fontSize={'0.7rem'} letterSpacing={'2px'} mb={1}>
        IMDb RATING
      </Typography>
      <Typography fontSize={'1.8rem'} fontWeight={900} letterSpacing={'0px'} display="inline">
        <Icon icon={'star'} color={colors.yellow[600]} /> {rating}
        <Typography
          fontSize={'1.2rem'}
          fontWeight={400}
          color={colors.grey['700']}
          letterSpacing={'-1px'}
          display="inline"
        >
          /10
        </Typography>
      </Typography>
      <Typography fontSize={'0.8rem'} mt={.4}>{votes}</Typography>
    </Box>
  );
};

export default ImdbRating;
