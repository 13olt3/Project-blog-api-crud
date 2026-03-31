import { useState, useEffect } from "react";
import { getPosts } from "../../services/postService.js";
import styles from "./Home.module.css";
import { Link } from "react-router";

function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setBlogPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div id="center">Loading posts...</div>;

  return (
    <div className={styles.outer}>
      {blogPosts.map((eachPost) => {
        return (
          <div key={eachPost.id} className={styles.postCard}>
            <div> {eachPost.title}</div>
            <div>
              <p>Body:{eachPost.body}</p>
              <Link to={`posts/${eachPost.id}`}>
                Comments: {eachPost._count.comments}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
