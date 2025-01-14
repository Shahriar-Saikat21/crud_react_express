# CRUD Operation using React, Tailwind CSS, Express, and MongoDB

This project demonstrates a full-stack CRUD (Create, Read, Update, Delete) application built with **React**, **Tailwind CSS**, **Express**, and **MongoDB**. The app allows users to sign up, log in, and manage a list of contacts.

## Project Setup

## Prerequisite
-> Node JS: Version 18 or upper <br/>
-> MongoDB 

### Clone the repository
To get started, clone the repository:
```bash
git clone https://github.com/Shahriar-Saikat21/crud_react_express.git
```
# Install Backend Dependencies
Navigate to the Backend directory:
```bash
cd Backend
```
Install the backend dependencies:
```bash
yarn install
```
# Install Frontend Dependencies
Navigate to the Frontend directory:
```bash
cd Frontend
```
Install the frontend dependencies:
```bash
yarn install
```
# MongoDB Setup
Create a MongoDB database named contacts and update the MongoDB URI in the .env file within the Backend directory:
```bash
MONGO_URI=your_mongodb_connection_string
```
## Project Features
1. Signup:
Users can sign up by providing their name, email, and password.
The password is hashed for security using bcrypt.
Upon successful signup, a JWT token is generated and returned for subsequent authentication.
2. Login:
Users can log in by providing their email and password.
The server verifies the password and, if correct, sends a JWT token to the user.
3. Add Contacts:
After logging in, users can add a new contact by providing details like name, phone number, and email.
The contact is stored in the MongoDB database associated with the logged-in user.
4. View All Contacts:
Users can view all their contacts stored in the database.
Contacts are fetched using React Query to handle asynchronous state and data fetching.
5. Update Contact:
Users can update contact details such as name, phone, and email.
6. Delete Contact:
Users can delete a contact from the database.
After deletion, the contact list is automatically updated.

## Technologies Used
Frontend: React, Tailwind CSS, React Context API, React Query <br/>
Backend: Express, MongoDB, bcryptjs (for password hashing), jsonwebtoken (for JWT authentication) <br/>
Database: MongoDB (for storing user and contact data) <br/>

# Running the Project
Backend
Navigate to the Backend directory and start the server:
```bash
cd Backend
yarn run dev
```
The backend API will be running on http://localhost:3000.

Frontend
Navigate to the Frontend directory and start the development server:
```bash
cd Frontend
npm run dev
```
The frontend will be available on http://localhost:5173.

# Endpoints
## Auth Routes
POST /signup: Create a new user account. <br/>
POST /login: Log in with an existing user account. <br/>
## Contacts Routes
POST /add: Add a new contact. <br/>
GET /getAll: Get all contacts. <br/>
PUT /update: Update an existing contact. <br/>
DELETE /delete: Delete a contact. <br/>
## Authentication
JWT tokens are used for authentication. Store the token in cookies after logging in.
