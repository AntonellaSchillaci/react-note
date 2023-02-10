import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Nome utente..."
          autocomplete="off"
        />
        <input className ={styles.btnLogin} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;