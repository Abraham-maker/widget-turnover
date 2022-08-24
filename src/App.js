import React, { useState } from "react";
import Modal from "./components/Layout/Modal";
import { Route, Switch } from "react-router-dom";
import { WebProvider } from "./config/Context/Context";
import "./App.css";
import HomeRefud from "./components/Views/Home/HomeRefud";
import GetOrders from "./components/Views/GetOrders/GetOrders";
import Login from "./components/Views/Auth/Login";
import ForgotPassword from "./components/Views/Auth/ForgotPassword";
import Register from "./components/Views/Auth/Register";


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="App">
        <p onClick={() => { setModalOpen(true) }}> Devoluciones </p>
      </div>

      {modalOpen ?
        <WebProvider>
          <Modal>
            <Switch>
              <Route exact path="/login">
                <Login setOpenModal={setModalOpen} />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPassword setOpenModal={setModalOpen} />
              </Route>
              <Route exact path="/register">
                <Register setOpenModal={setModalOpen} />
              </Route>
              <Route exact path="/">
                <HomeRefud setOpenModal={setModalOpen} />
              </Route>
              <Route exact path="/get-orders">
                <GetOrders setOpenModal={setModalOpen} />
              </Route>
            </Switch>
          </Modal>
        </WebProvider>
        : false
      }
    </>
  );
}

export default App;
