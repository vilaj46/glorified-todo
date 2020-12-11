import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.module.css";

// Helper Components
import SignupButton from "./helpers/SignupButton";
import LogButton from "./helpers/LogButton";
import ProfileButton from "./helpers/ProfileButton";
import ItemsLink from "./helpers/ItemsLink";

const Header = ({ authData, setInitialTodos }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.linksContainer}>
          <ItemsLink />
          <LogButton authData={authData} setInitialTodos={setInitialTodos} />
          {!authData.isAuthenticated && <SignupButton />}
        </div>
        <div className={styles.profileContainer}>
          {authData.isAuthenticated && (
            <ProfileButton profilePic={authData.authentication.profilePic} />
          )}
        </div>
      </nav>
      <h1>My Glorified To Do List HEY</h1>
    </header>
  );
};

Header.propTypes = {
  authData: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    authentication: PropTypes.shape({
      profilePic: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setInitialTodos: PropTypes.func.isRequired,
};

export default Header;
