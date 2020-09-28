import api from "../../../../api.js";

/**
 * save
 *
 * @param {String} username - The username we are logged into.
 * @param {Object} data - The current state of our profile inputs.
 * @param {Function} setProfileKey - Our main profile hook to apply changes.
 * @param {Function} setDisplayBioInputs - Open / Closes the Profile inputs.
 *
 * Updates our profile in the backend.
 * Updates our current state on the frontend.
 * Close the inputs.
 */
const save = (username, data, setProfileKey, setDisplayBioInputs) => {
  api.updateProfile(username, data);
  setProfileKey(data);
  setDisplayBioInputs(false);
};

export default save;
