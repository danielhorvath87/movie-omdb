import { colors } from '@mui/material';

const MuiDrawer = {
  styleOverrides: {
    root: {
      '& .MuiPaper-root': {
        color: '#515B69',
        background: '#F6F9FC',
        borderRight: `1px solid ${colors.grey['300']}`,

        '& .MuiListItemIcon-root': {
          color: '#515B69',
          minWidth: '32px',
        },
        '& .MuiListItemText-root span': {
          fontWeight: 400,
          fontSize: '.9rem',
        },
        '& .MuiListItemButton-root': {
          color: '#515B69',
          padding: '0.25rem 2rem',
        },
      },
    },
  },
};

export default MuiDrawer;
