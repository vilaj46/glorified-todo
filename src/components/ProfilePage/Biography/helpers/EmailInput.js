import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import envelope from "../../../../svgs/envelope.svg";

import styles from "../Biography.module.css";

const EmailInput = ({ email, visibleEmails, setEmailText }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend className={styles.envelope}>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={envelope} alt="Email" title="Email" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={email || " "}
        className={styles.dropdown}
      >
        <Dropdown.Item
          href="#"
          className={styles.blankEmail}
          onClick={() => setEmailText(" ")}
        >
          Leave Blank
        </Dropdown.Item>
        {visibleEmails.map((email) => {
          return (
            <Dropdown.Item
              href="#"
              className={styles.choice}
              onClick={() => setEmailText(email)}
              key={email}
            >
              {email}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </InputGroup>
  );
};

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  visibleEmails: PropTypes.array.isRequired,
  setEmailText: PropTypes.func.isRequired,
};

export default EmailInput;
