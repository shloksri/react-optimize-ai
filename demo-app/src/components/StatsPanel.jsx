import React from "react";
import PropTypes from "prop-types";

/**
 * StatsPanel component displays key website metrics.
 * It receives more props than it uses (to simulate prop bloating).
 *
 * Used Props:
 * - visits
 * - bounceRate
 *
 * Unused Props:
 * - sessionTime
 * - conversionRate
 * - geoDistribution
 */
const StatsPanel = ({ stats }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-semibold">Website Stats</h3>
      <p>Visits: {stats.visits}</p>
      <p>Bounce Rate: {stats.bounceRate}%</p>
    </div>
  );
};

StatsPanel.propTypes = {
  stats: PropTypes.shape({
    visits: PropTypes.number,
    bounceRate: PropTypes.number,
    sessionTime: PropTypes.number,
    conversionRate: PropTypes.number,
    geoDistribution: PropTypes.object,
  }).isRequired,
};

export default StatsPanel;
