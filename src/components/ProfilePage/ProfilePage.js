import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ProfilePage.module.css";

import Biography from "./Biography/Biography";

const ProfilePage = ({ authentication, setProfileKey }) => {
  const [displayBioInputs, setDisplayBioInputs] = useState(false);
  return (
    <div className={styles.profilePage}>
      <Biography
        authentication={authentication}
        setProfileKey={setProfileKey}
        displayBioInputs={displayBioInputs}
        setDisplayBioInputs={setDisplayBioInputs}
      />
    </div>
  );
};

ProfilePage.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  setProfileKey: PropTypes.func.isRequired,
};

export default ProfilePage;
