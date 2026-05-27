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
  function transformData(data) {
    const dataTransfromed = data.map((item) => {
      return {
        value: item.value,
        kind: userPerformanceData[0]?.kind[item.kind],
      };
    });
    [dataTransfromed[0], dataTransfromed[4]] = [
      dataTransfromed[4],
      dataTransfromed[0],
    ];
    [dataTransfromed[1], dataTransfromed[3]] = [
      dataTransfromed[3],
      dataTransfromed[1],
    ];
    return dataTransfromed;
  }
  transformData(userPerformanceData[0]?.data);
  const data = transformData(userPerformanceData[0]?.data);

  return (
    <div className={styles.intensityChart}>
      <RadarChart
        className={styles.radarChart}
        responsive
        outerRadius="70%"
        data={data}
        startAngle={30}
        endAngle={-330}
      >
        <PolarGrid radialLines={false} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{
            fill: "#fff", // Change la couleur du texte (hex, rgb, ou nom de couleur)
            fontSize: 12, // Optionnel : modifie la taille
            fontWeight: "bold", // Optionnel : met en gras
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
