# 🌐 UnityHub — Community Help Platform 
UnityHubis a **full-stack web application** designed to connect people who need help with volunteers and donors. It provides a simple, clean interface for requesting help, making donations, and chatting with the community in real-time.


---

## 🚀 Features

* 🔐 User Authentication (Login & Register)
* 🏠 Dashboard for users and admins
* 💬 Community Chat (Real-time using Socket.IO)
* 🆘 Help Requests System
* 💝 Donations Page
* 🛠 Admin Panel
* 🌐 Responsive UI (Tailwind CSS)

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* Socket.IO
* MongoDB (Mongoose)
* JWT Authentication

---

## 📁 Project Structure

```
UnityHub/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/UnityHub.git
cd UnityHub
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

### 3️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
node server.js
```

Backend runs at:

```
http://localhost:5000
```

---

## 🔗 Socket.IO Chat Setup

Make sure both servers are running:

* Frontend → `http://localhost:5173`
* Backend → `http://localhost:5000`

The chat system will automatically connect using Socket.IO.

---

## ☁️ Deployment Guide

### Frontend (Vercel)

1. Push code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import GitHub project
4. Set Root Directory:

```
frontend
```

5. Build Command:

```
npm run build
```

6. Output Directory:

```
dist
```

---

### Backend (Recommended: Render / Railway)

> ⚠️ Vercel does NOT support Socket.IO persistent servers

Use:

* [https://render.com](https://render.com)
* [https://railway.app](https://railway.app)

#### Steps:

1. Create new Web Service
2. Connect GitHub Repo
3. Root Directory:

```
backend
```

4. Start Command:

```
node server.js
```

5. Add Environment Variables

---

## 🔒 Environment Variables

Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

## 🧪 Test Accounts

You can register new users directly from the UI.

Admin access can be added manually in the database by setting:

```json
"role": "admin"
```

---

## 🛠 Troubleshooting

### White Screen Issue

* Check browser console for errors
* Ensure React Router is not nested
* Confirm exports in `App.jsx` and pages

### Chat Not Working

* Backend must be running
* Check Socket.IO installed
* Frontend must connect to correct backend URL

---

## 📌 Future Improvements

* AI-powered help matching
* Payment gateway for donations
* Push notifications
* Mobile app version

---

## 👩‍💻 Author

**Sahiba J**

Community-driven tech for social impact 💙

---

## ⭐ Support

If you like this project, please **star the repository** on GitHub and share it with others!
