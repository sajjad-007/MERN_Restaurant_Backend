const express = require('express')

const app = express()
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

cors({
    origin: [process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,
})


module.exports = {app}