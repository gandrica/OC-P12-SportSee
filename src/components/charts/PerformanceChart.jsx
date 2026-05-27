import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import styles from "./PerformanceChart.module.scss";

function PerformanceChart({ score }) {
  const data = [
    { name: "Score", value: score },
    { name: "Reste", value: 100 - score },
  ];

  const COLORS = ["#FF0000", "transparent"];

  return (
    <div className={styles.performanceChartContainer}>
      <h3 className={styles.title}>Score</h3>
      {/* Le cercle blanc central avec le texte */}
      <div className={styles.cercle}>
        <span className={styles.percentage}>{score}%</span>
        <span className={styles.text}>de votre</span>
        <span className={styles.text}>objectif</span>
      </div>
      {/* Le graphique Recharts superposé */}
      <div className={styles.chartContainer}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={76}
              outerRadius={88}
              startAngle={90}
              endAngle={450}
              dataKey="value"
              stroke="none"
              cornerRadius={20}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceChart;
