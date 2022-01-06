import Slider from "./Slider/slider";
import TypeOfRents from "./TypesOfRent/typeOfRents";
import AutoParkSlider from "./AutoParkSlider/autoParkSlider";
import RentConditions from "./RentConditions/rentConditions";
import ClientReviews from "./ClientReviews/clientReviews";
import Contacts from "./Contacts/contacts";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Slider/>
      <TypeOfRents/>
      <AutoParkSlider/>
      <RentConditions/>
      <ClientReviews/>
      <Contacts/>
    </>
  )
}

export default MainPage;