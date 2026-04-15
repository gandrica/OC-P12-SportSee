import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <div className={styles.iconImageContainer}>
          <img
            className={styles.iconImage}
            src="../../../public/assets/icon-meditation.png"
            alt="meditation icon"
          />
        </div>
        <div className={styles.iconImageContainer}>
          <img
            className={styles.iconImage}
            src="../../../public/assets/swim-icon.png"
            alt="swim icon"
          />
        </div>
        <div className={styles.iconImageContainer}>
          <img
            className={styles.iconImage}
            src="../../../public/assets/bike-icon.png"
            alt="biking icon"
          />
        </div>
        <div className={styles.iconImageContainer}>
          <img
            className={styles.iconImage}
            src="../../../public/assets/power-lifting-icon.png"
            alt="power lifting icon"
          />
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>Copiryght, SportSee 2026</p>
      </div>
    </div>
  );
}

export default Footer;
