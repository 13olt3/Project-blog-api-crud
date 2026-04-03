import { useState } from "react";
import styles from "./Comment.module.css";
import EditComment from "./editCommentForm";
import { deleteComment } from "../services/postService.js";
import { useNavigate } from "react-router";

function Comment({ commentData }) {
  const [editComment, setEditComment] = useState(false);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  function editCommentButton() {
    setEditComment(!editComment);
  }
  function handleDeleteComment() {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      deleteComment(commentData.id);
    }
    navigate(0, { state: { refreshed: true } });
  }

  return (
    <div className={styles.comments}>
      <p className={styles.commentBody}>{commentData.body}</p>
      <p className={styles.commentAuthor}>By: {commentData.user.username}</p>
      <p className={styles.commentTime}>{commentData.time}</p>

      {username === commentData.user.username && !editComment && (
        <button className={styles.editComment} onClick={editCommentButton}>
          edit comment
        </button> //this button triggers the edit comment text box to show.
      )}
      {username === commentData.user.username && (
        <button onClick={handleDeleteComment}>Delete comment</button>
      )}

      {editComment && (
        <EditComment
          className={styles.editBox}
          commentId={commentData.id}
          cancelEdit={editCommentButton}
        />
      )}
    </div>
  );
}

export default Comment;
