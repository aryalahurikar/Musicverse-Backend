# MusicVerse Backend

MusicVerse is a music streaming platform with role-based authentication. Artists can upload music and create albums, while users can listen to music and access albums.

---

# Features

- User & Artist Authentication
- Role-Based Authorization
- Upload Music
- Create Albums
- Fetch All Music
- Fetch Albums
- Store Music Using ImageKit
- MongoDB Database Integration
- JWT Authentication
- Cookie Based Authentication

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- ImageKit
- cookie-parser
- dotenv

---

# Project Structure

```bash
backend
│
├── controllers
├── middlewares
├── models
├── routes
├── services
├── app.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/aryalahurikar/Musicverse-Backend.git
```

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

---

# Run Server

```bash
node server.js
```

or

```bash
nodemon server.js
```

---

# API Routes

## Authentication Routes

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Music Routes

### Upload Music (Artist Only)

```http
POST /api/music/upload
```

### Create Album (Artist Only)

```http
POST /api/music/album
```

### Get All Music

```http
GET /api/music
```

### Get All Albums

```http
GET /api/music/album
```

### Get Album By ID

```http
GET /api/music/album/:albumId
```

---

# ImageKit Setup

1. Create an account at:

https://imagekit.io/

2. Copy:
- Public Key
- Private Key
- URL Endpoint

3. Add them inside `.env` file.

---

# Dependencies

```json
{
  "@imagekit/nodejs": "^7.5.0",
  "bcryptjs": "^3.0.3",
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.5.0",
  "multer": "^2.1.1"
}
```

---

# Future Improvements

- Frontend Integration
- Music Player UI
- Playlist Feature
- Search Functionality
- Like & Favorite Songs
- Admin Dashboard

---

# Author

Arya Lahurikar
