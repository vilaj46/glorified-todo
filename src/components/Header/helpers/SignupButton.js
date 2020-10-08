import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../Header.module.css";

const SignupButton = () => {
  return (
    <Link to="/signup">
      <Button className={styles.button}>Signup</Button>
    </Link>
  );
};

export default SignupButton;
