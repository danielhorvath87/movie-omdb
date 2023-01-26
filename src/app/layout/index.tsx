import { AppBar, Container, CssBaseline, Grid, Toolbar } from '@mui/material';
import { FC } from 'react';
import Box from '../components/Box';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" elevation={0}>
        <Container maxWidth={'lg'} sx={{ py: { xs: 2, sm: 3 } }}>
          <Grid container justifyContent={'space-between'} alignItems={'center'} spacing={2}>
            <Grid item xs={12} sm={'auto'}>
              <Logo />
            </Grid>
            <Grid item xs={12} sm={'auto'}>
              <Navigation />
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={'lg'}>
          <Toolbar sx={{ height: { xs: 130, sm: 100 } }} />
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
