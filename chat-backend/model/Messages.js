import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  timestamps: {
    joinedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },
});

export default mongoose.model("messages", messageSchema);
