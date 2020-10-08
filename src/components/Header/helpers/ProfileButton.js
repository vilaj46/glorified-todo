import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import styles from "../Header.module.css";

const ProfileButton = ({ profilePic }) => {
  return (
    <Link className={styles.profile} to="/signup">
      <Button className={styles.button}>
        <img
          src={profilePic}
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
  profilePic: PropTypes.string.isRequired,
};

export default ProfileButton;
