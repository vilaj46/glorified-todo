import api from "../../../api/index.js";
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
const login = async (credentials, actions, state) => {
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

  const response = await api.login({
    username: credentials.username,
    password: credentials.password,
  });

  if (response.status === 200) {
    // Successful login.
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    actions.setToken(response.token);
    state.history.push("/profile");
    return;
  } else if (response.status === 406) {
    if (response.data === "Username not found.") {
      // Username was not found.
      actions.setUsernameError(true);
      actions.setPasswordError(false);
      actions.setUsernameMessage(2);
      emphasize.userErrorMessage(
        500,
        actions.setLastClicked,
        state.usernameMessage,
        state.lastClicked
      );
    } else {
      // Incorrect password.
      actions.setPasswordError(true);
      actions.setUsernameError(false);
      actions.setPasswordMessage(2);
      emphasize.passErrorMessage(
        500,
        actions.setLastClicked,
        state.passwordMessage,
        state.lastClicked
      );
    }
  }
};

export default login;
