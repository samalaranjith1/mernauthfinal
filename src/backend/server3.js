// const express = require("express")();
// const collection = require("./mongo");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(cors());

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });
// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const check = await collection.findOne({ username: username });
//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//     }
//   } catch (error) {
//     res.json("fail");
//   }
// });

// app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;
//   const data = {
//     username: username,
//     email: email,
//     password: password,
//   };

//   try {
//     const check = await collection.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//       await collection.insertMany([data]);
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// });

// app.listen(8080, () => {
//   console.log("port connected");
// });
