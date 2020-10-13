function shouldWeDisplayCaptcha(history, credentials, settings) {
  const { pathname } = history.location;
  const { username, email, password } = credentials;
  const { captcha } = settings;

  if (
    pathname === "/login" &&
    username.length > 0 &&
    password.length > 0 &&
    captcha
  ) {
    return true;
  } else if (
    pathname === "/signup" &&
    username.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    captcha
  ) {
    return true;
  } else {
    return false;
  }
}

export default shouldWeDisplayCaptcha;
