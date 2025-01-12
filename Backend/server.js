// import packages
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

//App Initialized
const app = express();
const dotenvConfig = dotenv.config();

// Default Middlewares
app.use(express.json());

// CORS- for cross origin request
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


// Server Started
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.port}`);
});