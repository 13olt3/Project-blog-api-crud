import styles from "./CommentForm.module.css";
import { addNewComment } from "../services/postService.js";
import { useParams, useNavigate } from "react-router";

function Create() {
  const { id } = useParams();
  const navigate = useNavigate();
  async function handleComment(e) {
    e.preventDefault();
    const body = e.target.body.value;

    const result = await addNewComment(id, body);
    console.log(result);
    navigate(0);
  }

  return (
    <>
      {" "}
      <form onSubmit={handleComment} className={styles.form}>
        <label>Comment:</label>
        <textarea rows="10" cols="40" type="text" name="body" />
        <button type="submit">Add comment</button>
      </form>
    </>
  );
}
export default Create;
