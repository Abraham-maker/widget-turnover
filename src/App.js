import React, { useState } from "react";
import Modal from "./components/Layout/Modal";
import { Route, Switch } from "react-router-dom";
import { WebProvider } from "./components/Context/Context";
import HomeRefud from "./components/Views/Home_devolucion/Home_information/Home_information";
import HomeOptions from "./components/Views/Home_devolucion/Home_options/Home_options";
import GetOrders from "./components/Views/Home_devolucion/Home_orders/Home_orders";
import Products from "./components/Views/Orders/List_products/List_Products";
import SelectSize from "./components/Views/Orders/Options_product/Options_product";
import ListOrders from "./components/Views/Orders/List_orders/List_orders";
import AnyReason from "./components/Views/Options_devolution/Any_reason/Index";
import RePayment from "./components/Views/Options_devolution/Re_payment/Index";
import ReasonRefud from "./components/Views/Reason_devolution/Reason_devolution";
import ReturnProductStore from "./components/Views/Return_products/Store";
import ReturnHome from "./components/Views/Return_products/Home";
import ReturnCard from "./components/Views/Return_products/Credit_card";
import ViewRefudSuccess from "./components/Views/Code_devolution/Code_devolution";
import RefudCardTurnOver from "./components/Views/Credit_card_devolution/Credit_card_devolution";
import ViewRepayment from "./components/Views/Turn_over_devolution/Turn_over_devolution";
import FAQS from "./components/Views/FAQS/FAQS";
import Questionnaire from "./components/Views/questionnaire/Questionnaire";
import "./App.css";

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
              <Route exact path='/reason-refud/:product_id'>
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
              <Route exact path='/questionnaire'>
                <Questionnaire setOpenModal={setModalOpen} />
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
