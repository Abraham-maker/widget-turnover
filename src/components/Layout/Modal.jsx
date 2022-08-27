import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {props.children}

        <footer>
          <span>© 2022 TurnOver </span>
        </footer>
      </div>
    </div >
  );
}

export default Modal;
