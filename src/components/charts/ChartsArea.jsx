import ActivityChart from "./ActivityChart";
import AverageChart from "./AverageChart";
import KindChart from "./KindChart";
import PerformanceChart from "./PerformanceChart";

import styles from "./ChartsArea.module.scss";

function ChartsArea({ userData }) {
  return (
    <div className={styles.userCharts}>
      <ActivityChart userActivityData={userData.activitySessions} />
      <AverageChart userAverageSessionsData={userData.averageSessions} />
      <KindChart userPerformanceData={userData.performance} />
      <PerformanceChart score={userData.score} />
    </div>
  );
}

export default ChartsArea;
