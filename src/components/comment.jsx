import { useState } from "react";
import styles from "./Comment.module.css";
import EditComment from "./editCommentForm";

function Comment({ commentData }) {
  const [editComment, setEditComment] = useState(false);
  const username = localStorage.getItem("username");

  function editCommentButton() {
    setEditComment(!editComment);
  }

  return (
    <div key={commentData.id} className={styles.comments}>
      <p>{commentData.body}</p>
      <p>By: {commentData.user.username}</p>
      <p>{commentData.time}</p>

      {username === commentData.user.username && !editComment && (
        <button onClick={editCommentButton}>edit comment</button>
      )}
      {username === commentData.user.username && editComment && (
        <EditComment
          commentId={commentData.id}
          cancelEdit={editCommentButton}
        />
      )}
    </div>
  );
}

export default Comment;
