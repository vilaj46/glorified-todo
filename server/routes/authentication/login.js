import express from "express";

import User from "../../models/User";

const router = express.Router();

router.use(async (req, res) => {
  const { username, password } = req.body;

  // Search if username exists.
  const foundByUsername = await User.findOne({ username });

  if (foundByUsername !== null) {
    const isValidPassword = await foundByUsername.checkPassword(password);
    if (isValidPassword) {
      const token = await foundByUsername.createJWT();
      return res.json(token);
    } else {
      return res.status(406).send("password");
    }
  } else if (foundByUsername === null) {
    // Username was not found.
    return res.status(406).send("username");
  } else {
    // Something else went wrong.
    return res.status(400);
  }
});

export default router;
