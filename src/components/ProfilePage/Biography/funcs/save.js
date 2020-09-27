import api from "../../../../api.js";

const save = (username, data, setProfileKey) => {
  api.updateProfile(username, data);
  setProfileKey(data);
};

export default save;
