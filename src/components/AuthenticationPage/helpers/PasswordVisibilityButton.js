import React from "react";
import PropTypes from "prop-types";

import showPassword from "../../../svgs/show_password.svg";
import hidePassword from "../../../svgs/hide_password.svg";

import styles from "../AuthenticationPage.module.css";

const PasswordVisibilityButton = ({
  displayPassword,
  passwordError,
  setDisplayPassword,
}) => {
  return displayPassword ? (
    <button
      type="button"
      className={passwordError ? styles.showPW1 : styles.showPW2}
      onClick={() => setDisplayPassword(false)}
    >
      <img src={hidePassword} alt="Password Vision" />
    </button>
  ) : (
    <button
      type="button"
      className={passwordError ? styles.showPW1 : styles.showPW2}
      onClick={() => setDisplayPassword(true)}
    >
      <img src={showPassword} alt="Password Vision" />
    </button>
  );
};

PasswordVisibilityButton.propTypes = {
  displayPassword: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  setDisplayPassword: PropTypes.func.isRequired,
};

export default PasswordVisibilityButton;
