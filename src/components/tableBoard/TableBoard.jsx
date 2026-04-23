import ChartsArea from "../charts/ChartsArea";
import KeyData from "../keyData/KeyData";
import styles from "./TableBoard.module.scss";

function TableBoard({
  userMainData,
  userActivityData,
  userAverageSessionsData,
  userPerformanceData,
}) {
  const { calorieCount, carbohydrateCount, lipidCount, proteinCount } =
    userMainData?.keyData || {};
  return (
    <section className={styles.userTableBoard}>
      <ChartsArea
        userMainData={userMainData}
        userActivityData={userActivityData}
        userAverageSessionsData={userAverageSessionsData}
        userPerformanceData={userPerformanceData}
      />
      <KeyData
        calorieCount={calorieCount}
        carbohydrateCount={carbohydrateCount}
        lipidCount={lipidCount}
        proteinCount={proteinCount}
      />
    </section>
  );
}

export default TableBoard;
