import { useState } from "react";

export default () => {
  const [authentication, setAuthentication] = useState({
    username: "",
    token: "",
    profilePic: "",
    bio: "",
    company: "",
    location: "",
    email: "",
    website: "",
    twitter: "",
    visibleEmail: "",
    visibleEmails: [],
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
      visibleEmail: data.visibleEmail || "",
      visibleEmails: data.visibleEmails || [],
    });
  };

  /**
   * setProfileKey
   *
   * @param {Object} data - Our profile keys and values
   *
   * If we press the save button on our profile page,
   * we iterate through the objects checking if the value has changed.
   *
   * If the value as changed we set our new profile.
   */
  const setProfileKey = (data) => {
    let newAuthentication = { ...authentication };
    const authenticationKeys = Object.keys(newAuthentication);

    authenticationKeys.forEach((k) => {
      const currentAuthValue = authentication[k];
      const futureAuthValue = data[k] || authentication[k]; // if data[key] is undefined.
      if (currentAuthValue !== futureAuthValue) {
        newAuthentication[k] = futureAuthValue;
      }
    });

    setAuthentication(newAuthentication);
  };

  return [authentication, setToken, setProfileKey];
};
