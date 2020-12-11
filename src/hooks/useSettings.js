import { useState } from "react";

export default () => {
  const [settings, setSettings] = useState(defaultValues);

  /**
   * setSettingsOnLoad
   *
   * @param {String} newSettings - string representation of our settings object.
   *
   * This funciton is called in our App component.
   *
   * When the application loads, we check our localStorage for the settings key.
   * If their is a settings, then we use that for our current settings state.
   *
   * If there is no settings, we set our localStorage settings key.
   * Our application state is already set.
   */
  const setSettingsOnLoad = (newSettings = null) => {
    const settingsInStorage = localStorage.getItem("settings");
    if (settingsInStorage) {
      const settingsToJSON = JSON.parse(settingsInStorage);
      setSettings(settingsToJSON);
    } else {
      localStorage.setItem("settings", JSON.stringify(settings));
    }
  };

  /**
   * setSettingsKey
   *
   * @param {String} k - key
   * @param {String} v - value
   *
   * Replace the given key and value combination.
   * Update localStorage as well.
   */
  const setSettingsKey = (k, v) => {
    const newSettings = { ...settings, [k]: v };
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return [settings, setSettingsOnLoad, setSettingsKey];
};

const defaultValues = {
  captcha: true,
};
