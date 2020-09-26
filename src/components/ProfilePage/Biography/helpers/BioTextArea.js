import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import api from "../../../../api.js";

const BioTextArea = ({ username, bio, setKey }) => {
  const [bioText, setBioText] = useState(bio);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setBioText(e.target.value);
      api.changeBio(username, e.target.value);
      setKey("bio", e.target.value);
    }
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Add a bio"
          value={bioText}
          onChange={(e) => onChange(e)}
        />
      </Form.Group>
    </Form>
  );
};

BioTextArea.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

export default BioTextArea;
