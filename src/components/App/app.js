import React from "react";
import Header from "../GlobalComponents/Header/header";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartPage from "../pages/CartPage/cartPage";
import Footer from "../GlobalComponents/Footer/footer";
import ContactsPage from "../pages/ContactsPage/contactsPage";
import SpecialPurposesPage from "../pages/SpecialPurposesPage/specialPurposesPage";
import RentConditionsPage from "../pages/RentConditionsPage/rentConditionsPage";
import WithDriverPage from "../pages/WithDriverPage/withDriverPage";
import WithoutDriverPage from "../pages/WithoutDriverPage/withoutDriverPage";
import CabinetPage from "../pages/CabinetPage/cabinetPage";
import AutoParkPage from "../pages/AutoParkPage/autoParkPage";
import PolicyPage from "../pages/PolicyPage/policyPage";
import MainPage from "../pages/MainPage/mainPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact element={<MainPage/>}/>
          <Route path="/cart" exact element={<CartPage/>}/>
          <Route path="/contacts" exact element={<ContactsPage/>}/>
          <Route path="/special-purposes" exact element={<SpecialPurposesPage/>}/>
          <Route path="/rent-conditions" exact element={<RentConditionsPage/>}/>
          <Route path="/for-business" exact element={<CartPage/>}/>
          <Route path="/with-driver" exact element={<WithDriverPage/>}/>
          <Route path="/without-driver" exact element={<WithoutDriverPage/>}/>
          <Route path="/cabinet" exact element={<CabinetPage/>}/>
          <Route path="/auto-park" exact element={<AutoParkPage/>}/>
          <Route path="/policy" exact element={<PolicyPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
