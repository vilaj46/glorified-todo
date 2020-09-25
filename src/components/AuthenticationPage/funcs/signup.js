import emphasize from "./emphasize";
import api from "../../../api.js";

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
 *
 */
const signup = (credentials, actions, state) => {
  if (credentials.username.trim().length === 0) {
    // Username value is empty.
    actions.setUsernameError(true);
    actions.setPasswordError(false);
    actions.setUsernameMessage(1);
    emphasize.userErrorMessage(
      500,
      actions.setLastClicked,
      state.usernameMessage,
      state.lastClicked
    );
    return;
  } else if (credentials.password.trim().length === 0) {
    // Password value is empty.
    actions.setPasswordError(true);
    actions.setUsernameError(false);
    actions.setPasswordMessage(1);
    emphasize.passErrorMessage(
      500,
      actions.setLastClicked,
      state.passwordMessage,
      state.lastClicked
    );
    return;
  }

  const response = api.signup(credentials.username, credentials.password);

  if (response === 406) {
    // Username in use.
    actions.setUsernameError(true);
    actions.setPasswordError(false);
    actions.setUsernameMessage(3);
    emphasize.passErrorMessage(
      500,
      actions.setLastClicked,
      state.passwordMessage,
      state.lastClicked
    );
  } else {
    // Successful login.
    actions.setToken({ username: credentials.username, response });
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    state.history.push("/profile");
  }
};

export default signup;
