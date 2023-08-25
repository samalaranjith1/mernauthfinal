const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const collection = require("./mongo");

app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://samalaranjith1:Ranjith1956@cluster0.r3efdtw.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await createListing(client, {
      username: "ranjithsamala",
      email: "ranjit1h@gmail.com",
      password: "ranjith@gmail.com",
    });
  } finally {
    await client.close();
  }
}

main().catch(console.error);

const createListing = async (client, newListing) => {
  const result = await client
    .db("usersDB")
    .collection("users")
    .insertOne(newListing);

  console.log(
    await client
      .db("usersDB")
      .collection("users")
      .findOne({ email: `ranjit1h@gmail.com` })
  );
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
};

//new code
app.listen(8000, () => {
  console.log("connected via port 8000");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
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
