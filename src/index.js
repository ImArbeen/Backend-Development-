import dotenv from 'dotenv';
import connectDb from './db/index.js';

// Load environment variables
dotenv.config();


// Connect to MongoDB
connectDb();
