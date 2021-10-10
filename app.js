const express = require('express');

const app = express ();

//Middleware

app.use('/post', () => {
    console.log('This is middleware running');
});

app.get('/', (req,res) => {
    res.send('We are home');
});

app.get('/post', (req,res) => {
    res.send('We are on post');
});

app.listen(3000);
