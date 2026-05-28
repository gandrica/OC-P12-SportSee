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
  return (
    <div className={styles.intensityChart}>
      <RadarChart
        className={styles.radarChart}
        responsive
        outerRadius="70%"
        data={userPerformanceData}
        startAngle={30}
        endAngle={-330}
      >
        <PolarGrid radialLines={false} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: "#fff",
            fontSize: 12,
            fontWeight: "bold",
          }}
          tickFormatter={(value) => {
            if (value === "intensity") return "Intensité";
            if (value === "speed") return "Vitesse";
            if (value === "strength") return "Force";
            if (value === "energy") return "Energie";
            if (value === "endurance") return "Endurance";
            if (value === "cardio") return "Cardio";
          }}
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
        <RechartsDevtools />
      </RadarChart>
    </div>
  );
}

export default KindChart;
