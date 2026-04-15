import { useEffect, useState } from "react";

import FrontEndApi from "../../api/FrontEndApi";
import BackEndApi from "../../api/BackEndApi";
import Utilisateur from "../../models/Utilisateur";

import styles from "./Accueil.module.scss";

function Accueil() {
  const [userMainData, setUserMainData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});

  useEffect(() => {
    //Front End Port
    const portFront = 5173;

    //Back End Port
    // const portBack = 3000;

    const id = 12;

    const getUserApiData = async (port, id, endPoint = "/") => {
      const url = `http://localhost:${port}/user/`;
      if (port === 5173) {
        const api = new FrontEndApi(`${url}${id}${endPoint}`);
        let data = null;
        switch (endPoint) {
          case "/":
            data = await api.getUserData("USER_MAIN_DATA");
            setUserMainData(data);
            break;
          case "/activity":
            data = await api.getUserData("USER_ACTIVITY");
            setUserActivity(data);
            break;
          case "/average-sessions":
            data = await api.getUserData("USER_AVERAGE_SESSIONS");
            setUserAverageSessions(data);
            break;
          case "/performance":
            data = await api.getUserData("USER_PERFORMANCE");
            setUserPerformance(data);
            break;
        }
      } else if (port === 3000) {
        const api = new BackEndApi(`${url}${id}${endPoint}`);
        const data = await api.getData();
        switch (endPoint) {
          case "/":
            setUserMainData(data.data);
            break;
          case "/activity":
            setUserActivity(data.data);
            break;
          case "/average-sessions":
            setUserAverageSessions(data.data);
            break;
          case "/performance":
            setUserPerformance(data.data);
            break;
        }
      }
    };

    //Appel API FRONT
    getUserApiData(portFront, id);
    getUserApiData(portFront, id, "/activity");
    getUserApiData(portFront, id, "/average-sessions");
    getUserApiData(portFront, id, "/performance");

    //Appel API BACK
    // getUserApiData(portBack, id);
    // getUserApiData(portBack, id, "/activity");
    // getUserApiData(portBack, id, "/average-sessions");
    // getUserApiData(portBack, id, "/performance");
  }, []);
  console.log(userMainData);
  console.log(userActivity);
  console.log(userAverageSessions);
  console.log(userPerformance);

  //Créer une LocalAPI et une BackendAPI
  //
  // const user = new Utilisateur(userData);

  return (
    <main className={styles.accueil}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Bonjour "Thomas"</h1>
        <p className={styles.headerTexte}>
          Félicitation! Vous avez explosé vos objectifs hier
        </p>
      </header>
      <section className={styles.userData}>
        <div className={styles.userCharts}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.userInfos}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
