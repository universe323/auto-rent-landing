import React from "react";
import Header from "../Header/header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Slider from "../Slider/slider";
import Cart from "../Cart/cart";
import TypeOfRents from "../TypesOfRent/typeOfRents";
import AutoParkSlider from "../AutoParkSlider/autoParkSlider";
import RentConditions from "../RentConditions/rentConditions";
import ClientReviews from "../ClientReviews/clientReviews";
import Contacts from "../Contacts/contacts";
import Footer from "../Footer/footer";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Slider />
            <TypeOfRents/>
            <AutoParkSlider/>
            <RentConditions/>
            <ClientReviews/>
            <Contacts/>
            <Footer/>
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
