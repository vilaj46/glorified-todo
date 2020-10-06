import api from "../../../../api/index.js";

/**
 * save
 *
 * @param {String} id - The id we are logged into.
 * @param {Object} data - The current state of our profile inputs.
 * @param {Function} setProfileKey - Our main profile hook to apply changes.
 * @param {Function} setDisplayBioInputs - Open / Closes the Profile inputs.
 *
 * Updates our profile in the backend.
 * Updates our current state on the frontend.
 * Close the inputs.
 */
const save = async (
  id,
  token,
  data,
  setProfileKey,
  setDisplayBioInputs,
  history
) => {
  const response = await api.updateProfile(id, token, data);
  if (response.status === 200) {
    setProfileKey(data);
    setDisplayBioInputs(false);
  } else if (response.status === 401) {
    // Push to another page.
    history.push("/login");
  } else {
    // Display error message and don't close.
  }
};

export default save;
