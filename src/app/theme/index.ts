import { colors } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deDE, enUS } from '@mui/x-data-grid';
import { merge } from 'lodash';
import MuiAppBar from './MuiAppBar';
import MuiButton from './MuiButton';
import MuiDataGrid from './MuiDataGrid';
import MuiDrawer from './MuiDrawer';
import MuiListItemText from './MuiListItemText';
import MuiPalette from './MuiPalette';
import MuiTypography from './MuiTypography';

interface ThemeOptionsProps {
  components?: Record<string, unknown>;
  typography?: Record<string, unknown>;
  palette?: Record<string, unknown>;
}

export const THEMES = {
  name: 'APP'
};

const ThemeOptions: ThemeOptionsProps = {
  typography: MuiTypography,
  palette: MuiPalette,
  components: {
    MuiDrawer,
    MuiButton,
    MuiAppBar,
    MuiListItemText,
    MuiDataGrid,
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.grey[900],
          color: '#fff',
          cursor: 'pointer',
    
          '& .MuiTypography-body1': {
            color: '#fff'
          },
          '& .MuiTypography-h5': {
            color: '#fff' 
          }
        }
      }
    }
  },
};

const getLanguage = (language: string) => {
  return language ? (language === 'de' ? deDE : enUS) : enUS;
};

const theme = (language: string) =>
  createTheme(merge(ThemeOptions), { direction: 'ltr' }, getLanguage(language));

export const themeWithLanguage = (language: 'de' | 'en') => responsiveFontSizes(theme(language));
export default responsiveFontSizes(theme('en'));
