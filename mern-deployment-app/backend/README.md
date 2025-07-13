# Backend MERN Application

This README file provides documentation for the backend of the MERN stack application. It includes setup instructions, environment variables, and deployment guidelines.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
- [Logging](#logging)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-deployment-app/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the `backend` directory based on the `.env.example` template. The following environment variables are required:

- `PORT`: The port on which the server will run (default is 5000).
- `MONGODB_URI`: The connection string for your MongoDB database.
- `JWT_SECRET`: Secret key for JWT authentication.
- `NODE_ENV`: Set to `development` or `production`.

## Running the Application

To start the backend server, run the following command:

```
npm start
```

For development mode with hot reloading, use:

```
npm run dev
```

## Deployment

Refer to the [deployment/backend-deploy.md](../deployment/backend-deploy.md) file for detailed instructions on deploying the backend application to a cloud platform.

## API Documentation

The API endpoints are defined in the routes and controllers. Refer to the code in `src/routes/index.js` and `src/controllers/index.js` for details on available endpoints and their functionalities.

## Error Handling

The application includes a custom error handling middleware located in `src/middleware/errorHandler.js`. This middleware captures errors and sends appropriate responses to the client.

## Logging

Logging is handled by a utility located in `src/utils/logger.js`. It provides functions for logging messages and errors throughout the application.

For any issues or contributions, please refer to the main project repository.