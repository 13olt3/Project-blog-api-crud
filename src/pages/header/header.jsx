import { Link, useNavigate } from "react-router";

import styles from "./Header.module.css";

function Header({ user, onLogout }) {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Create Post", path: "/create" },
  ];
  const authLinks = [
    { name: "Login", path: "/login" },
    { name: "Logout", path: "/" },
  ];
  function clickLogout() {
    onLogout();
    navigate("/");
  }

  const username = localStorage.getItem("username");
  return (
    <div className={styles.header}>
      <div> BLOG API</div>
      <nav>
        <div>{username ? `Username: ${username}` : "Not logged in."}</div>
        <ul className={styles.list}>
          {" "}
          {navLinks.map((eachLink) => (
            <li className={styles.list} key={eachLink.name}>
              <Link to={eachLink.path}>{eachLink.name}</Link>
            </li>
          ))}
          <li key="auth">
            {user ? (
              <button
                onClick={(e) => clickLogout(e)}
                className={styles.linkStyle}
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
