import React from 'react';
import { Button, Container, Fade, Grid, Typography } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import useStyles from './styles.js';

const Membership = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Fade in timeout={1000}>
        <Typography
          className={classes.heroCardMedia}
          component="h1"
          variant="h2"
          align="center"
          color="inherit" gutterBottom>
          <Fade in timeout={800}><b>ALUMNI</b></Fade>
        </Typography>
      </Fade>
      <Fade in timeout={800}>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              Stay connected to our newest events and help out in expanding our network!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}>
                    * Should be a Email Input *
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Fade>
    </React.Fragment>
  );
}

export default Membership;