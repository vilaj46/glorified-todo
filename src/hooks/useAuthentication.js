import { useState } from "react";
import jwt_decode from "jwt-decode";

import avatar from "../images/avatar.png";

export default () => {
  const [authentication, setAuthentication] = useState(defaultValues);

  /**
   * setToken
   *
   * @param {String} token - Our newly created token from the backend.
   *
   * Sets our new token and the token in localStorage.
   * This will keep our data updated with any new action.
   *
   * Our token will be null if we are clearing it. We check if there is a token still
   * in the localStorage. If there is, clear it.
   *
   * If our token isn't null, we are giving a token with new data.
   * Decode the token and set our authentication hook.
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
        todos: decoded.todos,
      });
      localStorage.setItem("token", token);
    }
  };

  /**
   * setProfileKey
   *
   * @param {String} token - Our newly created token from the backend.
   *
   * Updates our profile after the save button is clicked.
   * Also updates our storage token.
   */
  const setProfileKey = (newToken) => {
    const decoded = jwt_decode(newToken);
    const { profile } = decoded;
    localStorage.setItem("token", newToken);
    setAuthentication({ ...authentication, profile });
  };

  return [authentication, setToken, setProfileKey];
};

/**
 * Default values so we don't get any propTypes warnings.
 * Should reflect the information on the backend.
 * This probably isn't the best way to handle this...
 */
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
  todos: [],
};
