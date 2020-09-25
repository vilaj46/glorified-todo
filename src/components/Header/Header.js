import React from "react";
import PropTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../App/App.module.css";

// Helper Components
import SignProfileButton from "./helpers/SignProfileButton";
import LogButton from "./helpers/LogButton";

const Header = ({ setToken, isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <div className={styles.linksContainer}>
        <ButtonGroup>
          <Link className={styles.link} to="/">
            <Button className={styles.button}>Items</Button>
          </Link>
          <LogButton isAuthenticated={isAuthenticated} setToken={setToken} />
          <SignProfileButton isAuthenticated={isAuthenticated} />
        </ButtonGroup>
      </div>
      <h1>My Glorified To Do List</h1>
    </header>
  );
};

Header.propTypes = {
  authentication: PropTypes.shape({
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
