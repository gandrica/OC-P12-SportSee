function CustomLegendAverageChart() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          color: "#20253a",
          fontSize: "15px",
          marginLeft: "20px",
          fontWeight: 500,
        }}
      >
        Activité quotidienne
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#282d30",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ color: "#74798C", fontSize: "14px", fontWeight: 500 }}>
            Poids (kg)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#e60000",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ color: "#74798C", fontSize: "14px", fontWeight: 500 }}>
            Calories brûlées (kCal)
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomLegendAverageChart;
