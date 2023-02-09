import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onLogout = () => {
    localStorage.removeItem("Note-app-username");
    dispatch({ type: "REMOVE_USERNAME" });
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.image}>
        <img src="./notepad.png" alt="note"></img>
      </div>
      <div className={styles.nameContainer}>
        <h2>{state.user.username}</h2>
        <button className={styles.btnLogout} onClick={() => onLogout()}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;