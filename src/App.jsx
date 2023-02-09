import styles from "./App.module.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer";
import AddNote from "./components/addNote";
import NoteContent from "./components/noteContent";
import Login from "./components/login";

import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <main>
              <AddNote />
              <NoteContent />
            </main>
            <Footer />
          </>
        )}
      </ApplicationCtx.Provider>
      
    </div>
  );
}

export default App;