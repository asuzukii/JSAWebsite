import React, { useState, useEffect } from 'react';
import { Card, ButtonBase, CardActions, CardMedia, Button, IconButton, Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <Card className={classes.card}>
            <ButtonBase
                href={post.link}
                target={"_blank"}
                rel={"noopener"}
                focusRipple
                className={classes.media}
                focusVisibleClassName={classes.focusVisible}>
                <span className={classes.imageSrc} style={{backgroundImage: `url(${post.selectedFile})`}}></span>
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="h5"
                        color="inherit"
                        className={classes.imageTitle}>
                        {post.title}
                    </Typography>
                </span>
                {/* This is the time created element- commented out but could bring back if needed */}
                {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}

            </ButtonBase>
            {user && (
                <div className={classes.overlay2}>
                <IconButton style={{color: 'white'}} size="medium" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="medium" />
                </IconButton>
                <IconButton size="medium" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="medium" />
                </IconButton>
                </div>
            )}
        </Card>
    );
}

export default Post;