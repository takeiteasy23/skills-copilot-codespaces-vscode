// Create web server
// Create a comment
// Get all comments
// Get a single comment
// Update a single comment
// Delete a single comment

const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Create a comment
router.post('/', async (req, res) => {
    try {
        const comment = new Comment({
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment
        });
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a single comment
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update a single comment
router.patch('/:commentId', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne(
            { _id: req.params.commentId },
            { $set: { comment: req.body.comment } }
        );
        res.json(updatedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete a single comment
router.delete('/:commentId', async (req, res) => {
    try {
        const removedComment = await Comment.deleteOne({ _id: req.params.commentId });
        res.json(removedComment);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;