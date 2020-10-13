import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import express from "express";

const router = express.Router();

router.use(
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res, next) => {
    const { token } = req.body;
    // res.sendStatus(200);
    next();
  }
);

export default router;
