import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../index.css";

function MainLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
