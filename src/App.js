import React, { useState } from "react";
import Modal from "./components/Layout/Modal";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomeRefud from "./components/Views/Home/HomeRefud";
import GetOrders from "./components/Views/GetOrders/GetOrders";
import Login from "./components/Views/Auth/Login";


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
              <Login setOpenModal={setModalOpen} />
            </Route>
            {/* <Route exact path="/">
              <HomeRefud setOpenModal={setModalOpen} />
            </Route>
            <Route exact path="/get-orders">
              <GetOrders />
            </Route> */}
          </Switch>
        </Modal>
        : false
      }
    </>
  );
}

export default App;
