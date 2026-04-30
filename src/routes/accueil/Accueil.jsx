import { useEffect, useState } from "react";

import FrontEndApi from "../../api/FrontEndApi";
import BackEndApi from "../../api/BackEndApi";
import Utilisateur from "../../models/Utilisateur";

import AccueilHeader from "../../components/accueilHeader/AccueilHeader";
import KeyData from "../../components/keyData/KeyData";

import styles from "./Accueil.module.scss";
import TableBoard from "../../components/tableBoard/TableBoard";

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

    let id = 12;
    const getUserApiData = async (port, id, endPoint = "/") => {
      const url = `http://localhost:${port}/user/`;
      if (port === 5173) {
        const api = new FrontEndApi(`${url}${id}${endPoint}`);
        let data = null;
        switch (endPoint) {
          case "/":
            data = await api.getUserData("USER_MAIN_DATA");
            setUserMainData(data[0]);
            break;
          case "/activity":
            data = await api.getUserData("USER_ACTIVITY");
            setUserActivity(data[0]);
            break;
          case "/average-sessions":
            data = await api.getUserData("USER_AVERAGE_SESSIONS");
            setUserAverageSessions(data[0]);
            break;
          case "/performance":
            data = await api.getUserData("USER_PERFORMANCE");
            setUserPerformance(data[0]);
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

  const { firstName } = userMainData?.userInfos || {};
  const userActivityData = userActivity?.sessions || [];
  const userAverageSessionsData = userAverageSessions?.sessions || [];
  // console.log(userMainData);
  // console.log(userActivityData);
  // console.log(userAverageSessionsData);

  return (
    <main className={styles.accueil}>
      <AccueilHeader prenom={firstName} />
      <TableBoard
        userMainData={userMainData}
        userActivityData={userActivityData}
        userAverageSessionsData={userAverageSessionsData}
        userPerformanceData={userPerformance}
      />
    </main>
  );
}

export default Accueil;
