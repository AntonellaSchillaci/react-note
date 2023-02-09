import React, { useState } from "react";
import AddNote from "./AddNote";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.Modal}>
      <button onClick={handleOpenModal}>Add +</button>
      {showModal && (
        <div className={styles.Modal__content}>
          <AddNote />
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Main;
