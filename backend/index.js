
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');


// Load Environment Variables
('dotenv').config();


// Call the function to connect to the database
connectDB();


// Example of a simple Express server
const app = express();
app.use(cors());
app.use(bodyParser.json());


// routes
app.use('/api/auth', require('./routes/auth'));


// Listen to server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}`));
