import styles from "./CommentForm.module.css";
import { editComment } from "../services/postService.js";
import { useParams, useNavigate } from "react-router";

function EditComment({ commentId, cancelEdit }) {
  const navigate = useNavigate();
  async function handleEdit(e) {
    e.preventDefault();
    const comment = e.target.comment.value;

    const result = await editComment(commentId, comment);
    console.log(result);

    navigate(0);
  }

  return (
    <>
      {" "}
      <form onSubmit={handleEdit} className={styles.form}>
        <label>Comment:</label>
        <textarea rows="10" cols="40" type="text" name="comment" />
        <button type="submit">submit change</button>
        <button onClick={cancelEdit}>Cancel edit</button>
      </form>
    </>
  );
}
export default EditComment;
