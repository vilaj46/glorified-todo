import { useState } from "react";

export default () => {
  // { username, token }
  const [authentication, setAuthentication] = useState([]);

  /**
   * setToken
   *
   * @param {Object} data - { username, token }
   *
   * Authentication is processed and we are adding it to App state.
   */
  const setToken = (data) => {
    setAuthentication({ ...data });
  };

  return [authentication, setToken];
};
