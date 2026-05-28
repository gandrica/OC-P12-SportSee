import styles from "./InvalidResolution.module.scss";

function InvalidResolution() {
  return (
    <div className={styles.invalidResolution}>
      <h2 className={styles.header}>✨ Résolution insuffisante</h2>
      <p className={styles.message}>
        Veuillez passer sur un écran d'au moins 1024x780 pixels pour accéder à
        l'interface.
      </p>
    </div>
  );
}

export default InvalidResolution;
