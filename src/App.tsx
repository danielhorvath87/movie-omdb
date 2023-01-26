import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './app/components/ScrollToTop';
import SeoTags from './app/components/SeoTags';
import routes from './app/routes/index';
import { themeWithLanguage } from './app/theme';

const App = (): JSX.Element => {
  let renderRoutes = useRoutes(routes);
  const language = 'en';

  return (
    <HelmetProvider>
      <SeoTags />
      <ThemeProvider theme={themeWithLanguage(language)}>
        <CssBaseline />
        <ScrollToTop />
       {renderRoutes}
      </ThemeProvider>
      <Toaster />
    </HelmetProvider>
  );
};

export default App;
