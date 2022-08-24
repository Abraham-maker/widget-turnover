import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {props.children}
      </div>
    </div >
  );
}

export default Modal;
