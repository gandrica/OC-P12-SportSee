import ChartsArea from "../charts/ChartsArea";
import KeyData from "../keyData/KeyData";
import styles from "./TableBoard.module.scss";

function TableBoard({ userData }) {
  return (
    <section className={styles.userTableBoard}>
      <ChartsArea userData={userData || []} />
      <KeyData keyData={userData.keyData || []} />
    </section>
  );
}

export default TableBoard;
