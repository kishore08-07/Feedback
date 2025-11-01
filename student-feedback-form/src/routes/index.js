const express = require('express');
const router = express.Router();

// Route to display the feedback form
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/views' });
});

// Route to handle form submission
router.post('/submit', (req, res) => {
    const { studentName, courseName, feedback } = req.body;
    res.render('thankyou.html', { studentName, courseName, feedback });
});

module.exports = router;