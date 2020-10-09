import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../AuthenticationPage.module.css";

const Settings = ({ settings, setSettingsKey }) => {
  const [captchaStatus, setCaptchaStatus] = useState(settings.captcha);

  const onChange = (e, key) => {
    e.stopPropagation();
    setCaptchaStatus(!captchaStatus);
    setSettingsKey(key, !captchaStatus);
  };

  return (
    <div className={styles.tokenCookieContainer}>
      <Form.Group controlId="tokenCheck" className={styles.check}>
        <Form.Check
          type="checkbox"
          label="Captcha"
          checked={captchaStatus}
          onChange={(e) => onChange(e, "captcha")}
        />
      </Form.Group>
    </div>
  );
};

Settings.propTypes = {
  settings: PropTypes.shape({
    captcha: PropTypes.bool.isRequired,
  }).isRequired,
  setSettingsKey: PropTypes.func.isRequired,
};

export default Settings;
