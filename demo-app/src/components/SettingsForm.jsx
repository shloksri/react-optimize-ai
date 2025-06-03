import React from "react";

/**
 * SettingsForm displays user settings like theme and notifications.
 *
 * Used Props:
 * - theme
 * - notificationsEnabled
 *
 * Unused Props:
 * - autoSave
 * - language
 * - region
 */
const SettingsForm = ({
  theme,
  notificationsEnabled,
  autoSave,
  language,
  region,
}) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-semibold">Settings</h3>
      <p>Theme: {theme}</p>
      <p>Notifications: {notificationsEnabled ? "On" : "Off"}</p>
    </div>
  );
};

export default SettingsForm;
