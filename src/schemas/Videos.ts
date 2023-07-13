import mongoose, { Schema, Document } from "mongoose";

interface VideoI extends Document {
  title?: string;
  company: mongoose.Schema.Types.ObjectId;
  createdBy: mongoose.Schema.Types.ObjectId;
  description?: string;
  videoLink?: string;
  videoType?: string;
}

const VideoSchema = new Schema<VideoI>(
  {
    title: {
      type: String,
      trim: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videoLink: {
      type: String,
      trim: true,
    },
    videoType: {
      type: String,
      required: true,
      default: "youtube",
    },
  },
  { timestamps: true }
);

export default mongoose.model<VideoI>("Video", VideoSchema);