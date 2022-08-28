import React, { useState } from "react";
import Modal from "./components/Layout/Modal";
import { Route, Switch } from "react-router-dom";
import { WebProvider } from "./config/Context/Context";
import "./App.css";
import HomeRefud from "./components/Views/Home/HomeRefud";
import HomeOptions from "./components/Views/Home/HomeOptions";
import GetOrders from "./components/Views/Orders/GetOrders";
import ListOrders from "./components/Views/Orders/ListOrders";
import Login from "./components/Views/Auth/Login";
import ForgotPassword from "./components/Views/Auth/ForgotPassword";
import Register from "./components/Views/Auth/Register";
import FAQS from "./components/Views/FAQS/FAQS";
import Products from "./components/Views/Orders/Products";
import SelectSize from "./components/Views/Orders/SelectSize";



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
              <Route exact path="/list-order">
                <ListOrders setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/faqs'>
                <FAQS setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/home-options'>
                <HomeOptions setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/product-order'>
                <Products setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/about-product'>
                <SelectSize setOpenModal={setModalOpen} />
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
