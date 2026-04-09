import { Link } from "react-router-dom";

import Logo from "../logo/Logo";

function NavBar() {
  return (
    <div className="navigation">
      <Logo />
      <div className="nav-links-container">
        <Link className="nav-link" to="/accueil">
          Accueil
        </Link>
        <Link className="nav-link" to="/profil">
          Profil
        </Link>
        <Link className="nav-link" to="/reglage">
          Réglage
        </Link>
        <Link className="nav-link" to="/communaute">
          Communauté
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
