import mongoose from 'mongoose';

// change this schema to require different types of
// entries in the database -> this would probs be
// where the newsletter entry would be
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number, 
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// ?? 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;