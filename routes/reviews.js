import express from "express";
import Review from "../models/Review.js";
import Book from "../models/Book.js";
import auth from "../middleware/auth.js";
const router = express.Router();

// Create a new review
router.post("/books/:id/reviews", auth, async (req, res) => {
  const { rating, comment } = req.body;
  if (!rating || !comment) return res.status(400).json({ error: "Rating and comment are required." });
  if (rating < 1 || rating > 5) return res.status(400).json({ error: "Rating must be between 1 and 5." });
  const book = await Book.findById(req.params.id);
  const existing = await Review.findOne({ book: book._id, user: req.user.id });
  if (existing) return res.status(400).json({ error: "You already reviewed this book." });
  const review = await Review.create({ book: book._id, user: req.user.id, rating, comment });
  book.reviews.push(review);
  await book.save();
  res.status(201).json({ review, message: "Review created successfully" });
});

// Get all reviews for a book
router.put("/reviews/:id", auth, async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.id) return res.status(403).json({ error: "Not allowed" });
  Object.assign(review, req.body);
  await review.save();
  res.json(review);
});

// Delete a review
router.delete("/reviews/:id", auth, async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review.user.toString() !== req.user.id) return res.status(403).json({ error: "Not allowed" });
  await review.deleteOne();
  res.json({ message: "Review deleted successfully" });
});

export default router;
