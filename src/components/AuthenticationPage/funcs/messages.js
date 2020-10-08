import emphasize from "./emphasize.js";

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

/**
 * successful
 *
 * @param {Object} response - Response from the api signup call.
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If we get a successful signup status, we set our errors to false.
 * Then we set our token and push to the profile page.
 */
function successful(response, actions, state) {
  actions.setUsernameError(false);
  actions.setPasswordError(false);
  actions.setToken(response.token);
  state.history.push("/profile");
}

/**
 * usernameNotFound
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If we cannot find the username set our username message error to true and
 * everything else false.
 */
function usernameNotFound(actions, state) {
  actions.setUsernameError(true);
  actions.setPasswordError(false);
  actions.setUsernameMessage(2);
  emphasize.userErrorMessage(
    500,
    actions.setLastClicked,
    state.usernameMessage,
    state.lastClicked
  );
}

/**
 * passwordIncorrect
 *
 * @param {Object} actions  - Hooks from the previous component.
 * @param {Object} state - Our current state of the application.
 *
 * If we cannot find the username set our username message error to true and
 * everything else false.
 */
function passwordIncorrect(actions, state) {
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

export default {
  usernameIsEmpty,
  passwordIsEmpty,
  successful,
  usernameNotFound,
  passwordIncorrect,
  emailIsEmpty,
  usernameAndEmailInUse,
  onlyUsernameInUse,
  onlyEmailInUse,
};
