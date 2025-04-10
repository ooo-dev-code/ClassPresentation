import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/users.js';
import thoughtRouter from './routes/thoughts.js';

dotenv.config();

const app = express();

// Middleware 
app.use(express.json()); 
app.use(cors()); 

// MongoDB Connection 
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, { })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.error('MongoDB connection error:', err));
  
// Routes
app.use('/users', router);
app.use('/thought', thoughtRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 