import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  console.log(req.body);
  res.send("signup");
  next();
});

export default router;
