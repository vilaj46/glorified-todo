import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.module.css";

// Helper Components
import SignupButton from "./helpers/SignupButton";
import LogButton from "./helpers/LogButton";
import ProfileButton from "./helpers/ProfileButton";
import ItemsLink from "./helpers/ItemsLink";

const Header = ({ authentication, isAuthenticated, setToken }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.linksContainer}>
          <ItemsLink />
          <LogButton isAuthenticated={isAuthenticated} setToken={setToken} />
          {!isAuthenticated && <SignupButton />}
        </div>
        <div className={styles.profileContainer}>
          {isAuthenticated && (
            <ProfileButton profilePic={authentication.profilePic} />
          )}
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
