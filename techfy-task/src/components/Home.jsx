import React from "react";
import Header from "./Header";
import "./Home.css"; 
import lampImage from "../assets/lamp.jpg";

const Home = () => {
  return (
    <>
      <Header />

      <section className="home">
        <div className="home-text">
          <h2>Repr in voluptate</h2>
          <h3>Ullamco laboris nisi ut</h3>
          <p>
            We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo,
            please make a small contribution via PayPal or tell your friends about our website. Thank you.
          </p>
        </div>

        <div className="home-image">
          <img
            src={lampImage}
            alt="Lamp and plant"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
