import axios from "axios";
import api from "./api";

const API_URL = "http://localhost:3030/api/posts";

const API_URL_POST_BLOG = "http://localhost:3030/api/posts";

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.posts;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

// export const postBlog = async (title, body, config) => {
//   try {
//     const response = await axios.post(
//       API_URL_POST_BLOG,
//       {
//         title: title,
//         body: body,
//       },
//       config,
//     );
//     return response.data;
//   } catch (error) {
//     console.log("Error fetching posts:", error);
//     throw error;
//   }
// };

export const postBlog = async (title, body) => {
  try {
    const response = await api.post("/posts", { title: title, body: body });
    return response.data;
  } catch (error) {
    console.log("Error creating post:", error);
    throw error;
  }
};

export const getSinglePost = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log("Error creating post:", error);
    throw error;
  }
};
