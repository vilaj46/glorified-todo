import express from "express";
import MongoDB from "mongodb";
import bodyParser from "body-parser";

import signup from "./routes/signup.js";

// Figure out how to get form data.
// Setup mongoose and create a User Schema.

// App setup.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB setup.
const options = { useUnifiedTopology: true };
const mongoClient = new MongoDB.MongoClient(
  "mongodb://127.0.0.1:27017",
  options
);
mongoClient.connect((err, db) => {
  console.log("Connected to database!");
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
