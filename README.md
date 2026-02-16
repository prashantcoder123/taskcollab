# 🚀 Real-Time Task Collaboration Platform

A full-stack Trello-like collaboration platform built with modern technologies.

This application allows multiple users to create boards, manage tasks, assign members, and collaborate in real-time.

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DnD Kit (Drag & Drop)
- Axios
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.io
- JWT Authentication

---

## ✨ Features

- 🔐 User Authentication (Signup / Login)
- 📋 Create Boards
- 📂 Create Lists inside Boards
- 📝 Create / Update / Delete Tasks
- 👤 Assign Users to Tasks
- 🔄 Real-Time Updates (WebSockets)
- 🧲 Drag & Drop Tasks Between Lists
- 📊 Activity Tracking
- 🔍 Pagination & Search

---

## 📂 Project Structure

```
task-collaboration-platform/
│
├── frontend/
│   ├── src/
│   ├── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
└── README.md
```

---

## ⚙️ Environment Setup

⚠️ IMPORTANT: Create a `.env` file inside the backend folder.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Never commit `.env` file.

Make sure `.gitignore` includes:

```
node_modules
.env
```

---

## ▶️ How To Run Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/task-collaboration-platform.git
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm run dev
```

---

App will run on:

Frontend:
```
http://localhost:5173
```

Backend:
```
http://localhost:5000
```

---

## 🌍 Future Improvements

- Role-based permissions
- File attachments
- Notifications system
- Production deployment
- Performance optimization

---

## 👨‍💻 Author

Prashant Kumar  
Full Stack Developer | MERN Stack | Real-Time Systems

