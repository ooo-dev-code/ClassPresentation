import express from 'express';
import Thought from '../models/thought.js';

const thoughtRouter = express.Router();

thoughtRouter.post('/', async (req, res) => {
    const { user, commentary, rate } = req.body;
    try {
        const newThought = new Thought({  user, commentary, rate });
        await newThought.save();
        res.status(201).json({ message: 'Commentary registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

thoughtRouter.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find().populate('user', 'username');
        res.status(200).json(thoughts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

thoughtRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const thought = await Thought.findById(id).populate('user', 'username');
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
})

export default thoughtRouter;