/**
 * resetHooks
 *
 * @param {Object} setters - Our hook settings in the AuthenticationPage.
 *
 * Resets all the hooks.
 */
export default (setters, page) => {
  setters.setPrevPage(page);
  setters.setUsername("");
  setters.setEmail("");
  setters.setPassword("");
  setters.setUsernameError(false);
  setters.setEmailError(false);
  setters.setPasswordError(false);
  setters.setDisplayPassword(false);
  setters.setUsernameMessage(0);
  setters.setEmailMessage(0);
  setters.setPasswordMessage(0);
  setters.setOverHeadMessage("");
  setters.setCounter(0);
  setters.setCaptchaValue(undefined);
};
