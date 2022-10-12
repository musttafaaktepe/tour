import "./App.scss";

import React from "react";
import Navbar from "./coponents/Navbar/Navbar";
import Header from "./coponents/Header/Header";
import Main from "./coponents/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
