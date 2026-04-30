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
import CustomTick from "./CustomTickAverageChart";

function AverageChart({ userAverageSessionsData }) {
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
  const setTickFormatterAvChart = (value) => {
    const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
    return days[value];
  };
  const overlayWidth = hoveredDay ? (1 - (hoveredDay - 1) / 6) * 100 : 0;

  return (
    <div className={styles.averageChart}>
      <h2 className={styles.title}>
        Durée moyenne des
        <br />
        sessions
      </h2>
      {hoveredDay && (
        <div
          className={styles.chartOverlay}
          style={{ width: `${overlayWidth}%` }}
        />
      )}
      <AreaChart
        style={{
          width: "100%",
          height: "70%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={userAverageSessionsData}
        margin={{
          top: 10,
          right: 0,
          left: 0,
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
          stroke="#FFFFFF67"
          tickFormatter={(value) => setTickFormatterAvChart(value)}
          interval="preserveStartEnd"
          tick={<CustomTick />}
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
          stroke="#ffffffba"
          fill="#ff0101"
          activeDot={{
            fill: "#ffffff", // La couleur du point central (blanc)
            r: 4, // Le rayon (la taille) du point
            stroke: "rgba(255, 255, 255, 0.3)", // La couleur de l'ombre (blanc avec 30% d'opacité)
            strokeWidth: 10, // L'épaisseur de l'ombre autour du point
          }}
        />
        <RechartsDevtools />
      </AreaChart>
    </div>
  );
}

export default AverageChart;
