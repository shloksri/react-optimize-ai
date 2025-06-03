import PropTypes from "prop-types";
import React from "react";

/**
 * CommentBox displays a user's comment with their username.
 *
 * Used Props:
 * - username
 * - comment
 *
 * Unused Props:
 * - likes
 * - timestamp
 * - userAvatar
 */
const CommentBox = ({ comments }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <p>
        <strong>{comments.username}</strong> says:
      </p>
      <p>{comments.comment}</p>
    </div>
  );
};

CommentBox.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string,
    comment: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    userAvatar: PropTypes.string,
  }).isRequired,
};

export default CommentBox;
