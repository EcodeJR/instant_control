import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
// import axios from 'axios';

// const router = express.Router();

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();

app.use(cors({
    origin: '*', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if your frontend sends cookies, sessions, or authentication tokens)
  }));

app.use(bodyParser.json());
  

var PORT = 8080;

mongoose.connect(mongodbURL)
    .then((result) => {
        app.listen(PORT, () => {
            const db = result.db;
            console.log('Connected to MongoDB at port: ' + PORT);
        })
    })//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))


    //Setting up mongoose schema for DB
const Schema = mongoose.Schema;

const NewUser = new Schema({
    username: { type: String, 
        required: true,
        unique: true
     },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const PutUser = mongoose.model('Users', NewUser);

// Route to handle adding user to the db
app.post('/api/users', async (req, res) => {
  
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const Newuseradded = new PutUser({ 
        username, 
        password: hashedPassword 
      });
      await Newuseradded.save();
      res.status(201).json({ message: 'User added to db!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error)
    }
  });


  // Endpoint to handle login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await PutUser.findOne({ username });

    if (user) {
      // Compare the entered password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});