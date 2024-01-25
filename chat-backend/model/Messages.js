import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  from: String,
  to: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("messages", messageSchema);
