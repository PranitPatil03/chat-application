import mongoose from "mongoose";

const mongooseConnection = mongoose
  .connect(process.env.MONGODB_URL, {
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

export { mongooseConnection };
