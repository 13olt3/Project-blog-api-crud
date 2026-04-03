import { editPost } from "../services/postService.js";
import { useNavigate } from "react-router";
import styles from "./Comment.module.css";

function EditPost({ postId, cancelEdit }) {
  const navigate = useNavigate();
  async function handleEdit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    const result = await editPost(postId, title, body);
    console.log(result);

    navigate(0);
  }

  return (
    <>
      {" "}
      <form onSubmit={handleEdit} className={styles.form}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="editPost">Post:</label>
        <textarea id="editPost" rows="10" cols="40" type="text" name="body" />
        <button type="submit">submit change</button>
        <button onClick={cancelEdit}>Cancel edit</button>
      </form>
    </>
  );
}
export default EditPost;
