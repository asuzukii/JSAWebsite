import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '', selectedFile: '', link: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData }));
        } else {
            dispatch(createPost({ ...postData }));
        }
        clear();
    }
    
    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', selectedFile: '', link: '' });
    }

    // if (!user?.result?.name) {
    //     return (
    //         <Paper>
    //             <Typography variant="h6" align="center">
    //                 Please log in first.
    //             </Typography>
    //         </Paper>
    //     )
    // }
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } Event</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    // TODO: use mems.dev -> still don't understand
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <TextField
                    name="link"
                    variant="outlined"
                    label="Event Link"
                    fullWidth
                    value={postData.link}
                    // TODO: use mems.dev -> still don't understand
                    onChange={(e) => setPostData({ ...postData, link: e.target.value})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth>
                    Submit
                </Button>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;