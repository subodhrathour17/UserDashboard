import React from "react";
import "../style/Modal.css";

const Modal = ({ user, closeModal }) => {
  return (
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>
          Address: {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
