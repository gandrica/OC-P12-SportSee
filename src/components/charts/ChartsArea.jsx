import React, { useState, useEffect } from "react";

import ActivityChart from "./ActivityChart";
import AverageChart from "./AverageChart";
import KindChart from "./KindChart";
import PerformanceChart from "./PerformanceChart";

import styles from "./ChartsArea.module.scss";

function ChartsArea({ userData }) {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1200px)").matches,
  );
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.matchMedia("(min-width: 1100px)").matches,
  );
  useEffect(() => {
    const mediaQueryLarge = window.matchMedia("(min-width: 1200px)");
    const handleScreenChange = (e) => {
      setIsLargeScreen(e.matches);
    };
    // On écoute les changements
    mediaQueryLarge.addEventListener("change", handleScreenChange);

    // Nettoyage de l'écouteur
    return () => {
      mediaQueryLarge.removeEventListener("change", handleScreenChange);
    };
  }, []);

  useEffect(() => {
    const mediaQueryMedium = window.matchMedia("(min-width: 1100px)");

    // Fonction appelée à chaque fois qu'on franchit le seuil des 1024px
    const handleScreenChange = (e) => {
      setIsMediumScreen(e.matches);
    };

    // On écoute les changements
    mediaQueryMedium.addEventListener("change", handleScreenChange);

    // Nettoyage de l'écouteur
    return () => {
      mediaQueryMedium.removeEventListener("change", handleScreenChange);
    };
  }, []);
  const { activitySessions, averageSessions, performance, score } = userData;
  const screen = isLargeScreen ? "large" : isMediumScreen ? "medium" : "small";
  return (
    <div className={styles.userCharts}>
      <ActivityChart userActivityData={activitySessions} screen={screen} />
      <AverageChart userAverageSessionsData={averageSessions} screen={screen} />
      <KindChart userPerformanceData={performance} screen={screen} />
      <PerformanceChart score={score} screen={screen} />
    </div>
  );
}

export default ChartsArea;
