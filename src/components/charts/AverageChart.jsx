import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import styles from "./AverageChart.module.scss";

function AverageChart({ userAverageSessionsData }) {
  console.log(userAverageSessionsData);
  // 1. On crée un état pour suivre les calories survolées
  const [hoveredDay, setHoveredDay] = useState(null);

  // 2. Fonction appelée quand la souris bouge sur le graphique
  const handleMouseMove = (state) => {
    if (state.isTooltipActive && state.activeLabel) {
      // state.activeLabel contient la valeur de l'axe X (1, 2, 3...)
      setHoveredDay(state.activeLabel);
    } else {
      setHoveredDay(null);
    }
  };

  // 3. Fonction pour réinitialiser quand la souris sort du graphique
  const handleMouseLeave = () => {
    setHoveredDay(null);
  };
  const setTickFormatter = (value) => {
    switch (value) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
    }
  };

  return (
    <div className={styles.averageChart}>
      <AreaChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={userAverageSessionsData}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
        onContextMenu={(_, e) => e.preventDefault()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <XAxis
          dataKey="day"
          niceTicks="snap125"
          tickLine={false}
          axisLine={false}
          stroke="#fff"
          tickFormatter={setTickFormatter}
        />
        <Tooltip
          cursor={false}
          content={({ active, payload }) => {
            if (!active || !payload || payload.length === 0) {
              return null;
            }
            return (
              <div
                style={{
                  width: "40px",
                  height: "25px",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "8px",
                }}
              >
                {payload[0].payload["sessionLength"]} min
              </div>
            );
          }}
        />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="#fff"
          fill="#ff0101"
        />
        <ReferenceArea x1={hoveredDay} x2={7} fill="#000" fillOpacity={0.1} />
        <RechartsDevtools />
      </AreaChart>
    </div>
  );
}

export default AverageChart;
