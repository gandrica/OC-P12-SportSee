import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import styles from "./KindChart.module.scss";

function KindChart({ userPerformanceData }) {
  const data = userPerformanceData[0]?.data.map((item) => {
    return { value: item.value, kind: userPerformanceData[0]?.kind[item.kind] };
  });
  return (
    <div className={styles.intensityChart}>
      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
        outerRadius="80%"
        data={data}
        margin={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <RechartsDevtools />
      </RadarChart>
    </div>
  );
}

export default KindChart;
