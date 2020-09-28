import api from "../../../api.js";
import emphasize from "./emphasize.js";

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
const login = (credentials, actions, state) => {
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

  const response = api.login(credentials.username, credentials.password);

  if (response === 404) {
    // Username not found.
    actions.setUsernameError(true);
    actions.setPasswordError(false);
    actions.setUsernameMessage(2);
    emphasize.userErrorMessage(
      500,
      actions.setLastClicked,
      state.usernameMessage,
      state.lastClicked
    );
  } else if (response === 406) {
    // Incorrect credentials.password.
    actions.setPasswordError(true);
    actions.setUsernameError(false);
    actions.setPasswordMessage(2);
    emphasize.passErrorMessage(
      500,
      actions.setLastClicked,
      state.passwordMessage,
      state.lastClicked
    );
  } else {
    // Successful login.
    actions.setToken(response);
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    state.history.push("/profile");
  }
};

export default login;
