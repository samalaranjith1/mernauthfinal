const app = require("express")();

app.use("/", (req, res) => {
  res.status(300).send("Hello JavaTpoint!");
});

app.listen(5000);
