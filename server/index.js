import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts';
import userRoutes from './routes/users';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// the posts.js file is ran every time the /posts is accessed
// app.use('/events', postRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Memories API');
});

// we are going to secure this later
const { PORT } = process.env;

// attempts to connect to the given url, then listens to the given port if successful
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
// otherwise log the error.
  .catch((error) => console.log(error.message));

// warning suppressor
mongoose.set('useFindAndModify', false);
