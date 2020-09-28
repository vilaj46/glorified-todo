import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  res.send("signup");
  next();
});

export default router;
