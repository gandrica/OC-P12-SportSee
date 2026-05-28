import ActivityChart from "./ActivityChart";
import AverageChart from "./AverageChart";
import KindChart from "./KindChart";
import PerformanceChart from "./PerformanceChart";

import styles from "./ChartsArea.module.scss";

function ChartsArea({ userData }) {
  const { activitySessions, averageSessions, performance, score } = userData;
  return (
    <div className={styles.userCharts}>
      <ActivityChart userActivityData={activitySessions} />
      <AverageChart userAverageSessionsData={averageSessions} />
      <KindChart userPerformanceData={performance} />
      <PerformanceChart score={score} />
    </div>
  );
}

export default ChartsArea;
