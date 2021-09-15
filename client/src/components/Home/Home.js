import React from 'react';
import { Button, Card, Container, CardContent, CardActions, CardMedia, Grid, Fade, Link, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import jsaBanner from '../../images/jsaBanner.png';
import LaunchIcon from '@material-ui/icons/Launch';
const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6]; 
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Fade in timeout={1500}>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
              <img
                alt="JSA Logo"
                src={jsaBanner}
                className={classes.banner} />
              <Typography color="textSecondary" variant="h6" align="center">
              "<b>UCLA JSA's mission</b> is to provide students the opportunity to meet new people from differing backgrounds
              through our <Link href="./events" id="events-link">social events</Link>,
              to guide students in their career decisions through
              our <Link href="./career" id="career">professional events</Link>,
              and to create an open atmosphere so that students can have a memorable time at UCLA."
              </Typography>
          </Container>
        </div>
      </Fade>
      <Fade in timeout={1500}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h2" variant="h4" align="center" color="primary" gutterBottom>
            <b>What We Do</b>
          </Typography>
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Event Name
                    </Typography>
                    <Typography>
                      Give a brief description of the event.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fade>
      <Fade in timeout={800}>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              Want to join our club? Fill out the google form linked below and receive monthly
              newsletters, discounts for entrance fees, and more! 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}>
                    Membership Form
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Fade>
    </React.Fragment>
  );
};

export default Home;