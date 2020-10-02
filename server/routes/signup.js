import bcrypt from "bcrypt";
import express from "express";

import User from "../models/User";

const router = express.Router();

router.use(async (req, res) => {
  const { username, email, password } = req.body;

  // Search if username or email is in use.
  const foundByUsername = await User.findOne({ username });
  const foundByEmail = await User.findOne({ email });

  if (foundByUsername === null && foundByEmail === null) {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        // Internal Server Error.
        return res.status(500).send("Something went wrong with encryption.");
      } else {
        // Create new user.
        const newUser = new User({
          username: username,
          password: hash,
          email: email,
          profile: {
            bio: "",
            location: "",
            visibleEmail: "",
            emails: [email],
            website: "",
            twitter: "",
          },
        });

        newUser.save((err) => {
          if (err) {
            // Internal Server Error.
            return res.status(500).send("Could not save new user.");
          } else {
            // return jwt and data.
            const token = newUser.createJWT();
            return res.json(token);
          }
        });
      }
    });
  } else {
    // Already an account with that username or email.
    let userInUse = false;
    let emailInUse = false;
    if (foundByUsername !== null) {
      userInUse = true;
    }

    if (foundByEmail !== null) {
      emailInUse = true;
    }

    if (userInUse && emailInUse) {
      return res.status(406).send("username email");
    } else if (userInUse) {
      return res.status(406).send("username");
    } else if (emailInUse) {
      return res.status(406).send("email");
    } else {
      return res.status(400);
    }
  }
});

export default router;
