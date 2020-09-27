import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import api from "../../../../api.js";

import websiteSVG from "../../../../svgs/website.svg";

const WebsiteInput = ({ username, website, setKey }) => {
  const [websiteText, setWebsiteText] = useState(website);

  const onChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setWebsiteText(e.target.value);
      api.changeKey(username, "website", e.target.value);
      setKey("website", e.target.value);
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-sm">
          <img src={websiteSVG} alt="Website" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => onChange(e)}
        value={websiteText}
      />
    </InputGroup>
  );
};

WebsiteInput.propTypes = {
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

export default WebsiteInput;
