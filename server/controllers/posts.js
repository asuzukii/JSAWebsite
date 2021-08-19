/* file that has the logic for the routes in posts.js */
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        // we search the whole DB, so it'll take time hence we
        // want to use the await keyword to guarantee sequential execution
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    res.send('GET POSTS!');
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(post);
    
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.send('POST CREATION!');
}