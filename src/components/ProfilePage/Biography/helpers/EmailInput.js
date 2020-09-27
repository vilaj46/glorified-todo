import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import api from "../../../../api.js";

import envelope from "../../../../svgs/envelope.svg";

const EmailInput = ({ username, email, setProfileKey }) => {
  const [emailText, setEmailText] = useState(email);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setEmailText(e.target.value);
      api.changeKey(username, "email", e.target.value);
      setProfileKey("email", e.target.value);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={envelope} alt="Email" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => onChange(e)}
        value={emailText}
      />
    </InputGroup>
  );
};

EmailInput.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setProfileKey: PropTypes.func.isRequired,
};

export default EmailInput;
