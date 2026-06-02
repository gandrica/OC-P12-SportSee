import FrontEndApi from "./FrontEndApi";
import BackEndApi from "./BackEndApi";
import User from "../models/User";

const getUserApiData = async (id, endPoint = "/") => {
  const isBackEndAvailable = false;
  let port = null;
  let url = null;
  let data = null;

  if (!isBackEndAvailable) {
    port = 5173;
    url = `http://localhost:${port}/user/`;

    const api = new FrontEndApi(`${url}${id}${endPoint}`);
    let req = null;
    switch (endPoint) {
      case "/":
        req = await api.getUserData("USER_MAIN_DATA");
        data = req[0];
        break;
      case "/activity":
        req = await api.getUserData("USER_ACTIVITY");
        data = req[0];
        break;
      case "/average-sessions":
        req = await api.getUserData("USER_AVERAGE_SESSIONS");
        data = req[0];
        break;
      case "/performance":
        req = await api.getUserData("USER_PERFORMANCE");
        data = req[0];
        break;
    }
  } else if (isBackEndAvailable) {
    port = 3000;
    url = `http://localhost:${port}/user/`;
    try {
      const api = new BackEndApi(`${url}${id}${endPoint}`);
      data = await api.getData();
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw error;
    }
  }
  return data;
};

export const getUserData = async (id) => {
  const [main, activity, sessions, performance] = await Promise.all([
    getUserApiData(id),
    getUserApiData(id, "/activity"),
    getUserApiData(id, "/average-sessions"),
    getUserApiData(id, "/performance"),
  ]);
  return new User(main, activity, sessions, performance);
};

export default getUserData;
