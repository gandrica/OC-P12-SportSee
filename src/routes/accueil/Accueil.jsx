import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUserData } from "../../api/Api";

import AccueilHeader from "../../components/accueilHeader/AccueilHeader";
import KeyData from "../../components/keyData/KeyData";

import styles from "./Accueil.module.scss";
import TableBoard from "../../components/tableBoard/TableBoard";

function Accueil() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let id = 12;
    const fetchUser = async () => {
      const userData = await getUserData(id);
      setUser(userData);
      if (!userData.firstName) {
        navigate("/service-indisponible");
      }
    };
    fetchUser();
  }, [navigate]);
  return (
    <main className={styles.accueil}>
      <AccueilHeader prenom={user.firstName || ""} />
      <TableBoard userData={user || []} />
    </main>
  );
}

export default Accueil;
