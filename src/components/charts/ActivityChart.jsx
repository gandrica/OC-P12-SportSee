import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import CustomCursor from "./CustomCursorActivityChart";

import styles from "./ActivityChart.module.scss";

function ActivityChart({ userActivityData }) {
  console.log(userActivityData);
  const setTickFormatterAcChart = (value) => {
    let index = 0;
    userActivityData.map((data, i) => {
      if (data["day"] === value) {
        index = i;
        return index;
      }
    });
    return index + 1;
  };
  return (
    <div className={styles.barChart}>
      <BarChart
        style={{
          width: "100%",
          height: "100%",
          padding: "20px",
          aspectRatio: 1.618,
          backgroundColor: "#FBFBFB",
        }}
        responsive
        data={userActivityData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barSize={8}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#DEDEDE"
        />
        <XAxis
          dataKey="day"
          stroke="#9B9EAC"
          tickLine={false}
          tickFormatter={setTickFormatterAcChart}
          tickMargin={16}
        />
        <YAxis
          dataKey="kilogram"
          tickLine={false}
          axisLine={false}
          stroke="#9B9EAC"
          orientation="right"
          tickMargin={20}
        />
        <Tooltip
          cursor={<CustomCursor />}
          content={({ active, payload }) => {
            if (!active || !payload || payload.length === 0) {
              return null;
            }
            return (
              <div
                style={{
                  width: "40px",
                  height: "64px",
                  marginLeft: "24px",
                  backgroundColor: "#e60000",
                  display: "flex",
                  color: "white",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "7px",
                }}
              >
                <div>{payload[0].payload["kilogram"]}kg</div>
                <div>{payload[0].payload["calories"]}kcal</div>
              </div>
            );
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            top: "-10px",
            right: "10px",
          }}
          formatter={(value) => {
            if (value === "calories") {
              return "Calories brûlées (kCal)";
            } else if (value === "kilogram") {
              return "Poids (kg)";
            }
          }}
        />
        <Bar
          dataKey="kilogram"
          stackId={1}
          fill="#282d30"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#e60000"
          radius={[10, 10, 0, 0]}
          stackId={2}
        />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
}

export default ActivityChart;
