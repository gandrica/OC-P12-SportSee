import ActivityChart from "./ActivityChart";
import AverageChart from "./AverageChart";
import IntensityChart from "./IntensityChart";
import PerformanceChart from "./PerformanceChart";

import styles from "./ChartsArea.module.scss";

function ChartsArea({
  userMainData,
  userActivityData,
  userAverageSessionsData,
  userPerformanceData,
}) {
  console.log(userActivityData);
  console.log(userAverageSessionsData);
  return (
    <div className={styles.userCharts}>
      <ActivityChart userActivityData={userActivityData} />
      <AverageChart userAverageSessionsData={userAverageSessionsData} />
      <IntensityChart />
      <PerformanceChart />
    </div>
  );
}

export default ChartsArea;
