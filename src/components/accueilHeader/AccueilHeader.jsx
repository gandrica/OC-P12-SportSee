import styles from "./AccueilHeader.module.scss";

function AccueilHeader({ prenom }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        Bonjour <span className={styles.firstName}>{prenom}</span>
      </h1>
      <p className={styles.headerTexte}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}

export default AccueilHeader;
