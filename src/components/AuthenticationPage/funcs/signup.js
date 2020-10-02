import emphasize from "./emphasize";
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
 *
 */
const signup = async (credentials, actions, state) => {
  if (credentials.username.trim().length === 0) {
    // Username input is empty.
    usernameIsEmpty(actions, state);
    return;
  } else if (credentials.email.trim().length === 0) {
    // Email input is empty.
    emailIsEmpty(actions, state);
    return;
  } else if (credentials.password.trim().length === 0) {
    // Password input is empty.
    passwordIsEmpty(actions, state);
    return;
  }

  const response = await api.signup(credentials);

  // Success and we got our token.
  if (response.status === 200) {
    successfullSignup(response, actions, state);
    return;
  }

  // Error handling.
  if (response.status === 406) {
    const { data } = response;
    if (data.includes("username") && data.includes("email")) {
      // Username and email are already in use.
      usernameAndEmailInUse(actions, state);
      return;
    } else if (data.includes("username")) {
      // Username in use.
      onlyUsernameInUse(actions, state);
    } else if (data.includes("email")) {
      // Email in use.
      onlyEmailInUse(actions, state);
      return;
    }
  }
};

// Empty Input Functions
/**
 * usernameIsEmpty
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our username is empty display the message. If it is empty and the message
 * is already showing display the message and emphasize it.
 */
function usernameIsEmpty(actions, state) {
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
}

/**
 * emailIsEmpty
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our email is empty display the message. If it is empty and the message
 * is already showing display the message and emphasize it.
 */
function emailIsEmpty(actions, state) {
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
}

/**
 * passwordIsEmpty
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our password is empty display the message. If it is empty and the message
 * is already showing display the message and emphasize it.
 */
function passwordIsEmpty(actions, state) {
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
}

// Signup Helper Functions
/**
 * successfullSignup
 *
 * @param {Object} response - Response from the api signup call.
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If we get a successful signup status, we set our errors to false.
 * Then we set our token and push to the profile page.
 */
function successfullSignup(response, actions, state) {
  actions.setUsernameError(false);
  actions.setPasswordError(false);
  actions.setToken(response.token);
  state.history.push("/profile");
}

/**
 * usernameAndEmailInUse
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our username and email are already in use perform the approriate
 * error handling. We cannot use the onlyUsernameInUse and
 * onlyEmailInUse functions in this for some reason.
 */
function usernameAndEmailInUse(actions, state) {
  // Set username error and styling.
  actions.setUsernameError(true);
  actions.setUsernameMessage(3);
  emphasize.userErrorMessage(
    500,
    actions.setLastClicked,
    state.usernameMessage,
    state.lastClicked
  );
  // Set email error and styling.
  actions.setEmailError(true);
  actions.setEmailMessage(3);
  emphasize.emailErrorMessage(
    500,
    actions.setLastClicked,
    state.emailMessage,
    state.lastClicked
  );
}

/**
 * onlyUsernameInUse
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our username is already in use perform the approriate
 * error handling.
 */
function onlyUsernameInUse(actions, state) {
  actions.setUsernameError(true);
  actions.setPasswordError(false);
  actions.setUsernameMessage(3);
  emphasize.userErrorMessage(
    500,
    actions.setLastClicked,
    state.usernameMessage,
    state.lastClicked
  );
}

/**
 * onlyEmailInUse
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If our email is already in use perform the approriate
 * error handling.
 */
function onlyEmailInUse(actions, state) {
  actions.setEmailError(true);
  actions.setUsernameError(false);
  actions.setEmailMessage(3);
  emphasize.emailErrorMessage(
    500,
    actions.setLastClicked,
    state.emailMessage,
    state.lastClicked
  );
}

export default signup;
