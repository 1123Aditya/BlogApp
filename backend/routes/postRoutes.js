const express = require('express');
const Post = require('../models/post');

const router = express.Router();

// Create Post
router.post('/create', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newPost = new Post({ title, description });
        await newPost.save();
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// Fetch All Posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

module.exports = router;
