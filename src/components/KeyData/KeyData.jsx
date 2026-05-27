import styles from "./KeyData.module.scss";

function KeyData({ keyData }) {
  return (
    <div className={styles.keyDataContainer}>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/calories-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{keyData.calorieCount}kCal</p>
          <p className={styles.widgetTexte}>Calories</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/protein-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{keyData.proteinCount}g</p>
          <p className={styles.widgetTexte}>Proteines</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/carbs-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{keyData.carbohydrateCount}g</p>
          <p className={styles.widgetTexte}>Glucides</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/fat-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{keyData.lipidCount}g</p>
          <p className={styles.widgetTexte}>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default KeyData;
