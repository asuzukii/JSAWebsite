import React from 'react';
import { Container, IconButton, Link, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          JSA UCLA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container align="center">
          <Typography variant="h6" align="center">
            Japanese Student Association at UCLA
          </Typography>
          <div>
            <IconButton
                size='small'
                href="https://www.facebook.com/groups/218855944944721"
                target="_blank"
                rel="noopener">
                <FacebookIcon color="secondary" fontSize="large"/></IconButton>
            <IconButton
                size='small'
                href="https://www.instagram.com/ucla.jsa/?hl=en"
                target="_blank"
                rel="noopener">
                <InstagramIcon color="secondary" fontSize="large" /></IconButton>
          </div>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Footer;