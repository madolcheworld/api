const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
//tes
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

module.exports = app;