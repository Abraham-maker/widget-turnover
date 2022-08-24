import React, { useState } from "react";
import Modal from "./components/Layout/Modal";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomeRefud from "./components/Views/Home/HomeRefud";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="App">
        <p onClick={() => { setModalOpen(true) }}> Devoluciones </p>
      </div>

      {modalOpen ?
        <Modal>
          <Switch>
            <Route exact path="/">
              <HomeRefud setOpenModal={setModalOpen} />
            </Route>
          </Switch>
        </Modal>
        : false
      }
    </>
  );
}

export default App;
