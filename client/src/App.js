import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';
import About from './components/About/About.js';
import Career from './components/Career/Career.js';
import Events from './components/Events/Events.js';
import Membership from './components/Membership/Membership.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

// this function scrolls each page back up to top which
// doesn't happen by default
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
const App = () => {
    const classes = useStyles();
    return (
    <BrowserRouter>
        <Container className={classes.container}>
            <Navbar />
            <ScrollToTop />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/career" exact component={Career} />
                <Route path="/events" exact component={Events} />
                <Route path="/membership" exact component={Membership} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
            <Footer />
        </Container>
    </BrowserRouter>
    );
};

export default App; 