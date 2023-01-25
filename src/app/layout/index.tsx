import { AppBar, Container, CssBaseline, Grid, Toolbar } from "@mui/material";
import { FC } from "react";
import Box from "../components/Box";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" elevation={0}>
        <Container maxWidth={"lg"} sx={{ py: 1 }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={0}
          >
            <Grid item>
              <Logo />
            </Grid>

            <Grid item>
              <Navigation />
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ height: 100 }} />
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
