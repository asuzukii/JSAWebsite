import React from 'react';
import { Box, Button, Container, CardMedia,
  Grid, Fade, Typography } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LaunchIcon from '@material-ui/icons/Launch';
import useStyles from './styles.js';
import Amazon from '../../images/Companies/Amazon.jpg';
import Bain from '../../images/Companies/Bain.png';
import Deloitte from '../../images/Companies/Deloitte.png';
import Itochu from '../../images/Companies/Itochu.png';
import KPMG from '../../images/Companies/KPMG.png';
import Mitsubishi from '../../images/Companies/Mitsubishi.jpg';
import PwC from '../../images/Companies/PwC.jpg';
import Recruit from '../../images/Companies/Recruit.png';
import Softbank from '../../images/Companies/Softbank.PNG';
import McKinsey from '../../images/Companies/McKinsey.webp';
import EY from '../../images/Companies/EY.png';
import MUFG from '../../images/Companies/MUFG.png';

const Career = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* **Hero unit** */}
      <Fade in timeout={800} >
        <Typography
          className={classes.heroCardMedia}
          component="h1"
          variant="h2"
          align="center"
          color="inherit" gutterBottom>
          <Fade in timeout={800}><b>CAREER TEAM</b></Fade>
        </Typography>
      </Fade>
      {/* Description/Buttons */}
      <Fade in timeout={800}>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              variant="h6"
              align="center"
              color="textSecondary" 
              gutterBottom
              paragraph>
              Our club hosts numerous career workshops and exclusive
              recruiting events for our members. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} align="center" direction="column">
                <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary" 
                  paragraph>
                  Recruit UCLA's most capable Japanese/English Bilinguals.
                </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="mailto:jsacareer.ucla@gmail.com"
                    endIcon={<MailOutlineIcon />}>
                    Inquiries about recruiting JSA students
                  </Button>
                </Grid>
                <Grid item>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary" 
                    paragraph>
                    Our events are mainly posted on our JSA Career Facebook Page first.
                    Join to keep updated with the latest events.
                  </Typography>
                  <Button variant="contained" color="primary" endIcon={<LaunchIcon />}>
                    JSA Career Facebook Page
                  </Button>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary" 
                    paragraph>
                    Want to get connected with the alumni and fellow recruiting students?
                    Sign up below!
                  </Typography>
                  <Button variant="contained" color="primary" endIcon={<LaunchIcon />}>
                    Sign up for the Career Slack Channel
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Typography
              component="h2"
              variant="h4"
              align="center"
              color="primary"
              gutterBottom>
              <b>Recruiters Come From...</b>
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Amazon}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Bain}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Deloitte}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Itochu}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KPMG}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Mitsubishi}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={PwC}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Recruit}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Softbank}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={McKinsey}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={EY}
                    title="Person Name"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
            <Box className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={MUFG}
                title="Person Name"
              />
            </Box>
          </Grid>
            </Grid>
          </Container>
        </div>
      </Fade>
      {/* **Schedule Calendar** */}
      <Container className={classes.cardGrid} maxWidth="md" align="center">
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom>
          <b>Upcoming Events at a Glance</b>
        </Typography>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=asuzuki100%40g.ucla.edu&ctz=America%2FLos_Angeles"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no" />
      </Container>
      {/* **Note Articles** */}
      <Container maxWidth="sm" align="center">
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom>
          <b>Note Articles</b>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph>
          These articles are here to help anyone out in getting to know a
          specific industry or learning how to prepare for upcoming career
          fairs. You can click on the article boxes to read them, or
          click <a href="https://note.com/ucla_jsa_career">here</a> to
          go to see all the articles.
        </Typography>
        <div className={classes.card}>
          <iframe
            className={classes.noteIframe}
            src="https://note.com/embed/notes/nf7494c868607"/>
          <iframe
            className={classes.noteIframe}
            src="https://note.com/embed/notes/n011cd3c4e6a1"/>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Career;