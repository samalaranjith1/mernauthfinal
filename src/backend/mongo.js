const mongoose = require("mongoose");

const uri =
  "mongodb+srv://samalaranjith1:Ranjith1956@cluster0.r3efdtw.mongodb.net/users?retryWrites=true&w=majority";

const url = "mongodb://localhost:27017/users";

mongoose
  .connect(uri)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("failed" + error);
  });

const newSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
