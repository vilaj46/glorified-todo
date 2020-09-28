import emphasize from "./emphasize";
import api from "../../../api.js";
import api2 from "../../../api2.js";

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
    actions.setEmailError(false);
    actions.setPasswordError(false);
    actions.setUsernameMessage(1);
    emphasize.userErrorMessage(
      500,
      actions.setLastClicked,
      state.usernameMessage,
      state.lastClicked
    );
    return;
  } else if (credentials.email.trim().length === 0) {
    // Email is empty.
    actions.setEmailError(true);
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    actions.setEmailMessage(1);
    emphasize.emailErrorMessage(
      500,
      actions.setLastClicked,
      state.emailMessage,
      state.lastClicked
    );
    return;
  } else if (credentials.password.trim().length === 0) {
    // Password value is empty.
    actions.setPasswordError(true);
    actions.setUsernameError(false);
    actions.setEmailError(false);
    actions.setPasswordMessage(1);
    emphasize.passErrorMessage(
      500,
      actions.setLastClicked,
      state.passwordMessage,
      state.lastClicked
    );
    return;
  }

  const response = api.signup(
    credentials.username,
    credentials.email,
    credentials.password
  );
  const response2 = api2.signup(credentials);
  if (response.includes(406) && response.includes("username")) {
    // Username in use.
    actions.setUsernameError(true);
    actions.setPasswordError(false);
    actions.setUsernameMessage(3);
    emphasize.userErrorMessage(
      500,
      actions.setLastClicked,
      state.usernameMessage,
      state.lastClicked
    );
  } else if (response.includes(406) && response.includes("email")) {
    // Email in use.
    actions.setEmailError(true);
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    actions.setEmailMessage(3);
    emphasize.emailErrorMessage(
      500,
      actions.setLastClicked,
      state.emailMessage,
      state.lastClicked
    );
  } else {
    // Successful login.
    actions.setToken(response[0]);
    actions.setUsernameError(false);
    actions.setPasswordError(false);
    state.history.push("/profile");
  }
};

export default signup;
