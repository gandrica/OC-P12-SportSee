import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const PerformanceChart = () => {
  // 1. Mock des données
  const scoreValue = 12;
  const maxValue = 100;

  const progressData = [
    { name: "Progression", value: scoreValue },
    { name: "Reste", value: maxValue - scoreValue },
  ];

  const backgroundData = [{ name: "Fond", value: maxValue }];

  // 2. Configuration pour un cercle COMPLET commençant en haut (à 12h)
  // Dans Recharts : 90° = Haut, et on descend jusqu'à -270° pour faire un tour complet (360°) dans le sens horaire
  const startAngle = 90;
  const endAngle = -270;

  return (
    <div
      style={{
        width: "320px",
        height: "320px",
        backgroundColor: "#f8f9fa", // Fond de la carte
        borderRadius: "16px",
        padding: "24px",
        position: "relative",
        fontFamily: "sans-serif",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Titre */}
      <h3
        style={{
          margin: 0,
          color: "#1f2937",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Score
      </h3>

      <div style={{ width: "100%", height: "100%", marginTop: "10px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* A. La piste grise complète en arrière-plan */}
            <Pie
              data={backgroundData}
              cx="50%"
              cy="50%" // Repositionné au centre vertical exact
              innerRadius={80}
              outerRadius={100}
              startAngle={startAngle}
              endAngle={endAngle}
              dataKey="value"
              stroke="none"
              fill="#e5e7eb" // Couleur de la piste de fond (gris clair)
              isAnimationActive={false}
            />

            {/* B. La jauge de progression rouge */}
            <Pie
              data={progressData}
              cx="50%"
              cy="50%" // Repositionné au centre vertical exact
              innerRadius={80}
              outerRadius={100}
              startAngle={startAngle}
              endAngle={endAngle}
              dataKey="value"
              stroke="none"
              cornerRadius={10} // Conserve les bords arrondis
            >
              <Cell key="cell-progress" fill="#ff0000" /> {/* Rouge */}
              <Cell key="cell-empty" fill="transparent" />{" "}
              {/* Le reste du cercle reste transparent */}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Le texte parfaitement centré au milieu du cercle */}
      <div
        style={{
          position: "absolute",
          top: "50%", // Centrage exact sur l'axe Y
          left: "50%", // Centrage exact sur l'axe X
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#1f2937",
            lineHeight: "1.2",
          }}
        >
          {scoreValue}%
        </span>
        <span style={{ fontSize: "16px", color: "#6b7280", marginTop: "4px" }}>
          de votre
        </span>
        <span style={{ fontSize: "16px", color: "#6b7280" }}>objectif</span>
      </div>
    </div>
  );
};

export default PerformanceChart;
