import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../AuthenticationPage.module.css";

const TokenOrCookie = ({ settings, setSettingsKey }) => {
  const initialState = settings.method === "token" ? "token" : "cookie";

  const [checked, setChecked] = useState(initialState);

  const tokenChecked = checked === "token";
  const cookieChecked = checked === "cookie";

  const onChange = (e, key) => {
    e.stopPropagation();
    console.log(key);
    console.log(checked);
    if (key === "token" && checked !== "token") {
      setChecked("token");
      setSettingsKey("method", "token");
    } else if (key === "cookie" && checked !== "cookie") {
      setChecked("cookie");
      setSettingsKey("method", "cookie");
    }
  };

  return (
    <div className={styles.tokenCookieContainer}>
      <Form.Group
        controlId="tokenCheck"
        className={styles.check}
        // onClick={() => onChange("token")}
      >
        <Form.Check
          type="checkbox"
          label="Token"
          checked={tokenChecked}
          onChange={(e) => onChange(e, "token")}
        />
      </Form.Group>
      <Form.Group
        controlId="cookieChecks"
        className={styles.check}
        // onClick={(e) => onChange(e, "cookie")}
      >
        <Form.Check
          type="checkbox"
          label="cookie"
          checked={cookieChecked}
          onChange={(e) => onChange(e, "cookie")}
        />
      </Form.Group>
    </div>
  );
};

TokenOrCookie.propTypes = {
  settings: PropTypes.shape({
    method: PropTypes.string.isRequired,
  }).isRequired,
  setSettingsKey: PropTypes.func.isRequired,
};

export default TokenOrCookie;
