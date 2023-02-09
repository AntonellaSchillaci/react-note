import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store";
import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttonAdd} 
        onClick={() => setShowModal(true)}>
        Aggiungi nota
      </button>
      {showModal && (
        <div className={styles.Modal}>
          <div className={styles.AddNote}>
            <h2>Aggiungi nota</h2>
            <form onSubmit={onHandleSubmit}>
              <input
                className={styles.input}
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(() => e.target.value)}
                placeholder="Titolo"
                required
              />
              <input
                className={styles.input}
                type="text"
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(() => e.target.value)}
                placeholder="Contenuto"
                required
              />
              <input
                className={styles.btnAdd}
                type="submit"
                value="Aggiungi nota"
              />
              <button
                className={styles.btnClose}
                onClick={() => setShowModal(false)}
              >
                ❌
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
