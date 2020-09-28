import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
  setProfileKey,
  displayBioInputs,
  setDisplayBioInputs,
}) => {
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

  const hooks = [
    { value: authentication.bio, action: setBioText },
    { value: authentication.company, action: setCompanyText },
    { value: authentication.location, action: setLocationText },
    { value: authentication.website, action: setWebsiteText },
    { value: authentication.twitter, action: setTwitterText },
  ];

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
            onClick={() =>
              save(
                authentication.username,
                data,
                setProfileKey,
                setDisplayBioInputs
              )
            }
          >
            Save
          </Button>
          <Button
            type="button"
            className={styles.cancel}
            onClick={() => cancel(setDisplayBioInputs, hooks)}
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
  setProfileKey: PropTypes.func.isRequired,
  displayBioInputs: PropTypes.bool.isRequired,
  setDisplayBioInputs: PropTypes.func.isRequired,
};

export default Biography;
