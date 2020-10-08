/**
 * cancel
 *
 * @param {Object} actions - Aesthetic actions for closing the inputs and removing errors.
 * @param {Array} hooks - Array of hooks for the inputs.
 *
 * Iterate over our array and set the values to our currently saved data.
 *
 * Close the profile afterwards.
 */
const cancel = (actions, hooks) => {
  hooks.forEach((hook) => {
    hook.action(hook.value);
  });

  actions.setDisplayBioInputs(false);
  actions.setDisplayError("");
};

export default cancel;
