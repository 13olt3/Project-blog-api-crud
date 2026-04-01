import axios from "axios";
import api from "./api";

const API_URL_LOGIN = "http://localhost:3030/api/users/login";
const API_URL_CREATE = "http://localhost:3030/api/users/";

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

export const signupUser = async (username, email, password, confirmPw) => {
  try {
    const response = await axios.post(API_URL_CREATE, {
      username: username,
      email: email,
      password: password,
      confirmPw: confirmPw,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};
