import React from "react";

import styles from "./ServiceIndisponible.module.scss";

function ServiceIndisponible() {
  return (
    <div className={styles.containerServiceIndisponible}>
      <h1 className={styles.titleServiceIndisponible}>
        🛠️ Service Indisponible
      </h1>
      <p className={styles.descriptionServiceIndisponible}>
        Notre application est actuellement en maintenance ou rencontre des
        problèmes de connexion.
        <br />
        Veuillez réessayer dans quelques minutes.
      </p>
      <button
        className={styles.buttonServiceIndisponible}
        onClick={() => window.location.reload()}
      >
        Rafraîchir la page
      </button>
    </div>
  );
}

export default ServiceIndisponible;
