// import packages
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './middlewares/databaseConnection.js';  
import {credentialRouter} from './routes/credentialRoute.js';
import { contactReadWriteRouter } from './routes/contactsReadWriteRoute.js';
import {contactUpdateDeleteRouter} from './routes/contactUpdateDeleteRoute.js';

//App Initialized
const app = express();
const dotenvConfig = dotenv.config();

// Default Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// CORS- for cross origin request
app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}));

//Connect All Router
app.use(credentialRouter);
app.use(contactReadWriteRouter);
app.use(contactUpdateDeleteRouter);

// Server Started
app.listen(process.env.PORT, async() => {
    console.log(`Server is running on port: ${process.env.port}`);
    await connectDB();
});