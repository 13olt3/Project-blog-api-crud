import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";

import styles from "./App.module.css";

function App() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("username"),
  );
  function handleLoginUsername(username) {
    setCurrentUser(username);
  }
  function handleLogout() {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
    setCurrentUser(null);
  }

  const contextOutlet = {
    handleLoginUsername,
  };

  return (
    <div className={styles.app}>
      {" "}
      <Header user={currentUser} onLogout={handleLogout} />
      <div>
        <Outlet context={contextOutlet} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
