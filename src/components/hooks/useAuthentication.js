import { useState } from "react";
import jwt_decode from "jwt-decode";

import avatar from "../../images/avatar.png";

export default () => {
  const [authentication, setAuthentication] = useState(defaultValues);

  /**
   * setToken
   *
   * @param {Object} data - { username, jwt, profilePic }
   *
   * Authentication is processed and we are adding it to App state.
   */
  const setToken = (token = null) => {
    if (token === null) {
      const potentialToken = localStorage.getItem("token");
      if (potentialToken) {
        localStorage.removeItem("token");
      }
      setAuthentication({ ...defaultValues });
    } else {
      const decoded = jwt_decode(token);

      setAuthentication({
        ...authentication,
        ...decoded,
        token,
        profilePic: avatar,
      });
      localStorage.setItem("token", token);
    }
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

const defaultValues = {
  email: "",
  iat: 0,
  exp: 0,
  username: "",
  token: "",
  profile: {
    bio: "",
    company: "",
    location: "",
    website: "",
    twitter: "",
    visibleEmail: "",
    emails: [],
  },
  profilePic: "",
};
