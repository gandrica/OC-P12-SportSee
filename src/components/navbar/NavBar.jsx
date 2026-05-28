import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Logo />
      <div className={styles.navLinksContainer}>
        <Link className={styles.navLink} to="/">
          Accueil
        </Link>
        <Link className={styles.navLink} to="/">
          Profil
        </Link>
        <Link className={styles.navLink} to="/">
          Réglage
        </Link>
        <Link className={styles.navLink} to="/">
          Communauté
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
