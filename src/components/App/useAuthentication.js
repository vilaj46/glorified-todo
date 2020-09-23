import { useState } from "react";

export default () => {
  // { username, token }
  const [authentication, setAuthentication] = useState({
    username: "",
    token: "",
  });

  /**
   * setToken
   *
   * @param {Object} data - { username, token }
   *
   * Authentication is processed and we are adding it to App state.
   */
  const setToken = (data) => {
    setAuthentication({ username: data.username, token: data.response });
  };

  return [authentication, setToken];
};
