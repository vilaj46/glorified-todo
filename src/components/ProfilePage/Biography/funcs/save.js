import api from "../../../../api/index.js";

/**
 * save
 *
 * @param {String} authentication - Object which is our authentication and id.
 * @param {Object} data - The current state of our profile inputs.
 * @param {Object} actions - Our hook setters to perform necessary actions.
 *
 * Uses out profile id given to us from the backend, the current auth token, and our new profile data
 * and makes an api call to update that information.
 */
const save = async (authentication, data, actions) => {
  const response = await api.updateProfile(
    authentication.id,
    authentication.token,
    data
  );

  if (response.status === 200) {
    actions.setDisplayError("");
    actions.setProfileKey(response.token);
    actions.setDisplayBioInputs(false);
  } else if (response.status === 401) {
    // Timed out, push to login page.
    actions.setDisplayError("");
    actions.history.push("/login");
  } else {
    // Close and display error message.
    actions.setDisplayError(response.data);
    actions.setDisplayBioInputs(false);
  }
};

export default save;
