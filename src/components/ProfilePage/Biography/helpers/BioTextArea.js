import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const BioTextArea = ({ bio, setBioText }) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Add a bio"
        value={bio}
        onChange={(e) => setBioText(e.target.value)}
      />
    </Form.Group>
  );
};

BioTextArea.propTypes = {
  bio: PropTypes.string.isRequired,
  setBioText: PropTypes.func.isRequired,
};

export default BioTextArea;
