import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import { getSinglePost } from "../../services/postService.js";

function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
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

  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Posts;
