import api from "../../../../api/index.js";

/**
 * save
 *
 * @param {String} authentication - Object which is our authentication and id.
 * @param {Object} data - The current state of our profile inputs.
 * @param {Function} setProfileKey - Our main profile hook to apply changes.
 * @param {Function} setDisplayBioInputs - Open / Closes the Profile inputs.
 *
 * Updates our profile in the backend.
 * Updates our current state on the frontend.
 * Close the inputs.
 */
const save = async (
  authentication,
  data,
  setProfileKey,
  setDisplayBioInputs,
  history,
  setDisplayError
) => {
  const response = await api.updateProfile(
    authentication.id,
    authentication.token,
    data
  );

  if (response.status === 200) {
    setDisplayError("");
    setProfileKey(response.token);
    setDisplayBioInputs(false);
  } else if (response.status === 401) {
    // Timed out, push to login page.
    setDisplayError("");
    history.push("/login");
  } else {
    // Close and display error message.
    setDisplayError(response.data);
    setDisplayBioInputs(false);
  }
};

export default save;
