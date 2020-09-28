/**
 * cancel
 *
 * @param {Hook} setDisplayBioInputs - Opens and closes our Biography inputs.
 * @param {Array} hooks - Array of hooks for the inputs.
 *
 * Iterate over our array and set the values to our currently saved data.
 *
 * Close the profile afterwards.
 */
const cancel = (setDisplayBioInputs, hooks) => {
  hooks.forEach((hook) => {
    hook.action(hook.value);
  });

  setDisplayBioInputs(false);
};

export default cancel;
