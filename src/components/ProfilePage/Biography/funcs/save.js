import api from "../../../../api.js";

const save = (username, data, setProfileKey, setDisplayBioInputs) => {
  api.updateProfile(username, data);
  setProfileKey(data);
  setDisplayBioInputs(false);
};

export default save;
