import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

// cd C:\"Program Files"\MongoDB\Server\4.4\bin

// Authentication Routes
import signup from "./routes/authentication/signup.js";
import login from "./routes/authentication/login.js";
import updateProfile from "./routes/authentication/updateProfile.js";
import google from "./routes/authentication/google.js";

// App setup.
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB setup.
const options = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose
  .connect("mongodb://127.0.0.1:27017/glorified-todo", options)
  .then(() => {
    console.log("Connected to MongoDB.");
  });
mongoose.set("useFindAndModify", false);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth/google/redirect", (req, res, next) => {
  console.log("aaa");
});

// Authentication Routes
app.use("/signup", signup);
app.use("/login", login);
app.use("/users/:id", updateProfile);
app.use(
  "/auth/google",
  // passport.authenticate("google", { scope: ["profile"] })
  google
);

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on local port: ${port}.`);
});
