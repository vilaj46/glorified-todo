import React from "react";
import PropTypes from "prop-types";

import styles from "../LoginPage.module.css";

import authProblem from "../../../svgs/auth_problem.svg";

const UsernameErrorSVG = ({ usernameError }) => {
  return (
    usernameError && (
      <img
        src={authProblem}
        alt="Authentication Problem"
        className={styles.authProblem}
      />
    )
  );
};

UsernameErrorSVG.propTypes = {
  usernameError: PropTypes.bool.isRequired,
};

export default UsernameErrorSVG;
