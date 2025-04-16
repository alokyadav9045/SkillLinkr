# SkillLinkr Backend

## Overview
SkillLinkr is a backend application that provides user authentication and management functionalities using JWT (JSON Web Tokens). This application allows users to register, log in, and manage their profiles securely.

## Features
- User registration and login with JWT authentication.
- Middleware for protecting routes and verifying user tokens.
- User management functionalities.

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)

## Project Structure
```
skilllinkr-backend
├── controllers          # Contains the logic for handling requests
│   ├── authController.js
│   └── userController.js
├── middleware           # Contains middleware functions
│   └── authMiddleware.js
├── models              # Contains database models
│   └── userModel.js
├── routes              # Contains route definitions
│   ├── authRoutes.js
│   └── userRoutes.js
├── config              # Contains configuration files
│   └── db.js
├── utils               # Contains utility functions
│   └── jwt.js
├── server.js           # Entry point of the application
├── package.json        # NPM package configuration
└── README.md           # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd skilllinkr-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:5000` (or the specified port in your environment).

## API Endpoints
- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **User Management**
  - `GET /api/users/profile` - Get user profile (protected route)

## License
This project is licensed under the MIT License.