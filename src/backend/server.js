const express = require("express")();
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const check = await collection.findOne({ username: username });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const data = {
    username: username,
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});
app.use("/", (req, res) => {
  res.status(300).send("Hello JavaTpoint!");
});

app.listen(3456, () => {
  console.log("port connected");
});
