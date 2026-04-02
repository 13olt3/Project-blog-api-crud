import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import { getSinglePost } from "../../services/postService.js";
import CommentForm from "../../components/commentForm";
import EditComment from "../../components/editCommentForm";
import Comment from "../../components/comment";

function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [addComment, setAddComment] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSinglePost(id).then((data) => {
      setPost(data.post);

      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  function addCommentButton() {
    setAddComment(!addComment);
  }

  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>Posted at: {post.time}</p>
      <button onClick={addCommentButton}>
        {addComment ? "Cancel" : "Add new comment"}
      </button>
      {addComment && <CommentForm />}
      <div>
        comments:
        {post.comments.map((eachComment) => {
          return <Comment commentData={eachComment} />;
        })}
      </div>
      <p></p>
    </div>
  );
}

export default Posts;
// return (
//   <div>
//     <p>by: {comment.user.username}</p>
//     <p>{comment.body}</p>
//     <p>{comment.time}</p>
//   </div>
// );
