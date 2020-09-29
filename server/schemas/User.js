import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Encrypted
  profile: {
    bio: String,
    location: String,
    visibleEmail: String,
    emails: Array,
    website: String,
    twitter: String,
  },
});

const User = mongoose.model("Test", userSchema);

export default User;
