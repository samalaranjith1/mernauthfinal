const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
app.use(cors);

//middleware
app.use(express.json());

//database connection
mongoose
  .connect(
    "mongodb+srv://samalaranjith1:Ranjith1956@cluster0.r3efdtw.mongodb.net/education?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/auth", require("./routes/auth"));

//removing extra details in console
mongoose.set("strictQuery", false);
