import { loginUser } from "../../services/postService.js";
import styles from "./Login.module.css";

function Login() {
  async function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const data = await loginUser(username, password);
    localStorage.setItem("jwtToken", data.token);
    localStorage.setItem("username", username);
  }

  return (
    <>
      {" "}
      <form onSubmit={handleLogin} className={styles.form}>
        <label>username:</label>
        <input type="text" name="username" />
        <label>password:</label>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
