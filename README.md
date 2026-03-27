# Kinoman Project Documentation

## Features
- User Authentication
- Movie Browsing
- Personalized Recommendations
- Reviews and Ratings

## Tech Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB

## Quick Start Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/Sargis82/kinoman.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kinoman
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Setup Instructions
1. Ensure you have Node.js and npm installed.
2. Create a `.env` file in the root directory with the following environment variables:
   - `DB_URI`: Connection string for your MongoDB database.
   - `JWT_SECRET`: Secret key for JSON Web Tokens.
3. Run database migrations if any.
4. Seed the database with initial data if required.
5. Access the app in your browser at `http://localhost:3000`.