# ☕ J-H Cafe Project

A modern, full-stack web application built to showcase a cafe's menu, reviews, and offerings. Designed to boost local popularity and streamline online visibility for The J&H Cafe in Charbagh, Lucknow, this platform features a modern UI and a robust database architecture.

## 🚀 Tech Stack

Frontend: React, Vite, JavaScript, HTML, CSS

Backend: Node.js, Express.js, MySQL (via mysql2)

## 📁 Project Structure

This repository is divided into two main directories:

Frontend/: Contains the Vite-powered React application, including all user interface components, styles, and client-side logic.

Backend/: Contains the server-side logic, API endpoints, database connection setup, and configuration (server.js).

### 📍 About The J&H Cafe

Location: Alambagh Marg, Charbagh, Lucknow (PIN: 226005)

Featured Offerings: Grilled sandwiches, grilled toast, and chai (Price Range: ₹1–200)

Rating: 4.2 Stars

## 🛠️ Installation & Local Setup

To get a local copy up and running, follow these simple steps.

### 1. Clone the Repository

git clone https://github.com/Tanmay-Srivastavaa/J-H-cafe-project.git

cd J-H-cafe-project


### 2. Backend Setup

```
cd Backend

npm install
```
* Ensure MySQL Community Server is running on your machine (default port 3306).

* Create a .env file in the Backend directory and configure your MySQL credentials:
```
DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_strong_password

DB_NAME=jh_cafe_db
```
Start the backend server:

```
npm start
```

### 3. Frontend Setup
```
cd ../Frontend

npm install

npm run dev
```

* Open the local URL provided by Vite in your browser to view the application.
