import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

import { getSinglePost, deletePost } from "../../services/postService.js";
import CommentForm from "../../components/commentForm";
import EditPost from "../../components/editPostForm";
import Comment from "../../components/comment";

function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [addComment, setAddComment] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);

    getSinglePost(id)
      .then((data) => {
        setPost(data.post);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setError("Log in to view this post.");
        } else {
          setError("An error occured, try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  function addCommentButton() {
    setAddComment(!addComment);
  }
  function editPostButton() {
    setEditPost(!editPost);
  }
  async function handleDeletePost() {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      await deletePost(id);
    }
    navigate("/", { state: { refreshed: true } });
  }
  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>Posted at: {post.time}</p>
      {!editPost && post.user.username === localStorage.getItem("username") && (
        <button onClick={editPostButton}>Edit post</button>
      )}
      {editPost && <EditPost postId={id} cancelEdit={editPostButton} />}
      {post.user.username === localStorage.getItem("username") && (
        <button onClick={handleDeletePost}>DeletePost</button>
      )}
      <button onClick={addCommentButton}>
        {addComment ? "Cancel" : "Add new comment"}
      </button>
      {addComment && <CommentForm />}
      <div>
        comments:
        {post.comments.map((eachComment) => {
          return <Comment key={eachComment.id} commentData={eachComment} />;
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
