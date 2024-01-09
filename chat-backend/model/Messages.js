import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  timestamps: {
    createdAt: "joinedAt",
  },
});

export default mongoose.model("messages", messageSchema);
