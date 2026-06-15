const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true
    },

    courseId: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["active", "cancelled", "completed"],
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);