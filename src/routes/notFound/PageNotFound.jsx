import React from "react";

import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <div id="error-page" className={styles.containerNotFound}>
      <h1 className={styles.titleNotFound}>Oups !</h1>
      <p className={styles.descriptionNotFound}>
        Désolé, une erreur inattendue s'est produite.
      </p>
    </div>
  );
}

export default PageNotFound;
