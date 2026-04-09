import styles from "./Logo.module.scss";
function Logo() {
  return (
    <div className={styles.logo}>
      <img
        src="../../../public/logo.svg"
        alt="logo"
        className={styles.logoImage}
      />
    </div>
  );
}

export default Logo;
