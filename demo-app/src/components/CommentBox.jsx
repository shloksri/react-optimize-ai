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
const CommentBox = ({ username, comment, likes, timestamp, userAvatar }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <p>
        <strong>{username}</strong> says:
      </p>
      <p>{comment}</p>
    </div>
  );
};

export default CommentBox;
