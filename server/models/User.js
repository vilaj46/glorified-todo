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
    company: String,
  },
});

userSchema.methods.createAuthObject = async function () {
  const profile = await this.createProfileJWT();
  return {
    username: this.username,
    email: this.email,
    id: this._id,
    profile,
  };
};

userSchema.methods.createProfileJWT = function () {
  return jwt.sign({ ...this.profile }, process.env.SECRET_KEY);
};

userSchema.methods.createJWT = async function () {
  const data = await this.createAuthObject();
  return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "10s" });
};

userSchema.methods.checkPassword = function (potentialPassword) {
  const currentPassword = this.password;
  return bcrypt.compare(potentialPassword, currentPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
