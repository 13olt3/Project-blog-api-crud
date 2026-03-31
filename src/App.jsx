import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {" "}
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
