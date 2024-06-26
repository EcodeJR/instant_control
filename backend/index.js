import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { Server } from 'socket.io';
import http from 'http';
import { Socket } from 'dgram';
// import crypto from 'crypto';
// import axios from 'axios';

// const router = express.Router();

dotenv.config();
const mongodbURL = process.env.DBURL;

const app = express();
app.use(cors({
  origin: '*', //http://localhost:5173
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
  credentials: true, // Enable credentials (if your frontend sends cookies, sessions, or authentication tokens)
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"]
  }
});


app.use(bodyParser.json());
  

var PORT = 8080;

mongoose.connect(mongodbURL)
    .then((result) => {
        server.listen(PORT, () => {
            const db = result.db;
            console.log('Connected to MongoDB at port: ' + PORT);
        })
    })//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))



// Setting up socket.io to run from anywhere(domain).
// io.origins('*:*');

//SOCKET.IO LOGIC TAKEN FROM HERE.................................................






// const collection = mongoose.db("INSTANT").collection("Newslatter");


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

// const username = await PutUser.findOne({username});
app.get('/get-username', (req, res) => {
  // Get the user ID from the request, e.g. from a query parameter
  const userId = req.query.userId;

  // Find the user in the database
  PutUser.findById(userId)
  .then(user => {
    res.status(200).json({user})
  })
  .catch(err => {
    console.error(err);
    res.status(404).json('User Not Found');
  });
});

//Setting up Messaging functionality
// Define schema for chat messages
const chatSchema = new Schema({
  username: String,
  message: String
});

// Compile model from schema
const Chat = mongoose.model('Chat', chatSchema);

//Notification Schema
const notificationSchema = new Schema({
  username: String,
  notice: String
});

// Compile model from schema
const Notification = mongoose.model('Notification', notificationSchema);

// Get all notifications
app.get('/api/notifications', async (req, res) => {
  try {
    const notify = await Notification.find().sort({ timestamp: -1 });
    res.json(notify);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all messagesfrom db
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: -1 });
    res.json(messages);
    // console.log(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

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
      // Compare hashed password
      const match = await bcrypt.compare(password, user.password);
      const secretKey = process.env.SECRKEY;
      const userID =  user._id;
  
      if (match) {
        // Generate a token with expiration time (e.g., 1 hour)
        const newToken = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
        res.status(200).json({ newToken, userID });
      } else {
        res.status(401).send('Incorrect password');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

//getting users data
app.get('/user/:username', async (req, res) => {
  const { username } = req.params; // Use req.params to get values from the route parameters

  try {
    // Retrieve user data from MongoDB based on the username
    const user = await PutUser.findOne({ username });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Render the 'users' view and pass the user data
    res.render('users', { user });
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Define MongoDB model for Newsletter
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
});

const Newsletter = mongoose.model('Newslatter', newsletterSchema);


// Define MongoDB model for Newsletter
const notificationalertSchema = new mongoose.Schema({
  deletedFilesCount: { type: Number, required: true },
});

const NoticeAlert = mongoose.model('NoticeAlert', notificationalertSchema);

// Get all notice alerts
app.get('/api/noticealert', async (req, res) => {
  try {
    const noticealrt = await NoticeAlert.findOne().sort({ timestamp: -1 });
    res.json(noticealrt);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

  //here---------------------------------------------------------------
  // Socket.IO event handlers
io.on('connection', (socket) => {
  // console.log('A user connected');

  // Handle disconnection
  socket.on('disconnect', () => {
      // console.log('User disconnected');
  });

  // Handle chat message
  socket.on('chat message', (msg) => {

    async function handleChatMessage(msg) {
      try {
        const chatMessage = new Chat({
          username: msg.username,
          message: msg.message
        });

        // Save the message to the database
        await chatMessage.save();
        console.log('Message saved to the database');

        // Emit the message to all connected clients
        io.emit('chat message', msg);
      } catch (err) {
        console.error('Error saving message to database:', err);
      }
    }

    // Usage example:
    handleChatMessage(msg);
  });
// Handle 'file deleted' event
  socket.on('file deleted', async (data) => {
    console.log(data);
    try {
      // Assuming Notification is a model or a class
      const notify = new Notification({
        username: data.username,
        notice: data.notice
      });

      const notifyalert = new NoticeAlert({
        deletedFilesCount: data.deletedFilesCount
      })

      // Save the notification to the database
      await notify.save();
      await notifyalert.save(); // --------debug from here notice isn't being saved --Theory check the data sent from the frontend
      console.log('Notification saved to the database');

      // Emit the 'file deleted' event to all connected clients
      io.emit('file deleted', data);
      console.log('file removed:', data);
    } catch (err) {
      console.error('Error saving notification to database:', err);
    }
  });
  
});

 // Watching for changes in the Newsletter collection
// Newsletter.watch().on('change', async (change) => {
//   // Check if the change event involves deletion
//   if (change.operationType === 'delete') {
//     const deletedEmail = change.documentKey._id; // Assuming _id is used as the identifier
//     // Emit the 'file deleted' event with the deleted email data and the username received from the frontend
//     io.emit('file deleted');
//     console.log('File removed:', deletedEmail);
//   }
// });

  // Define MongoDB model for Contact Forms
const contact_us = new mongoose.Schema({
  name: { type: String, 
    required: true
 },
 phone: { type: Number, 
    required: true
 },
email: { type: String, 
    required: true,
    lowercase: true
 },
 message: { type: String, 
    required: true
 }
});
const UserContact = mongoose.model('Contact_us', contact_us);

//Define MongoDB model for Booking
const Booking = new Schema({
  name: { type: String, 
      required: true
   },
   phone: { type: Number, 
      required: true
   },
  email: { type: String, 
      required: true,
      lowercase: true
   },
   location: { type: String, 
      required: true
   },
   date: { type: Date, 
      required: true
   }
}, { timestamps: true });

const UserBooking = mongoose.model('Booking', Booking);


// Get all emails
app.get('/api/emails', async (req, res) => {
  try {
    const emails = await Newsletter.find().sort({ timestamp: -1 });
    res.json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all contact forms
app.get('/api/contact', async (req, res) => {
  try {
    const contact = await UserContact.find().sort({ timestamp: -1 });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all Booking Ticket
app.get('/api/tickets', async (req, res) => {
  try {
    const tickets = await UserBooking.find().sort({ timestamp: -1 });

    if (!tickets) {
      return res.status(404).json({ error: 'Tickets not found' });
    }
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//Getting the users from database
app.get('/api/findusers', async (req, res) => {
  try {
    const ActiveUsers = await PutUser.find().sort({ timestamp: -1 });

    if (!ActiveUsers) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(ActiveUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//deleting users
app.delete('/api/deleteuser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const userToDelete = await PutUser.findById(userId);

    if (!userToDelete) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Perform the deletion
    await PutUser.deleteOne({ _id: userId });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//deleting newslatter email
app.delete('/api/deletemail/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const emailToDelete = await Newsletter.findById(userId);

    if (!emailToDelete) {
      return res.status(404).json({ error: 'Mail not found' });
    }

    // Perform the deletion
    await Newsletter.deleteOne({ _id: userId });

    res.json({ message: 'Mail deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

//deleting contact messages
app.delete('/api/deletecontact/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if the user exists
    const contactToDelete = await UserContact.findById(userId);

    if (!contactToDelete) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Perform the deletion
    await UserContact.deleteOne({ _id: userId });

    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// API endpoint to send newsletter
app.post('/send-newsletter', async (req, res) => {
  const { subject, text } = req.body;

  try {
    // Fetch emails from MongoDB
    const emails = await Newsletter.find();
    
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSCODE
      }
    });

    // Send emails to each recipient
    for (const email of emails) {
      const mailOptions = {
        from: process.env.EMAIL,
        to: email.email,
        subject: subject,
        text: text
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).send('Newsletter sent successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});
