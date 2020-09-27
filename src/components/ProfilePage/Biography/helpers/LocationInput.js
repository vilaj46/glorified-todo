import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import api from "../../../../api.js";

import locationSVG from "../../../../svgs/location.svg";

const LocationInput = ({ username, location, setKey }) => {
  const [locationText, setlocationText] = useState(location);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setlocationText(e.target.value);
      api.changeKey(username, "location", e.target.value);
      setKey("location", e.target.value);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={locationSVG} alt="Location" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => onChange(e)}
        value={locationText}
      />
    </InputGroup>
  );
};

LocationInput.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

export default LocationInput;
