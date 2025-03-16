Banking App Project
This is a full-stack banking application that allows customers and bankers to interact with the system. The app includes features such as user authentication (login/signup), role-based access (customer/banker), and transaction management.

2 Backend
   Overview
   Technologies Used
   Installation and Setup
   Folder Structure
   API Endpoints
   Key Features

Overview

  The backend is built using Node.js and Express.js. It provides RESTful APIs for user authentication, role-based access, and transaction management. The backend is connected to a database (e.g., MongoDB) for storing user and transaction data.

Technologies Used

  Node.js: Runtime environment for executing JavaScript.
  Express.js: Web framework for handling HTTP requests.
  MongoDB: Database for storing user and transaction data.
  Mongoose: ODM for interacting with MongoDB.
  JWT (JSON Web Tokens): For secure authentication.
  Bcrypt: For hashing passwords.
  CORS: To allow cross-origin requests from the frontend.

Installation and Setup

1 Clone the Repository:

  git clone (https://github.com/jai01019/banking-backend)
  cd banking-app/backend

2 Install Dependencies:
   npm install

3 Set Environment Variables:
    Create a .env file in the backend folder and add the following:
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/banking_app
    JWT_SECRET=your_jwt_secret_key

API Endpoints

1. Sign Up:
  URL: /api/auth/signup
  Method: POST
  Request Body

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"
}

Response:
 Success: { message: "Signup successful" }
 Error: { error: "Email already exists" }


2 Login:
   URL: /api/auth/login
   Method: POST

{
  "email": "john@example.com",
  "password": "password123",
  "role": "customer"
}

Response:
  Success: { token: "jwt_token", role: "customer" }
  Error: { error: "Invalid credentials" }


3 Transactions
  Fetch Transactions:
    URL: /api/transactions
    Method: GET
    Headers:
    {
    "Authorization": "Bearer jwt_token"
    }

Response:
{
  "balance": 5000,
  "transactions": [
    { "id": 1, "type": "deposit", "amount": 1000, "created_at": "2023-10-01T12:00:00Z" },
    { "id": 2, "type": "withdrawal", "amount": 500, "created_at": "2023-10-02T14:30:00Z" }
  ]
}


4 Perform Transaction:
   URL: /api/transactions
   Method: POST

{
  "Authorization": "Bearer jwt_token"
}

Request Body:

{
  "amount": 1000,
  "type": "deposit"
}

Response:
 Success: { message: "Transaction successful" }
 Error: { error: "Insufficient funds" }


Key Features
 User Authentication:
   Secure registration and login using JWT tokens.
 Role-Based Access Control:
   Differentiates between customers and bankers.
 Transaction Management:
    Supports deposits, withdrawals, and fetching transaction history.
 Validation:
    Validates user inputs (e.g., email format, password strength).
 Error Handling:
    Returns meaningful error messages for invalid requests or server 
    errors.

Conclusion
This README provides a comprehensive guide for setting up and understanding both the frontend and backend of the banking application. Follow the instructions carefully to ensure smooth installation and usage. If you encounter any issues, feel free to raise them in the repository's issue tracker.

Happy coding! 🚀



    
