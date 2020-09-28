import React from "react";
import PropTypes from "prop-types";

import styles from "../AuthenticationPage.module.css";

import authProblem from "../../../svgs/auth_problem.svg";

const ErrorSVG = ({ error }) => {
  return (
    error && (
      <img
        src={authProblem}
        alt="Authentication Problem"
        className={styles.authProblem}
      />
    )
  );
};

ErrorSVG.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default ErrorSVG;
