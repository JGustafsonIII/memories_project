import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.MONGODB_URI;

const PORT = process.env.PORT;

/**
 * Used to connect to the database and start listening to the express server at port 5000
 */
const connect = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    mongoose.set('useFindAndModify', false);
  } catch (error) {
    console.log(error);
  }
};

connect();
