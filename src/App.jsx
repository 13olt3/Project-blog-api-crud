import { useState } from "react";
import { loginUser, postBlog } from "./services/postService";

import "./App.css";

function App() {
  async function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const data = await loginUser(username, password);
    localStorage.setItem("jwtToken", data.token);
  }

  async function handlePost(e) {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    };
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    console.log(title);
    console.log(body);
    const result = await postBlog(title, body, config);
    console.log(result);
  }

  return (
    <>
      <form onSubmit={handleLogin} id="center">
        <label>username:</label>
        <input type="text" name="username" />
        <label>password:</label>
        <input type="text" name="password" />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handlePost} id="center">
        <label>Post Title:</label>
        <input type="text" name="title" />
        <label>Body</label>
        <textarea rows="10" cols="40" type="text" name="body" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
