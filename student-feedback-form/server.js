const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Feedback Form</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #333;
                text-align: center;
                margin-bottom: 30px;
            }
            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                color: #555;
            }
            input[type="text"], textarea {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
            }
            textarea {
                height: 120px;
                resize: vertical;
            }
            button {
                background-color: #007bff;
                color: white;
                padding: 12px 30px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                width: 100%;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Student Feedback Form</h1>
            <form action="/submit" method="POST">
                <label for="studentName">Student Name:</label>
                <input type="text" id="studentName" name="studentName" required>
                
                <label for="courseName">Course Name:</label>
                <input type="text" id="courseName" name="courseName" required>
                
                <label for="feedback">Feedback:</label>
                <textarea id="feedback" name="feedback" placeholder="Please share your feedback..." required></textarea>
                
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    </body>
    </html>
    `);
});

app.post('/submit', (req, res) => {
    const { studentName, courseName, feedback } = req.body;
    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Student Feedback</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #f5f5f5;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
                color: #28a745;
                text-align: center;
                margin-bottom: 30px;
            }
            .feedback-details {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 5px;
                margin-bottom: 20px;
                border-left: 4px solid #007bff;
            }
            .detail-row {
                margin-bottom: 15px;
            }
            .label {
                font-weight: bold;
                color: #555;
                display: inline-block;
                width: 120px;
            }
            .value {
                color: #333;
            }
            .feedback-text {
                background-color: white;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #ddd;
                margin-top: 10px;
                line-height: 1.5;
            }
            button {
                background-color: #6c757d;
                color: white;
                padding: 12px 30px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                text-decoration: none;
                display: inline-block;
            }
            button:hover {
                background-color: #545b62;
            }
            a {
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You for Your Feedback!</h1>
            <div class="feedback-details">
                <div class="detail-row">
                    <span class="label">Student Name:</span>
                    <span class="value">${studentName}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Course Name:</span>
                    <span class="value">${courseName}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Feedback:</span>
                    <div class="feedback-text">${feedback}</div>
                </div>
            </div>
            <a href="/"><button>Back to Form</button></a>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
