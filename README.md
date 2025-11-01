# Student Feedback Form

A simple Node.js web application for collecting student feedback using Express.js. This application runs without a database and displays submitted feedback on a thank-you page.

## Features

- Simple HTML form for student feedback collection
- Fields: Student Name, Course Name, Feedback
- Thank you page displaying submitted information
- Responsive design with clean styling
- No database required - perfect for simple feedback collection

## Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Setup
1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the application:

   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## AWS Elastic Beanstalk Deployment

### Prerequisites
- AWS account
- AWS CLI installed and configured
- EB CLI installed: `pip install awsebcli`

### Step-by-Step Deployment

1. **Initialize Elastic Beanstalk:**
   ```bash
   cd /workspaces/Feedback
   eb init
   ```
   - Select your preferred AWS region
   - Choose "Node.js" as the platform
   - Select the latest Node.js version (18.x recommended)
   - Choose "No" for CodeCommit integration
   - Choose "No" for SSH setup (optional)

2. **Create Environment and Deploy:**
   ```bash
   eb create student-feedback-app
   ```
   - Wait for the environment creation (2-5 minutes)
   - The application will be automatically deployed

3. **Open the Live Application:**
   ```bash
   eb open
   ```
   - This opens your deployed app in the default browser
   - Alternative: Get URL with `eb status`

### Post-Deployment Commands

- **Redeploy after changes:**
  ```bash
  eb deploy
  ```

- **View application logs:**
  ```bash
  eb logs
  ```

- **Check environment status:**
  ```bash
  eb status
  ```

- **Terminate environment (cleanup):**
  ```bash
  eb terminate
  ```

## Project Structure

```
/workspaces/Feedback/
├── student-feedback-form/
│   ├── server.js              # Main Express application
│   └── public/
│       └── js/
│           └── script.js      # Client-side JavaScript (currently empty)
├── .ebextensions/
│   └── nodecommand.config     # Elastic Beanstalk configuration
├── package.json               # Node.js dependencies and scripts
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## Configuration

The application uses the following environment variables:
- `PORT`: Server port (defaults to 3000)
- `NODE_ENV`: Environment mode (set to 'production' in EB)

## Troubleshooting

### Common Issues

1. **Application not starting:**
   - Check that Node.js version matches engines in package.json
   - Verify all dependencies are installed

2. **Deployment fails:**
   - Ensure package.json has correct start script
   - Check EB logs: `eb logs`

3. **Static files not served:**
   - Verify .ebextensions/nodecommand.config is present
   - Check public directory structure

### Support
For issues with AWS Elastic Beanstalk deployment, refer to the [official documentation](https://docs.aws.amazon.com/elasticbeanstalk/).