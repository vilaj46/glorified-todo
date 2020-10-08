import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import styles from "./Biography.module.css";

// Helper Components
import EmailInput from "./helpers/EmailInput";
import BioTextArea from "./helpers/BioTextArea";
import BioStringInput from "./helpers/BioStringInput";
import EditProfileButton from "./helpers/EditProfileButton";

// Helper Functions
import save from "./funcs/save";
import cancel from "./funcs/cancel";

const Biography = ({
  authentication,
  profile,
  setProfileKey,
  displayBioInputs,
  setDisplayBioInputs,
}) => {
  // Current state of our profile from the backend.
  const [bioText, setBioText] = useState(profile.bio);
  const [companyText, setCompanyText] = useState(profile.company);
  const [locationText, setLocationText] = useState(profile.location);
  const [emailText, setEmailText] = useState(profile.visibleEmail);
  const [websiteText, setWebsiteText] = useState(profile.website);
  const [twitterText, setTwitterText] = useState(profile.twitter);

  const [displayError, setDisplayError] = useState("");

  // Data we have to send if we click save.
  const data = {
    bio: bioText,
    visibleEmail: emailText,
    company: companyText,
    location: locationText,
    website: websiteText,
    twitter: twitterText,
    emails: profile.emails, // We don't need to change this but we do need to send it to the backend.
  };

  // The current state of our hook and the respected setter.
  // If we click cancel we won't change a thing.
  const hooks = [
    { value: profile.bio, action: setBioText },
    { value: profile.company, action: setCompanyText },
    { value: profile.location, action: setLocationText },
    { value: profile.visibleEmail, action: setEmailText },
    { value: profile.website, action: setWebsiteText },
    { value: profile.twitter, action: setTwitterText },
  ];

  const history = useHistory();

  const saveBiography = () => {
    const actions = {
      setProfileKey,
      setDisplayBioInputs,
      setDisplayError,
      history,
    };

    save(authentication, data, actions);
  };

  const closeBiography = () => {
    const actions = {
      setDisplayBioInputs,
      setDisplayError,
    };
    cancel(actions, hooks);
  };

  return (
    <Form style={{ minWidth: "229px", maxWidth: "229px" }}>
      <img
        className={styles.profilePic}
        src={authentication.profilePic}
        alt="Avatar"
      />
      <p className={styles.username}>{authentication.username}</p>
      {!displayBioInputs && (
        <EditProfileButton setDisplayBioInputs={setDisplayBioInputs} />
      )}
      {displayError && <p className={styles.error}>{displayError}</p>}
      {displayBioInputs && (
        <div>
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
            email={emailText}
            visibleEmails={profile.emails}
            setEmailText={setEmailText}
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
          <Button type="button" className={styles.save} onClick={saveBiography}>
            Save
          </Button>
          <Button
            type="button"
            className={styles.cancel}
            onClick={closeBiography}
          >
            Cancel
          </Button>
        </div>
      )}
    </Form>
  );
};

Biography.propTypes = {
  authentication: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    emails: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    visibleEmail: PropTypes.string.isRequired,
  }),
  setProfileKey: PropTypes.func.isRequired,
  displayBioInputs: PropTypes.bool.isRequired,
  setDisplayBioInputs: PropTypes.func.isRequired,
};

export default Biography;
