import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../App/App.module.css";

// Helper Components
import SignupButton from "./helpers/SignupButton";
import LogButton from "./helpers/LogButton";
import ProfileButton from "./helpers/ProfileButton";

const Header = ({ setToken, isAuthenticated, authentication }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.linksContainer}>
          <Link to="/" className={styles.items}>
            <Button className={styles.button}>Items</Button>
          </Link>
          <LogButton isAuthenticated={isAuthenticated} setToken={setToken} />
          {!isAuthenticated && (
            <SignupButton
              isAuthenticated={isAuthenticated}
              authentication={authentication}
            />
          )}
        </div>
        <div className={styles.profileContainer}>
          {isAuthenticated && <ProfileButton authentication={authentication} />}
        </div>
      </nav>
      <h1>My Glorified To Do List</h1>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
