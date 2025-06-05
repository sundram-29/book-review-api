import mongoose from "mongoose";

export const connectDB =  () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName:"book-review-api",
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });
}

