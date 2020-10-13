import shouldWeDisplayCaptcha from "./shouldWeDisplayCaptcha.js";
import emphasize from "./emphasize.js";
import login from "./login.js";
import signup from "./signup.js";

export default async (e, state, setters) => {
  e.preventDefault();

  // Our current input states.
  const credentials = {
    username: state.username,
    email: state.email,
    password: state.password,
  };
  let recaptchaValue;
  if (state.settings.captcha) {
    recaptchaValue = state.recaptchaRef.current.getValue();
  }

  const toEmphCaptcha = shouldWeDisplayCaptcha(
    state.history,
    credentials,
    state.settings
  );

  // Cancels the login / signup if we don't click the captcha.
  if (
    (recaptchaValue === undefined || recaptchaValue === "") &&
    toEmphCaptcha
  ) {
    if (state.usernameError === true) {
      emphasize.userErrorMessage(
        500,
        setters.setLastClicked,
        state.lastClicked
      );
    } else if (state.passwordError === true) {
      emphasize.passErrorMessage(
        500,
        setters.setLastClicked,
        state.lastClicked
      );
    } else if (state.emailError === true) {
      emphasize.emailErrorMessage(
        500,
        setters.setLastClicked,
        state.lastClicked
      );
    } else {
      emphasize.captchaError(500, setters.setLastClicked, state.lastClicked);
    }
    return;
  }

  if (state.page === "login") {
    const didWeLogin = login(credentials, setters, state);
    if (didWeLogin === false && state.settings.captcha) {
      setters.setCaptchaValue(undefined);
    }
  } else {
    const didWeSignup = await signup(credentials, setters, state);
    if (didWeSignup === false) {
      function captchaChange(value) {
        setters.setCaptchaValue(value);
      }
      captchaChange(undefined);
    }
  }
};
