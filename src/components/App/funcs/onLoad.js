import jwt_decode from "jwt-decode";

/**
 * onLoad
 *
 * @param {Hook} - {loaded, setLoaded}
 * @param {Object} - {exp: authentication.exp, setToken };
 * @param {Function} - setToken our hook action
 * @param {Function} - setInitialTodos
 *
 * Check if our app is loaded.
 *
 * If our app is loaded, check if there is a token already in localStorage.
 * If there is a token in localStorage, decode it and check the expiration.
 * If we are not expired update our current state, otherwise clear the storage and the state.
 *
 * If we are not loaded, check if our current token is not expired.
 * If it expires clear our state, otherwise leave it alone.
 */
export default (loadedHook, authHook, setInitialTodos) => {
  if (loadedHook.loaded === false) {
    const potentialToken = localStorage.getItem("token");
    if (potentialToken) {
      const decoded = jwt_decode(potentialToken);
      if (Date.now() <= decoded.exp * 1000) {
        authHook.setToken(potentialToken);
        setInitialTodos(decoded.todos);
      } else {
        authHook.setToken();
      }
    }
    loadedHook.setLoaded(true);
  } else {
    // If we are loading, we check for the expiration of our token.
    const expired = Date.now() >= authHook.exp * 1000 && authHook.exp !== 0;
    if (expired) {
      authHook.setToken();
    }
  }
};
