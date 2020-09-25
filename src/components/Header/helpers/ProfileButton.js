import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import styles from "../..//App/App.module.css";

const ProfileButton = ({ authentication }) => {
  return (
    <Link className={styles.profile} to="/signup">
      <Button className={styles.button}>
        <img
          src={authentication.profilePic}
          alt="Profile"
          className={styles.profilePic}
          width="32"
          height="32"
        />
        <span className={styles.profileText}>Profile</span>
      </Button>
    </Link>
  );
};

ProfileButton.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileButton;
