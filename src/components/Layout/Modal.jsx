import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {props.children}
        
        <footer>
        © 2022 TurnOver 
        </footer>
      </div>
    </div >
  );
}

export default Modal;
