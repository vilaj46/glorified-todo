import express from "express";
import MongoDB from "mongodb";

import signup from "./routes/signup.js";

const app = express();

// MongoDB setup.
const options = { useUnifiedTopology: true };
const mongoClient = new MongoDB.MongoClient(
  "mongodb://127.0.0.1:27017",
  options
);
mongoClient.connect((err, db) => {
  console.log("Connected!");
}, options);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signup);

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on local port: ${port}.`);
});
