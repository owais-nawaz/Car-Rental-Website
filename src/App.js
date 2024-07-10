import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Vehicles from "./components/vehicles";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const initialState = {
    home: false,
    vehicles: false,
    contact: false,
  };
  const [isClicked, setIsClicked] = useState({ home: true });
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <div className="app">
      <Header handleClick={handleClick} />
      {isClicked.home && <Home />}
      {isClicked.vehicles && <Vehicles />}
      {isClicked.contact && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
