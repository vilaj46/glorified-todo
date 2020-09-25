import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import styles from "../AuthenticationPage.module.css";

const LoginButton = ({ page }) => {
  const buttonStyle =
    page === "login" ? styles.loginButton : styles.signupButton;
  const buttonText = page === "login" ? "Log In" : "Create New Account";

  return (
    <Button variant="primary" type="submit" className={buttonStyle}>
      {buttonText}
    </Button>
  );
};

LoginButton.propTypes = {
  page: PropTypes.string.isRequired,
};

export default LoginButton;
