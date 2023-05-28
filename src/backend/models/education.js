const mongoose = require("mongoose");

const educationSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
