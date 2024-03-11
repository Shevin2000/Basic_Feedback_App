
Feedback App Overview

The Feedback App is a simple web application built with React, Vite, Node.js, Express, and MySQL. It allows users to submit feedback through a website and view all the feedback provided.
Features

- **Submit Feedback:** Users can submit feedback messages through the website.
- **View Feedback:** Users can view all the feedback messages on the website.
- **Edit Feedback:** Users can edit the content of their feedback messages.
- **Delete Feedback:** Users can delete their feedback messages.

 Technologies Used

- **Frontend:**
  - React
  - Vite (React Fast Refresh, ESBuild)
  - Axios

- **Backend:**
  - Node.js
  - Express
  - MySQL

 Getting Started

### Prerequisites

- Node.js and npm
- MySQL database

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/feedback-app.git](https://github.com/Shevin2000/Basic_Feedback_App.git)
   cd sample_project
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install
   cd server
   npm install
   

3. Set up the MySQL database:
   - Create a MySQL database named `feedback`.
   - Run the SQL script to create the `feedback` table:

     ```sql
     CREATE TABLE feedback (id INT AUTO_INCREMENT PRIMARY KEY, message TEXT);
     ```

4. Start the frontend and backend:

   ```bash
   cd client
   npm run dev
   ```

   ```bash
   cd server
   npm run dev
   ```

5. Access the app at http://localhost:5173

## Folder Structure

- **client:** Contains the React/Vite frontend code.
- **server:** Contains the Node.js/Express backend code.

## API Endpoints

- **POST /api/feedback:** Submit feedback.
- **GET /api/feedback:** Get all feedback.
- **PUT /api/feedback/:id:** Edit feedback.
- **DELETE /api/feedback/:id:** Delete feedback.

## Author

Shevin Mitipolaarachchi

## License


feel free to use
