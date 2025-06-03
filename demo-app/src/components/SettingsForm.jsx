import React from "react";
import PropTypes from "prop-types";

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
const SettingsForm = ({ settings }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-semibold">Settings</h3>
      <p>Theme: {settings.theme}</p>
      <p>Notifications: {settings.notificationsEnabled ? "On" : "Off"}</p>
    </div>
  );
};

SettingsForm.propTypes = {
  settings: PropTypes.shape({
    theme: PropTypes.string,
    notificationsEnabled: PropTypes.bool,
    autoSave: PropTypes.bool,
    language: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};

export default SettingsForm;
