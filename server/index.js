import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Authentication Routes
import signup from "./routes/signup.js";
import login from "./routes/login.js";

// Figure out how to get form data.
// Setup mongoose and create a User Schema.

// App setup.
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB setup.
const options = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose
  .connect("mongodb://127.0.0.1:27017/glorified-todo", options)
  .then(() => {
    console.log("Connected to MongoDB.");
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Authentication Routes
app.use("/signup", signup);
app.use("/login", login);

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on local port: ${port}.`);
});
