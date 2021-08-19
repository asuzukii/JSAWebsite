import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// the posts.js file is ran every time the /posts is accessed
app.use('/posts', postRoutes);

// we are going to secure this later
const MONGO_DB_URL = 'mongodb+srv://jasbruins:UCLAJSA123@cluster0.vcule.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// attempts to connect to the given url, then listens to the given port if successful
mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
        // otherwise log the error.
        .catch((error) => console.log(error.message));

// warning suppressor
mongoose.set('useFindAndModify', false);