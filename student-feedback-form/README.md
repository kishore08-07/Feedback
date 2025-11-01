# Student Feedback Form

This is a simple Node.js + Express web application called "Student Feedback Form". The application allows students to submit feedback through a web form, and upon submission, it displays a thank-you page with the submitted information.

## Project Structure

```
student-feedback-form
├── src
│   ├── app.js
│   ├── routes
│   │   └── index.js
│   └── views
│       ├── index.html
│       └── thankyou.html
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- AWS CLI installed and configured with your AWS credentials.
- Python and pip installed (for installing the Elastic Beanstalk CLI).

### Running the Application Locally

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```
   cd student-feedback-form
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Open your web browser and go to `http://localhost:3000` to view the feedback form.

## Step-by-Step Instructions for Deploying on AWS Elastic Beanstalk

1. **Install the AWS Elastic Beanstalk CLI**:
   - Ensure you have the AWS CLI installed and configured with your AWS credentials.
   - Install the Elastic Beanstalk CLI by running:
     ```
     pip install awsebcli
     ```

2. **Initialize Elastic Beanstalk**:
   - Navigate to your project directory:
     ```
     cd student-feedback-form
     ```
   - Run `eb init` and follow the prompts to set up your application. Choose the Node.js platform.

3. **Create an Environment and Deploy the App**:
   - Run `eb create student-feedback-env` to create a new environment. Replace `student-feedback-env` with your desired environment name.
   - After the environment is created, deploy your application by running:
     ```
     eb deploy
     ```

4. **Open the Live URL in the Browser**:
   - Once the deployment is complete, run:
     ```
     eb open
     ```
   - This will open the live URL of your application in the default web browser.

Now you can access your "Student Feedback Form" application running on AWS Elastic Beanstalk!