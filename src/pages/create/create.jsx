import { postBlog } from "../../services/postService.js";
import styles from "./Create.module.css";
import { useNavigate } from "react-router";

function Create() {
  const navigate = useNavigate();
  async function handlePost(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    const result = await postBlog(title, body);
    navigate("/");
    console.log(result);
  }

  return (
    <>
      {" "}
      <form onSubmit={handlePost} className={styles.form}>
        <label>Post Title:</label>
        <input type="text" name="title" />
        <label>Body:</label>
        <textarea rows="10" cols="40" type="text" name="body" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Create;
