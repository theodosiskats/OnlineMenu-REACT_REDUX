# Online Menu App - MERN w/ Redux
## ⚠️ Still under development ⚠️

## Description

This is a full-stack web application built with Node.js, Express, React, and MongoDB. It allows restaurant owners to create and manage an online menu, including product categories, subcategories, and products with descriptions and images.

## Installation

1. Clone the repository to your local machine.
2. In the root directory, run `npm install` to install the server dependencies.
3. Navigate to the client directory by running `cd client` and run `npm install` to install the client dependencies.
4. Create a `.env` file in the root directory with your environment variables.
5. Run the command `npm run dev` in the root directory to start both the backend and frontend servers.

Alternatively, you can run the `SERVERRUN.bat` file in the root directory to start both servers without the need to open a terminal.

## Usage

Once the servers are running, navigate to `http://localhost:3000` in your web browser to access the application. Restaurant owners can create an account and log in to access the dashboard, where they can create and manage their online menu.

## Client Dependencies

- Basic React dependencies
- Axios
- ReduxJS
- Redux-thunk
- Redux-devtools-extension
- React-uuid

### Client UI Dependencies

- Material UI
- eact-toastify
- react-spinners
- eact-perfect-scrollbar
- eact-icons

## Server Dependencies

- Express: A fast, minimalist web framework for Node.js.
- MongoDB: A document-based NoSQL database.
- Mongoose: An elegant MongoDB object modeling tool.
- Cloudinary: A cloud-based image and video management service.
- Multer: A middleware for handling multipart/form-data, used for uploading images.
- Multer-Storage-Cloudinary: A Multer storage engine for uploading files directly to Cloudinary.
- Passport: An authentication middleware for Node.js.
- Passport-Local: A Passport strategy for authenticating with a username and password.
- Passport-Local-Mongoose: Mongoose plugin for Passport-Local authentication.
- Connect-Mongo: A MongoDB session store for Express and Connect.
- Connect-Flash: A middleware for storing and retrieving flash messages.
- Express-Session: A middleware for managing sessions.
- Method-Override: A middleware for overriding HTTP methods.