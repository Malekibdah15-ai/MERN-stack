require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
// const { default: mongoose } = require('mongoose');
const app = express();
require('./config/mongoose.config.js'); 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./routes/routes')(app);
const AllRoutes = require('./routes/routes')
AllRoutes(app)
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
