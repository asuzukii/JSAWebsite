import React from 'react';
import { Box, Container, Fade, Grid, Typography } from '@material-ui/core';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

import useStyles from './styles.js';

const Contact = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
        {/* Hero unit */}
        <Fade in timeout={800}>
            <Typography
                className={classes.heroCardMedia}
                component="h1"
                variant="h2"
                align="center"
                color="inherit" gutterBottom>
                <Fade in timeout={800}><b>CONTACT US</b></Fade>
            </Typography>
        </Fade>
        {/* Contact Information Box */}
        <Fade in timeout={800}>
            <Container maxWidth="xs" className={classes.container}>
            <div className={classes.root}>
                <Box className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <SendOutlinedIcon className={classes.contactInfo}/>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        For General Questions
                                    </Typography>
                                    <Typography variant="body1">
                                        Yuka Kozakai <br/>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        President
                                    </Typography>
                                    <div className={classes.mailDiv}>
                                        <MailOutlineIcon fontSize="small" />
                                        <Typography variant="body2">
                                            jsa.ucla@gmail.com
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <WorkOutlineOutlinedIcon className={classes.contactInfo}/>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        For Career Questions/Inquiries
                                    </Typography>
                                    <Typography variant="body1">
                                        Yuriko Sanno
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        Career Team Head
                                    </Typography>
                                    <div className={classes.mailDiv}>
                                        <MailOutlineIcon fontSize="small"/>
                                        <Typography variant="body2">
                                            jsacareer.ucla@gmail.com
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <DirectionsWalkIcon className={classes.contactInfo}/>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        For Campus Tour Inquiries
                                    </Typography>
                                    <Typography variant="body1">
                                        Sae Tsunawaki
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        Campus Tour Team Head
                                    </Typography>
                                    <div className={classes.mailDiv}>
                                        <MailOutlineIcon fontSize="small"/>
                                        <Typography variant="body2">
                                            jsacareer.ucla@gmail.com
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            </Container>
        </Fade>
        <br /><br /><br /><br /><br />
    </React.Fragment>
  );
}

export default Contact;