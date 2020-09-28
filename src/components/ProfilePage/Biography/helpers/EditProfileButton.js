import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import styles from "../Biography.module.css";

const EditProfileButton = ({ setDisplayBioInputs }) => {
  return (
    <Button
      type="button"
      className={styles.editButton}
      onClick={() => setDisplayBioInputs(true)}
    >
      Edit Profile
    </Button>
  );
};

EditProfileButton.propTypes = {
  setDisplayBioInputs: PropTypes.func.isRequired,
};

export default EditProfileButton;
