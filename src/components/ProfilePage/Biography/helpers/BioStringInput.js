import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import companySVG from "../../../../svgs/company.svg";
import locationSVG from "../../../../svgs/location.svg";
import websiteSVG from "../../../../svgs/website.svg";
import twitterSVG from "../../../../svgs/twitter.svg";

import styles from "../Biography.module.css";

const BioStringInput = ({ localKey, keyValue, setProfileKey }) => {
  let icon;

  const loweredLocalKey = localKey.toLowerCase();
  switch (loweredLocalKey) {
    case "company":
      icon = companySVG;
      break;
    case "location":
      icon = locationSVG;
      break;
    case "website":
      icon = websiteSVG;
      break;
    default:
      icon = twitterSVG;
      break;
  }

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          className={styles.bioIconContainer}
        >
          <img src={icon} alt={localKey} title={localKey} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={(e) => setProfileKey(e.target.value)}
        value={keyValue}
        className={styles.bioStringInput}
        placeholder={localKey}
      />
    </InputGroup>
  );
};

BioStringInput.propTypes = {
  localKey: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  setProfileKey: PropTypes.func.isRequired,
};

export default BioStringInput;
