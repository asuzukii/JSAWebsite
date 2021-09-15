import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Typography, AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useDispatch } from "react-redux";
import useStyles from './styles.js';
import jsaBanner from '../../images/JSA_Banner.png';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
    
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      color: trigger ? 'inherit' : 'transparent',
    //   background: trigger ? 'white' : 'transparent'
    });
  }
  
const Navbar = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }
    
    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <div className={classes.brandContainer}>
                        {/* TODO: find an image suitable for heading */}
                        <Link to="/">
                        <img
                        src={jsaBanner}
                        className={classes.banner} /></Link>
                        <Toolbar className={classes.toolbar}>
                            <Button className={classes.button} size="medium" component={Link} to="/about"><Typography fontSize="md"><b>About</b></Typography></Button>
                            <Button className={classes.button} size="medium" component={Link} to="/career"><Typography fontSize="md"><b>Career</b></Typography></Button>
                            <Button className={classes.button} size="medium" component={Link} to="/events"><Typography fontSize="md"><b>Events</b></Typography></Button>
                            <Button className={classes.button} size="medium" component={Link} to="/membership"><Typography fontSize="md"><b>Alumni</b></Typography></Button>
                            <Button className={classes.button} size="medium" component={Link} to="/contact"><Typography fontSize="md"><b>Contact</b></Typography></Button>
                            <IconButton
                                size='small'
                                href="https://www.facebook.com/groups/218855944944721"
                                target="_blank"
                                rel="noopener">
                                <FacebookIcon color="secondary" fontSize="medium"/></IconButton>
                            <IconButton
                                size='small'
                                href="https://www.instagram.com/ucla.jsa/?hl=en"
                                target="_blank"
                                rel="noopener">
                                <InstagramIcon color="secondary" fontSize="medium" /></IconButton>
                            {user && (
                                <>
                                    <Toolbar className={classes.admin}>
                                        <SupervisorAccountIcon className={classes.admin} color="secondary" fontSize="medium" />
                                        <Typography color="secondary" fontSize="md" className={classes.admin}><b>ADMIN MODE</b></Typography>
                                        <Button variant="contained" color="primary" className={classes.admin} onClick={logout}>Log Out</Button>
                                    </Toolbar>
                                </>
                            )}
                        </Toolbar>
                    </div>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
        
    );
};

export default Navbar;