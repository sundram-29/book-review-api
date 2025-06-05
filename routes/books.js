import express from "express";
import Book from "../models/Book.js";
import Review from "../models/Review.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// Create a new book
router.post("/books", auth, async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book, message: "Book created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all books
router.get("/books", async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, "i");
  if (genre) filter.genre = new RegExp(genre, "i");
  const books = await Book.find(filter).skip((page - 1) * limit).limit(parseInt(limit));
  res.json({ books, message: "Books retrieved successfully" });
});

// Update a book
router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("reviews");
    const avgRating = book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length;
    res.json({ ...book._doc, message: "Book retrieved successfully", avgRating });
  } catch (err) {
    res.status(404).json({ error: "Book not found" });
  }
});

// Search books
router.get("/search", async (req, res) => {
  const { query } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(query, "i") },
      { author: new RegExp(query, "i") },
    ],
  });
  res.json(books);
});

export default router;