import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/post', postRoutes);
app.use('/user',userRoutes);
const PORT = process.env.PORT||5000;
Connection();
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));