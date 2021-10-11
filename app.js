const express = require('express');
const app = express ();
const mongoose = require('mongoose');
const router = require('./routes/posts');
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');
//This will help avoid using specific routes like '/posts' in this case when writing them out

//This will make bodyparser run on every request
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//Middleware
app.get('/', (req,res) => {
    res.send('We are home');
});
app.listen(3000);

// DB Connection
mongoose.connect('process.env.DBCONNECTION', () => 
console.log('connected to the DB'))
