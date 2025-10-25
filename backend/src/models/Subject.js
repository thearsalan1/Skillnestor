const mongoose = require("mongoose");
const SubjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Subject title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Subject description is required"],
      trim: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Subject refrence is required"],
    },
    pdfs: [
      {
        originalname: String,
        url: String,
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Subject", SubjectSchema);
