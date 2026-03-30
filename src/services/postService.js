import axios from "axios";

const API_URL = "http://localhost:3030/api/posts";
const API_URL_LOGIN = "http://localhost:3030/api/users/login";
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

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(API_URL_LOGIN, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

export const postBlog = async (title, body, config) => {
  try {
    const response = await axios.post(
      API_URL_POST_BLOG,
      {
        title: title,
        body: body,
      },
      config,
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};
