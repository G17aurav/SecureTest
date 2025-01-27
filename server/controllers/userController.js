const userModel = require('../models/userModel');

const registerUser = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    userModel.createUser(name, email, password, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ message: 'Database error.' });
        }
        res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
    });
};

module.exports = {
    registerUser
};
