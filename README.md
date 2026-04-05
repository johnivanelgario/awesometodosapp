# 📝 Awesome Todos App

A full-stack Todo application built using modern web technologies.  
This project allows users to manage tasks with full CRUD functionality.

---

## 🚀 Features
- Add new todos
- Mark todos as completed
- Delete todos
- Store data in MongoDB Atlas
- REST API with Express

---

## 🛠️ Tech Stack
- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB Atlas

---

## 📁 Project Structure

client/ → React frontend
server/ → Express backend


---

## ⚙️ Installation (Local Setup)

### 1. Clone the repository

git clone https://github.com/johnivanelgario/awesometodosapp.git


### 2. Install dependencies
Frontend:

cd client
npm install


Backend:

cd server
npm install


---

## 🔑 Environment Variables
Create a `.env` file inside **server** folder:


MONGODB_URI=your_mongodb_connection_string
PORT=5000


---

## ▶️ Running the App

Frontend:

cd client
npm run dev


Backend:

cd server
npm run dev


---

## 🌐 Deployment
This app is deployed using **Render**:
- Backend serves frontend build
- MongoDB Atlas used for database
- Environment variables configured in Render

---

## ⚠️ Common Errors

- **ENOTFOUND / ECONNREFUSED**
  → Wrong MongoDB URI or IP not allowed

- **Unexpected token '<'**
  → API route not working or wrong URL

---

## 👨‍💻 Author
John Ivan
