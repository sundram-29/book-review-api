<<<<<<< HEAD
# 📚 Book Review API

A RESTful API built with Node.js, Express, and MongoDB to manage a simple book review system. The API supports user registration, authentication using JWT, book listings, and one-review-per-user functionality.

---

## 🚀 Features

- ✅ User signup & login (JWT-based authentication)
- ✅ Create, read, search books (with pagination & filters)
- ✅ Add/update/delete reviews (only one per user per book)
- ✅ Average book ratings calculation
- ✅ Middleware for protected routes
- ✅ Clean and modular project structure

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT
- **Testing**: Postman
- **Environment**: dotenv

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/sundram-29/book-review-api.git
   cd book-review-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure `.env`**
   Create a `.env` file in the root:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET_KEY=your_secret_key
   ```

4. **Run the project**
   ```bash
   npm run dev
   ```

---

## 🔐 Authentication Routes

| Route         | Method | Description                |
|---------------|--------|----------------------------|
| `/api/signup` | POST   | Register a new user        |
| `/api/login`  | POST   | Login and receive JWT token|

---

## 📚 Book Routes

| Route             | Method | Auth Required | Description                                  |
|------------------|--------|----------------|----------------------------------------------|
| `/api/books`     | POST   | ✅              | Create a new book                            |
| `/api/books`     | GET    | ❌              | Get all books (with filter/pagination)       |
| `/api/books/:id` | GET    | ❌              | Get single book with reviews & avg. rating   |
| `/api/search`    | GET    | ❌              | Search books by title or author              |

---

## ✍️ Review Routes

| Route                          | Method | Auth Required | Description                 |
|--------------------------------|--------|----------------|-----------------------------|
| `/api/books/:id/reviews`      | POST   | ✅              | Add review to a book        |
| `/api/reviews/:id`            | PUT    | ✅              | Update your review          |
| `/api/reviews/:id`            | DELETE | ✅              | Delete your own review      |

---

## 💾 Sample .env File

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookreviewdb
JWT_SECRET_KEY=supersecretjwtkey
```

---

## 🔄 Design Decisions

- Only one review per user per book.
- Protected routes using JWT middleware.
- Error handling using consistent responses.
- Mongoose schema relationships (book <-> reviews).

---

## 🧪 API Testing

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) to test APIs.  
Make sure to include the JWT token as `Bearer <token>` in the Authorization header for protected routes.

---

## 👤 Author

**Sundram Pandey**  
[GitHub](https://github.com/sundram-29)

---

## 📎 License

This project is open-source and free to use.
=======
# book-review-api
>>>>>>> b7f16a175bddee538e3d6a1bad674c7ec2d0cf13
