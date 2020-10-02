import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Encrypted
  email: String,
  profile: {
    bio: String,
    location: String,
    visibleEmail: String,
    emails: Array,
    website: String,
    twitter: String,
  },
});

userSchema.methods.createAuthObject = function () {
  return {
    username: this.username,
    email: this.email,
    profile: this.profile,
  };
};

userSchema.methods.createJWT = function () {
  const data = this.createAuthObject();
  return jwt.sign(data, process.env.SECRET_KEY);
};

userSchema.methods.checkPassword = function (potentialPassword) {
  const currentPassword = this.password;
  return bcrypt.compare(potentialPassword, currentPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
