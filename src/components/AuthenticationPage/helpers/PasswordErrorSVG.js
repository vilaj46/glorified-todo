import React from "react";
import PropTypes from "prop-types";

import styles from "../AuthenticationPage.module.css";

import authProblem from "../../../svgs/auth_problem.svg";

const PasswordErrorSVG = ({ passwordError }) => {
  return (
    passwordError && (
      <img
        src={authProblem}
        alt="Authentication Problem"
        className={styles.authProblem}
      />
    )
  );
};

PasswordErrorSVG.propTypes = {
  passwordError: PropTypes.bool.isRequired,
};

export default PasswordErrorSVG;
