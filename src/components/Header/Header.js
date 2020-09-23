import React from "react";
import PropTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../App/App.module.css";

const Header = ({ authentication }) => {
  const displayLogout =
    authentication.username.length > 0 && authentication.token.length > 0;

  return (
    <header className={styles.header}>
      <div className={styles.linksContainer}>
        <ButtonGroup>
          <Link className={styles.link} to="/">
            <Button className={styles.button}>Items</Button>
          </Link>
          <LogButton displayLogout={displayLogout} />
          <SignProfileButton displayLogout={displayLogout} />
        </ButtonGroup>
      </div>
      <h1>My Glorified To Do List</h1>
    </header>
  );
};

const SignProfileButton = ({ displayLogout }) => {
  if (displayLogout) {
    return (
      <Button className={`${styles.button} ${styles.link}`}>Profile</Button>
    );
  } else {
    return (
      <Link className={styles.link} to="/signup">
        <Button className={styles.button}>Signup</Button>
      </Link>
    );
  }
};

const LogButton = ({ displayLogout }) => {
  if (displayLogout) {
    return (
      <Button className={`${styles.button} ${styles.link}`}>Logout</Button>
    );
  } else {
    return (
      <Link className={styles.link} to="/login">
        <Button className={styles.button}>Login</Button>
      </Link>
    );
  }
};

Header.propTypes = {
  authentication: PropTypes.shape({
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
