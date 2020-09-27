import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./Biography.module.css";

// Helper Components
import EmailInput from "./helpers/EmailInput";
import BioTextArea from "./helpers/BioTextArea";
import BioStringInput from "./helpers/BioStringInput";

// Helper Functions
import save from "./funcs/save";

const Biography = ({ authentication, setProfileKey }) => {
  const [bioText, setBioText] = useState(authentication.bio);
  const [companyText, setCompanyText] = useState(authentication.company);
  const [locationText, setLocationText] = useState(authentication.location);
  const [websiteText, setWebsiteText] = useState(authentication.website);
  const [twitterText, setTwitterText] = useState(authentication.twitter);

  const data = {
    bio: bioText,
    company: companyText,
    location: locationText,
    website: websiteText,
    twitter: twitterText,
  };

  return (
    <Form>
      <img
        className={styles.profilePic}
        src={authentication.profilePic}
        alt="Avatar"
      />
      <p className={styles.username}>{authentication.username}</p>
      <BioTextArea bio={bioText} setBioText={setBioText} />
      <BioStringInput
        localKey="Company"
        keyValue={companyText}
        setProfileKey={setCompanyText}
      />
      <BioStringInput
        localKey="Location"
        keyValue={locationText}
        setProfileKey={setLocationText}
      />
      <EmailInput
        username={authentication.username}
        email={authentication.email}
        setProfileKey={setProfileKey}
      />
      <BioStringInput
        localKey="Website"
        keyValue={websiteText}
        setProfileKey={setWebsiteText}
      />
      <BioStringInput
        localKey="Twitter"
        keyValue={twitterText}
        setProfileKey={setTwitterText}
      />
      <Button
        type="button"
        className={styles.save}
        onClick={() => save(authentication.username, data, setProfileKey)}
      >
        Save
      </Button>
      <Button type="button" className={styles.cancel}>
        Cancel
      </Button>
    </Form>
  );
};

Biography.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  setProfileKey: PropTypes.func.isRequired,
};

export default Biography;
