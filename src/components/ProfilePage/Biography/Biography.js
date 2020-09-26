import React from "react";
import PropTypes from "prop-types";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import styles from "./Biography.module.css";

// Helper Components
import BioTextArea from "./helpers/BioTextArea";

const Biography = ({ authentication, setKey }) => {
  return (
    <div className={styles.biography}>
      <img
        src={authentication.profilePic}
        width="96"
        height="96"
        alt="Profile Pic"
      />
      <p>{authentication.username}</p>
      <BioTextArea
        username={authentication.username}
        bio={authentication.bio}
        setKey={setKey}
      />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Company</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Website</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-sm">Twitter</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};

Biography.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  setKey: PropTypes.func.isRequired,
};

export default Biography;
