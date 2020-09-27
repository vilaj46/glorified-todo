import React from "react";
import PropTypes from "prop-types";

import styles from "./Biography.module.css";

// Helper Components
import EmailInput from "./helpers/EmailInput";
import BioTextArea from "./helpers/BioTextArea";
import CompanyInput from "./helpers/CompanyInput";
import LocationInput from "./helpers/LocationInput";
import WebsiteInput from "./helpers/WebsiteInput";
import BioStringInput from "./helpers/BioStringInput";

const Biography = ({ authentication, setKey }) => {
  return (
    <div className={styles.biography}>
      <img
        src={authentication.profilePic}
        width="96"
        height="96"
        alt="Profile Pic"
      />
      <p className={styles.username}>{authentication.username}</p>
      <BioTextArea
        username={authentication.username}
        bio={authentication.bio}
        setKey={setKey}
      />
      <CompanyInput
        username={authentication.username}
        company={authentication.company}
        setKey={setKey}
      />
      <LocationInput
        username={authentication.username}
        location={authentication.location}
        setKey={setKey}
      />
      <EmailInput
        username={authentication.username}
        email={authentication.email}
        setKey={setKey}
      />
      <WebsiteInput
        username={authentication.username}
        website={authentication.website}
        setKey={setKey}
      />
      <BioStringInput
        localKey="twitter"
        keyValue={authentication.twitter}
        setKey={setKey}
      />
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
