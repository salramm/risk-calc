const express = require('express');
const router = express.Router();
const Post = require('../models/posts');


router.get('/', (req,res) => {
    res.send('We are on posts')
});

router.get('/specific', (req, res) => {
    res.send('We are on a specific post')
})

router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost); 
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;