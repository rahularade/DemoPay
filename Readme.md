# 💸 DemoPay – Basic Wallet & Transactions App

A **basic version of PayTM** built to understand how real-world payment systems work.  
This project demonstrates **authentication, wallet balance management, and atomic transactions** using MongoDB.

Users can:
- Sign up & sign in
- Receive a **random initial balance** on signup
- Send money to another user
- See balance updates handled safely using **MongoDB transactions**

---

## 🧠 Tech Stack

### Backend
- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB**
- **Mongoose**
- **MongoDB Transactions**
- **JWT Authentication**
- **Bcrypt** (password hashing)

### Frontend
- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Axios**

---

## 📂 Project Structure

demopay  
├── frontend   # Vite + React + TypeScript frontend  
├── backend    # Node.js + Express + TypeScript backend  
├── docker     # Docker files (Mongo & Backend)  
└── README.md



---

## ✨ Features

- 🔐 JWT-based authentication (Signup / Signin)
- 🔒 Secure password hashing with bcrypt
- 💰 Wallet balance for every user
- 🎁 Random amount credited on signup
- 🔁 Money transfer between users
- 🧾 MongoDB transactions for consistency
- ⚡ Fast frontend using Vite
- 🎨 Clean UI with Tailwind CSS

---

## 🚀 Running the Project Locally

You can run the project **locally using MongoDB Atlas**, **local MongoDB**, or **MongoDB with Docker (Replica Set)**.

---

## ✅ Prerequisites

Make sure you have installed:
- **Node.js (v18 or above)**
- **npm**
- **MongoDB** (optional if using Docker or Atlas)
- **Docker & Docker Compose** (optional)

---

## 🗄 Database Setup Options
### 🔹 Option 1: MongoDB Atlas (Cloud)

1. Create a free cluster at 👉 https://www.mongodb.com/atlas
2. Create a database user
3. Whitelist your IP (0.0.0.0/0 for development)
4. Copy the connection string:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/demopay
```

5. Update .env:
```
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/demopay
```

### 🔹 Option 2: MongoDB with Docker (Replica Set)
1. Build MongoDB Replica Set Image\
(Run this from the project root folder)
```
docker build -t mongodb-replset .   
```

2. Run MongoDB Container
```
docker run -d -p 27017:27017 mongodb-replset
```
3. Update .env:
```
MONGODB_URL=mongodb://localhost:27017/demopay
```
---
## 🛠 Backend Setup

### 1️⃣ Go to backend folder
```bash
cd backend
```

### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Create .env file
```
MONGODB_URL=mongodb://localhost:27017/demopay
JWT_SECRET=supersecretjwt
```
### 4️⃣ Run Backend
```
npm run dev

```
### Backend runs on:
```
http://localhost:3000
```
---
## 🎨 Frontend Setup
### 1️⃣ Go to frontend folder
```
cd frontend

```

### 2️⃣ Install dependencies
```
npm install

```

### 3️⃣ Start frontend
```
npm run dev

```
### Frontend runs on:
```
http://localhost:5173

```