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
import ReasonRefud from "./components/Views/ReasonTheRefud/ReasonRefud";
import AnyReason from "./components/Views/OptionRefud/AnyReason";
import RePayment from "./components/Views/OptionRefud/RePayment";
import ReturnProductStore from "./components/Views/ReturnProduct/ReturnProductStore";
import ReturnHome from "./components/Views/ReturnProduct/ReturnHome";
import ReturnCard from "./components/Views/ReturnProduct/ReturnCard";
import ViewRefudSuccess from "./components/Views/ViewSuccess/ViewRefudSuccess";
import ViewRepayment from "./components/Views/ViewSuccess/ViewRepayment";
import RefudCardTurnOver from "./components/Views/ViewSuccess/RefudCardTurnOver";



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
              <Route exact path='/product-order/:order_id'>
                <Products setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/about-product/:product_id'>
                <SelectSize setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/reason-refud'>
                <ReasonRefud setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/any-reason'>
                <AnyReason setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/re-payment'>
                <RePayment setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/return-product'>
                <ReturnProductStore setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/return-home'>
                <ReturnHome setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/return-card'>
                <ReturnCard setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/view-refud-success'>
                <ViewRefudSuccess setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/view-repayment'>
                <ViewRepayment setOpenModal={setModalOpen} />
              </Route>
              <Route exact path='/refud-card-turnover'>
                <RefudCardTurnOver setOpenModal={setModalOpen} />
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
