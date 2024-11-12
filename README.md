# Listify Application

Listify is a powerful full-stack to-do application built with the MERN stack (MongoDB, Express, React, Node.js), seamlessly integrating a robust backend to manage data and API endpoints with a responsive, user-friendly frontend for efficient note-taking and task management.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
  - [Run Backend Only](#run-backend-only)
  - [Run Frontend Only](#run-frontend-only)
  - [Run Both Frontend and Backend](#run-both-frontend-and-backend)
- [Dummy Credentials to run the Application](#credential-to-run-the-application)

## Features
- Full CRUD functionality: Create, Read, Update, and Delete notes.
- RESTful API for backend communication.
- Responsive, user-friendly React frontend.
- Environment-based configuration using `.env` files.
- Easy deployment setup on Render.

## Technologies Used
- **Backend:** Node.js, Express, MongoDB, Mongoose.
- **Frontend:** React.js, Axios, BootStrap CSS.
- **Utilities:** dotenv for environment configuration, nodemon for backend development.


## Setup Instructions

### Prerequisites
- Install **Node.js** and **npm**.
- Set up a **MongoDB instance** (e.g., MongoDB Atlas) with a connection URI.

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd ReactJS-Listify/backend
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    nodemon index.js
    ```
   The backend will run on `http://localhost:5000` by default.

### Frontend Setup
1. Navigate to the root directory:
    ```bash
    cd ReactJS-Listify
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add the following environment variable:
    ```plaintext
    MONGODB_URI = your_mongodb_connection_string
    JWT_SEC = your_secret_string. For eg:- "Hello@World"
    ```
    ```
4. Start the frontend development server:
    ```bash
    npm start
    ```
   The frontend will run on `http://localhost:3000` by default.


## Running the Application

### Run Backend Only
From the backend directory, run:

```bash
nodemon index.js
```

### Run Frontend Only
From the root directory, run:

```bash
npm start
```

### Run Both Frontend and Backend
To run both concurrently (from the root directory), add this script to the root package.json:

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "both": "dotenv -e .env concurrently \"npm run start\" \"nodemon backend/index.js\""
}

Then, run:

```bash
npm run both
```

### Dummy Credentials to run the Application

User 1:- Email:- arpit@gmail.com
         Password:- arpit123
        
User 2:- Email:- prakhar@gmail.com
         Password:- prakhar123

Kindly Use this credentials for login purpose

