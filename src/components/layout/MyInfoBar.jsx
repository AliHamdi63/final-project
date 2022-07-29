import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Slide from "@mui/material/Slide";
import { Box, Container } from "@mui/system";
import MyAccount from "./MyAccount";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ height: 32, p: 0 }} elevation={0} enableColorOnDark>
          <Toolbar variant="string">
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Typography variant="body1" textAlign={"center"}>
                Welcome, Abderlrahman
              </Typography>

              <Box>
                <MyAccount></MyAccount>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
