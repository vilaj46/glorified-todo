import React, { useState } from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";

import styles from "./ProfilePage.module.css";

import Biography from "./Biography/Biography";

const ProfilePage = ({ authentication, setProfileKey, setToken }) => {
  const decodedProfile = jwt_decode(authentication.profile);
  const [displayBioInputs, setDisplayBioInputs] = useState(false);
  return (
    <div className={styles.profilePage}>
      <Biography
        authentication={authentication}
        profile={decodedProfile}
        setProfileKey={setProfileKey}
        displayBioInputs={displayBioInputs}
        setDisplayBioInputs={setDisplayBioInputs}
        setToken={setToken}
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
  setToken: PropTypes.func.isRequired,
};

export default ProfilePage;
