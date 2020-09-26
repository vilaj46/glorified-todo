import React from "react";
import PropTypes from "prop-types";

import styles from "./ProfilePage.module.css";

import Biography from "./Biography/Biography";

const ProfilePage = ({ authentication, setKey }) => {
  return (
    <div className={styles.profilePage}>
      <Biography authentication={authentication} setKey={setKey} />
    </div>
  );
};

ProfilePage.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  setKey: PropTypes.func.isRequired,
};

export default ProfilePage;
