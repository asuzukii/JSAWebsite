import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Input from './Input';
import { signup, login } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '',
                        password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isSignUp, setSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, history));
        } else {
            dispatch(login(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setSignUp((previsSignUp) => !previsSignUp);
        handleShowPassword(false);
    };
    // TODO: if we do want to do sign ups, implement here
    // check https://youtu.be/LKlO8vLvUao?t=1875
    // in the future, we could do the Google Sign In as well
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up" : "Log In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half></Input>
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email" />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password" }
                            handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={showPassword ? "text" : "password" }></Input>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>{isSignUp ? "Sign Up" : "Log In"}</Button>
                        <Grid containter justify="flex-end">
                            <Button onClick={switchMode}>
                                {isSignUp ? "log in instead": "sign up instead" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
