import { useState } from "react";

export default () => {
  const [authentication, setAuthentication] = useState({
    username: "",
    token: "",
    profilePic: "",
  });

  /**
   * setToken
   *
   * @param {Object} data - { username, jwt, profilePic }
   *
   * Authentication is processed and we are adding it to App state.
   */
  const setToken = (data) => {
    setAuthentication({
      username: data.username || "",
      token: data.jwt || "",
      profilePic: data.profilePic || "",
      bio: data.bio || "",
      company: data.company || "",
      location: data.location || "",
      email: data.email || "",
      website: data.website || "",
      twitter: data.twitter || "",
    });
  };

  const setKey = (key, value) => {
    setAuthentication({
      ...authentication,
      [key]: value,
    });
  };

  return [authentication, setToken, setKey];
};
