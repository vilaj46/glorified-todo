import api from "../../../api/index.js";
import messages from "./messages.js";
/**
 * login
 *
 * @param {Object} credentials - username, email, password
 * @param {Object} actions - setUsernameError, setEmailError, setPasswordError, setUsernameMessage, setEmailMessage, setPasswordMessage, lastClicked, setLastClicked, setToken
 * @param {Object} state - usernameMessage, passwordMessage, lastClicked, history
 *
 * Checks if the username or password are blank. If they are display the message.
 * If we try logging in with a message already display, emphasize the message.
 * Cut short if either are blank.
 *
 * If there is a username and password, make the api call.
 * Set the appropriate messages and emphasizes based off our response.
 *
 */
const login = async (credentials, actions, state) => {
  if (credentials.username.trim().length === 0) {
    // Username value is empty.
    messages.usernameIsEmpty(actions, state);
    return false;
  } else if (credentials.password.trim().length === 0) {
    // Password value is empty.
    messages.passwordIsEmpty(actions, state);
    return false;
  }

  if (!state.captchaValue && state.settings.captch) return false;

  const response = await api.login({
    username: credentials.username,
    password: credentials.password,
  });

  if (response.status === 200) {
    // Successful login.
    messages.successful(response, actions, state);
    return true;
  } else if (response.status === 406) {
    if (response.data === "Username not found.") {
      // Username was not found.
      messages.usernameNotFound(actions, state);
      return false;
    } else {
      // Incorrect password.
      messages.passwordIncorrect(actions, state);
      return false;
    }
  }
};

export default login;
