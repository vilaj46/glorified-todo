import express from "express";
import jwt_decode from "jwt-decode";

import User from "../models/User";

const router = express.Router({ mergeParams: true });

router.use(async (req, res) => {
  const authorization = req.get("Authorization");
  const token = authorization.split(" ")[1];
  const decoded = jwt_decode(token);

  if (Date.now() >= decoded.exp * 1000) {
    return res.sendStatus(401);
  } else {
    const { id } = req.params;
    const profile = req.body;

    User.findByIdAndUpdate(id, { profile }, (err, doc) => {
      if (err) return 500; // Not sure, something went wrong.
      return res.sendStatus(200);
    });
  }
});

export default router;
