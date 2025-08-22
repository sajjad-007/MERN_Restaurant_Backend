const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const myRoutes = require('./routes/reservation.apiRoute');
const { errorMiddleware } = require('./error/error');

dotenv.config({ path: './config/config.env' });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true,
  })
);

app.use(express.json());
//this line is fundamental to handling web form data in Express.js applications
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', myRoutes);

app.use(errorMiddleware);

module.exports = { app };
