import ActivityChart from "./ActivityChart";
import AverageChart from "./AverageChart";
import KindChart from "./KindChart";
import PerformanceChart from "./PerformanceChart";

import styles from "./ChartsArea.module.scss";

function ChartsArea({
  userMainData,
  userActivityData,
  userAverageSessionsData,
  userPerformanceData,
}) {
  // console.log(userActivityData);
  // console.log(userAverageSessionsData);
  // console.log(userPerformanceData);
  return (
    <div className={styles.userCharts}>
      <ActivityChart userActivityData={userActivityData} />
      <AverageChart userAverageSessionsData={userAverageSessionsData} />
      <KindChart userPerformanceData={userPerformanceData} />
      <PerformanceChart userMainData={userMainData} />
    </div>
  );
}

export default ChartsArea;
