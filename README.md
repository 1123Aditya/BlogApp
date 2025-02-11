MERN Stack Blog Application

This is a simple blog application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create blog posts with a title and description and view the list of all posts.

Features

Create a new blog post with a title and description.

Save the blog post to a MongoDB database.

Fetch and display all blog posts on a list page.

Tech Stack

Frontend: React.js, Fetch API, Bootstrap (optional for styling)

Backend: Node.js, Express.js, MongoDB, Mongoose
Installation

1. Clone the Repository

git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app

2. Install Dependencies

Backend

cd backend
npm install

Frontend

cd frontend
npm install

3. Setup MongoDB

Make sure you have MongoDB installed locally or use MongoDB Atlas. Update the backend/.env file with your MongoDB connection string.

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Run the Application

Start Backend Server

cd backend
npm start

Start Frontend Server

cd frontend
npm start

API Routes

POST /api/posts - Create a new blog post

GET /api/posts - Fetch all blog posts

Folder Structure

mern-blog-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── package.json
└── README.md

Contributing

Feel free to fork this repository and submit pull requests with improvements.

License

This project is open-source and available under the MIT License.


Happy Coding! 🚀
