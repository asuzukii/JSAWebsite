import React, { useState, useEffect } from 'react';
import { Button, Container, Fade, Grid, Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from './styles.js';
import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';

const Events = () => {
    const [currentId, setCurrentId] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    
    const dispatch = useDispatch();
    useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
      dispatch(getPosts());
      }, [currentId, location, dispatch]);
    const classes = useStyles();
    
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
        {/* Hero unit */}
        <Fade in timeout={800} >
          <Typography
            className={classes.heroCardMedia}
            component="h1"
            variant="h2"
            align="center"
            color="inherit" gutterBottom>
              <Fade in timeout={800}><b>JSA EVENTS</b></Fade>
            </Typography>
        </Fade>
        <Fade in timeout={800}>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h5" align="center" color="secondary" gutterBottom>
              Newest Event on 11/20!
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              This would be the event description. For example, below if you click the sign
              up button, it should take the user to the Facebook event page. It is connected
              to the 新UCLA生 説明会 page. This is currently hardcoded, but in the future,
              I am going to make it so that anyone can easily have an event pinned on the 
              top of the events page.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<LaunchIcon />}>
                    Sign up for the Event on the Facebook Page
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </Fade>
        <Fade in>
            <Container maxWidth="lg">
                <Typography
                  component="h2"
                  variant="h4"
                  align="center"
                  color="primary"
                  gutterBottom>
                  <b>Past Events</b>
                </Typography>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    {user && (
                      <>
                        <Grid item xs={12} sm={6}>
                          <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                      </>
                    )}
                </Grid>
            </Container>
        </Fade>
    </React.Fragment>
  );
}

export default Events;