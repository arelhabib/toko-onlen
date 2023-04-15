require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to this app, go to /docs to open documentation");
  // #swagger.summary = 'Home'
});
app.use(routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
