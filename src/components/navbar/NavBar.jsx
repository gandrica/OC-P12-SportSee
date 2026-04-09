import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <Logo />
      <div className={styles.navLinksContainer}>
        <Link className={styles.navLink} to="/accueil">
          Accueil
        </Link>
        <Link className={styles.navLink} to="/profil">
          Profil
        </Link>
        <Link className={styles.navLink} to="/reglage">
          Réglage
        </Link>
        <Link className={styles.navLink} to="/communaute">
          Communauté
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
