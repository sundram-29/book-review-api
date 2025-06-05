import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});
export default mongoose.model("Book", bookSchema);