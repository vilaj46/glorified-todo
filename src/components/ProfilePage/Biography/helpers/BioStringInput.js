import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import twitterSVG from "../../../../svgs/twitter.svg";

const BioStringInput = ({ localKey, keyValue, setKey }) => {
  const [keyText, setKeyText] = useState(keyValue);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setKeyText(e.target.value);
      setKey(localKey, e.target.value);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={twitterSVG} alt={localKey} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => onChange(e)}
        value={keyText}
      />
    </InputGroup>
  );
};

BioStringInput.propTypes = {
  localKey: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

export default BioStringInput;
