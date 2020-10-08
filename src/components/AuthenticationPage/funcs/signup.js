import messages from "./messages.js";
import api from "../../../api/index.js";

/**
 * signup
 *
 * @param {Object} credentials - username, password
 * @param {Object} actions - setUsernameError, setPasswordError, setUsernameMessage, setPasswordMessage, lastClicked, setLastClicked, setToken
 * @param {Object} state - usernameMessage, passwordMessage, lastClicked, history
 *
 * Checks if the username or password are blank. If they are display the message.
 * If we try logging in with a message already display, emphasize the message.
 * Cut short if either are blank.
 *
 * If there is a username and password, make the api call.
 * Set the appropriate messages and emphasizes based off our response.
 */
const signup = async (credentials, actions, state) => {
  if (credentials.username.trim().length === 0) {
    // Username input is empty.
    messages.usernameIsEmpty(actions, state);
    return;
  } else if (credentials.email.trim().length === 0) {
    // Email input is empty.
    messages.emailIsEmpty(actions, state);
    return;
  } else if (credentials.password.trim().length === 0) {
    // Password input is empty.
    messages.passwordIsEmpty(actions, state);
    return;
  }

  const response = await api.signup(credentials);

  // Success and we got our token.
  if (response.status === 200) {
    messages.successful(response, actions, state);
    return;
  }

  // Error handling.
  if (response.status === 406) {
    const { data } = response;
    if (data.includes("username") && data.includes("email")) {
      // Username and email are already in use.
      messages.usernameAndEmailInUse(actions, state);
      return;
    } else if (data.includes("username")) {
      // Username in use.
      messages.onlyUsernameInUse(actions, state);
    } else if (data.includes("email")) {
      // Email in use.
      messages.onlyEmailInUse(actions, state);
      return;
    }
  }
};

export default signup;
