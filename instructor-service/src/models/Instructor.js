const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    expertise: {
      type: String,
      required: true
    },

    experience: {
      type: Number,
      required: true
    },

    bio: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Instructor", instructorSchema);