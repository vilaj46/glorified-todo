const onUsernameChange = (value, state, setters) => {
  setters.setUsername(value);
  if (state.usernameMessage > 0) {
    setters.setUsernameMessage(0);
    setters.setUsernameError(false);
  }
};

const onPasswordChange = (value, state, setters) => {
  setters.setPassword(value);
  if (state.passwordMessage > 0) {
    setters.setPasswordMessage(0);
    setters.setPasswordError(false);
  }
};

const onEmailChange = (value, state, setters) => {
  setters.setEmail(value);
  if (state.emailMessage > 0) {
    setters.setEmailMessage(0);
    setters.setEmailError(false);
  }
};

export default {
  onUsernameChange,
  onPasswordChange,
  onEmailChange,
};
