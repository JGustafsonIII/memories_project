import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  ;

const PORT = process.env.PORT || 5000;

/**
 * Used to connect to the database and start listening to the express server at port 5000
 */
const connect = async () => {
  const connection = await mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error));

  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  mongoose.set('useFindAndModify', false);
};

connect();
