import React, { useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import Main from "./components/main";
import CarGallery from "./components/carGallery";
import Card from "./components/card";
import Footer from "./components/footer";
import Vehicles from "./components/vehicles";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Main />
            <Form />
            <CarGallery />
            <Card />
          </>
        );
      case "vehicles":
        return <Vehicles />;
      default:
        return (
          <>
            <Main />
            <Form />
            <CarGallery />
            <Card />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
