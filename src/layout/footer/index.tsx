import React from "react";
import { Container, Hidden, Typography, Grid } from "@mui/material";
import { Divider } from "antd";

const Footer = () => {
  return (
    <Container maxWidth="100vw" disableGutters className="py-6">
      <Hidden smDown>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={3}>
              <Typography>Download</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Company</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Contact Us</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Get in Touch</Typography>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Divider className="m-0" />
      <Typography align="center">All right reserve evaly</Typography>
    </Container>
  );
};

export default React.memo(Footer);
