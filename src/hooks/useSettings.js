import { useState } from "react";

export default () => {
  const [settings, setSettings] = useState(defaultValues);

  const setSettingsOnLoad = (newSettings) => {
    const settingsToJSON = JSON.parse(newSettings);
    setSettings(settingsToJSON);
  };

  const setInitialSettings = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  const setSettingsKey = (k, v) => {
    const newSettings = { ...settings, [k]: v };
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return [settings, setSettingsOnLoad, setInitialSettings, setSettingsKey];
};

const defaultValues = {
  method: "token",
};
