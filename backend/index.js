import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import axios from 'axios';

const router = express.Router();

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();

app.use(cors({
    origin: '*', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if your frontend sends cookies, sessions, or authentication tokens)
  }));
  

var PORT = 6000;

mongoose.connect(mongodbURL)
    .then((result) => {
        app.listen(PORT, () => {
            const db = result.db;
            console.log('Connected to MongoDB at port: ' + PORT);
        })
    })//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))