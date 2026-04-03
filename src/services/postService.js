import axios from "axios";
import api from "./api";

const API_URL = import.meta.env.VITE_API_URL;

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
    console.log("Error getting post:", error);
    throw error;
  }
};

export const addNewComment = async (postId, comment) => {
  try {
    const response = await api.post(`/posts/${postId}`, { comment: comment });
    return response.data;
  } catch (error) {
    console.log("Error posting comment:", error);
    throw error;
  }
};

export const editComment = async (commentId, comment) => {
  try {
    const response = await api.put(`/posts/comment/${commentId}`, {
      commentId: commentId,
      comment: comment,
    });
    return response.data;
  } catch (error) {
    console.log("Error editing comment:", error);
    throw error;
  }
};

export const editPost = async (postId, title, body) => {
  try {
    const response = await api.put(`/posts/${postId}`, {
      title: title,
      body: body,
    });
    return response.data;
  } catch (error) {
    console.log("Error editing post:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log("Error deleteing post:", error);
    throw error;
  }
};
export const deleteComment = async (commentId) => {
  try {
    const response = await api.delete(`/posts/comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.log("Error comment post:", error);
    throw error;
  }
};
