import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Header from "./components/molecules/header/Header.jsx";
import CurrentNews from "./components/molecules/Current/Current.jsx";
import UserScreen from "./screen/UserScreen/UserScreen.jsx";
import CurrencyScreen from "./screen/CurrencyScreen/CurrencyScreen.jsx";

function App() {
  return (
    <Fragment>
      {/* <UserScreen /> */}
      <CurrencyScreen />
      {/* <Header />
      <div class="body">
        <CurrentNews />
      </div>
      <div class="footer"></div> */}
    </Fragment>
  );
}

export default App;
