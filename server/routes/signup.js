import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  res.send("signup");
  next();
});

export default router;
