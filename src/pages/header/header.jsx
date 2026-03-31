import { Link } from "react-router";
import styles from "./Header.module.css";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Create Post", path: "/create" },
    { name: "Login", path: "/login" },
  ];
  const username = localStorage.getItem("username");
  return (
    <div className={styles.header}>
      <div></div>
      <nav>
        <div>Username:{username}</div>
        <ul className={styles.list}>
          {" "}
          {navLinks.map((eachLink) => (
            <li className={styles.list} key={eachLink.name}>
              <Link to={eachLink.path}>{eachLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
