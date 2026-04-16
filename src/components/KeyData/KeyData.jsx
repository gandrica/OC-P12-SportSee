import styles from "./KeyData.module.scss";

function KeyData({
  calorieCount,
  carbohydrateCount,
  lipidCount,
  proteinCount,
}) {
  return (
    <div className={styles.keyDataContainer}>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/calories-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{calorieCount}kCal</p>
          <p className={styles.widgetTexte}>Calories</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/protein-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{proteinCount}g</p>
          <p className={styles.widgetTexte}>Proteines</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/carbs-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{carbohydrateCount}g</p>
          <p className={styles.widgetTexte}>Glucides</p>
        </div>
      </div>
      <div className={styles.widget}>
        <img
          className={styles.widgetImage}
          src="../../../public/assets/fat-icon.png"
        />
        <div className={styles.widgetTexteContainer}>
          <p className={styles.widgetValue}>{lipidCount}g</p>
          <p className={styles.widgetTexte}>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default KeyData;
