import { Outlet } from "react-router-dom";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;
