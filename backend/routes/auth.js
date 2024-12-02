const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');


const router = express.Router();

// Register 
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully'});
    }
    catch (error) {
        res.status(500).json({ error: error.message});
    }
});


// Login

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne( { email });
        if(!user) return res.status(400).json({ message: 'Invalid username' });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid username'});

        const token = jwt.sign({ id: user_.id }, process.env.JWT_SECRET, {expireIn: '1h'});
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

